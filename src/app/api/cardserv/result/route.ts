import { NextResponse } from "next/server";

import { connectDB } from "@/backend/config/db";
import { isForceSuccessEnabled, type CardServCurrency } from "@/backend/config/cardserv-config";
import { PaymentOrder } from "@/backend/models/payment-order.model";
import { getCardServStatus, logCardServEvent } from "@/backend/services/cardserv.service";
import { applyCardServGatewayUpdate } from "@/backend/services/payment-orders.service";

function humanReadablePaymentError(errorMessage: string | null, orderState: string): string {
    const msg = (errorMessage || "").toLowerCase();

    if (msg.includes("visa") || msg.includes("card type") || msg.includes("card brand") || msg.includes("not supported") || msg.includes("not accepted")) {
        return "This card type is not supported. Please use a Mastercard to complete your purchase.";
    }
    if (orderState === "FILTERED" || msg.includes("filter") || msg.includes("risk") || msg.includes("fraud")) {
        return "Your payment was declined by the fraud prevention system. Please try a different card (Mastercard recommended).";
    }
    if (orderState === "DECLINED" || msg.includes("decline") || msg.includes("insufficient") || msg.includes("do not honor")) {
        return "Your payment was declined. Please check your card details or try a different card (Mastercard recommended).";
    }
    if (msg.includes("expired")) {
        return "Your card appears to be expired. Please use a valid card.";
    }
    if (msg.includes("3ds") || msg.includes("3d secure") || msg.includes("authentication")) {
        return "3D Secure authentication failed. Please try again or use a different card.";
    }

    return errorMessage || "Your payment could not be processed. Please try a different card (Mastercard recommended).";
}

function getAppUrl(req: Request): string {
    const requestUrl = new URL(req.url);
    const origin = `${requestUrl.protocol}//${requestUrl.host}`;
    const hostname = requestUrl.hostname.toLowerCase();
    const isLocalHost =
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname === "::1" ||
        hostname.endsWith(".local");
    const envUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || process.env.APP_URL;

    if (!isLocalHost && origin) return origin;
    if (envUrl) return envUrl.replace(/\/$/, "");
    if (origin) return origin;

    throw new Error("Unable to resolve app base URL");
}

function getOrderMerchantId(req: Request, form?: FormData): string | null {
    const url = new URL(req.url);
    const { searchParams, pathname } = url;
    const pathParts = pathname.split("/").filter(Boolean);
    const pathOrder =
        pathParts.length >= 4 &&
        pathParts[0] === "api" &&
        pathParts[1] === "cardserv" &&
        pathParts[2] === "result"
            ? decodeURIComponent(pathParts[3] || "")
            : null;

    return (
        pathOrder ||
        form?.get("MD")?.toString() ||
        form?.get("threeDSSessionData")?.toString() ||
        searchParams.get("order") ||
        searchParams.get("orderId") ||
        searchParams.get("orderMerchantId") ||
        form?.get("order")?.toString() ||
        form?.get("orderId")?.toString() ||
        null
    );
}

function getOrderSystemId(req: Request, form?: FormData): string | null {
    const { searchParams } = new URL(req.url);
    return (
        searchParams.get("orderSystemId") ||
        form?.get("orderSystemId")?.toString() ||
        form?.get("order_system_id")?.toString() ||
        form?.get("id")?.toString() ||
        null
    );
}

async function handleResult(req: Request, form?: FormData) {
    await connectDB();
    const orderMerchantId = getOrderMerchantId(req, form);
    const orderSystemId = getOrderSystemId(req, form);
    const appUrl = getAppUrl(req);

    logCardServEvent("result.route_request", {
        orderMerchantId,
        orderSystemId,
        url: req.url,
        form: form ? Object.fromEntries(form.entries()) : {},
        forceSuccess: isForceSuccessEnabled(),
    });

    if (!orderMerchantId && !orderSystemId) {
        return NextResponse.redirect(`${appUrl}/payment-failed?reason=missing_order`, 302);
    }

    const order =
        (orderMerchantId
            ? await PaymentOrder.findOne({ orderMerchantId })
            : null) ||
        (orderSystemId
            ? await PaymentOrder.findOne({ orderSystemId })
            : null);

    if (!order) {
        return NextResponse.redirect(
            `${appUrl}/payment-failed?reason=order_not_found${orderMerchantId ? `&order=${encodeURIComponent(orderMerchantId)}` : ""}`,
            302,
        );
    }

    const resolvedOrderMerchantId = order.orderMerchantId;

    const forceSuccess = isForceSuccessEnabled();

    let status: Awaited<ReturnType<typeof getCardServStatus>>;

    if (forceSuccess) {
        status = {
            orderState: "APPROVED",
            orderSystemId: order.orderSystemId ?? `forced_${resolvedOrderMerchantId}`,
            redirectUrl: null,
            errorCode: null,
            errorMessage: null,
            raw: { forced: true, source: "result", at: new Date().toISOString() },
        };
    } else {
        // Poll status with retries — CardServ may not have finalized the 3DS result
        // at the moment the browser lands on resultUrl.
        const FINAL_STATES = ["APPROVED", "DECLINED", "ERROR", "FILTERED", "CHAIN_STEP"];
        const delays = [500, 1500, 3000, 5000];

        status = await getCardServStatus(
            resolvedOrderMerchantId,
            order.currency as CardServCurrency,
            order.orderSystemId,
        );

        for (const delay of delays) {
            if (FINAL_STATES.includes(status.orderState)) break;
            await new Promise(r => setTimeout(r, delay));
            status = await getCardServStatus(
                resolvedOrderMerchantId,
                order.currency as CardServCurrency,
                order.orderSystemId,
            );
            logCardServEvent("result.status_poll", {
                orderMerchantId: resolvedOrderMerchantId,
                orderState: status.orderState,
                delay,
            });
        }
    }

    const creditResult = await applyCardServGatewayUpdate({
        orderMerchantId: resolvedOrderMerchantId,
        orderState: status.orderState,
        orderSystemId: status.orderSystemId,
        redirectUrl: status.redirectUrl,
        errorCode: status.errorCode,
        errorMessage: status.errorMessage,
        raw: {
            form: form ? Object.fromEntries(form.entries()) : {},
            status: status.raw,
            forced: forceSuccess,
        },
        source: "result",
    });

    logCardServEvent("result.gateway_update", {
        orderMerchantId: resolvedOrderMerchantId,
        orderState: status.orderState,
        creditResult,
    });

    // If the order was already credited (e.g. by webhook arriving first),
    // always redirect to success regardless of what the status API returned.
    const dbOrderStatus = creditResult.ok ? creditResult.orderStatus : null;
    if (dbOrderStatus === "CREDITED") {
        return NextResponse.redirect(
            `${appUrl}/payment-success?order=${encodeURIComponent(resolvedOrderMerchantId)}`,
            302,
        );
    }

    if (!forceSuccess && ["DECLINED", "ERROR", "FILTERED", "CHAIN_STEP"].includes(status.orderState)) {
        const reason = humanReadablePaymentError(status.errorMessage, status.orderState);
        return NextResponse.redirect(
            `${appUrl}/payment-failed?order=${encodeURIComponent(resolvedOrderMerchantId)}&reason=${encodeURIComponent(reason)}`,
            302,
        );
    }

    return NextResponse.redirect(
        `${appUrl}/payment-success?order=${encodeURIComponent(resolvedOrderMerchantId)}`,
        302,
    );
}

export async function POST(req: Request) {
    try {
        const form = await req.formData().catch(() => undefined);
        return await handleResult(req, form);
    } catch (error) {
        logCardServEvent("result.route_error", { method: "POST", error: error instanceof Error ? error.message : String(error) });
        const appUrl = getAppUrl(req);
        const message = error instanceof Error ? error.message : "result_error";
        return NextResponse.redirect(`${appUrl}/payment-failed?reason=${encodeURIComponent(message)}`, 302);
    }
}

export async function GET(req: Request) {
    try {
        return await handleResult(req);
    } catch (error) {
        logCardServEvent("result.route_error", { method: "GET", error: error instanceof Error ? error.message : String(error) });
        const appUrl = getAppUrl(req);
        const message = error instanceof Error ? error.message : "result_error";
        return NextResponse.redirect(`${appUrl}/payment-failed?reason=${encodeURIComponent(message)}`, 302);
    }
}


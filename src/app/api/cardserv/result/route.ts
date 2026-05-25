import { NextResponse } from "next/server";

import { connectDB } from "@/backend/config/db";
import { isForceSuccessEnabled, type CardServCurrency } from "@/backend/config/cardserv-config";
import { PaymentOrder } from "@/backend/models/payment-order.model";
import { getCardServStatus, logCardServEvent } from "@/backend/services/cardserv.service";
import { applyCardServGatewayUpdate } from "@/backend/services/payment-orders.service";

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

    if (!forceSuccess && ["DECLINED", "ERROR", "FILTERED", "CHAIN_STEP"].includes(status.orderState)) {
        return NextResponse.redirect(
            `${appUrl}/payment-failed?order=${encodeURIComponent(resolvedOrderMerchantId)}&reason=${encodeURIComponent(status.errorMessage || status.orderState)}`,
            302,
        );
    }

    // Still processing after all retries — redirect to success but webhook will confirm
    // (status PROCESSING / UNKNOWN / APPROVED all land here)
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


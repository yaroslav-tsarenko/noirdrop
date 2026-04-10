import { NextRequest, NextResponse } from "next/server";

import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { connectDB } from "@/backend/config/db";
import { getCardServConfig, isForceSuccessEnabled, type CardServCurrency } from "@/backend/config/cardserv-config";
import { TOKEN_PACKAGES, getPackagePrice, calculateTokensFromAmount, type Currency, type TokenPackageId } from "@/backend/config/payment";
import { createCardServRedirectSession, logCardServEvent } from "@/backend/services/cardserv.service";
import { applyCardServGatewayUpdate } from "@/backend/services/payment-orders.service";
import { PaymentOrder } from "@/backend/models/payment-order.model";
import { User } from "@/backend/models/user.model";

const VALID_PACKAGES = ["STARTER", "STANDARD", "PRO", "CUSTOM"] as const;
const VALID_CURRENCIES = ["EUR", "GBP", "USD"] as const;

type PackageId = (typeof VALID_PACKAGES)[number];
type CurrencyCode = (typeof VALID_CURRENCIES)[number];

interface SaleBody {
    packageId: string;
    currency: string;
    amount: number;
    grossAmount: number;
    vatAmount: number;
    tokens: number;
    description: string;
    email?: string;
    card?: {
        cardNumber: string;
        cvv2: string;
        expireMonth: string;
        expireYear: string;
        cardPrintedName: string;
    };
    browser?: {
        ipAddress?: string;
        acceptHeader?: string;
        colorDepth?: number;
        screenHeight?: number;
        screenWidth?: number;
        timeZone?: number;
        javaEnabled?: boolean;
        javascriptEnabled?: boolean;
        acceptLanguage?: string;
        userAgent?: string;
    };
}

function validateBody(body: unknown): SaleBody {
    const b = body as Record<string, unknown>;
    if (!b || typeof b !== "object") throw new Error("Invalid request body");
    if (!VALID_PACKAGES.includes(b.packageId as PackageId)) throw new Error("Invalid packageId");
    if (!VALID_CURRENCIES.includes(b.currency as CurrencyCode)) throw new Error("Invalid currency");
    if (typeof b.amount !== "number" || b.amount <= 0) throw new Error("Invalid amount");
    if (typeof b.grossAmount !== "number" || b.grossAmount <= 0) throw new Error("Invalid grossAmount");
    if (typeof b.vatAmount !== "number" || b.vatAmount < 0) throw new Error("Invalid vatAmount");
    if (typeof b.tokens !== "number" || b.tokens <= 0 || !Number.isInteger(b.tokens)) throw new Error("Invalid tokens");
    if (typeof b.description !== "string" || b.description.length < 1) throw new Error("Invalid description");

    /* Validate card data if provided */
    if (b.card) {
        const c = b.card as Record<string, unknown>;
        if (typeof c.cardNumber !== "string" || c.cardNumber.replace(/\s/g, "").length < 13) throw new Error("Invalid card number");
        if (typeof c.cvv2 !== "string" || c.cvv2.length < 3) throw new Error("Invalid CVV");
        if (typeof c.expireMonth !== "string") throw new Error("Invalid expire month");
        if (typeof c.expireYear !== "string") throw new Error("Invalid expire year");
        if (typeof c.cardPrintedName !== "string" || c.cardPrintedName.length < 2) throw new Error("Invalid cardholder name");
    }

    return b as unknown as SaleBody;
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

function normalizeCardServIp(value: string | undefined): string {
    const trimmed = value?.trim();
    if (!trimmed || trimmed === "::1" || trimmed === "0:0:0:0:0:0:0:1") {
        return "127.0.0.1";
    }
    return trimmed;
}

function normalizeAcceptHeader(value: string | undefined): string {
    const trimmed = value?.trim();
    if (!trimmed || trimmed.length < 10 || trimmed === "*/*") {
        return "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
    }
    return trimmed;
}

function expectedAmounts(packageId: TokenPackageId, currency: Currency, amount: number) {
    if (packageId === "CUSTOM") {
        const roundedNet = Math.round(amount * 100) / 100;
        const vatAmount = 0;
        const grossAmount = roundedNet;
        const tokens = calculateTokensFromAmount(roundedNet, currency);
        return { net: roundedNet, vatAmount, grossAmount, tokens };
    }

    const fixedId = packageId as Exclude<TokenPackageId, "CUSTOM">;
    const net = getPackagePrice(fixedId, currency);
    const vatAmount = 0;
    const grossAmount = net;
    const tokens = TOKEN_PACKAGES[fixedId].tokens;
    return { net, vatAmount, grossAmount, tokens };
}

export async function POST(req: NextRequest) {
    try {
        const authPayload = await requireAuth(req);
        const userId = authPayload.sub;
        const userEmail = authPayload.email;

        await connectDB();
        const user = await User.findById(userId).select("name email");
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const parsed = validateBody(await req.json());
        const forwardedFor = req.headers.get("x-forwarded-for");
        const browserIp = normalizeCardServIp(
            parsed.browser?.ipAddress ||
            forwardedFor?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            undefined,
        );
        const acceptHeader = normalizeAcceptHeader(parsed.browser?.acceptHeader || req.headers.get("accept") || undefined);
        const requestUserAgent = req.headers.get("user-agent") || undefined;
        const payerEmail = parsed.email || userEmail || user.email;
        const customerName = user.name?.trim() || payerEmail?.split("@")[0] || "Customer";

        if (!payerEmail) {
            return NextResponse.json({ error: "Missing customer email" }, { status: 400 });
        }

        const currency = parsed.currency as CardServCurrency;
        const gatewayConfig = getCardServConfig(currency);
        const expected = expectedAmounts(parsed.packageId as TokenPackageId, currency as Currency, parsed.amount);

        if (
            Math.abs(expected.net - parsed.amount) > 0.01 ||
            Math.abs(expected.vatAmount - parsed.vatAmount) > 0.01 ||
            Math.abs(expected.grossAmount - parsed.grossAmount) > 0.01 ||
            Math.abs(expected.tokens - parsed.tokens) > 0
        ) {
            return NextResponse.json(
                { error: "Checkout data mismatch. Please restart checkout from pricing." },
                { status: 400 },
            );
        }

        const orderMerchantId = `cc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

        const pkgId = parsed.packageId as TokenPackageId;
        const fixedPkgId = pkgId === "CUSTOM" ? null : (pkgId as Exclude<TokenPackageId, "CUSTOM">);

        await PaymentOrder.create({
            userId,
            packageId: parsed.packageId,
            packageName: fixedPkgId ? TOKEN_PACKAGES[fixedPkgId].name : "Custom",
            currency,
            amountNet: expected.net,
            vatAmount: expected.vatAmount,
            amountGross: expected.grossAmount,
            tokens: expected.tokens,
            status: "PENDING",
            orderMerchantId,
        });

        const salePayload = {
            orderMerchantId,
            amountGross: expected.grossAmount,
            currency,
            description: parsed.description,
            email: payerEmail,
            customerName,
            countryCode: currency === "EUR" ? "DE" : currency === "GBP" ? "GB" : "US",
            appUrl: getAppUrl(req),
            browser: {
                ipAddress: browserIp,
                acceptHeader,
                colorDepth: parsed.browser?.colorDepth,
                screenHeight: parsed.browser?.screenHeight,
                screenWidth: parsed.browser?.screenWidth,
                timeZone: parsed.browser?.timeZone,
                javaEnabled: parsed.browser?.javaEnabled,
                javascriptEnabled: parsed.browser?.javascriptEnabled,
                acceptLanguage: parsed.browser?.acceptLanguage || req.headers.get("accept-language") || undefined,
                userAgent: parsed.browser?.userAgent || requestUserAgent,
            },
        };

        /* Card data from frontend (sanitize spaces from card number) */
        const card = parsed.card
            ? {
                cardNumber: parsed.card.cardNumber.replace(/\s/g, ""),
                cvv2: parsed.card.cvv2,
                expireMonth: parsed.card.expireMonth,
                expireYear: parsed.card.expireYear,
                cardPrintedName: parsed.card.cardPrintedName,
            }
            : undefined;

        logCardServEvent("sale.route_request", {
            orderMerchantId,
            userId,
            packageId: parsed.packageId,
            currency,
            amount: expected.grossAmount,
            email: payerEmail,
            customerName,
            countryCode: salePayload.countryCode,
            integrationMode: gatewayConfig.integrationMode,
            requestorId: gatewayConfig.requestorId,
            hasCard: !!card,
            forceSuccess: isForceSuccessEnabled(),
        });

        if (isForceSuccessEnabled()) {
            let redirectUrl = `${salePayload.appUrl}/api/cardserv/result/${encodeURIComponent(orderMerchantId)}?forced=1`;
            let probeRaw: unknown = null;

            try {
                const probe = await createCardServRedirectSession(salePayload, card);
                if (probe.redirectUrl) redirectUrl = probe.redirectUrl;
                probeRaw = probe.raw;
            } catch {
                // Keep fallback redirect
            }

            const forced = await applyCardServGatewayUpdate({
                orderMerchantId,
                orderState: "APPROVED",
                orderSystemId: `forced_${orderMerchantId}`,
                redirectUrl,
                errorCode: null,
                errorMessage: null,
                raw: { forced: true, source: "sale", mode: "sandbox", redirectUrl, probeRaw, at: new Date().toISOString() },
                source: "sale",
            });

            return NextResponse.json({
                ok: true,
                orderMerchantId,
                orderSystemId: `forced_${orderMerchantId}`,
                state: "APPROVED",
                redirectUrl,
                threeDSAuth: null,
                errorCode: null,
                errorMessage: null,
                finalized: forced.ok ? forced.finalized : false,
                tokensAdded: forced.ok && "tokensAdded" in forced ? forced.tokensAdded : 0,
            });
        }

        const sale = await createCardServRedirectSession(salePayload, card);

        const stateResult = await applyCardServGatewayUpdate({
            orderMerchantId,
            orderState: sale.orderState,
            orderSystemId: sale.orderSystemId,
            redirectUrl: sale.redirectUrl,
            errorCode: sale.errorCode,
            errorMessage: sale.errorMessage,
            raw: sale.raw,
            source: "sale",
        });

        return NextResponse.json({
            ok: true,
            orderMerchantId,
            orderSystemId: sale.orderSystemId ?? null,
            state: sale.orderState,
            redirectUrl: sale.redirectUrl,
            threeDSAuth: sale.threeDSAuth,
            errorCode: sale.errorCode ?? null,
            errorMessage: sale.errorMessage ?? null,
            finalized: stateResult.ok ? stateResult.finalized : false,
            tokensAdded: stateResult.ok && "tokensAdded" in stateResult ? stateResult.tokensAdded : 0,
        });
    } catch (error) {
        logCardServEvent("sale.route_error", {
            error: error instanceof Error ? error.message : String(error),
        });
        const message = error instanceof Error ? error.message : "Failed to create CardServ sale";
        const status = message === "Missing auth" || message === "Invalid or expired token" ? 401 : 500;
        return NextResponse.json({ ok: false, error: message }, { status });
    }
}

import {
    getCardServConfig,
    type CardServCurrency,
} from "@/backend/config/cardserv-config";

/* ------------------------------------------------------------------ */
/*  Payload & result types                                            */
/* ------------------------------------------------------------------ */

export interface CardServSalePayload {
    orderMerchantId: string;
    amountGross: number;
    currency: CardServCurrency;
    description: string;
    email: string;
    customerName: string;
    countryCode: string;
    appUrl: string;
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

export interface CardServSaleResult {
    redirectUrl: string | null;
    orderState: string;
    orderSystemId: string | null;
    threeDSAuth: unknown;
    errorCode: string | null;
    errorMessage: string | null;
    raw: Record<string, unknown>;
}

export interface CardServStatusResult {
    orderState: string;
    orderSystemId: string | null;
    redirectUrl: string | null;
    errorCode: string | null;
    errorMessage: string | null;
    raw: Record<string, unknown>;
}

/* ------------------------------------------------------------------ */
/*  Logging                                                           */
/* ------------------------------------------------------------------ */

export function logCardServEvent(event: string, data?: Record<string, unknown>): void {
    console.log(`[CardServ] ${event}`, JSON.stringify(data ?? {}, null, 2));
}

/* ------------------------------------------------------------------ */
/*  Sale  –  POST /api/payments/sale/{requestorId}                    */
/*                                                                    */
/*  For the "Redirect" integration CardServ requires the card object  */
/*  in the request body. The customer is NOT redirected to a hosted   */
/*  checkout page. Instead:                                           */
/*    1. We POST card + order data to the sale endpoint               */
/*    2. CardServ returns orderSystemId + orderState (PROCESSING)     */
/*    3. We immediately query status                                  */
/*    4. If status has `outputRedirectToUrl` → redirect customer      */
/*       there for 3-D Secure authentication                          */
/*    5. After 3DS the customer returns to our resultUrl              */
/*    6. Webhook delivers the final state                             */
/*                                                                    */
/*  When no card data is available yet (redirect-to-own-checkout)     */
/*  the function still builds the correct CardServ body and sends it. */
/*  The caller in the sale route adds card data when the frontend     */
/*  provides it.                                                      */
/* ------------------------------------------------------------------ */

export async function createCardServRedirectSession(
    payload: CardServSalePayload,
    card?: {
        cardNumber: string;
        cvv2: string;
        expireMonth: string;
        expireYear: string;
        cardPrintedName: string;
    },
): Promise<CardServSaleResult> {
    const config = getCardServConfig(payload.currency);

    const resultUrl = `${payload.appUrl}/api/cardserv/result/${encodeURIComponent(payload.orderMerchantId)}`;
    const webhookUrl = `${payload.appUrl}/api/cardserv/webhook`;

    /* Split "First Last" into firstname / lastname */
    const nameParts = payload.customerName.trim().split(/\s+/);
    const firstname = nameParts[0] || "Customer";
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(" ") : firstname;

    /* ---- CardServ request body (Redirect / Hosted Checkout format) ---- */
    /* NOTE: paymentMethod is intentionally omitted — the Redirect SMS
       integration does not use this field and CardServ returns an error
       ("cardId or card should be filled if paymentMethod = CARD") when
       an unrecognised value such as "REDIRECT" is sent.              */
    const body: Record<string, unknown> = {
        order: {
            orderMerchantId: payload.orderMerchantId,
            orderDescription: payload.description,
            orderAmount: payload.amountGross.toFixed(2),
            orderCurrencyCode: payload.currency,
        },
        browser: {
            ipAddress: payload.browser?.ipAddress || "127.0.0.1",
            acceptHeader:
                payload.browser?.acceptHeader ||
                "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            colorDepth: payload.browser?.colorDepth ?? 24,
            javascriptEnabled: String(payload.browser?.javascriptEnabled ?? true),
            acceptLanguage: (payload.browser?.acceptLanguage || "en-GB").substring(0, 8),
            screenHeight: payload.browser?.screenHeight ?? 1080,
            screenWidth: payload.browser?.screenWidth ?? 1920,
            timeZone: payload.browser?.timeZone ?? 0,
            userAgent:
                payload.browser?.userAgent ||
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            javaEnabled: String(payload.browser?.javaEnabled ?? false),
        },
        customer: {
            firstname,
            lastname,
            customerEmail: payload.email,
            address: {
                countryCode: payload.countryCode,
            },
        },
        urls: {
            resultUrl,
            webhookUrl,
        },
    };

    /* Attach card if provided (required by CardServ for CARD method) */
    if (card) {
        body.card = {
            cardNumber: card.cardNumber,
            cvv2: card.cvv2,
            expireMonth: card.expireMonth,
            expireYear: card.expireYear,
            cardPrintedName: card.cardPrintedName,
        };
    }

    const saleUrl = `${config.baseUrl}/api/payments/sale/${config.requestorId}`;
    const jsonBody = JSON.stringify(body);

    logCardServEvent("sale.api_request", {
        url: saleUrl,
        orderMerchantId: payload.orderMerchantId,
        currency: payload.currency,
        amount: payload.amountGross,
        hasCard: !!card,
    });

    const response = await fetch(saleUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.token}`,
        },
        body: jsonBody,
    });

    const raw = (await response.json().catch(() => ({}))) as Record<string, unknown>;

    logCardServEvent("sale.api_response", {
        status: response.status,
        orderState: raw.orderState as string,
        orderSystemId: raw.orderSystemId as string,
        errorCode: raw.errorCode as string,
        errorMessage: raw.errorMessage as string,
    });

    if (!response.ok) {
        throw new Error(
            (raw.errorMessage as string) ||
            (raw.message as string) ||
            (raw.error as string) ||
            `CardServ API error: ${response.status}`,
        );
    }

    /* After a successful sale POST, check for outputRedirectToUrl:
       1. First look in the sale response itself (some live configs include it directly)
       2. Then query status endpoint (standard Redirect SMS flow)        */
    const orderSystemId = raw.orderSystemId != null ? String(raw.orderSystemId) : null;

    // Check if sale response itself already contains the 3DS redirect URL
    let redirectUrl: string | null =
        (raw.outputRedirectToUrl as string) || (raw.redirectUrl as string) || null;

    // Always query status when we have an orderSystemId (regardless of orderState)
    // to reliably get outputRedirectToUrl for 3DS
    if (orderSystemId && !redirectUrl) {
        // Retry polling: CardServ may need a few seconds to prepare the 3DS redirect URL
        const delays = [800, 1500, 2500, 4000];
        for (const delay of delays) {
            try {
                await new Promise(r => setTimeout(r, delay));

                const status = await getCardServStatus(
                    payload.orderMerchantId,
                    payload.currency,
                    orderSystemId,
                );

                if (status.redirectUrl) {
                    redirectUrl = status.redirectUrl;
                    break;
                }

                /* If status already terminal, use it */
                if (status.orderState && !["PROCESSING", "PENDING", "UNKNOWN"].includes(status.orderState)) {
                    return {
                        redirectUrl,
                        orderState: status.orderState,
                        orderSystemId,
                        threeDSAuth: null,
                        errorCode: status.errorCode,
                        errorMessage: status.errorMessage,
                        raw: { sale: raw, status: status.raw },
                    };
                }
            } catch (err) {
                logCardServEvent("sale.status_check_failed", {
                    orderMerchantId: payload.orderMerchantId,
                    delay,
                    error: err instanceof Error ? err.message : String(err),
                });
            }
        }
    }

    return {
        redirectUrl,
        orderState: (raw.orderState as string) || "PROCESSING",
        orderSystemId,
        threeDSAuth: null,
        errorCode: raw.errorCode != null ? String(raw.errorCode) : null,
        errorMessage: (raw.errorMessage as string) || null,
        raw,
    };
}

/* ------------------------------------------------------------------ */
/*  Status  –  POST /api/payments/status/{requestorId}                */
/* ------------------------------------------------------------------ */

export async function getCardServStatus(
    orderMerchantId: string,
    currency: CardServCurrency,
    orderSystemId?: string | null,
): Promise<CardServStatusResult> {
    const config = getCardServConfig(currency);

    const statusUrl = `${config.baseUrl}/api/payments/status/${config.requestorId}`;
    const body: Record<string, unknown> = { orderMerchantId };
    if (orderSystemId) body.orderSystemId = Number(orderSystemId) || orderSystemId;

    const jsonBody = JSON.stringify(body);

    const response = await fetch(statusUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.token}`,
        },
        body: jsonBody,
        signal: AbortSignal.timeout(10_000),
    });

    const raw = (await response.json().catch(() => ({}))) as Record<string, unknown>;

    logCardServEvent("status.api_response", {
        status: response.status,
        orderMerchantId,
        orderState: raw.orderState as string,
        outputRedirectToUrl: raw.outputRedirectToUrl as string,
        errorCode: raw.errorCode as string,
    });

    return {
        orderState: (raw.orderState as string) || "PENDING",
        orderSystemId: raw.orderSystemId != null ? String(raw.orderSystemId) : null,
        redirectUrl: (raw.outputRedirectToUrl as string) || (raw.redirectUrl as string) || null,
        errorCode: raw.errorCode != null ? String(raw.errorCode) : null,
        errorMessage: (raw.errorMessage as string) || null,
        raw,
    };
}

/* ------------------------------------------------------------------ */
/*  Webhook helpers                                                   */
/* ------------------------------------------------------------------ */

export function readCardServWebhookOrderId(payload: Record<string, unknown>): string | null {
    return (
        (payload.orderMerchantId as string) ||
        (payload.order_merchant_id as string) ||
        (payload.MD as string) ||
        null
    );
}

export function parseCardServWebhookPayload(payload: Record<string, unknown>): CardServStatusResult {
    return {
        orderState: (payload.orderState as string) || (payload.state as string) || "PENDING",
        orderSystemId: payload.orderSystemId != null ? String(payload.orderSystemId) : null,
        redirectUrl: (payload.outputRedirectToUrl as string) || (payload.redirectUrl as string) || null,
        errorCode: payload.errorCode != null ? String(payload.errorCode) : null,
        errorMessage: (payload.errorMessage as string) || null,
        raw: payload,
    };
}

export type CardServCurrency = "GBP" | "EUR" | "USD";

/** CardServ gateway configuration for a single currency */
export interface CardServGatewayConfig {
    requestorId: string;
    token: string;
    baseUrl: string;
    currency: CardServCurrency;
    integrationMode: string;
}

export function getCardServConfig(currency: CardServCurrency): CardServGatewayConfig {
    const baseUrl = process.env.CARDSERV_BASE_URL || "https://live.cardserv.io";
    const requestorId = process.env.CARDSERV_REQUESTOR_ID || "";
    const token = process.env.CARDSERV_TOKEN || "";

    if (!requestorId || !token) {
        throw new Error("CardServ credentials not configured (CARDSERV_REQUESTOR_ID / CARDSERV_TOKEN)");
    }

    return {
        requestorId,
        token,
        baseUrl,
        currency,
        integrationMode: "redirect",
    };
}

export function isForceSuccessEnabled(): boolean {
    return process.env.CARDSERV_FORCE_SUCCESS === "true";
}

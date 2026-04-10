export type Currency = "GBP" | "EUR" | "USD";
export type TokenPackageId = "STARTER" | "STANDARD" | "PRO" | "CUSTOM";

export interface TokenPackage {
    id: TokenPackageId;
    name: string;
    tokens: number;
    prices: Record<Currency, number>;
}

export const TOKEN_PACKAGES: Record<Exclude<TokenPackageId, "CUSTOM">, TokenPackage> = {
    STARTER: {
        id: "STARTER",
        name: "Starter",
        tokens: 1000,
        prices: { GBP: 10, EUR: 10, USD: 10 },
    },
    STANDARD: {
        id: "STANDARD",
        name: "Standard",
        tokens: 2500,
        prices: { GBP: 25, EUR: 25, USD: 25 },
    },
    PRO: {
        id: "PRO",
        name: "Pro",
        tokens: 5000,
        prices: { GBP: 50, EUR: 50, USD: 50 },
    },
};

export function getPackagePrice(packageId: Exclude<TokenPackageId, "CUSTOM">, currency: Currency): number {
    return TOKEN_PACKAGES[packageId].prices[currency];
}

/** Custom package: 100 tokens per 1 unit of currency */
export function calculateTokensFromAmount(amount: number, _currency: Currency): number {
    return Math.floor(amount * 100);
}


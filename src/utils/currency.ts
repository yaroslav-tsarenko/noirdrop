export type Currency = "GBP" | "USD" | "EUR" | "AUD";

export const CURRENCY_RATES: Record<Currency, number> = {
    EUR: 1,
    GBP: 0.85,
    USD: 1.1,
    AUD: 1.7,
};

/**
 * Convert an amount that is stored in EUR into the target currency.
 */
export function convertFromEur(amountEur: number, currency: Currency): number {
    return amountEur * CURRENCY_RATES[currency];
}

export function formatMoneyFromEur(amountEur: number, currency: Currency): string {
    const value = convertFromEur(amountEur, currency);
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}


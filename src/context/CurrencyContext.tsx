"use client"
import React, {createContext, useContext, useState, ReactNode} from "react";

export type Currency = "GBP" | "USD" | "EUR";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
    const ctx = useContext(CurrencyContext);
    if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
    return ctx;
};

export const CurrencyProvider = ({children}: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>("GBP");
    return (
        <CurrencyContext.Provider value={{currency, setCurrency}}>
            {children}
        </CurrencyContext.Provider>
    );
};

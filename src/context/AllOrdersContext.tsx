"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface AiOrder {
    _id: string;
    userId: string;
    email: string;
    fullName: string;
    country: string;
    total: number;
    status: "submitted";
    items: Array<{
        id: string;
        name: string;
        price: number;
        qty: number;
    }>;
    createdAt: string;
}

interface AllOrdersContextType {
    orders: AiOrder[];
    refreshOrders: () => Promise<void>;
    loading: boolean;
}

const AllOrdersContext = createContext<AllOrdersContextType>({
    orders: [],
    refreshOrders: async () => {},
    loading: false,
});

export const useAllOrders = () => useContext(AllOrdersContext);

export const AllOrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<AiOrder[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/orders/get-all", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (!res.ok) throw new Error("Failed to fetch orders");

            const data = await res.json();
            const normalized = Array.isArray(data) ? data : data.orders;
            setOrders(Array.isArray(normalized) ? normalized : []);
        } catch {
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <AllOrdersContext.Provider value={{ orders, refreshOrders: fetchOrders, loading }}>
            {children}
        </AllOrdersContext.Provider>
    );
};

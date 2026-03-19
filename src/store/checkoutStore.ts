"use client";
import { create } from "zustand";

interface CheckoutState {
    fullName: string;
    email: string;
    country: string;

    setField: (field: keyof CheckoutState, value: string) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    fullName: "",
    email: "",
    country: "United Kingdom",

    setField: (field, value) => set(() => ({ [field]: value })),
}));

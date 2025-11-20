"use client";
import { create } from "zustand";

interface CheckoutState {
    fullName: string;
    email: string;
    country: string;
    cardNumber: string;
    expiry: string;
    cvc: string;

    setField: (field: keyof CheckoutState, value: string) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    fullName: "",
    email: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",

    setField: (field, value) => set(() => ({ [field]: value })),
}));

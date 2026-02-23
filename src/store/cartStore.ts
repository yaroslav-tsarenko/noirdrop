import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
    id: string | number;
    name: string;
    image?: string;
    /** Base price in EUR */
    price: number;
    qty: number;
};

type CartState = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: CartItem["id"]) => void;
    clear: () => void;
};

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],

            addItem: (item) =>
                set((state) => {
                    const exists = state.items.find((i) => i.id === item.id);

                    if (exists) {
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                            ),
                        };
                    }
                    return { items: [...state.items, item] };
                }),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),

            clear: () => set({ items: [] }),
        }),
        {
            name: "cart-storage", // ключ в localStorage
        }
    )
);

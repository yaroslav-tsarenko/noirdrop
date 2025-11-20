import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
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
            name: "cart-storage",  // ключ в localStorage
        }
    )
);

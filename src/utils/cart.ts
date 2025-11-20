"use client";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    qty: number;
}

const CART_KEY = "esim_cart";

export function getCart(): CartItem[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
}

export function saveCart(cart: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: CartItem) {
    const cart = getCart();

    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
        existing.qty += item.qty;
    } else {
        cart.push(item);
    }

    saveCart(cart);
}

export function removeFromCart(id: string) {
    const cart = getCart().filter((i) => i.id !== id);
    saveCart(cart);
}

export function updateQty(id: string, qty: number) {
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (item) item.qty = qty;
    saveCart(cart);
}

export function clearCart() {
    saveCart([]);
}

export function getCartTotal(): number {
    return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

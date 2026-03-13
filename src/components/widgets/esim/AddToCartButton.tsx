"use client";

import { useCartStore } from "@/store/cartStore";
import styles from "./AddToCartButton.module.scss";

interface AddToCartButtonProps {
    item: {
        id: string;
        name: string;
        image?: string;
        price: number;
        qty: number;
    };
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
    const addItem = useCartStore((s) => s.addItem);

    const handleClick = () => {
        addItem(item);
    };

    return (
        <button className={styles.btn} onClick={handleClick}>
            ADD TO CART
        </button>
    );
}

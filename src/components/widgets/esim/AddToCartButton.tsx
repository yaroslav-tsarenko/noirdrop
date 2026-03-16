"use client";

import { useEffect, useState } from "react";
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
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        addItem(item);
        setAdded(true);
    };

    useEffect(() => {
        if (!added) return;

        const timeout = window.setTimeout(() => setAdded(false), 2200);
        return () => window.clearTimeout(timeout);
    }, [added]);

    return (
        <div className={styles.wrap}>
            <button
                className={`${styles.btn} ${added ? styles.btnAdded : ""}`}
                onClick={handleClick}
            >
                {added ? "ADDED TO CART" : "ADD TO CART"}
            </button>
            <p className={`${styles.feedback} ${added ? styles.feedbackVisible : ""}`}>
                {item.name} added to your cart
            </p>
        </div>
    );
}

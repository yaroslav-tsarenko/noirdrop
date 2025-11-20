"use client";

import { useCartStore } from "@/store/cartStore";
import styles from "./AddToCartButton.module.scss";

export default function AddToCartButton({ product }: any) {
    const addItem = useCartStore((s) => s.addItem);

    const handleClick = () => {
        addItem({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.salePrice,
            qty: 1,
        });
    };

    return (
        <button className={styles.btn} onClick={handleClick}>
            ADD TO CART
        </button>
    );
}

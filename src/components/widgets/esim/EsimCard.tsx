"use client";

import Link from "next/link";
import styles from "./ESimCard.module.scss";

interface Props {
    product: any;
}

export default function ESimCard({ product }: Props) {
    return (
        <Link href={`/esim/${product.id}`} className={styles.card}>
            <img src={product.image} className={styles.image} alt={product.name} />

            <div className={styles.title}>{product.name}</div>

            <div className={styles.price}>
                <span className={styles.old}>{product.basePrice} tokens</span>
                <span className={styles.sale}>{product.salePrice} tokens</span>
            </div>

            <button className={styles.button}>View details →</button>
        </Link>
    );
}

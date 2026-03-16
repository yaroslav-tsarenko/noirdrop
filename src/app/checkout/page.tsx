"use client";

import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.scss";
import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function CheckoutPage() {
    const items = useCartStore((s) => s.items);
    const clearCart = useCartStore((s) => s.clear);
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const router = useRouter();
    const user = useUser();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { fullName, email, country, setField } = useCheckoutStore();

    useEffect(() => {
        if (user?.email && !email) {
            setField("email", user.email);
        }
        if (user?.name && !fullName) {
            setField("fullName", user.name);
        }
    }, [user, email, fullName, setField]);

    const handlePay = async () => {
        if (!items.length) {
            alert("Your cart is empty.");
            return;
        }

        if (!fullName || !email || !country) {
            alert("Please complete your contact details before checkout.");
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/orders/send-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    fullName,
                    email,
                    country,
                    items,
                    total,
                }),
            });

            const data = await res.json();

            if (data.success) {
                clearCart();
                alert("Order placed successfully. The PDF invoice has been sent to your email.");
                router.push("/dashboard");
            } else {
                alert(data.error || "Failed to send order.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.checkoutWrapper}>
            <div className={styles.container}>

                {/* LEFT: FORM */}
                <div className={styles.formSection}>
                    <h2>Checkout</h2>
                    <p className={styles.subtext}>Complete your eSIM purchase. A PDF invoice will be emailed right after checkout.</p>

                    {/* FULL NAME */}
                    <div className={styles.field}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setField("fullName", e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* EMAIL */}
                    <div className={styles.field}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setField("email", e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* COUNTRY */}
                    <div className={styles.field}>
                        <label>Country</label>
                        <input
                            type="text"
                            placeholder="Ukraine"
                            value={country}
                            onChange={(e) => setField("country", e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.orderNotice}>
                        <h3 className={styles.sectionTitle}>What happens after payment</h3>
                        <p>Your invoice in PDF format will be sent to <strong>{email || "your email"}</strong>.</p>
                        <p>Your team mailbox also receives a purchase notification with the client and order details.</p>
                    </div>

                    <button className={styles.payBtn} onClick={handlePay} disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : `Pay €${total.toFixed(2)}`}
                    </button>

                    <Link href="/" className={styles.backLink}>
                        ← Continue Shopping
                    </Link>
                </div>

                {/* RIGHT: SUMMARY */}
                <div className={styles.summarySection}>
                    <h3>Order Summary</h3>

                    {items.length === 0 ? (
                        <p className={styles.subtext}>Your cart is empty. Add an eSIM plan to continue.</p>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className={styles.summaryItem}>
                                <div className={styles.miniSim}>
                                    <div className={styles.chip} />
                                    <span className={styles.badge}>eSIM</span>
                                </div>

                                <div className={styles.info}>
                                    <strong>{item.name}</strong>
                                    <span className={styles.price}>€{(item.price * item.qty).toFixed(2)}</span>
                                    <span className={styles.qty}>Qty: {item.qty}</span>
                                </div>
                            </div>
                        ))
                    )}

                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <strong>€{total.toFixed(2)}</strong>
                    </div>
                </div>

            </div>
        </div>
    );
}

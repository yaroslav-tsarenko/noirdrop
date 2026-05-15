"use client";

import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.scss";
import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser, useUserStatus } from "@/context/UserContext";

export default function CheckoutPage() {
    const items = useCartStore((s) => s.items);
    const clearCart = useCartStore((s) => s.clear);
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const router = useRouter();
    const user = useUser();
    const { refreshUser } = useUserStatus();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { fullName, email, country, setField } = useCheckoutStore();

    const tokensRequired = Math.ceil(total);
    const userTokens = user?.tokens ?? 0;
    const hasEnoughTokens = userTokens >= tokensRequired;

    useEffect(() => {
        if (user?.email && !email) {
            setField("email", user.email);
        }
        if (user?.name && !fullName) {
            setField("fullName", user.name);
        }
        if (!country) {
            setField("country", "United Kingdom");
        }
    }, [user, email, fullName, country, setField]);

    const handlePay = async () => {
        if (!items.length) {
            alert("Your cart is empty.");
            return;
        }

        if (!fullName || !email || !country) {
            alert("Please complete your contact details before checkout.");
            return;
        }

        if (!hasEnoughTokens) {
            alert(`Insufficient tokens. You need ${tokensRequired} tokens but only have ${userTokens}. Please top up your balance first.`);
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
                    total: tokensRequired,
                }),
            });

            const data = await res.json();

            if (data.success) {
                clearCart();
                await refreshUser();
                router.push("/dashboard?order=success");
            } else if (data.error === "Insufficient tokens") {
                alert(`Insufficient tokens. You need ${data.required} tokens but only have ${data.available}. Please top up your balance first.`);
            } else {
                alert(data.error || "Failed to process order.");
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
                    <p className={styles.subtext}>Complete your eSIM purchase using tokens. An invoice will be emailed after checkout.</p>

                    {/* TOKEN BALANCE */}
                    <div className={styles.tokenBalance}>
                        <div className={styles.tokenInfo}>
                            <span className={styles.tokenLabel}>Your token balance</span>
                            <span className={styles.tokenAmount}>{userTokens} tokens</span>
                        </div>
                        {!hasEnoughTokens && items.length > 0 && (
                            <div className={styles.tokenWarning}>
                                <p>You need <strong>{tokensRequired - userTokens}</strong> more tokens to complete this purchase.</p>
                                <Link href="/pricing" className={styles.topUpLink}>Top up tokens</Link>
                            </div>
                        )}
                    </div>

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
                            placeholder="United Kingdom"
                            value={country}
                            onChange={(e) => setField("country", e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.orderNotice}>
                        <h3 className={styles.sectionTitle}>What happens after purchase</h3>
                        <p><strong>{tokensRequired} tokens</strong> will be deducted from your balance.</p>
                        <p>Your order will be placed with <strong>pending</strong> status and a manager will contact you soon to complete the eSIM activation.</p>
                        <p>An invoice in PDF format will be sent to <strong>{email || "your email"}</strong>.</p>
                    </div>

                    <button
                        className={styles.payBtn}
                        onClick={handlePay}
                        disabled={isSubmitting || !hasEnoughTokens || items.length === 0}
                    >
                        {isSubmitting
                            ? "Processing..."
                            : !hasEnoughTokens && items.length > 0
                                ? `Insufficient tokens (need ${tokensRequired})`
                                : `Pay ${tokensRequired} tokens`}
                    </button>

                    <Link href="/pricing" className={styles.topUpBtnLink}>
                        Need more tokens? Top up here
                    </Link>

                    <Link href="/" className={styles.backLink}>
                        &larr; Continue Shopping
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
                                    <span className={styles.price}>{(item.price * item.qty)} tokens</span>
                                    <span className={styles.qty}>Qty: {item.qty}</span>
                                </div>
                            </div>
                        ))
                    )}

                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <strong>{tokensRequired} tokens</strong>
                    </div>
                </div>

            </div>
        </div>
    );
}

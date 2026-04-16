"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useUserStatus } from "@/context/UserContext";
import { useAlert } from "@/context/AlertContext";
import { MdLock, MdCreditCard, MdArrowBack, MdCheckCircle } from "react-icons/md";
import styles from "./page.module.css";

const CURRENCY_SYMBOLS: Record<string, string> = { GBP: "£", USD: "$", EUR: "€" };

function formatCardNumber(v: string) {
    return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(v: string) {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
}

function TokenCheckoutContent() {
    const params = useSearchParams();
    const router = useRouter();
    const { user, loading: userLoading } = useUserStatus();
    const { showAlert } = useAlert();

    const packageId = params.get("packageId") || "";
    const title     = params.get("title")     || "Token Purchase";
    const amount    = Number(params.get("amount"))  || 0;
    const tokens    = Number(params.get("tokens"))  || 0;
    const currency  = params.get("currency")  || "GBP";
    const symbol    = CURRENCY_SYMBOLS[currency] || "£";

    const [cardNumber,     setCardNumber]     = useState("");
    const [expiry,         setExpiry]         = useState("");
    const [cvv,            setCvv]            = useState("");
    const [holderName,     setHolderName]     = useState("");
    const [errors,         setErrors]         = useState<Record<string, string>>({});
    const [isSubmitting,   setIsSubmitting]   = useState(false);

    useEffect(() => {
        if (!packageId || amount <= 0 || tokens <= 0) router.replace("/pricing");
    }, [packageId, amount, tokens, router]);

    useEffect(() => {
        if (userLoading) return;
        if (user === null) router.replace("/sign-in");
        if (user?.name && !holderName) setHolderName(user.name.toUpperCase());
    }, [user, userLoading, holderName, router]);

    const validate = () => {
        const e: Record<string, string> = {};
        const digits = cardNumber.replace(/\s/g, "");
        if (digits.length < 13 || digits.length > 16) e.cardNumber = "Enter a valid card number";
        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            e.expiry = "Enter MM/YY";
        } else if (Number(expiry.split("/")[0]) < 1 || Number(expiry.split("/")[0]) > 12) {
            e.expiry = "Invalid month";
        }
        if (cvv.length < 3) e.cvv = "Enter CVV (3–4 digits)";
        if (holderName.trim().length < 2) e.holderName = "Enter cardholder name";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate() || !user) return;

        const [mm, yy] = expiry.split("/");

        try {
            setIsSubmitting(true);

            const res = await fetch("/api/cardserv/sale", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    packageId,
                    currency,
                    amount,
                    grossAmount: amount,
                    vatAmount: 0,
                    tokens,
                    description: `${title} — ${tokens} tokens`,
                    email: user.email,
                    card: {
                        cardNumber:      cardNumber.replace(/\s/g, ""),
                        cvv2:            cvv,
                        expireMonth:     mm,
                        expireYear:      `20${yy}`,
                        cardPrintedName: holderName.trim().toUpperCase(),
                    },
                    browser: {
                        colorDepth:        window.screen?.colorDepth,
                        screenHeight:      window.screen?.height,
                        screenWidth:       window.screen?.width,
                        timeZone:          new Date().getTimezoneOffset(),
                        javaEnabled:       false,
                        javascriptEnabled: true,
                        acceptLanguage:    navigator.language,
                        userAgent:         navigator.userAgent,
                    },
                }),
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                showAlert("Payment Error", data?.error || data?.message || "Payment failed", "error");
                return;
            }

            // CardServ returns 3DS redirect → send user to CardServ page
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl;
                return;
            }

            if (data.finalized) {
                router.push(`/payment-success?order=${encodeURIComponent(data.orderMerchantId)}`);
                return;
            }

            showAlert("Processing", "Your payment is being processed.", "info");
        } catch (err) {
            showAlert("Error", (err as Error).message || "Something went wrong", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!packageId || amount <= 0) return null;

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                {/* ── LEFT: FORM ── */}
                <div className={styles.card}>
                    <Link href="/pricing" className={styles.back}>
                        <MdArrowBack /> Back to Pricing
                    </Link>

                    <div className={styles.heading}>
                        <MdLock className={styles.lockIcon} />
                        <h1>Secure Checkout</h1>
                    </div>
                    <p className={styles.subtitle}>
                        Enter your card details. After submitting you will be redirected
                        to a secure page to complete 3D Secure verification.
                    </p>

                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>

                        {/* Card number */}
                        <div className={styles.field}>
                            <label htmlFor="cc-number">Card Number</label>
                            <div className={styles.inputWrap}>
                                <MdCreditCard className={styles.fieldIcon} />
                                <input
                                    id="cc-number"
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="cc-number"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                                    className={errors.cardNumber ? styles.inputErr : ""}
                                    disabled={isSubmitting}
                                />
                            </div>
                            {errors.cardNumber && <span className={styles.err}>{errors.cardNumber}</span>}
                        </div>

                        {/* Expiry + CVV */}
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label htmlFor="cc-exp">Expiry</label>
                                <input
                                    id="cc-exp"
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="cc-exp"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={e => setExpiry(formatExpiry(e.target.value))}
                                    className={errors.expiry ? styles.inputErr : ""}
                                    disabled={isSubmitting}
                                />
                                {errors.expiry && <span className={styles.err}>{errors.expiry}</span>}
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="cc-csc">CVV</label>
                                <input
                                    id="cc-csc"
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="cc-csc"
                                    placeholder="123"
                                    value={cvv}
                                    onChange={e => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                                    className={errors.cvv ? styles.inputErr : ""}
                                    disabled={isSubmitting}
                                />
                                {errors.cvv && <span className={styles.err}>{errors.cvv}</span>}
                            </div>
                        </div>

                        {/* Cardholder name */}
                        <div className={styles.field}>
                            <label htmlFor="cc-name">Cardholder Name</label>
                            <input
                                id="cc-name"
                                type="text"
                                autoComplete="cc-name"
                                placeholder="JOHN DOE"
                                value={holderName}
                                onChange={e => setHolderName(e.target.value)}
                                className={errors.holderName ? styles.inputErr : ""}
                                disabled={isSubmitting}
                            />
                            {errors.holderName && <span className={styles.err}>{errors.holderName}</span>}
                        </div>

                        <button
                            type="submit"
                            className={styles.payBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Processing…" : `Pay ${symbol}${amount.toFixed(2)}`}
                        </button>
                    </form>

                    <p className={styles.secureNote}>
                        <MdLock /> Payments processed securely. Card details are never stored on our servers.
                    </p>
                </div>

                {/* ── RIGHT: SUMMARY ── */}
                <div className={styles.summary}>
                    <h2>Order Summary</h2>

                    <div className={styles.summaryItem}>
                        <span className={styles.summaryEmoji}>🪙</span>
                        <div className={styles.summaryText}>
                            <strong>{title}</strong>
                            <span>{tokens.toLocaleString()} tokens</span>
                        </div>
                        <span className={styles.summaryPrice}>{symbol}{amount.toFixed(2)}</span>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <strong>{symbol}{amount.toFixed(2)}</strong>
                    </div>

                    <ul className={styles.featureList}>
                        <li><MdCheckCircle /> Instant token credit after payment</li>
                        <li><MdCheckCircle /> Secure 3D Secure verification</li>
                        <li><MdCheckCircle /> Use tokens on any eSIM plan</li>
                        <li><MdCheckCircle /> No hidden fees</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default function TokenCheckoutPage() {
    return (
        <Suspense>
            <TokenCheckoutContent />
        </Suspense>
    );
}

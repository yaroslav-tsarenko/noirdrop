"use client";

import React, { useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import { useCurrency } from "@/context/CurrencyContext";
import { MdCheckCircle } from "react-icons/md";

interface PricingCardProps {
    variant?: "basic" | "highlight" | "premium";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
}

const currencyConfig = {
    GBP: { symbol: "£" },
    USD: { symbol: "$" },
    EUR: { symbol: "€" },
} as const;

const MIN_CUSTOM_AMOUNT = 0.01;
const MAX_CUSTOM_AMOUNT = 9999;

const labelText: Record<string, string> = {
    basic: "Basic",
    highlight: "Popular",
    premium: "Premium"
};

const isDynamicPrice = (price: string) => price.trim().toLowerCase() === "dynamic";

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "basic",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features,
                                                     buttonText,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const { currency } = useCurrency();

    const { symbol } = currencyConfig[currency];
    const [customAmountRaw, setCustomAmountRaw] = useState<string>(String(MIN_CUSTOM_AMOUNT));

    const customAmount = (() => {
        const n = Number(customAmountRaw);
        return Number.isFinite(n) ? n : NaN;
    })();

    const calcTokens = (amount: number) => Math.floor(amount * 100);

    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to buy tokens", "info");
            setTimeout(() => {
                window.location.href = "/sign-up";
            }, 2000);
            return;
        }

        if (isDynamicPrice(price)) {
            const amountNum = Number(customAmountRaw);
            if (!Number.isFinite(amountNum) || amountNum < MIN_CUSTOM_AMOUNT) {
                showAlert(
                    `Minimum amount is ${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}`,
                    "Please enter a valid amount",
                    "warning"
                );
                return;
            }
        }

        try {
            const amount = isDynamicPrice(price) ? calcTokens(Number(customAmountRaw)) : tokens;

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ amount }),
            });

            if (!res.ok) {
                showAlert("Error", "Failed to buy tokens", "error");
                return;
            }

            const data = await res.json();
            showAlert(`Success!`, `You purchased ${amount} tokens.`, "success");
            console.log("Updated user:", data.user);
        } catch (err) {
            const error = err as Error;
            showAlert("Error", error.message || "Something went wrong", "error");
        }
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div className={styles.cornerLabel}>{labelText[variant]}</div>
            <h3 className={styles.title}>{title}</h3>

            {isDynamicPrice(price) ? (
                <>
                    <Input
                        type="number"
                        value={customAmountRaw}
                        onChange={(e) => {
                            const raw = e.target.value;
                            // allow clearing
                            if (raw === "") {
                                setCustomAmountRaw("");
                                return;
                            }
                            // keep only a reasonable length to prevent absurd values
                            if (raw.length > 10) return;
                            const value = Number(raw);
                            if (!Number.isFinite(value)) {
                                setCustomAmountRaw(raw);
                                return;
                            }
                            const clamped = Math.max(Math.min(value, MAX_CUSTOM_AMOUNT), MIN_CUSTOM_AMOUNT);
                            setCustomAmountRaw(String(clamped));
                        }}
                        slotProps={{ input: { min: MIN_CUSTOM_AMOUNT, max: MAX_CUSTOM_AMOUNT, step: 0.01 } }}
                        sx={{ mb: 2, width: "100%" }}
                        placeholder={`Enter amount (${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}+)`}
                        variant="outlined"
                        size="lg"
                    />

                    {Number.isFinite(customAmount) ? (
                        <p className={styles.price}>
                            {symbol}{customAmount.toFixed(2)}{" "}
                            <span className={styles.tokens}>
                                ≈ {calcTokens(customAmount)} tokens
                            </span>
                        </p>
                    ) : (
                        <p className={styles.price}>
                            {symbol}{MIN_CUSTOM_AMOUNT.toFixed(2)}{" "}
                            <span className={styles.tokens}>
                                ≈ {calcTokens(MIN_CUSTOM_AMOUNT)} tokens
                            </span>
                        </p>
                    )}
                </>
            ) : (
                <p className={styles.price}>
                    {symbol}{Number(price).toFixed(2)} <span className={styles.tokens}>/{tokens} tokens</span>
                </p>
            )}

            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                        <MdCheckCircle className={styles.featureIcon} />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            <ButtonUI type="button" color="secondary" hoverColor="secondary" sx={{ width: "100%" }} onClick={handleBuy}>
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;

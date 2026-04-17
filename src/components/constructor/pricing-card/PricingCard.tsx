"use client";

import React, { useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import { useCurrency } from "@/context/CurrencyContext";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

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

const currencyConfig: Record<string, { symbol: string }> = {
    GBP: { symbol: "£" },
    USD: { symbol: "$" },
    EUR: { symbol: "€" },
    AUD: { symbol: "A$" },
};

const MIN_CUSTOM_AMOUNT = 10;
const MAX_CUSTOM_AMOUNT = 9999;

const labelText: Record<string, string> = {
    basic: "Basic",
    highlight: "Popular",
    premium: "Premium"
};

const isDynamicPrice = (price: string) => price.trim().toLowerCase() === "dynamic";
const isLinkOnlyCard = (price: string, tokens: number) =>
    !isDynamicPrice(price) && (tokens <= 0 || Number.isNaN(Number(price)));

const PricingCard: React.FC<PricingCardProps> = ({
    variant = "basic",
    title,
    price,
    tokens,
    description,
    features,
    buttonText,
    buttonLink,
}) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const { currency } = useCurrency();
    const router = useRouter();

    const { symbol } = currencyConfig[currency];
    const [customAmountRaw, setCustomAmountRaw] = useState<string>("");

    const customAmount = (() => {
        const n = Number(customAmountRaw.replace(",", "."));
        return Number.isFinite(n) ? n : NaN;
    })();

    const calcTokens = (amount: number) => Math.floor(amount * 100);

    /** Map card title → packageId for the CardServ sale API */
    const resolvePackageId = (): "STARTER" | "STANDARD" | "PRO" | "CUSTOM" => {
        const t = title.trim().toLowerCase();
        if (t === "starter") return "STARTER";
        if (t === "standard") return "STANDARD";
        if (t === "pro") return "PRO";
        return "CUSTOM";
    };

    /** Redirects to /checkout/tokens with all needed params */
    const handleBuy = async () => {
        if (buttonLink && isLinkOnlyCard(price, tokens)) {
            router.push(buttonLink);
            return;
        }

        if (!user) {
            showAlert("Please sign in", "You need to be signed in to continue", "info");
            setTimeout(() => {
                window.location.href = "/sign-up";
            }, 2000);
            return;
        }

        if (isDynamicPrice(price)) {
            const amountNum = Number(customAmountRaw.replace(",", "."));
            if (!Number.isFinite(amountNum) || amountNum < MIN_CUSTOM_AMOUNT || amountNum > MAX_CUSTOM_AMOUNT) {
                showAlert(
                    `Minimum custom purchase is 1000 tokens (${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)})`,
                    `Enter an amount between ${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)} and ${symbol}${MAX_CUSTOM_AMOUNT.toFixed(2)}.`,
                    "warning"
                );
                return;
            }
        }

        const pricePaid = isDynamicPrice(price)
            ? Number(customAmountRaw.replace(",", "."))
            : Number(price);
        const tokenAmount = isDynamicPrice(price) ? calcTokens(pricePaid) : tokens;

        if (!Number.isFinite(tokenAmount) || tokenAmount <= 0) {
            showAlert("Error", "Invalid purchase amount", "error");
            return;
        }

        // Redirect to the secure checkout page where the user enters card details
        const params = new URLSearchParams({
            packageId: resolvePackageId(),
            title: title || "Token Purchase",
            amount: pricePaid.toFixed(2),
            tokens: String(tokenAmount),
            currency,
        });
        router.push(`/checkout/tokens?${params.toString()}`);
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div className={styles.cornerLabel}>{labelText[variant]}</div>
            <h3 className={styles.title}>{title}</h3>

            {isDynamicPrice(price) ? (
                <>
                    <Input
                        type="text"
                        value={customAmountRaw}
                        onChange={(e) => {
                            const raw = e.target.value;
                            if (raw === "") {
                                setCustomAmountRaw("");
                                return;
                            }
                            const normalized = raw.replace(",", ".");
                            if (!/^\d{0,7}(\.\d{0,2})?$/.test(normalized)) return;
                            setCustomAmountRaw(raw);
                        }}
                        slotProps={{ input: { inputMode: "decimal" } }}
                        sx={{ mb: 2, width: "100%" }}
                        placeholder={`Enter amount (${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}+)`}
                        variant="outlined"
                        size="lg"
                    />
                    {Number.isFinite(customAmount) ? (
                        <p className={styles.price}>
                            {symbol}{customAmount.toFixed(2)}{" "}
                            <span className={styles.tokens}>≈ {calcTokens(customAmount)} tokens</span>
                        </p>
                    ) : (
                        <p className={styles.price}>
                            {symbol}{MIN_CUSTOM_AMOUNT.toFixed(2)}{" "}
                            <span className={styles.tokens}>≈ {calcTokens(MIN_CUSTOM_AMOUNT)} tokens</span>
                        </p>
                    )}
                </>
            ) : (
                <p className={styles.price}>
                    {Number.isFinite(Number(price))
                        ? (
                            <>
                                {symbol}{Number(price).toFixed(2)}{" "}
                                {tokens > 0 && <span className={styles.tokens}>/ {tokens.toLocaleString()} tokens</span>}
                            </>
                        )
                        : price}
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

            <ButtonUI
                type="button"
                color="secondary"
                hoverColor="secondary"
                sx={{ width: "100%" }}
                onClick={handleBuy}
            >
                {isLinkOnlyCard(price, tokens) || user ? buttonText : "Sign In to Continue"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;

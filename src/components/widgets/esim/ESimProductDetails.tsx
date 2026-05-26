"use client";

import { useState } from "react";
import { FiGlobe, FiShield, FiSmartphone, FiZap } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";

import AddToCartButton from "@/components/widgets/esim/AddToCartButton";
import ProductReviews from "@/components/widgets/esim/ProductReviews";
import styles from "@/components/widgets/esim/ProductLayout.module.scss";
import { ESIM_PRODUCTS } from "@/utils/esimProducts";

type EsimProduct = (typeof ESIM_PRODUCTS)[number];

interface ESimProductDetailsProps {
    product: EsimProduct;
}

export default function ESimProductDetails({ product }: ESimProductDetailsProps) {
    const [selectedVariant, setSelectedVariant] = useState<string>(product.variants[0] ?? "");
    const [quantity, setQuantity] = useState(1);

    const unitPrice = product.salePrice;

    const cartItem = {
        id: `${product.id}:${selectedVariant}`,
        name: `${product.name} (${selectedVariant})`,
        image: product.image,
        price: unitPrice,
        qty: quantity,
    };

    const badgeColor: Record<EsimProduct["type"], string> = {
        ultra: "#8A2BE2",
        plus: "#1A73E8",
        global: "#0F766E",
        sim: "#F97316",
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <div className={styles.illustrationWrapper}>
                    <div
                        className={styles.esimBadge}
                        style={{ background: badgeColor[product.type] }}
                    >
                        {product.type.toUpperCase()}
                    </div>

                    <div className={styles.esimCard}>
                        <div className={styles.cardGradient}></div>
                        <div className={styles.cardGlow}></div>

                        <div className={styles.cardTop}>
                            <span>Digital eSIM</span>
                        </div>

                        <div className={styles.cardChip}></div>

                        <div className={styles.cardBrand}>{product.name}</div>

                        <div className={styles.cardLines}></div>
                    </div>
                </div>

                <div>
                    <h1 className={styles.title}>{product.name}</h1>

                    <div className={styles.prices}>
                        <span className={styles.old}>{product.basePrice} tokens</span>
                        <span className={styles.sale}>{unitPrice} tokens</span>
                    </div>

                    <label className={styles.label}>Select your data plan:</label>
                    <select
                        className={styles.select}
                        value={selectedVariant}
                        onChange={(event) => setSelectedVariant(event.target.value)}
                    >
                        {product.variants.map((variant) => (
                            <option key={variant}>{variant}</option>
                        ))}
                    </select>

                    <div className={styles.quantityWrapper}>
                        <label className={styles.label}>Quantity:</label>
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(event) =>
                                setQuantity(Math.max(1, Number(event.target.value) || 1))
                            }
                            className={styles.qty}
                        />

                        <AddToCartButton item={cartItem} />
                    </div>

                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.highlights}>
                        {product.highlights.map((highlight) => (
                            <div key={highlight} className={styles.highlightCard}>
                                {highlight}
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.subtitle}>Why travellers choose this eSIM</h3>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoBox}>
                            <FiGlobe className={styles.icon} />
                            <p>Works in {product.coverageCountries}+ European countries</p>
                        </div>
                        <div className={styles.infoBox}>
                            <FiZap className={styles.icon} />
                            <p>Fast 4G/5G speeds across Europe</p>
                        </div>
                        <div className={styles.infoBox}>
                            <FiSmartphone className={styles.icon} />
                            <p>Instant activation via QR-code</p>
                        </div>
                        <div className={styles.infoBox}>
                            <FiShield className={styles.icon} />
                            <p>Secure connection & no roaming fees</p>
                        </div>
                    </div>

                    <h3 className={styles.subtitle}>Included with your purchase</h3>
                    <ul className={styles.includedList}>
                        {product.included.map((item) => (
                            <li key={item}><MdCheckCircle /> {item}</li>
                        ))}
                    </ul>

                    <h3 className={styles.subtitle}>Coverage & Speed</h3>
                    <p className={styles.coverageText}>
                        This eSIM connects to premium European carrier networks with automatic switching
                        to the strongest signal in your area. Enjoy stable 4G/5G data speeds in
                        {product.coverageCountries}+ European countries — data only, no roaming fees, no SIM swaps.
                    </p>

                    <div className={styles.contentSection}>
                        <h3 className={styles.subtitle}>Coverage Highlights</h3>
                        <ul className={styles.richList}>
                            {product.coverageNotes.map((note) => (
                                <li key={note}>{note}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.extraCard}>
                        <h4>Perfect for:</h4>
                        <ul>
                            {product.idealFor.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.contentSection}>
                        <h3 className={styles.subtitle}>How it works</h3>
                        <div className={styles.stepsGrid}>
                            {product.setupSteps.map((step, index) => (
                                <div key={step} className={styles.stepCard}>
                                    <span className={styles.stepIndex}>0{index + 1}</span>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentSection}>
                        <h3 className={styles.subtitle}>What you get</h3>
                        <ul className={styles.richList}>
                            {product.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.contentSection}>
                        <h3 className={styles.subtitle}>Frequently asked questions</h3>
                        <div className={styles.faqList}>
                            {product.faq.map((item) => (
                                <div key={item.question} className={styles.faqItem}>
                                    <h4>{item.question}</h4>
                                    <p>{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ProductReviews productId={product.id} />
        </div>
    );
}

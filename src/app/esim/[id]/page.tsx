import { ESIM_PRODUCTS } from "@/utils/esimProducts";
import ProductReviews from "@/components/widgets/esim/ProductReviews";
import AddToCartButton from "@/components/widgets/esim/AddToCartButton";
import styles from "@/components/widgets/esim/ProductLayout.module.scss";
import { FiGlobe, FiSmartphone, FiZap, FiShield, FiCheckCircle } from "react-icons/fi";

export default function ESimProductPage({ params }: any) {
    const product = ESIM_PRODUCTS.find(p => p.id === params.id);

    if (!product) return <div>Product not found</div>;

    const badgeColor: Record<string, string> = {
        ultra: "#8A2BE2",
        plus: "#1A73E8",
        global: "#0F766E",
        sim: "#F97316"
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {/* BEAUTIFUL CARD WITH BADGE */}
                <div className={styles.illustrationWrapper}>
                    <div className={styles.esimBadge} style={{ background: badgeColor[product.type] }}>
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


                {/* RIGHT SIDE */}
                <div>
                    <h1 className={styles.title}>{product.name}</h1>

                    <div className={styles.prices}>
                        <span className={styles.old}>€{product.basePrice}</span>
                        <span className={styles.sale}>€{product.salePrice} Sale</span>
                    </div>

                    <label className={styles.label}>Select your eSIM balance:</label>
                    <select className={styles.select}>
                        {product.variants.map(v => (
                            <option key={v}>{v}</option>
                        ))}
                    </select>

                    <div className={styles.quantityWrapper}>
                        <label className={styles.label}>Quantity:</label>
                        <input type="number" min={1} defaultValue={1} className={styles.qty} />

                        <AddToCartButton product={product} />
                    </div>


                    <p className={styles.description}>{product.description}</p>

                    {/* WHY THIS ESIM IS GREAT */}
                    <h3 className={styles.subtitle}>Why travellers choose this eSIM</h3>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoBox}>
                            <FiGlobe className={styles.icon} />
                            <p>Works in {product.coverageCountries}+ countries</p>
                        </div>
                        <div className={styles.infoBox}>
                            <FiZap className={styles.icon} />
                            <p>Fast 4G/5G speeds worldwide</p>
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

                    {/* INCLUDED WITH PURCHASE */}
                    <h3 className={styles.subtitle}>Included with your purchase</h3>
                    <ul className={styles.includedList}>
                        <li><FiCheckCircle /> eSIM activation QR code</li>
                        <li><FiCheckCircle /> Setup guide for iOS / Android</li>
                        <li><FiCheckCircle /> Worldwide compatibility list</li>
                        <li><FiCheckCircle /> 24/7 support via chat</li>
                    </ul>

                    {/* COVERAGE DETAILS */}
                    <h3 className={styles.subtitle}>Coverage & Speed</h3>
                    <p className={styles.coverageText}>
                        This eSIM uses premium international networks with automatic switching
                        to the strongest signal in your region. Enjoy stable 4G/5G speeds in
                        over {product.coverageCountries}+ countries without roaming fees or SIM swaps.
                    </p>

                    {/* EXTRA INFO SECTION */}
                    <div className={styles.extraCard}>
                        <h4>Perfect for:</h4>
                        <ul>
                            <li>Business travellers</li>
                            <li>Tourists exploring multiple countries</li>
                            <li>Digital nomads</li>
                            <li>Remote workers</li>
                            <li>Backpackers & Asia/Europe tours</li>
                        </ul>
                    </div>
                </div>
            </div>

            <ProductReviews productId={product.id} />
        </div>
    );
}

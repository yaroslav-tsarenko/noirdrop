import { ESIM_REVIEWS } from "@/utils/esimReviews";
import styles from "./ProductReviews.module.scss";

export default function ProductReviews({ productId }: any) {
    const data = ESIM_REVIEWS[productId] || [];

    if (!data.length) return <div>No reviews yet.</div>;

    const avg = (data.reduce((s, r) => s + r.rating, 0) / data.length).toFixed(1);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Customer Reviews</h2>

            <div className={styles.summary}>
                <div className={styles.avg}>{avg}</div>
                <div className={styles.based}>Based on {data.length} reviews</div>
            </div>

            <div className={styles.grid}>
                {data.map((r, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.row}>
                            <span className={styles.stars}>{"⭐".repeat(r.rating)}</span>
                            <span className={styles.date}>{r.date}</span>
                        </div>

                        <div className={styles.text}>{r.text}</div>

                        <div className={styles.author}>{r.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

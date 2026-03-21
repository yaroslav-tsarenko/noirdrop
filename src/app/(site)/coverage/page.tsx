import type { Metadata } from "next";
import ESimPicker from "@/components/widgets/esim/ESimPicker";

export const metadata: Metadata = {
    title: "Coverage — Noirdrop eSIM for Europe",
    description: "Explore supported European countries and compare data-only eSIM rates by country.",
};

const points = [
    "Compare eSIM rates across 45+ European countries.",
    "Use the country selector to preview pricing before you buy.",
    "All plans cover every listed country — no extra charges at borders.",
];

export default function CoveragePage() {
    return (
        <section style={{ display: "grid", gap: "24px" }}>
            <div
                style={{
                    padding: "32px",
                    borderRadius: "28px",
                    border: "1px solid rgba(104, 117, 160, 0.18)",
                    background:
                        "radial-gradient(circle at top left, rgba(72,216,240,0.12), transparent 28%), linear-gradient(180deg, rgba(11,19,44,0.98), rgba(7,13,31,0.98))",
                    color: "#f7fbff",
                }}
            >
                <span
                    style={{
                        display: "inline-flex",
                        marginBottom: "14px",
                        padding: "8px 12px",
                        borderRadius: "999px",
                        background: "rgba(72,216,240,0.12)",
                        color: "#7feeff",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                    }}
                >
                    European Coverage
                </span>
                <h1 style={{ margin: "0 0 12px", fontSize: "clamp(2rem, 4vw, 3.6rem)" }}>
                    eSIM Coverage Across 45+ European Countries
                </h1>
                <p style={{ margin: 0, color: "#9fb0cf", lineHeight: 1.7, maxWidth: "760px" }}>
                    All Noirdrop eSIM data plans cover the countries listed below. One plan, one price —
                    no extra charges when you cross borders within Europe.
                </p>
                <ul style={{ margin: "18px 0 0", color: "#dbe6f7", lineHeight: 1.8 }}>
                    {points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </div>

            <ESimPicker />
        </section>
    );
}

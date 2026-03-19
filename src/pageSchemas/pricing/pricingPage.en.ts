import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const pricingSchema: PageSchema = {
    meta: {
        title: `Pricing — ${COMPANY_NAME} eSIM Marketplace`,
        description: `Transparent token pricing for global eSIM activation, data packs, roaming optimization and AI-powered connectivity tools. No subscriptions — pay only for what you deploy.`,
        keywords: [
            "esim pricing",
            "global esim cost",
            "token based esim system",
            "ai telecom pricing",
            "international data plans",
            "esim marketplace pricing",
            `${COMPANY_NAME} esim tokens`,
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} — eSIM Pricing`,
            description: "AI-driven, token-based pricing for global digital connectivity.",
            bg: "#f5f6ff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // 🚀 HERO — Galactic Pricing
        {
            type: "hero",
            bgImage: "image10",
            title: "Simple. Transparent. Global. eSIM Pricing.",
            description:
                `Activate eSIMs, generate QR codes, manage data-packs and run global telecom automation — all with a single token system. No subscriptions, no hidden fees.`,
            buttons: [
                { text: "Start Activating", link: "/get-started", color: "primary" },
                { text: "Talk to Sales", link: "/contact-us", color: "secondary" },
            ],
        },

        // 🌐 NEW: Global Region Price Map (visual only)
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image30",
                width: "100%",
                height: "430px",
                alt: "Global eSIM pricing heatmap",
            },
            right: {
                type: "text",
                title: "Region-Based Token Scaling",
                description:
                    "Different regions require different telecom infrastructure. Our token pricing automatically adjusts to each geographic tier, depending on demand, carrier agreements and local routing complexity.",
                bullets: [
                    "Tier 1: EU/USA/UK — lowest token cost",
                    "Tier 2: Asia/Middle East — moderate cost",
                    "Tier 3: Africa/South America — increased routing load",
                ],
                iconName: "public",
                iconSize: 44,
                iconColor: "#6a39ff",
                iconBg: "#f3edff",
            }
        },

        // 💎 MAIN PRICING GRID — 4 tiers
        {
            type: "grid",
            columns: 4,
            gap: "2.4rem",
            cards: [
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Starter eSIM Pack",
                    price: "9",
                    tokens: 100,
                    description: "Perfect for testing activations, QR generation or small-volume orders.",
                    features: [
                        "Up to 10 eSIM activations",
                        "Basic routing engine",
                        "Standard global coverage",
                        "Delivery via email/SMS/Telegram",
                    ],
                    buttonText: "Start",
                    buttonLink: "/get-started",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro Connectivity Pack",
                    price: "25",
                    tokens: 350,
                    description: "For growing eSIM marketplaces and frequent international customers.",
                    features: [
                        "30–40 eSIM activations",
                        "AI optimization for regions",
                        "Full QR automation",
                        "Carrier fallback logic",
                    ],
                    buttonText: "Go Pro",
                    buttonLink: "/get-started",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Enterprise Telecom Suite",
                    price: "60",
                    tokens: 1000,
                    description: "Highest-volume, global-first solution for telecom-scale activations.",
                    features: [
                        "100+ eSIM activations",
                        "Priority routing engine",
                        "AI auto-repair for failed activations",
                        "Dedicated support and analytics",
                    ],
                    buttonText: "Upgrade",
                    buttonLink: "/get-started",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Custom",
                    price: "dynamic",
                    tokens: 0,
                    description: "Enter the exact budget you want and convert it into account tokens instantly.",
                    features: [
                        "Choose your own amount",
                        "Instant token top-up",
                        "PDF invoice sent by email",
                        "Best for flexible spend",
                    ],
                    buttonText: "Buy Custom Pack",
                }
            ]
        },

        // ⚡ NEW BLOCK: Token Flow Diagram
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "How Token Pricing Works for eSIM Platforms",
                description:
                    "Every action inside your platform consumes tokens. You only pay for what you actually use — no recurring fees, no minimum commitments.",
                bullets: [
                    "Activation = 20–40 tokens",
                    "QR delivery = 5 tokens",
                    "Region optimization = 3 tokens",
                    "Failed activation auto-repair = FREE",
                ],
                iconName: "token",
                iconSize: 46,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image50",
                height: "400px",
                alt: "Token usage flow",
            }
        },

        // 🧬 NEW — 6×6 Feature Grid (cosmic)
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Instant QR Delivery",
                        description: "Customers receive activation details right after checkout.",
                        bullets: ["Email-ready flow", "Fast fulfilment", "Clear install steps"],
                        iconName: "qr",
                        iconColor: "#6a39ff",
                        iconBg: "#f3edff",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Reusable Travel Balance",
                        description: "Keep one account and reuse it across future trips.",
                        bullets: ["Simple top-ups", "No subscriptions", "Flexible spend"],
                        iconName: "wallet",
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Global Coverage",
                        description: "Plans are built for frequent travel across major destinations.",
                        bullets: ["190+ countries", "Strong partner networks", "Travel-ready setup"],
                        iconName: "public",
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Transparent Billing",
                        description: "Know what you pay and what package fits your use.",
                        bullets: ["Clear package sizes", "No hidden renewals", "Straightforward pricing"],
                        iconName: "receipt",
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Fast Activation Help",
                        description: "Support content is built around common setup issues and fixes.",
                        bullets: ["Activation guidance", "Compatibility help", "Troubleshooting tips"],
                        iconName: "support_agent",
                        iconColor: "#d900aa",
                        iconBg: "#ffe6f5",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Business-Ready Scaling",
                        description: "Move from single-trip usage to larger travel operations when needed.",
                        bullets: ["Custom agreements", "Higher-volume support", "Operational flexibility"],
                        iconName: "business",
                        iconColor: "#007f7f",
                        iconBg: "#e6fffb",
                    }
                }
            ]
        },

        // 📡 NEW — Speed Class Boosters (Unique)
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image13",
                    title: "Speed Class L1",
                    description: "Standard 4G performance — globally reliable.",
                    buttonLink: "#boosters",
                    buttonText: "Add Booster"
                },
                {
                    image: "image15",
                    title: "Speed Class L2",
                    description: "Optimized for video calls & navigation.",
                    buttonLink: "#boosters",
                    buttonText: "Add Booster"
                },
                {
                    image: "image17",
                    title: "Speed Class L3",
                    description: "High-performance routing for business users.",
                    buttonLink: "#boosters",
                    buttonText: "Enable Priority"
                }
            ]
        },

        {
            type: "text",
            id: "boosters",
            title: "Boosters",
            description: "Increase routing priority and improve performance with Speed Class add-ons.",
            iconName: "bolt",
            iconColor: "#6a39ff",
            iconBg: "#f3edff",
        },

        // 🌍 NEW — Top-Up Simulation Block
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image22",
                height: "420px",
                alt: "Token simulation UI",
            },
            right: {
                type: "text",
                title: "Predict Your Monthly Cost",
                description:
                    "Our AI simulator helps you estimate how many tokens you'll need based on travel volume, activation frequency and country distribution.",
                bullets: [
                    "Volume-based prediction",
                    "AI seasonal forecasting",
                    "Carrier fee estimation",
                ],
                iconName: "calculate",
                iconColor: "#28a745",
                iconBg: "#e6ffe6"
            }
        },

        // 🌠 FAQ — eSIM edition
        {
            type: "faq",
            items: [
                {
                    question: "How many tokens does an eSIM activation cost?",
                    answer: "Depending on region: 20–40 tokens per activation. High-load regions may adjust dynamically."
                },
                {
                    question: "Do tokens expire?",
                    answer: "Never. Tokens remain in your wallet indefinitely."
                },
                {
                    question: "What about failed activations?",
                    answer: "Auto-repair is free. You are never charged twice for failed attempts."
                },
                {
                    question: "Can I resell eSIMs?",
                    answer: "Yes, the system fully supports resellers, affiliates and travel platforms."
                },
                {
                    question: "Is enterprise routing available?",
                    answer: `Yes — contact us at ${COMPANY_EMAIL} for SLA, routing priority and volume agreements.`
                },
            ]
        },

        // ⭐ FINAL CTA
        {
            type: "hero",
            bgImage: "image40",
            title: "Scale Your Global Connectivity with AI",
            description:
                "Launch, manage and automate your eSIM marketplace with a universal token system built for global coverage.",
            buttons: [
                { text: "Start Now", link: "/get-started", color: "primary" },
                { text: "Book a Demo", link: "/contact-us", color: "secondary" },
            ],
        },
    ],
};

export default pricingSchema;

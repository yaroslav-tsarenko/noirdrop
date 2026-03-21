import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const pricingSchema: PageSchema = {
    meta: {
        title: `eSIM Data Plans & Pricing — ${COMPANY_NAME}`,
        description: `Affordable data-only eSIM plans for 45+ European countries. Choose from 1 GB to 50 GB. Instant QR delivery. No contracts, no roaming fees.`,
        keywords: [
            "esim pricing",
            "europe esim cost",
            "european data plans",
            "travel esim pricing",
            "cheap esim europe",
            "data only esim",
            `${COMPANY_NAME} esim plans`,
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} — eSIM Pricing`,
            description: "Affordable data plans for European travel. No contracts.",
            bg: "#f5f6ff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // HERO
        {
            type: "hero",
            bgImage: "image10",
            title: "Simple, Transparent eSIM Pricing for Europe",
            description:
                `Buy tokens, then use them to activate data-only eSIM plans across 45+ European countries. Plans from 1 GB to 50 GB. No subscriptions, no hidden fees.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "Contact Us", link: "/contact-us", color: "secondary" },
            ],
        },

        // MAIN PRICING GRID — 3 tariff plans + custom
        {
            type: "grid",
            columns: 4,
            gap: "2.4rem",
            cards: [
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Starter",
                    price: "10",
                    tokens: 1000,
                    description: "Top up 1,000 tokens. Ideal for a short trip with a 1–3 GB data plan across Europe.",
                    features: [
                        "1,000 tokens",
                        "Use for any eSIM data plan",
                        "45+ European countries",
                        "Instant QR code delivery",
                    ],
                    buttonText: "Buy 1,000 Tokens",
                    buttonLink: "/get-started",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Standard",
                    price: "25",
                    tokens: 2500,
                    description: "2,500 tokens — great value for a 1–2 week holiday with plenty of data across Europe.",
                    features: [
                        "2,500 tokens",
                        "Best for holidays & longer trips",
                        "45+ European countries",
                        "Tethering / hotspot supported",
                    ],
                    buttonText: "Buy 2,500 Tokens",
                    buttonLink: "/get-started",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Pro",
                    price: "50",
                    tokens: 5000,
                    description: "5,000 tokens for premium 4G/5G data plans. Ideal for remote work, streaming, and longer trips.",
                    features: [
                        "5,000 tokens",
                        "Premium 4G/5G data plans",
                        "45+ European countries",
                        "Priority network speeds",
                    ],
                    buttonText: "Buy 5,000 Tokens",
                    buttonLink: "/get-started",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Custom",
                    price: "dynamic",
                    tokens: 0,
                    description: "Enter any amount (min £10 / $10 / €10) and convert it to tokens instantly. £1 = 100 tokens.",
                    features: [
                        "Choose your own amount",
                        "£1 / $1 / €1 = 100 tokens",
                        "Minimum purchase: 1,000 tokens",
                        "Instant top-up to your account",
                    ],
                    buttonText: "Buy Custom Amount",
                }
            ]
        },

        // What's included section
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "What's Included in Every Plan",
                description:
                    "Every eSIM data plan includes the same core features — no matter which size you choose.",
                bullets: [
                    "Data-only eSIM — your main SIM stays active for calls & SMS",
                    "Instant QR code delivery to your email",
                    "Coverage in 45+ European countries on one plan",
                    "No contracts — buy only when you need it",
                    "Step-by-step setup guide for iPhone and Android",
                ],
                iconName: "checkCircle",
                iconSize: 46,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image50",
                height: "400px",
                alt: "eSIM plan features",
            }
        },

        // Feature grid
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Instant QR Delivery",
                        description: "Your QR code is delivered to your email seconds after purchase.",
                        bullets: ["No waiting", "Works offline once installed", "Available 24/7"],
                        iconName: "qr",
                        iconColor: "#6a39ff",
                        iconBg: "#f3edff",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Data-Only Plans",
                        description: "All plans are data-only. Your original SIM stays active for calls and SMS.",
                        bullets: ["Keep your phone number", "No SIM swapping", "Dual SIM compatible"],
                        iconName: "smartphone",
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "European Coverage",
                        description: "One plan covers 45+ European countries. No extra charges at borders.",
                        bullets: ["UK, EU, Balkans, Nordics", "Automatic carrier switching", "No roaming fees"],
                        iconName: "public",
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Transparent Pricing",
                        description: "You know exactly what you get: data amount, validity, and price. Nothing hidden.",
                        bullets: ["Clear GB amounts", "No automatic renewals", "No surprise charges"],
                        iconName: "receipt",
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Easy Setup",
                        description: "Scan the QR code and follow the prompts. Most users are online in under 2 minutes.",
                        bullets: ["iPhone & Android supported", "Step-by-step guide included", "No app required"],
                        iconName: "support_agent",
                        iconColor: "#d900aa",
                        iconBg: "#ffe6f5",
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Tethering Supported",
                        description: "Share your data connection with laptops, tablets, or other devices.",
                        bullets: ["Hotspot enabled", "Share with travel companions", "Works on most networks"],
                        iconName: "wifi",
                        iconColor: "#007f7f",
                        iconBg: "#e6fffb",
                    }
                }
            ]
        },

        // How much data do I need?
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image22",
                height: "420px",
                alt: "Data usage guide",
            },
            right: {
                type: "text",
                title: "How Much Data Do I Need?",
                description:
                    "Not sure which plan to pick? Here's a rough guide based on typical usage:",
                bullets: [
                    "1 GB — messaging, maps, and light browsing for 3–5 days",
                    "3 GB — social media, email, and ride apps for 1–2 weeks",
                    "5 GB — regular use including photos and moderate browsing for 2–3 weeks",
                    "10 GB — video calls, streaming, and hotspot use for 2–4 weeks",
                    "20 GB+ — heavy use, remote work, or sharing with others",
                ],
                iconName: "calculate",
                iconColor: "#28a745",
                iconBg: "#e6ffe6"
            }
        },

        // FAQ
        {
            type: "faq",
            items: [
                {
                    question: "What countries are covered?",
                    answer: "All plans cover 45+ European countries including the UK, France, Germany, Spain, Italy, Greece, Portugal, Netherlands, and many more. See our coverage page for the full list."
                },
                {
                    question: "Is this a data-only plan?",
                    answer: "Yes. All our eSIM plans are data-only. Your original SIM card stays active for phone calls, SMS, and banking verification."
                },
                {
                    question: "What happens when my data runs out?",
                    answer: "Your data connection stops. There are no overage charges. You can buy a new plan anytime."
                },
                {
                    question: "Can I get a refund?",
                    answer: "Refunds are available for uninstalled eSIMs. Once activated, refunds depend on applicable consumer law. Contact support for help."
                },
                {
                    question: "Do you offer unlimited plans?",
                    answer: `Not at this time. We offer plans up to 50 GB which covers most travel needs. For custom requirements, contact us at ${COMPANY_EMAIL}.`
                },
            ]
        },

        // FINAL CTA
        {
            type: "hero",
            bgImage: "image40",
            title: "Ready to Stay Connected in Europe?",
            description:
                "Pick a data plan, scan the QR code, and enjoy fast mobile data across 45+ European countries. No contracts. No roaming fees.",
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "View Coverage", link: "/coverage", color: "secondary" },
            ],
        },
    ],
};

export default pricingSchema;

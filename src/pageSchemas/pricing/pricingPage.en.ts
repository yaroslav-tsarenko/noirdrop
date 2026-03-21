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
                `Choose a data-only eSIM plan for 45+ European countries. Plans from 1 GB to 50 GB with 7- or 30-day validity. Pay once — receive your QR code instantly. No subscriptions, no hidden fees.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "Contact Us", link: "/contact-us", color: "secondary" },
            ],
        },

        // MAIN PRICING GRID — eSIM data plans
        {
            type: "grid",
            columns: 3,
            gap: "2.4rem",
            cards: [
                {
                    type: "pricing",
                    variant: "premium",
                    title: "eSIM ULTRA",
                    price: "from £9.95",
                    tokens: 0,
                    description: "Premium 4G/5G data for business travel, remote work, and heavy use across Europe.",
                    features: [
                        "1 GB / 7 days — from £9.95",
                        "3 GB / 15 days",
                        "5 GB / 30 days",
                        "10 GB / 30 days",
                        "20 GB / 30 days",
                        "4G/5G speeds • Hotspot supported",
                    ],
                    buttonText: "View ULTRA Plans",
                    buttonLink: "/esim/esim-ultra",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "eSIM PLUS",
                    price: "from £7.95",
                    tokens: 0,
                    description: "Best-value data plans for holidays and longer trips. Reliable 4G across Europe.",
                    features: [
                        "1 GB / 7 days — from £7.95",
                        "3 GB / 15 days",
                        "5 GB / 30 days",
                        "10 GB / 30 days",
                        "20 GB / 30 days",
                        "50 GB / 30 days",
                        "4G data • Tethering supported",
                    ],
                    buttonText: "View PLUS Plans",
                    buttonLink: "/esim/esim-plus",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "eSIM Standard",
                    price: "from £4.50",
                    tokens: 0,
                    description: "Our most affordable option for short trips and light data usage across Europe.",
                    features: [
                        "1 GB / 7 days — from £4.50",
                        "3 GB / 30 days",
                        "5 GB / 30 days",
                        "10 GB / 30 days",
                        "4G data • Budget-friendly",
                    ],
                    buttonText: "View Standard Plans",
                    buttonLink: "/esim/esim-global",
                },
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

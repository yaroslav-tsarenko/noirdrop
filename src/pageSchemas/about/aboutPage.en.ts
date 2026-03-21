import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const schema: PageSchema = {
    meta: {
        title: `About Us — ${COMPANY_NAME} eSIM for Europe`,
        description: `Learn about ${COMPANY_NAME} — a UK-based provider of data-only eSIM plans for 45+ European countries. Instant QR delivery, transparent pricing, and reliable 4G/5G coverage.`,
        keywords: [
            "esim provider",
            "european esim",
            "digital connectivity",
            "data only esim",
            "travel data plans",
            `${COMPANY_NAME} about`,
            "travel internet solutions",
            "roaming alternative",
        ],
        canonical: "/about-us",
        ogImage: {
            title: `About ${COMPANY_NAME}`,
            description:
                "Data-only eSIM plans for 45+ European countries. Instant delivery, transparent pricing.",
            bg: "#f4faff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // HERO
        {
            type: "hero",
            bgImage: "image10",
            title: `About ${COMPANY_NAME} — eSIM Data Plans for Europe`,
            description: `${COMPANY_NAME} provides data-only eSIM plans for 45+ European countries. We make it simple: choose your data amount, receive a QR code instantly, and stay connected across Europe — no roaming fees, no contracts.`,
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "Get Started", link: "/get-started", color: "secondary" },
            ],
        },

        // MISSION
        {
            type: "section",
            align: "center",
            gap: "2rem",
            right: {
                type: "media",
                mediaType: "image",
                src: "image25",
                height: "420px",
                alt: "European eSIM service",
            },
            left: {
                type: "text",
                title: "Our Mission",
                description:
                    `${COMPANY_NAME} was created to solve a simple problem: mobile data for European travel is overpriced and confusing. We believe you should know exactly what you're getting — data amount, validity, price — with no surprise charges.`,
                bullets: [
                    "Data-only eSIM plans for 45+ European countries",
                    "Clear plans from 1 GB to 50 GB",
                    "Instant QR code delivery by email",
                    "No contracts, no roaming fees, no hidden charges",
                ],
                iconName: "flag",
                iconSize: 48,
                iconColor: "#6a39ff",
                iconBg: "#f3edff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },

        // WHAT WE OFFER GRID
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    key: "offer1",
                    block: {
                        type: "text",
                        title: "European Coverage",
                        description: "One plan covers 45+ European countries. Cross borders without extra charges.",
                        bullets: ["UK, EU, Balkans, Nordics", "Automatic carrier switching", "No roaming fees"],
                        iconName: "public",
                        iconSize: 40,
                        iconColor: "#6a39ff",
                        iconBg: "#f4e9ff",
                    },
                },
                {
                    key: "offer2",
                    block: {
                        type: "text",
                        title: "Instant QR Delivery",
                        description: "QR code delivered to your email seconds after purchase. No waiting.",
                        bullets: ["Email delivery", "Dashboard access", "Install before departure"],
                        iconName: "qr_code_2",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                    },
                },
                {
                    key: "offer3",
                    block: {
                        type: "text",
                        title: "Data-Only Plans",
                        description: "All plans are data-only. Your main SIM stays active for calls and SMS.",
                        bullets: ["Keep your phone number", "Dual SIM compatible", "No voice or SMS"],
                        iconName: "smartphone",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                    },
                },
                {
                    key: "offer4",
                    block: {
                        type: "text",
                        title: "Transparent Pricing",
                        description: "Every plan shows the data amount, validity, and price upfront. No hidden fees.",
                        bullets: ["1 GB to 50 GB options", "7-day and 30-day validity", "No automatic renewals"],
                        iconName: "receipt",
                        iconSize: 40,
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6",
                    },
                },
                {
                    key: "offer5",
                    block: {
                        type: "text",
                        title: "Easy Setup",
                        description: "Scan the QR code in your phone settings. Most users are online in under 2 minutes.",
                        bullets: ["iPhone & Android supported", "Step-by-step guide included", "No app required"],
                        iconName: "bolt",
                        iconSize: 40,
                        iconColor: "#d900aa",
                        iconBg: "#ffe6f5",
                    },
                },
                {
                    key: "offer6",
                    block: {
                        type: "text",
                        title: "4G/5G Speeds",
                        description: "Connect to fast local networks across Europe. Tethering and hotspot supported.",
                        bullets: ["4G/LTE on all plans", "5G where available", "Hotspot sharing"],
                        iconName: "signal_cellular_alt",
                        iconSize: 40,
                        iconColor: "#007f7f",
                        iconBg: "#e6fffb",
                    },
                },
            ],
        },

        // WHY WE BUILT THIS
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Why We Built Noirdrop",
                description:
                    "Travel should be about the experience — not about finding a SIM shop or paying £20/day for roaming. We built Noirdrop so you can buy a data plan in 30 seconds and focus on what matters.",
                bullets: [
                    "No SIM cards, no stores, no contracts",
                    "Digital-first mobile experience",
                    "Clear, honest pricing from day one",
                ],
                iconName: "rocket_launch",
                iconSize: 46,
                iconColor: "#ff5cff",
                iconBg: "#ffe9ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image31",
                height: "420px",
                alt: "Why we built Noirdrop",
            },
        },

        // UK COMPANY
        {
            type: "section",
            gap: "2rem",
            right: {
                type: "media",
                mediaType: "image",
                src: "image44",
                height: "430px",
                alt: "UK registered company",
            },
            left: {
                type: "text",
                title: "UK-Registered Company",
                description:
                    `${COMPANY_NAME} is operated by HARTDELL LIMITED, a company registered in England and Wales. We're committed to transparent business practices and UK consumer protection standards.`,
                bullets: [
                    "Company number: 16021824",
                    "Registered in England and Wales",
                    "Based in Bridgend, United Kingdom",
                    "Fully compliant with UK consumer law",
                ],
                iconName: "verified",
                iconSize: 48,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },

        // VALUES
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    key: "value1",
                    block: {
                        type: "text",
                        title: "Simplicity",
                        description: "Buy a plan, scan a QR code, connect. That's it.",
                        iconName: "bolt",
                        iconSize: 40,
                        iconColor: "#6a39ff",
                        iconBg: "#f4e9ff",
                    },
                },
                {
                    key: "value2",
                    block: {
                        type: "text",
                        title: "Transparency",
                        description: "Every plan shows data, validity, and price upfront. No surprises.",
                        iconName: "receipt",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                    },
                },
                {
                    key: "value3",
                    block: {
                        type: "text",
                        title: "Reliability",
                        description: "Fast 4G/5G data across Europe from trusted local carriers.",
                        iconName: "signal_cellular_alt",
                        iconSize: 40,
                        iconColor: "#ffa600",
                        iconBg: "#fff6dd",
                    },
                },
            ],
        },

        // TESTIMONIALS
        {
            type: "testimonials",
            title: DEFAULT_TESTIMONIALS_TITLE,
            items: DEFAULT_TESTIMONIALS_ITEMS,
        },

        // FAQ
        {
            type: "faq",
            items: [
                {
                    question: "What countries do you cover?",
                    answer:
                        "We cover 45+ European countries including the UK, France, Germany, Spain, Italy, Greece, Portugal, Netherlands, and many more.",
                },
                {
                    question: "Is this a data-only service?",
                    answer:
                        "Yes. All our eSIM plans provide mobile data only. Your original SIM stays active for phone calls and SMS.",
                },
                {
                    question: "How do I activate my eSIM?",
                    answer: "After purchase, scan the QR code in your phone's cellular settings. It takes about 1–2 minutes.",
                },
                {
                    question: "What data plans do you offer?",
                    answer:
                        "Plans from 1 GB to 50 GB with 7-day or 30-day validity. See our pricing page for full details.",
                },
                {
                    question: "How do I contact support?",
                    answer: `Email us at ${COMPANY_EMAIL}. We usually reply within 24 hours and can help with activation, setup, and compatibility questions.`,
                },
            ],
        },

        // FINAL CTA
        {
            type: "hero",
            bgImage: "image70",
            title: "Get Your eSIM for Europe",
            description:
                `Data-only plans for 45+ European countries. Instant delivery, transparent pricing, and reliable coverage. ${COMPANY_NAME} makes European travel simple.`,
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "Get Started", link: "/get-started", color: "secondary" },
            ],
        },
    ],
};

export default schema;

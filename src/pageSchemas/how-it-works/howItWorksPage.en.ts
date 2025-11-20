import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `How It Works — ${COMPANY_NAME} eSIM Marketplace`,
        description: `See how ${COMPANY_NAME} enables instant global connectivity with AI-optimized eSIM technology. From plan selection to activation — learn how everything works.`,
        keywords: [
            "how esim works",
            "how to activate esim",
            "esim marketplace",
            "global esim",
            "international data",
            "travel internet",
            "scan QR esim",
        ],
        canonical: "/how-it-works",
        ogImage: {
            title: `How ${COMPANY_NAME} Works`,
            description: "Instant eSIM activation. Global data. Zero roaming.",
            bg: "#eef4ff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // 🌌 HERO
        {
            type: "hero",
            bgImage: "image15",
            title: `How ${COMPANY_NAME} Works`,
            description: `Your journey to instant global connectivity starts here. No physical SIMs, no contracts — just one QR code and you’re online in minutes.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "View Plans", link: "/services", color: "secondary" },
            ],
        },

        // ⭐ STEP 1 — Choose Plan
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "1. Choose Your eSIM Plan",
                description: `Browse regional, global, and country-specific eSIM data plans designed for travelers, freelancers, and digital nomads.`,
                bullets: [
                    "190+ supported countries",
                    "Flexible regional & global plans",
                    "Instant delivery, no paperwork",
                ],
                iconName: "shopping_cart",
                iconSize: 46,
                iconColor: "#6a39ff",
                iconBg: "#f3edff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image22",
                height: "400px",
                alt: "Choose eSIM plan",
            },
        },

        // ⭐ STEP 2 — Instant Delivery
        {
            type: "section",
            reverse: true,
            gap: "2rem",
            left: {
                type: "text",
                title: "2. Receive Your eSIM Instantly",
                description: `Once you complete checkout, we generate a unique QR code and deliver it directly to your email and dashboard. No waiting — your eSIM is ready immediately.`,
                bullets: [
                    "Instant QR delivery",
                    "iOS, Android, and eSIM-enabled devices supported",
                    "Full installation instructions provided",
                ],
                iconName: "qr_code_2",
                iconSize: 46,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image33",
                height: "400px",
                alt: "QR delivery",
            },
        },

        // ⭐ STEP 3 — Activate in Seconds
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image40",
                height: "400px",
                alt: "Activate eSIM",
            },
            right: {
                type: "text",
                title: "3. Activate Your eSIM",
                description: `Open your phone’s eSIM settings, scan the QR code, and follow the system prompts. Your device activates the profile automatically.`,
                bullets: [
                    "Activation in 1–2 minutes",
                    "No physical SIM needed",
                    "Works in 190+ destinations",
                ],
                iconName: "rocket_launch",
                iconSize: 46,
                iconColor: "#ff5cff",
                iconBg: "#ffe9ff",
            },
        },

        // ⭐ STEP 4 — AI Routing (explained simply)
        {
            type: "section",
            reverse: true,
            gap: "2rem",
            left: {
                type: "text",
                title: "4. Smart Network Selection",
                description: `${COMPANY_NAME} automatically connects you to the best available local carrier using our AI-powered routing engine.`,
                bullets: [
                    "Optimized for speed & latency",
                    "Automatic fallback if signal drops",
                    "No manual switching required",
                ],
                iconName: "signal_cellular_alt",
                iconSize: 46,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image44",
                height: "430px",
                alt: "Smart AI routing",
            },
        },

        // ⭐ STEP 5 — You're Online Worldwide
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "5. Enjoy Borderless Connectivity",
                description: `Stay online while traveling, working, streaming, or sharing — without roaming fees or slow hotel Wi-Fi.`,
                bullets: [
                    "Fast 4G / 5G data",
                    "No roaming charges",
                    "Perfect for travel & remote work",
                ],
                iconName: "public",
                iconSize: 48,
                iconColor: "#ffa600",
                iconBg: "#fff6dd",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image50",
                height: "400px",
                alt: "Enjoy global connectivity",
            },
        },

        // ⚡ MINI STEPS GRID
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            items: [
                {
                    key: "mini1",
                    block: {
                        type: "text",
                        title: "No Stores",
                        description: "Everything is digital — no physical SIM cards.",
                        iconName: "storefront",
                        iconSize: 36,
                        iconColor: "#6a39ff",
                        iconBg: "#f4e9ff",
                    },
                },
                {
                    key: "mini2",
                    block: {
                        type: "text",
                        title: "No Contracts",
                        description: "Pay only for the data you actually use.",
                        iconName: "cancel",
                        iconSize: 36,
                        iconColor: "#ff5cff",
                        iconBg: "#ffe9ff",
                    },
                },
                {
                    key: "mini3",
                    block: {
                        type: "text",
                        title: "No Roaming Fees",
                        description: "Avoid the biggest traveler expense — roaming.",
                        iconName: "wifi_off",
                        iconSize: 36,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                    },
                },
                {
                    key: "mini4",
                    block: {
                        type: "text",
                        title: "Works Instantly",
                        description: "Your eSIM is ready the moment you buy it.",
                        iconName: "bolt",
                        iconSize: 36,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                    },
                },
            ],
        },

        // 🌟 USER CASES
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image61",
                height: "420px",
                alt: "Use cases",
            },
            right: {
                type: "text",
                title: "Who Is It For?",
                description: "eSIM works perfectly for anyone who travels, works remotely, or wants stable global data without complications.",
                bullets: [
                    "Travelers & tourists",
                    "Business travelers",
                    "Digital nomads",
                    "Creators & streamers",
                    "Remote workers",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "groups",
                iconSize: 48,
                iconColor: "#6a39ff",
                iconBg: "#f3edff",
            },
        },

        // FAQ
        {
            type: "faq",
            items: [
                {
                    question: "How long does activation take?",
                    answer:
                        "Typically less than 2 minutes after scanning the QR code.",
                },
                {
                    question: "Can I keep my physical SIM?",
                    answer:
                        "Yes. eSIM works alongside your physical SIM without issues.",
                },
                {
                    question: "What devices are supported?",
                    answer:
                        "Most modern iPhones, Samsung, Google Pixel, and other eSIM-enabled phones.",
                },
                {
                    question: "Can I activate before travel?",
                    answer:
                        "Yes. You can install the eSIM anytime and it will activate when you arrive.",
                },
                {
                    question: "What if I change country?",
                    answer:
                        `${COMPANY_NAME} automatically assigns the best local carrier.`,
                },
            ],
        },

        // FINAL CTA
        {
            type: "hero",
            bgImage: "image70",
            title: "Start Using eSIM Today",
            description: `Instant activation. Global access. No roaming. ${COMPANY_NAME} makes travel simple.`,
            buttons: [
                { text: "Choose Plan", link: "/services", color: "primary" },
                { text: "Get Started", link: "/get-started", color: "secondary" },
            ],
        },
    ],
};

export default schema;

import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `How It Works — ${COMPANY_NAME} eSIM for Europe`,
        description: `See how ${COMPANY_NAME} makes it easy to get data-only eSIM plans for Europe. Choose a plan, scan a QR code, and connect in minutes.`,
        keywords: [
            "how esim works",
            "how to activate esim",
            "esim europe",
            "european esim",
            "data only esim",
            "travel internet",
            "scan QR esim",
        ],
        canonical: "/how-it-works",
        ogImage: {
            title: `How ${COMPANY_NAME} Works`,
            description: "Data-only eSIM for Europe. Choose a plan. Scan. Connect.",
            bg: "#eef4ff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // HERO
        {
            type: "hero",
            bgImage: "image15",
            title: `How ${COMPANY_NAME} Works`,
            description: `Getting online in Europe is simple. Choose a data plan, scan the QR code, and connect — no physical SIM cards, no contracts, no roaming fees.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "View Plans", link: "/pricing", color: "secondary" },
            ],
        },

        // STEP 1 — Choose Plan
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "1. Choose Your Data Plan",
                description: `Browse our eSIM data plans — from 1 GB for a weekend trip to 50 GB for longer stays. All plans cover 45+ European countries.`,
                bullets: [
                    "45+ European countries covered",
                    "Plans from 1 GB to 50 GB",
                    "Data-only — your main SIM stays active",
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

        // STEP 2 — Instant Delivery
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image33",
                height: "400px",
                alt: "QR delivery",
            },
            right: {
                type: "text",
                title: "2. Receive Your QR Code Instantly",
                description: `After checkout, we deliver your eSIM QR code to your email and dashboard. No waiting — it arrives in seconds.`,
                bullets: [
                    "Instant QR code delivery by email",
                    "Works on iPhone, Android, and other eSIM-enabled devices",
                    "Full setup instructions included",
                ],
                iconName: "qr_code_2",
                iconSize: 46,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
        },

        // STEP 3 — Install
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "3. Scan & Install the eSIM",
                description: `Open your phone's settings, scan the QR code, and the eSIM profile installs automatically. It takes about 1–2 minutes.`,
                bullets: [
                    "Scan the QR in Settings → Cellular/Mobile",
                    "No physical SIM needed",
                    "Install before departure or on arrival",
                ],
                iconName: "rocket_launch",
                iconSize: 46,
                iconColor: "#ff5cff",
                iconBg: "#ffe9ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image40",
                height: "400px",
                alt: "Install eSIM",
            },
        },

        // STEP 4 — Connect
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image44",
                height: "430px",
                alt: "Connect to network",
            },
            right: {
                type: "text",
                title: "4. Enable Data Roaming & Connect",
                description: `Make sure data roaming is turned on for the eSIM line. When you arrive in a supported European country, your phone connects to a local carrier automatically.`,
                bullets: [
                    "Automatic carrier selection",
                    "No manual network switching",
                    "Stable 4G/5G data in most areas",
                ],
                iconName: "signal_cellular_alt",
                iconSize: 46,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },

        // STEP 5 — Enjoy
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "5. Browse, Navigate, and Stay Connected",
                description: `Use your mobile data for maps, messaging, video calls, social media, and more — across 45+ European countries without roaming fees.`,
                bullets: [
                    "Fast 4G/5G data",
                    "No roaming charges",
                    "Data-only — calls and SMS stay on your main SIM",
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
                alt: "Connected in Europe",
            },
        },

        // MINI STEPS GRID
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
                        description: "Buy a plan when you need it. No subscriptions.",
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
                        description: "Flat-rate data across 45+ European countries.",
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
                        title: "Instant Delivery",
                        description: "QR code delivered seconds after purchase.",
                        iconName: "bolt",
                        iconSize: 36,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                    },
                },
            ],
        },

        // WHO IS IT FOR
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
                description: "Our eSIM plans are designed for anyone travelling to Europe who wants reliable mobile data without the hassle of local SIM cards or roaming charges.",
                bullets: [
                    "Holiday travellers and tourists",
                    "Business travellers",
                    "Digital nomads and remote workers",
                    "Backpackers and gap-year travellers",
                    "Anyone visiting Europe for work or leisure",
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
                        "Typically under 2 minutes after scanning the QR code.",
                },
                {
                    question: "Can I keep my physical SIM?",
                    answer:
                        "Yes. The eSIM works alongside your physical SIM. Your main number stays active for calls and SMS.",
                },
                {
                    question: "What devices are supported?",
                    answer:
                        "Most modern iPhones (XS and later), Samsung Galaxy S20+, Google Pixel 3+, and other eSIM-enabled phones.",
                },
                {
                    question: "Can I install before travel?",
                    answer:
                        "Yes. Install the eSIM before your trip and it activates when you arrive in a supported country.",
                },
                {
                    question: "What if I cross a border?",
                    answer:
                        "The eSIM automatically connects to a local carrier in the new country. No action needed — all 45+ European countries are covered.",
                },
            ],
        },

        // FINAL CTA
        {
            type: "hero",
            bgImage: "image70",
            title: "Get Your eSIM for Europe Today",
            description: `Choose a data plan, scan the QR code, and enjoy fast mobile data across 45+ European countries. ${COMPANY_NAME} makes European travel simple.`,
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "Get Started", link: "/get-started", color: "secondary" },
            ],
        },
    ],
};

export default schema;

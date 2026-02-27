import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} eSIM Marketplace – Global Digital SIMs for Travel, Work & Business`,
        description:
            "Buy eSIMs for 200+ countries. Instant installation, affordable data, global connectivity. The #1 digital SIM marketplace with unlimited plans, regional packs, and roaming-free travel.",
        keywords: [
            "eSIM marketplace",
            "buy esim online",
            "global esim",
            "travel esim",
            "cheap esim europe",
            "airalo alternative",
            "holafly alternative",
            "digital sim card",
            "international data plan",
            "esim for usa",
            "esim for europe",
            "best esim 2025",
            "instant esim activation",
            "travel data plan",
            "global connectivity",
        ],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME} – eSIM Marketplace`,
            description: "Instant eSIMs for every country. Fast. Affordable. Unlimited.",
            bg: "#ffffff",
            color: "#9532ff",
        },
    },

    blocks: [
        /* --------------------------------------------------------------------------
         * 🟣 0. NEW HERO SLIDESHOW (Top of page)
         * -------------------------------------------------------------------------- */
        {
            type: "slider",
            images: ["image1", "image2", "image3", "image4"],
        },
        {
            type: "hero",
            bgImage: "image1",
            title: "Global eSIM Marketplace — Instantly Connect in 200+ Countries",
            description:
                "Skip physical SIM cards. Activate your eSIM in 30 seconds and enjoy fast 4G/5G data worldwide. Affordable, instant, and contract‑free.",
            buttons: [
                { text: "Browse eSIMs", link: "/esim/esim-global", color: "primary" },
                { text: "How It Works", link: "/how-it-works", color: "secondary" },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🟢 1. HERO SECTION (legacy) — keep but fix links
         * -------------------------------------------------------------------------- */
        {
            type: "hero",
            bgImage: "image1",
            title: "Global eSIM Marketplace — Instantly Connect in 200+ Countries",
            description:
                "Skip physical SIM cards. Activate your eSIM in 30 seconds and enjoy fast 4G/5G data anywhere in the world. Affordable, instant, and contract-free.",
            buttons: [
                { text: "Browse eSIMs", link: "/esim/esim-global", color: "primary" },
                { text: "How It Works", link: "/how-it-works", color: "secondary" },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🟢 2. STEPS SECTION (How eSIM Works)
         * -------------------------------------------------------------------------- */
        {
            type: "steps",
            title: "How eSIM Works in Three Easy Steps",
            items: [
                {
                    number: 1,
                    title: "Choose Your Destination",
                    description:
                        "Pick from 200+ countries or select a regional/global eSIM for multi-country travel.",
                    iconName: "globe",
                },
                {
                    number: 2,
                    title: "Install the eSIM",
                    description:
                        "Scan the QR code or use one-click installation. No store visits. No waiting.",
                    iconName: "smartphone",
                },
                {
                    number: 3,
                    title: "Enjoy Fast LTE/5G",
                    description: "Instant activation. Use data immediately upon arrival.",
                    iconName: "wifi",
                },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🟣 3. SECTION — LEFT TEXT, RIGHT IMAGE (Benefits)
         * -------------------------------------------------------------------------- */
        {
            type: "section",
            gap: "2rem",
            align: "center",
            left: {
                type: "text",
                title: "Why Travelers Switch to eSIMs",
                description:
                    "Avoid roaming fees, long lines, and unreliable physical SIM cards. With a digital eSIM, your device connects instantly and securely anywhere in the world.",
                bullets: [
                    "Instant QR activation",
                    "No physical SIM swapping",
                    "Keep your original number active",
                    "Works on all modern phones",
                ],
                iconName: "checkCircle",
                iconColor: "#9532ff",
                iconBg: "#f6f0ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "420px",
            },
        },

        /* --------------------------------------------------------------------------
         * 🟠 4. GRID — Popular Regions
         * -------------------------------------------------------------------------- */
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image3",
                    title: "Europe eSIM",
                    description: "Stay connected across 39 countries with a single eSIM plan.",
                    buttonLink: "/esim/esim-ultra",
                    buttonText: "Explore Europe",
                },
                {
                    image: "image4",
                    title: "USA eSIM",
                    description: "Fast 5G coverage nationwide. Perfect for tourists and business travelers.",
                    buttonLink: "/esim/esim-plus",
                    buttonText: "View USA Plans",
                },
                {
                    image: "image5",
                    title: "Asia eSIM",
                    description: "Japan, Korea, Thailand, Singapore — one digital SIM works everywhere.",
                    buttonLink: "/esim/esim-global",
                    buttonText: "Explore Asia",
                },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🔵 5. FULL TEXT SEO BLOCK — Long eSIM Explanation
         * -------------------------------------------------------------------------- */
        {
            type: "text",
            title: "What Is an eSIM and Why It’s the Future of Travel Connectivity?",
            description:
                "An eSIM (embedded SIM) is a digital version of a traditional SIM card. Instead of inserting plastic into your phone, the SIM is installed digitally through a QR code. This means instant activation, no airport lines, and no expensive roaming fees. Modern smartphones from Apple, Samsung, and Google fully support eSIM technology. As the world transitions to digital SIMs, more countries and carriers adopt eSIM as the new standard for international travel.",
            bullets: [
                "No physical SIM card needed",
                "Activate instantly from anywhere",
                "Better prices than roaming packages",
                "Perfect for tourists, remote workers, and business travelers",
            ],
            iconName: "info",
            iconColor: "#68cfff",
            iconBg: "#e7f8ff",
        },

        /* --------------------------------------------------------------------------
         * 🟣 6. TESTIMONIALS — Strong Social Proof
         * -------------------------------------------------------------------------- */
        {
            type: "testimonials",
            title: DEFAULT_TESTIMONIALS_TITLE,
            items: DEFAULT_TESTIMONIALS_ITEMS,
        },

        /* --------------------------------------------------------------------------
         * 🟡 7. SECTION — Right Text Left Image (Token System)
         * -------------------------------------------------------------------------- */
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "360px",
            },
            right: {
                type: "text",
                title: "Instant Delivery — QR Code Straight to Your Email",
                description:
                    "The moment you purchase an eSIM, the activation QR code arrives instantly in your inbox. No waiting. No store visits. You can activate the eSIM anytime — even minutes before your flight lands.",
                bullets: [
                    "Delivery in under 5 seconds",
                    "Works offline — download before the trip",
                    "Available 24/7 with your account",
                ],
                iconName: "mail",
                iconColor: "#9532ff",
                iconBg: "#f6f0ff",
            },
        },

        /* --------------------------------------------------------------------------
         * 🟠 8. GRID — 6 Core Benefits (Large)
         * -------------------------------------------------------------------------- */
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "No Roaming Fees",
                    description:
                        "Avoid expensive roaming plans. Choose local-priced data optimized for each region.",
                    buttonLink: "/pricing",
                    buttonText: "See plans",
                },
                {
                    image: "image8",
                    title: "Keep Your Phone Number",
                    description:
                        "Your original SIM stays active for calls and banking while eSIM gives you data.",
                    buttonLink: "/how-it-works",
                    buttonText: "Learn more",
                },
                {
                    image: "image9",
                    title: "Perfect for Remote Work",
                    description: "High-speed 4G/5G ensures stable video calls and cloud access anywhere.",
                    buttonLink: "/esim/esim-plus",
                    buttonText: "Browse eSIM",
                },
                {
                    image: "image10",
                    title: "Supports Dual SIM",
                    description:
                        "Use both your eSIM and physical SIM at the same time with Dual SIM mode.",
                    buttonLink: "/how-it-works",
                    buttonText: "How it works",
                },
                {
                    image: "image11",
                    title: "No Contracts",
                    description: "Buy once. Use once. No commitments or hidden fees.",
                    buttonLink: "/pricing",
                    buttonText: "View pricing",
                },
                {
                    image: "image12",
                    title: "Travel Unlimited Plans",
                    description: "Need unlimited data? We offer unlimited eSIMs in 60+ countries.",
                    buttonLink: "/pricing",
                    buttonText: "Explore",
                },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🧩 Custom card (new)
         * -------------------------------------------------------------------------- */
        {
            type: "text",
            title: "Custom eSIM Packages",
            description:
                "Need something special? Tell us where you're going and how much data you need — we'll help you pick the best plan.",
            bullets: [
                "Send us your destination and travel dates.",
                "We’ll reply with a recommended plan and setup tips.",
            ],
            buttons: [
                { text: "Contact us", link: "/contact-us", color: "primary" },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🔵 FAQ — shrink ~3x
         * -------------------------------------------------------------------------- */
        {
            type: "faq",
            items: [
                { question: "What is an eSIM?", answer: "An eSIM is a digital SIM you install without a physical card." },
                { question: "Which phones support eSIM?", answer: "Most modern iPhones, Samsung Galaxy S20+, Google Pixel, and many others." },
                { question: "How fast is eSIM delivery?", answer: "Instant — you receive the QR code right after purchase." },
                { question: "Can I keep my phone number?", answer: "Yes. Keep your physical SIM for calls/SMS and use the eSIM for data." },
                { question: "Can I get a refund?", answer: "Refunds depend on delivery/activation status and applicable consumer law. Contact support for help." },
                { question: "Can I hotspot / tether?", answer: "Most plans support tethering unless stated otherwise." },
            ],
        },

        {
            type: "hero",
            bgImage: "image14",
            title: "Travel Smarter with Instant Global eSIMs",
            description: "No roaming. No physical SIM cards. No stress. Just pure connectivity.",
            buttons: [
                { text: "Browse eSIMs", link: "/esim/esim-global", color: "primary" },
                { text: "Contact Support", link: "/contact-us", color: "secondary" },
            ],
        },
    ],
};

export default schema;

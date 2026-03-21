import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — eSIM Data Plans for Europe | 45+ Countries`,
        description:
            "Buy data-only eSIM plans for 45+ European countries. Instant QR code delivery. Choose from 1 GB to 50 GB. No contracts, no roaming fees. Works on iPhone and Android.",
        keywords: [
            "eSIM Europe",
            "buy esim online",
            "european esim",
            "travel esim",
            "cheap esim europe",
            "airalo alternative",
            "holafly alternative",
            "digital sim card",
            "data only esim",
            "esim for uk",
            "esim for europe",
            "best esim 2025",
            "instant esim activation",
            "travel data plan",
            "european connectivity",
        ],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME} — eSIM for Europe`,
            description: "Data-only eSIM plans for 45+ European countries. Instant delivery.",
            bg: "#ffffff",
            color: "#9532ff",
        },
    },

    blocks: [
        {
            type: "slider",
            images: ["image1", "image2", "image3", "image4"],
        },
        {
            type: "hero",
            bgImage: "image1",
            title: "eSIM Data Plans for Europe — Stay Connected in 45+ Countries",
            description:
                "Skip physical SIM cards. Get a data-only eSIM in seconds — choose your plan (1 GB to 50 GB), scan the QR code, and enjoy fast 4G/5G data across Europe. No contracts, no roaming fees.",
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "How It Works", link: "/how-it-works", color: "secondary" },
            ],
        },

        {
            type: "steps",
            title: "How It Works — 3 Easy Steps",
            items: [
                {
                    number: 1,
                    title: "Choose Your Data Plan",
                    description:
                        "Pick a plan from 1 GB to 50 GB. All plans cover 45+ European countries on one eSIM.",
                    iconName: "globe",
                },
                {
                    number: 2,
                    title: "Scan the QR Code",
                    description:
                        "We deliver a QR code to your email instantly. Scan it in your phone settings to install the eSIM.",
                    iconName: "smartphone",
                },
                {
                    number: 3,
                    title: "Connect & Browse",
                    description: "Enable data roaming on the eSIM line and start using mobile data when you arrive.",
                    iconName: "wifi",
                },
            ],
        },

        {
            type: "section",
            gap: "2rem",
            align: "center",
            left: {
                type: "text",
                title: "Why Travellers Choose eSIM",
                description:
                    "Avoid roaming fees, long queues at airport SIM shops, and unreliable hotel Wi-Fi. With a data-only eSIM, your phone connects automatically across Europe.",
                bullets: [
                    "Instant QR activation — no store visits",
                    "Data-only — keep your main number for calls and SMS",
                    "One plan works across 45+ European countries",
                    "Works on all modern iPhones and Android phones",
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

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image3",
                    title: "Western Europe eSIM",
                    description: "Fast data in the UK, France, Germany, Spain, Italy, and more.",
                    buttonLink: "/esim/esim-ultra",
                    buttonText: "View Plans",
                },
                {
                    image: "image4",
                    title: "Nordics & Baltics eSIM",
                    description: "Stay connected in Sweden, Finland, Norway, Denmark, Estonia, Latvia, and Lithuania.",
                    buttonLink: "/esim/esim-plus",
                    buttonText: "View Plans",
                },
                {
                    image: "image5",
                    title: "Southern & Eastern Europe",
                    description: "Data plans for Greece, Croatia, Turkey, Poland, Czech Republic, and beyond.",
                    buttonLink: "/esim/esim-global",
                    buttonText: "View Plans",
                },
            ],
        },

        {
            type: "text",
            title: "What Is an eSIM and How Does It Work?",
            description:
                "An eSIM (embedded SIM) is a digital SIM built into your phone. Instead of inserting a plastic SIM card, you scan a QR code and the eSIM profile is installed instantly. All our plans are data-only — you get mobile internet (4G/5G) for browsing, maps, messaging, video calls, and more. Your original SIM stays active for phone calls and SMS. Modern phones from Apple (iPhone XS and later), Samsung (Galaxy S20 and later), and Google Pixel all support eSIM.",
            bullets: [
                "No physical SIM card needed — everything is digital",
                "Data-only plans: 1 GB, 3 GB, 5 GB, 10 GB, 20 GB, or 50 GB",
                "One plan covers 45+ European countries",
                "Perfect for holidays, business trips, and remote work in Europe",
            ],
            iconName: "info",
            iconColor: "#68cfff",
            iconBg: "#e7f8ff",
        },

        {
            type: "testimonials",
            title: DEFAULT_TESTIMONIALS_TITLE,
            items: DEFAULT_TESTIMONIALS_ITEMS,
        },

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
                title: "Instant Delivery — QR Code to Your Email",
                description:
                    "The moment you purchase an eSIM plan, the QR code arrives in your inbox. No waiting, no store visits. Install the eSIM before your trip and activate when you land.",
                bullets: [
                    "Delivered in seconds after purchase",
                    "Install before departure — activate on arrival",
                    "Available 24/7 in your dashboard",
                ],
                iconName: "mail",
                iconColor: "#9532ff",
                iconBg: "#f6f0ff",
            },
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "No Roaming Fees",
                    description:
                        "Avoid expensive roaming charges. Our eSIM plans give you local-rate data across Europe.",
                    buttonLink: "/pricing",
                    buttonText: "See Plans",
                },
                {
                    image: "image8",
                    title: "Keep Your Phone Number",
                    description:
                        "Your original SIM stays active for calls, SMS, and banking. The eSIM handles your data.",
                    buttonLink: "/how-it-works",
                    buttonText: "Learn More",
                },
                {
                    image: "image9",
                    title: "Great for Remote Work",
                    description: "Reliable 4G/5G ensures stable video calls and cloud access anywhere in Europe.",
                    buttonLink: "/esim/esim-ultra",
                    buttonText: "View ULTRA Plans",
                },
                {
                    image: "image10",
                    title: "Dual SIM Compatible",
                    description:
                        "Use your eSIM alongside your physical SIM. Data on eSIM, calls on your main number.",
                    buttonLink: "/how-it-works",
                    buttonText: "How It Works",
                },
                {
                    image: "image11",
                    title: "No Contracts",
                    description: "Buy once. Use once. No subscriptions, no auto-renewals, no hidden fees.",
                    buttonLink: "/pricing",
                    buttonText: "View Pricing",
                },
                {
                    image: "image12",
                    title: "Plans from 1 GB to 50 GB",
                    description: "Choose the right amount of data for your trip — from a weekend city break to a month-long stay.",
                    buttonLink: "/pricing",
                    buttonText: "Compare Plans",
                },
            ],
        },

        {
            type: "text",
            title: "Need Help Choosing a Plan?",
            description:
                "Not sure how much data you need? Tell us where you're going and how long your trip is — we'll recommend the best plan for you.",
            bullets: [
                "Send us your destination and travel dates.",
                "We'll reply with a recommended plan and setup tips.",
            ],
            buttons: [
                { text: "Contact Us", link: "/contact-us", color: "primary" },
            ],
        },

        {
            type: "faq",
            items: [
                { question: "What is an eSIM?", answer: "An eSIM is a digital SIM built into modern phones. You install it by scanning a QR code — no physical card needed." },
                { question: "Which phones support eSIM?", answer: "Most modern iPhones (XS and later), Samsung Galaxy S20+, Google Pixel 3+, and many others. Check your phone settings for eSIM support." },
                { question: "How fast is delivery?", answer: "Instant. You receive the QR code by email seconds after purchase." },
                { question: "Is this data-only?", answer: "Yes. All our plans are data-only. Your physical SIM stays active for calls and SMS." },
                { question: "Can I get a refund?", answer: "Refunds are available for uninstalled eSIMs. Contact support for details." },
                { question: "Can I use a hotspot?", answer: "Yes. Most plans support tethering so you can share data with other devices." },
            ],
        },

        {
            type: "hero",
            bgImage: "image14",
            title: "Stay Connected Across Europe",
            description: "Data-only eSIM plans for 45+ countries. No roaming. No contracts. Just fast, reliable data.",
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "Contact Support", link: "/contact-us", color: "secondary" },
            ],
        },
    ],
};

export default schema;

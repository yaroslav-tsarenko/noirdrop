import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const schema: PageSchema = {
    meta: {
        title: `About Us — ${COMPANY_NAME} eSIM Marketplace`,
        description: `Learn how ${COMPANY_NAME} is redefining global connectivity with AI-optimized eSIM technology, instant activations, dynamic routing, and a marketplace built for travelers, creators, and global businesses.`,
        keywords: [
            "esim marketplace",
            "global esim",
            "digital connectivity",
            "international data plans",
            "telecom innovation",
            `${COMPANY_NAME} about`,
            "travel internet solutions",
            "roaming alternative",
        ],
        canonical: "/about-us",
        ogImage: {
            title: `About ${COMPANY_NAME}`,
            description:
                "Discover our mission to make global connectivity fast, affordable, and borderless.",
            bg: "#f4faff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // 🌌 HERO — cosmic identity
        {
            type: "hero",
            bgImage: "image10",
            title: `We’re Building the Future of Global Connectivity`,
            description: `${COMPANY_NAME} brings borderless, contract-free mobile data to anyone, anywhere. Our AI-powered eSIM marketplace replaces roaming fees with instant digital access across 190+ countries.`,
            buttons: [
                { text: "Explore Our Plans", link: "/services", color: "primary" },
                { text: "Join the Network", link: "/sign-up", color: "secondary" },
            ],
        },

        // 🪐 MISSION — bold & modern
        {
            type: "section",
            align: "center",
            gap: "2rem",
            right: {
                type: "media",
                mediaType: "image",
                src: "image25",
                height: "420px",
                alt: "Global eSIM mission",
            },
            left: {
                type: "text",
                title: "Our Mission",
                description:
                    `${COMPANY_NAME} was created to remove the last great digital barrier — expensive mobile roaming. We believe that access to fast, affordable mobile data should be as universal as the internet itself.`,
                bullets: [
                    "Instant eSIM activation in seconds",
                    "Reliable connectivity across 190+ destinations",
                    "AI-driven network selection & routing",
                    "Designed for travelers, teams, and global creators",
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

        // 🛰 GLOBAL CONECTIVITY NETWORK GRID (6x6)
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: Array.from({ length: 6 }).map((_, index) => ({
                key: `vision${index}`,
                block: {
                    type: "text",
                    title: [
                        "Global Coverage Engine",
                        "Instant QR Delivery",
                        "AI Network Routing",
                        "Region-Based Pricing",
                        "Failproof Activation",
                        "Roaming-Free Data",
                    ][index],
                    description:
                        "Part of our global connectivity framework powering millions of digital travelers.",
                    bullets: [
                        "Telecom-grade reliability",
                        "Full automation pipeline",
                        "Optimized for speed & stability",
                    ],
                    iconName: "signal_cellular_alt",
                    iconSize: 40,
                    iconColor: "#6a39ff",
                    iconBg: "#f4e9ff",
                },
            })),
        },

        // ⭐️ FOUNDERS / WHY WE BUILT THIS
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Why We Built This",
                description:
                    "Travel should feel limitless — but traditional roaming makes global data slow, unpredictable, and expensive. We envisioned a world where people switch countries as easily as switching Wi-Fi networks. So we built the infrastructure for it.",
                bullets: [
                    "No SIM cards, no stores, no contracts",
                    "Digital-first mobile experience",
                    "Always-on connectivity from day one",
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
                alt: "Founders vision",
            },
        },

        // 🌍 GLOBAL NETWORK MAP
        {
            type: "section",
            gap: "2rem",
            right: {
                type: "media",
                mediaType: "image",
                src: "image44",
                height: "430px",
                alt: "World connectivity map",
            },
            left: {
                type: "text",
                title: "Global Data Infrastructure",
                description:
                    "Behind every activation is a network of international data carriers, routing systems, AI prediction models, and distributed telecom nodes optimized for global performance.",
                bullets: [
                    "190+ country coverage",
                    "40+ partner carriers",
                    "Low-latency routing architecture",
                    "Real-time signal monitoring",
                ],
                iconName: "public",
                iconSize: 48,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },

        // 🧬 TECHNOLOGY ENGINE
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image52",
                height: "400px",
                alt: "AI Telecom Engine",
            },
            right: {
                type: "text",
                title: "AI-Powered Connectivity Engine",
                description:
                    "Our intelligent routing engine evaluates carriers by speed, stability, and region before assigning the optimal profile. It ensures fewer drops, better latency, and instant fallback when needed.",
                bullets: [
                    "Smart carrier selection",
                    "Predictive routing",
                    "Automatic fallback logic",
                    "Dynamic network switching",
                ],
                iconName: "memory",
                iconSize: 46,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
        },

        // 👥 TEAM
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Meet the Team",
                description:
                    `${COMPANY_NAME} is built by engineers, designers, telecom specialists and travelers who understand the frustration of unstable or overpriced mobile data.`,
                bullets: [
                    "Telecom infrastructure experts",
                    "Senior software engineers",
                    "Global support team",
                    "Experienced product designers",
                ],
                iconName: "groups",
                iconSize: 48,
                iconColor: "#ffa600",
                iconBg: "#fff6dd",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image60",
                height: "400px",
                alt: "Team photo",
            },
        },

        // ⭐ VALUES
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
                        description: "Connectivity should be instant, universal, and frictionless.",
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
                        title: "Security",
                        description: "Your data stays encrypted, anonymized, and never shared.",
                        iconName: "lock",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                    },
                },
                {
                    key: "value3",
                    block: {
                        type: "text",
                        title: "Innovation",
                        description: "We push telecom forward with AI and next-gen connectivity tools.",
                        iconName: "lightbulb",
                        iconSize: 40,
                        iconColor: "#ffa600",
                        iconBg: "#fff6dd",
                    },
                },
            ],
        },

        // 🌟 TESTIMONIALS
        {
            type: "testimonials",
            title: DEFAULT_TESTIMONIALS_TITLE,
            items: DEFAULT_TESTIMONIALS_ITEMS,
        },

        // ❓ FAQ
        {
            type: "faq",
            items: [
                {
                    question: "How does an eSIM activation work?",
                    answer:
                        "You purchase a plan, scan a QR code, and your data instantly activates — no physical SIM required.",
                },
                {
                    question: "Which countries do you support?",
                    answer:
                        "Over 190 countries with a mix of regional and global plans.",
                },
                {
                    question: "Is my data secure?",
                    answer: "Yes. All activations and profiles use encrypted telecom infrastructure.",
                },
                {
                    question: "Can I use multiple plans simultaneously?",
                    answer:
                        "Yes — eSIM profiles allow up to several data plans on one device.",
                },
                {
                    question: "Do tokens expire?",
                    answer: "Never. Tokens stay in your account until used.",
                },
                {
                    question: "How do I contact support?",
                    answer: `You can contact us via ${COMPANY_EMAIL} or use the contact form on the site. We usually reply within 24 hours with activation, billing, or coverage help.`,
                },
            ],
        },

        // 🔗 FINAL CTA
        {
            type: "hero",
            bgImage: "image70",
            title: "Join the Future of Borderless Connectivity",
            description:
                `Whether you're a traveler, business, or global team — connect instantly with eSIMs powered by ${COMPANY_NAME}.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "Explore Plans", link: "/services", color: "secondary" },
            ],
        },
    ],
};

export default schema;

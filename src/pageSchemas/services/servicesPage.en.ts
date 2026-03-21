import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Our Service — Data-Only eSIM Plans for Europe | ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} provides data-only eSIM plans for 45+ European countries. Instant QR delivery, transparent pricing, and reliable 4G/5G coverage for travellers.`,
        keywords: [
            "eSIM service",
            "european esim provider",
            "data only esim",
            "travel esim europe",
            "esim coverage europe",
            "digital sim card",
            `${COMPANY_NAME} esim service`
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} — Our Service`,
            description: "Data-only eSIM plans for 45+ European countries. Instant delivery.",
            bg: "#ffffff",
            color: "#6a39ff"
        }
    },

    blocks: [
        // HERO
        {
            type: "hero",
            bgImage: "image1",
            title: "Data-Only eSIM Plans for European Travel",
            description:
                "Stay connected across 45+ European countries with affordable data-only eSIM plans. Choose your data amount, scan the QR code, and browse — no roaming fees, no contracts.",
            buttons: [
                { text: "View Coverage", link: "/coverage", color: "primary" },
                { text: "View Plans", link: "/pricing", color: "secondary" }
            ]
        },

        { type: "rates-per-country", id: "coverage-map" },

        // What We Offer
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Data-Only eSIM",
                        description:
                            "All our plans are data-only. You get mobile internet for browsing, maps, messaging, and video calls. Your original SIM stays active for phone calls and SMS.",
                        bullets: ["Data-only — no voice or SMS", "Keep your main number active", "Dual SIM compatible"],
                        iconName: "smartphone",
                        iconColor: "#6a39ff",
                        iconBg: "#f3edff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "45+ European Countries",
                        description:
                            "One plan covers the UK, EU, Nordics, Balkans, and more. Cross borders without switching SIMs or paying extra.",
                        bullets: ["UK, France, Germany, Spain, Italy", "Nordics, Baltics, Balkans", "Turkey, Switzerland, Iceland"],
                        iconName: "public",
                        iconColor: "#0070f3",
                        iconBg: "#e6f5ff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Instant QR Delivery",
                        description:
                            "After checkout, your eSIM QR code is delivered to your email in seconds. Install before your trip and connect on arrival.",
                        bullets: ["Email delivery in seconds", "Install before departure", "No store visits needed"],
                        iconName: "bolt",
                        iconColor: "#d900aa",
                        iconBg: "#ffe6f5"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Clear Data Plans",
                        description:
                            "Choose from 1 GB to 50 GB with fixed validity periods. You know exactly what you're getting — no surprise charges.",
                        bullets: ["1 GB, 3 GB, 5 GB, 10 GB, 20 GB, 50 GB", "7-day and 30-day validity", "No automatic renewals"],
                        iconName: "receipt",
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "4G/5G Speeds",
                        description:
                            "Connect to fast 4G/LTE networks across Europe. 5G is available in supported areas with our ULTRA plans.",
                        bullets: ["4G/LTE on all plans", "5G on ULTRA plans where available", "Tethering / hotspot supported"],
                        iconName: "signal_cellular_alt",
                        iconColor: "#4a00e5",
                        iconBg: "#f3e8ff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Email Support",
                        description:
                            "Need help with activation or setup? Our support team is available by email to assist with installation and troubleshooting.",
                        bullets: ["Activation guidance", "Device compatibility help", "Setup troubleshooting"],
                        iconName: "support_agent",
                        iconColor: "#007f7f",
                        iconBg: "#e6fffb"
                    }
                }
            ],
            style: { scrollMarginTop: "96px" },
        },

        // SECTION — How it works briefly
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image12",
                height: "420px",
                alt: "eSIM activation process"
            },
            right: {
                type: "text",
                title: "How Our eSIM Service Works",
                description:
                    "We deliver data-only eSIM plans for European travel. The process is simple: choose a plan, receive a QR code, scan it on your phone, and connect when you arrive.",
                bullets: [
                    "Choose your data plan (1 GB to 50 GB)",
                    "Receive QR code instantly by email",
                    "Scan and install in under 2 minutes",
                    "Connect automatically in 45+ European countries"
                ],
                iconName: "settings_suggest",
                iconSize: 48,
                iconColor: "#6a39ff",
                iconBg: "#f3edff"
            }
        },

        // Available products
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image25",
                    title: "Europe eSIM ULTRA",
                    description: "Premium 4G/5G data for business travellers and remote workers. Plans from 1 GB to 20 GB.",
                    buttonLink: "/esim/esim-ultra",
                    buttonText: "View ULTRA Plans"
                },
                {
                    image: "image26",
                    title: "Europe eSIM PLUS",
                    description: "Best-value data plans for holidays and longer trips. Plans from 1 GB to 50 GB.",
                    buttonLink: "/esim/esim-plus",
                    buttonText: "View PLUS Plans"
                },
                {
                    image: "image28",
                    title: "Europe eSIM Standard",
                    description: "Our most affordable option for light users. Plans from 1 GB to 10 GB.",
                    buttonLink: "/esim/esim-global",
                    buttonText: "View Standard Plans"
                }
            ]
        },

        // FINAL CTA
        {
            type: "hero",
            bgImage: "image30",
            title: "Get Your eSIM for Europe Today",
            description: "Choose a data plan, scan the QR code, and stay connected across 45+ European countries. Simple, affordable, instant.",
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "View Coverage", link: "/coverage", color: "secondary" }
            ]
        }
    ]
};

export default schema;

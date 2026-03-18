import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Solutions — AI-Powered eSIM Marketplace Tools by ${COMPANY_NAME}`,
        description: `Advanced AI solutions for eSIM marketplaces, digital onboarding, pricing automation, KYC optimization and global connectivity management. Built with lightweight architecture and real-time intelligence.`,
        keywords: [
            "eSIM marketplace solutions",
            "AI connectivity tools",
            "digital sim management",
            "global esim onboarding",
            "pricing automation platform",
            "ai telecom tools",
            "carrier intelligence",
            `${COMPANY_NAME} esim platform`
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Solutions`,
            description: "AI-powered systems for eSIM platforms, telecom automation & digital onboarding.",
            bg: "#ffffff",
            color: "#6a39ff"
        }
    },

    blocks: [
        // HERO
        {
            type: "hero",
            bgImage: "image1",
            title: "AI Solutions for eSIM Marketplaces & Digital Telecom",
            description:
                "Boost your telecom or eSIM platform with automation, AI-driven analytics, pricing intelligence, global coverage maps and real-time customer onboarding flows.",
            buttons: [
                { text: "Explore Tools", link: "#coverage-map", color: "primary" },
                { text: "View Pricing", link: "/pricing", color: "secondary" }
            ]
        },

        { type: "rates-per-country", id: "coverage-map" },

        // Tools anchor
        {
            type: "text",
            title: "Tools",
            description: "",
            iconName: "build",
            iconColor: "#6a39ff",
            iconBg: "#f3edff",
        },

        // GRID 6×6 — Key Solutions Overview
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "AI Pricing Engine",
                        description:
                            "Automatically adjusts eSIM prices based on demand, region, competitor feeds and seasonal patterns.",
                        bullets: ["Real-time price optimization", "Demand forecasting", "Carrier-level adjustments"],
                        iconName: "trending_up",
                        iconColor: "#6a39ff",
                        iconBg: "#f3edff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Global Coverage Intelligence",
                        description:
                            "Heat-maps of coverage, roaming speed data, network saturation and carrier performance analytics.",
                        bullets: ["Live region scoring", "Latency maps", "Carrier performance index"],
                        iconName: "public",
                        iconColor: "#0070f3",
                        iconBg: "#e6f5ff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Smart Onboarding Flows",
                        description:
                            "Frictionless KYC-free onboarding using AI context, device detection and automated user routing.",
                        bullets: ["Device auto-detect", "Adaptive onboarding", "Instant QR eSIM activation"],
                        iconName: "bolt",
                        iconColor: "#d900aa",
                        iconBg: "#ffe6f5"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "AI Support Assistant",
                        description:
                            "24/7 automated telecom support that resolves most eSIM issues in under 15 seconds.",
                        bullets: ["Activation troubleshooting", "User intent analysis", "Region-specific fixes"],
                        iconName: "support_agent",
                        iconColor: "#4a00e5",
                        iconBg: "#f3e8ff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Fraud Detection System",
                        description:
                            "Detects suspicious traffic, reselling attempts, duplicate IMEIs and abnormal usage.",
                        bullets: ["IMEI tracking", "Token validation", "Behavioral analysis"],
                        iconName: "shield",
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "QR Code Delivery Automation",
                        description:
                            "Send activation QR codes instantly via email, SMS or Telegram bot with full tracking.",
                        bullets: ["Auto-delivery", "Error recovery", "User activity logs"],
                        iconName: "qr_code_2",
                        iconColor: "#007f7f",
                        iconBg: "#e6fffb"
                    }
                }
            ],
            style: { scrollMarginTop: "96px" },
        },

        // SECTION – Image Left / Text Right
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image12",
                height: "420px",
                alt: "eSIM dashboard"
            },
            right: {
                type: "text",
                title: "End-to-End Telecom Automation",
                description:
                    "We eliminate manual operations. From device detection to automated delivery, refunds, usage monitoring and customer lifecycle optimization — every workflow is fully automated.",
                bullets: [
                    "Full AI routing engine",
                    "Usage-based notifications",
                    "Auto-expiry reminders",
                    "Region recommendations"
                ],
                iconName: "settings_suggest",
                iconSize: 48,
                iconColor: "#6a39ff",
                iconBg: "#f3edff"
            }
        },

        // GRID 9×9 — Feature Dense Grid
        {
            type: "grid",
            columns: 3,
            gap: "1.6rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Smart Coverage Heatmaps",
                        description: "Visualize carrier quality by country before a customer buys a plan.",
                        bullets: ["Regional scorecards", "Latency trends", "Country-by-country snapshots"],
                        iconName: "public",
                        iconColor: "#6a39ff",
                        iconBg: "#f3edff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Conversion Tracking",
                        description: "Measure which pricing, pages and destinations actually convert into orders.",
                        bullets: ["CTA attribution", "Landing-page comparison", "Checkout drop-off analysis"],
                        iconName: "trending_up",
                        iconColor: "#0070f3",
                        iconBg: "#e6f5ff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Refund Safeguards",
                        description: "Detect risky orders early and flag failed activations before they escalate.",
                        bullets: ["Failure alerts", "Order anomaly checks", "Support context history"],
                        iconName: "shield",
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Multi-Locale Catalog",
                        description: "Present plan data with localized content, region logic and device hints.",
                        bullets: ["Country-aware copy", "Localized offers", "Compatibility prompts"],
                        iconName: "language",
                        iconColor: "#d900aa",
                        iconBg: "#ffe6f5"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Plan Performance Insights",
                        description: "Track which products deliver stable service and which regions need attention.",
                        bullets: ["Activation success rate", "Carrier-level trends", "Usage quality signals"],
                        iconName: "signal_cellular_alt",
                        iconColor: "#007f7f",
                        iconBg: "#e6fffb"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Automated Notifications",
                        description: "Keep customers informed with timely emails around activation and order state.",
                        bullets: ["Order updates", "Delivery reminders", "Support follow-ups"],
                        iconName: "mail",
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Device Compatibility Checks",
                        description: "Reduce support load by catching unsupported phones before checkout.",
                        bullets: ["Model screening", "Setup guidance", "Troubleshooting shortcuts"],
                        iconName: "smartphone",
                        iconColor: "#6a39ff",
                        iconBg: "#f3edff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Order Ops Console",
                        description: "Give internal teams one place to review purchases, issues and follow-ups.",
                        bullets: ["Order visibility", "Status filters", "Response-ready notes"],
                        iconName: "viewlist",
                        iconColor: "#0070f3",
                        iconBg: "#e6f5ff"
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "Growth Reporting",
                        description: "Understand what drives repeat purchases and profitable international demand.",
                        bullets: ["Cohort trends", "Country demand mix", "Revenue snapshots"],
                        iconName: "pie",
                        iconColor: "#ff8a00",
                        iconBg: "#fff4e6"
                    }
                }
            ]
        },

        // SECTION – Reverse
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image20",
                height: "420px",
                alt: "Global carrier analytics"
            },
            right: {
                type: "text",
                title: "Carrier-Level Analytics & Marketplace Insights",
                description:
                    "Track carrier performance, latency, reliability, refund ratios and network behavior globally. Ideal for marketplaces managing multiple telecom suppliers.",
                bullets: [
                    "Inter-carrier comparison",
                    "Quality scoring engine",
                    "Demand correlation analysis",
                    "Refund forecasting"
                ],
                iconName: "signal_cellular_alt",
                iconColor: "#0070f3",
                iconBg: "#e6f5ff"
            }
        },

        // GRID 6×6 — Product Micro-Cards
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image25",
                    title: "Global eSIM Marketplace",
                    description: "Launch a clean storefront for selling travel eSIMs worldwide.",
                    buttonLink: "/esim/esim-global",
                    buttonText: "Browse eSIMs"
                },
                {
                    image: "image26",
                    title: "Coverage Explorer",
                    description: "Interactive global map for speed, latency and signal strength.",
                    buttonLink: "/coverage",
                    buttonText: "View Coverage"
                },
                {
                    image: "image28",
                    title: "Activation Help Center",
                    description: "Guide users through installation, setup and common connectivity issues.",
                    buttonLink: "/faq",
                    buttonText: "Learn More"
                }
            ]
        },

        // FINAL CTA
        {
            type: "hero",
            bgImage: "image30",
            title: "Build a Smarter eSIM Platform Today",
            description: "Automate workflows, improve activation rates and scale globally with AI telecom solutions.",
            buttons: [
                { text: "Browse eSIMs", link: "/esim/esim-global", color: "primary" },
                { text: "Explore Pricing", link: "/pricing", color: "secondary" }
            ]
        }
    ]
};

export default schema;

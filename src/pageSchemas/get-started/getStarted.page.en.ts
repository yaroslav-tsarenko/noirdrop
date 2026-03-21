import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const schema: PageSchema = {
    meta: {
        title: `Get Started with ${COMPANY_NAME} — eSIM Data Plans for Europe`,
        description:
            `Get online in Europe in minutes. Choose a data plan, receive a QR code instantly, and activate on your phone — no physical SIM, no roaming fees.`,
        keywords: [
            "get started esim",
            "buy esim europe",
            "activate esim",
            "travel esim",
            "european data plans",
            "qr code esim",
            "data only esim",
            "roaming alternative"
        ],
        canonical: "/get-started",
        ogImage: {
            title: `Get Started with ${COMPANY_NAME}`,
            description: "Choose a plan, scan a QR code, and get online in Europe in minutes.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },

    blocks: [
        {
            type: "hero",
            bgImage: "image11",
            title: "Get Online in Europe in Minutes",
            description:
                "Pick an eSIM data plan (1 GB to 50 GB), receive a QR code instantly, and activate on your phone. Covers 45+ European countries. No stores, no contracts, no roaming.",
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "Help & FAQ", link: "/faq", color: "secondary" }
            ]
        },

        {
            type: "steps",
            title: "Get Started in 3 Easy Steps",
            items: [
                {
                    number: 1,
                    title: "Choose a Data Plan",
                    description: "Select a plan based on how much data you need and how long your trip is. All plans cover 45+ European countries.",
                    iconName: "shopping_cart"
                },
                {
                    number: 2,
                    title: "Get Your QR Code",
                    description: "After checkout, your eSIM QR code is delivered instantly to your email and dashboard.",
                    iconName: "qr_code_2"
                },
                {
                    number: 3,
                    title: "Scan, Activate & Go Online",
                    description: "Scan the QR code in your phone settings, enable data roaming, and connect when you arrive.",
                    iconName: "rocket_launch"
                }
            ]
        },

        {
            type: "section",
            align: "left",
            gap: "2rem",
            left: {
                type: "text",
                title: "Why Choose Noirdrop?",
                description:
                    "We make European mobile data simple and reliable — built for travellers, remote workers, and families.",
                bullets: [
                    "Instant delivery — QR code in seconds",
                    "Coverage across 45+ European countries",
                    "Clear data plans: 1 GB, 3 GB, 5 GB, 10 GB, 20 GB, 50 GB",
                    "No roaming fees — predictable pricing"
                ],
                iconName: "star",
                iconSize: 40,
                iconColor: "#FFD700",
                iconBg: "#fffbe6"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image12",
                width: "100%",
                height: "400px",
                alt: "eSIM plan selection and activation"
            }
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Fast, Reliable Data",
                    description: "4G/5G speeds across Europe for browsing, maps, video calls, and more.",
                    buttonLink: "/pricing",
                    buttonText: "View Plans"
                },
                {
                    image: "image6",
                    title: "Simple Activation",
                    description:
                        "Scan a QR code and follow the prompts. No store visits, no SIM tray swaps.",
                    buttonLink: "/how-it-works",
                    buttonText: "How It Works"
                },
                {
                    image: "image7",
                    title: "Transparent Pricing",
                    description: "You know exactly how much data and how many days you get. No surprise charges.",
                    buttonLink: "/pricing",
                    buttonText: "View Pricing"
                }
            ]
        },

        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image8",
                width: "100%",
                height: "400px",
                alt: "Manage your eSIMs in the dashboard"
            },
            right: {
                type: "text",
                title: "Manage Everything from Your Dashboard",
                description:
                    "Access your QR codes, setup instructions, and plan details in one place — handy when you're on the move.",
                bullets: [
                    "Access your eSIM QR anytime",
                    "Clear setup steps per device",
                    "Support contact in one click"
                ],
                iconName: "dashboard",
                iconSize: 40,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            }
        },

        {
            type: "testimonials",
            title: DEFAULT_TESTIMONIALS_TITLE,
            items: DEFAULT_TESTIMONIALS_ITEMS,
        },

        {
            type: "faq",
            items: [
                {
                    question: "Do I need to remove my physical SIM?",
                    answer: "No. The eSIM works alongside your physical SIM. Keep your number for calls and use the eSIM for data."
                },
                {
                    question: "How do I activate the eSIM?",
                    answer: "After purchase, you'll receive a QR code by email. Scan it in your phone's cellular/mobile settings and follow the prompts."
                },
                {
                    question: "When should I install — before or during travel?",
                    answer: "You can install anytime. Most travellers install before departure; the eSIM connects when you arrive."
                },
                {
                    question: "What if I need help?",
                    answer: `You can reach support at ${COMPANY_EMAIL} — we'll help you get connected.`
                }
            ]
        },

        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Ready to Get Online in Europe?",
                description:
                    "Choose a data plan and activate in minutes — reliable data across 45+ European countries without roaming fees.",
                bullets: [
                    "Instant delivery",
                    "Simple activation",
                    "45+ European countries"
                ],
                iconName: "verified",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                buttons: [
                    { text: "View Plans", link: "/pricing", color: "primary" },
                    { text: "Contact Us", link: "/contact-us", color: "secondary" }
                ]
            }
        }
    ]
};

export default schema;

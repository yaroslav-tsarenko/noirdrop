import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const schema: PageSchema = {
    meta: {
        title: `Get Started with ${COMPANY_NAME} — eSIM Plans in Minutes`,
        description:
            `Get online worldwide in minutes. Choose an eSIM plan, receive a QR code instantly, and activate on your phone — no physical SIM, no roaming surprises.` ,
        keywords: [
            "get started esim",
            "buy esim",
            "activate esim",
            "travel esim",
            "global data plans",
            "qr code esim",
            "international mobile data",
            "roaming alternative"
        ],
        canonical: "/get-started",
        ogImage: {
            title: `Get Started with ${COMPANY_NAME}`,
            description: "Choose a plan, scan a QR code, and get online in minutes.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },

    blocks: [
        {
            type: "hero",
            bgImage: "image11",
            title: "Get Online Worldwide in Minutes",
            description:
                "Pick an eSIM plan that fits your trip, receive a QR code instantly, and activate on your phone. No stores. No contracts. No physical SIM.",
            buttons: [
                { text: "View Plans", link: "/pricing", color: "primary" },
                { text: "Help Center", link: "/faq", color: "secondary" }
            ]
        },

        {
            type: "steps",
            title: "Get Started in 3 Easy Steps",
            items: [
                {
                    number: 1,
                    title: "Choose a Plan",
                    description: "Select a country, regional, or global data plan based on your destination and usage.",
                    iconName: "shopping_cart"
                },
                {
                    number: 2,
                    title: "Get Your QR Code",
                    description: "After checkout, we deliver your eSIM QR code to email and your dashboard instantly.",
                    iconName: "qr_code_2"
                },
                {
                    number: 3,
                    title: "Activate & Go Online",
                    description: "Scan the QR code in your phone settings and connect when you arrive (or immediately, depending on the plan).",
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
                title: "Why Choose Our eSIM Marketplace?",
                description:
                    "We make global mobile data simple and reliable — built for travelers, teams, and creators.",
                bullets: [
                    "Instant delivery & activation instructions",
                    "Coverage across 190+ destinations",
                    "Roaming-free, predictable pricing"
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
                alt: "eSIM plan selection and activation preview"
            }
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Fast, Reliable Connectivity",
                    description: "Optimized carrier selection helps you stay connected with stable 4G/5G data in supported destinations.",
                    buttonLink: "/pricing",
                    buttonText: "View Plans"
                },
                {
                    image: "image6",
                    title: "Simple Activation",
                    description:
                        "Scan a QR code and follow the device prompts. No store visits and no SIM tray swaps.",
                    buttonLink: "/how-it-works",
                    buttonText: "How It Works"
                },
                {
                    image: "image7",
                    title: "Travel-Friendly Pricing",
                    description: "Transparent plans that help you avoid roaming surprises and reduce travel connectivity costs.",
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
                    "Keep your QR codes, installation steps, and plan details in one place — handy when you're on the move.",
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
                    answer: "No. eSIM works alongside your physical SIM. You can keep your number for calls and use eSIM for data."
                },
                {
                    question: "How do I activate the eSIM?",
                    answer: "After purchase, you'll receive a QR code. Scan it in your phone's cellular/mobile settings and follow the prompts."
                },
                {
                    question: "When should I install it — before or during travel?",
                    answer: "You can install it any time. Many travelers install before departure and the plan activates when you arrive (depending on plan rules)."
                },
                {
                    question: "What if I need help?",
                    answer: `You can reach support at ${COMPANY_EMAIL} — we’ll help you get connected.`
                }
            ]
        },

        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Ready to Get Online?",
                description:
                    "Choose a plan that matches your trip and activate in minutes — reliable data without the roaming stress.",
                bullets: [
                    "Instant delivery",
                    "Simple activation",
                    "Coverage in 190+ destinations"
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

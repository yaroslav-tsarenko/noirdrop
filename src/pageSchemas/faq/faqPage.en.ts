import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME} eSIM`,
        description: `Answers to common questions about buying, installing, and using a data-only eSIM for European travel with ${COMPANY_NAME}.`,
        keywords: [
            "esim faq",
            "how to activate esim",
            "esim installation",
            "travel esim",
            "roaming alternative",
            `${COMPANY_NAME} help`,
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} eSIM FAQ`,
            description: "Everything you need to know about eSIM: setup, compatibility, activation and troubleshooting.",
            bg: "#eef4ff",
            color: "#6a39ff",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} sells data-only eSIM plans for 45+ European countries. Choose a data plan (1 GB to 50 GB), receive a QR code instantly, and activate on your phone — no physical SIM card required.`,
                },
                {
                    question: "What is an eSIM?",
                    answer: "An eSIM is a digital SIM built into your phone (or device). Instead of inserting a plastic SIM card, you install a carrier profile by scanning a QR code or using an activation code.",
                },
                {
                    question: "Is my device compatible?",
                    answer: "Most newer iPhones, Samsung Galaxy, Google Pixel, and many flagship devices support eSIM. If your phone supports eSIM, you’ll see an option like ‘Add eSIM’ or ‘Add Cellular Plan’ in settings.",
                },
                {
                    question: "How do I install and activate my eSIM?",
                    answer: "After purchase, you’ll receive an eSIM QR code. Open your phone’s Mobile/Cellular settings, choose ‘Add eSIM’, scan the QR code, and follow the prompts. Activation timing depends on your plan (some activate immediately, others on first network use in the destination).",
                },
                {
                    question: "Can I keep my physical SIM and phone number?",
                    answer: "Yes. On dual‑SIM devices you can keep your physical SIM for calls/SMS and use the eSIM for data. You can pick which line is used for mobile data in your settings.",
                },
                {
                    question: "Do I need to enable data roaming?",
                    answer: "Some eSIM plans require enabling data roaming on the eSIM line to connect to partner networks. This does not mean you’ll be charged by your home carrier when done on the eSIM line.",
                },
                {
                    question: "Can I install the eSIM before I travel?",
                    answer: "Yes — and it’s recommended. Install ahead of time while you have stable Wi‑Fi. Then switch mobile data to the eSIM when you arrive (or when you want to start using the plan).",
                },
                {
                    question: "What happens if I run out of data?",
                    answer: "You can purchase another plan or top up (if available for your destination). Your dashboard keeps your purchase history and QR codes handy.",
                },
                {
                    question: "Will this work with hotspot/tethering?",
                    answer: "Hotspot support depends on your device and plan. In most cases it works normally, but some destinations/carriers may restrict tethering.",
                },
                {
                    question: "I scanned the QR code and it failed — what should I do?",
                    answer: "Make sure the eSIM wasn’t installed already, confirm you’re using the correct QR code, and try again on a strong Wi‑Fi connection. If it still fails, contact support and we’ll help you troubleshoot.",
                },
                {
                    question: "How can I contact support?",
                    answer: `Email us anytime at ${COMPANY_EMAIL} and include your order email + destination. We usually respond quickly and can help with installation and activation issues.`,
                },
            ],
        },
    ],
};

export default faqSchema;

import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

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
         * 🟣 1. HERO SECTION — SUPER STRONG AIRALO-LEVEL
         * -------------------------------------------------------------------------- */
        {
            type: "hero",
            bgImage: "image1",
            title: "Global eSIM Marketplace — Instantly Connect in 200+ Countries",
            description:
                "Skip physical SIM cards. Activate your eSIM in 30 seconds and enjoy fast 4G/5G data anywhere in the world. Affordable, instant, and contract-free.",
            buttons: [
                { text: "Browse eSIMs", link: "/products", color: "primary" },
                { text: "How It Works", link: "#how-it-works", color: "secondary" },
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
            justify: "space-between",
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
                    buttonLink: "/products",
                    buttonText: "Explore Europe",
                },
                {
                    image: "image4",
                    title: "USA eSIM",
                    description: "Fast 5G coverage nationwide. Perfect for tourists and business travelers.",
                    buttonLink: "/products",
                    buttonText: "View USA Plans",
                },
                {
                    image: "image5",
                    title: "Asia eSIM",
                    description: "Japan, Korea, Thailand, Singapore — one digital SIM works everywhere.",
                    buttonLink: "/products",
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
            title: "What Travelers Say About Our eSIMs",
            items: [
                {
                    name: "Elena",
                    role: "Travel Blogger",
                    text: "Installed my Europe eSIM in 15 seconds. No roaming fees, no hassle. Best travel purchase ever.",
                    avatar: "https://i.pravatar.cc/150?img=12",
                },
                {
                    name: "David",
                    role: "Digital Nomad",
                    text: "I work remotely, so stable internet is a must. The Japan + Korea eSIM was flawless.",
                    avatar: "https://i.pravatar.cc/150?img=50",
                },
                {
                    name: "Marco",
                    role: "Business Traveler",
                    text: "Arrived in New York and data was active before I left the airport. Crazy good.",
                    avatar: "https://i.pravatar.cc/150?img=32",
                },
                {
                    name: "Anastasia",
                    role: "Solo Traveler",
                    text: "Much cheaper than Holafly, and activation is super easy. Highly recommend!",
                    avatar: "https://i.pravatar.cc/150?img=65",
                },
            ],
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
                },
                {
                    image: "image8",
                    title: "Keep Your Phone Number",
                    description:
                        "Your original SIM stays active for calls and banking while eSIM gives you data.",
                },
                {
                    image: "image9",
                    title: "Perfect for Remote Work",
                    description: "High-speed 4G/5G ensures stable video calls and cloud access anywhere.",
                },
                {
                    image: "image10",
                    title: "Supports Dual SIM",
                    description:
                        "Use both your eSIM and physical SIM at the same time with Dual SIM mode.",
                },
                {
                    image: "image11",
                    title: "No Contracts",
                    description: "Buy once. Use once. No commitments or hidden fees.",
                },
                {
                    image: "image12",
                    title: "Travel Unlimited Plans",
                    description: "Need unlimited data? We offer unlimited eSIMs in 60+ countries.",
                },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🔵 9. LONG SEO TEXT — Why eSIM Beats SIM Cards
         * -------------------------------------------------------------------------- */
        {
            type: "text",
            title: "Why eSIMs Are Better Than Local SIM Cards",
            description:
                "Buying SIM cards at airports is outdated. You must queue, show your passport, fill forms, and physically insert the card. With eSIMs, everything is digital. You get instant data with no friction. Also, eSIMs are safer — no risk of losing your SIM slot or damaging hardware.",
            bullets: [
                "Zero airport queues",
                "No physical installation",
                "More secure and impossible to lose",
                "Better prices than kiosk SIM cards",
                "Works immediately after activation",
            ],
            iconName: "shield",
            iconColor: "#9532ff",
            iconBg: "#f6f0ff",
        },

        /* --------------------------------------------------------------------------
         * 🟣 10. SECTION — eSIM for Business Teams
         * -------------------------------------------------------------------------- */
        {
            type: "section",
            reverse: true,
            gap: "2rem",
            left: {
                type: "text",
                title: "Business eSIM Solutions for Teams & Companies",
                description:
                    "Empower your employees with reliable global connectivity. Perfect for distributed teams, business trips, events, and conferences.",
                bullets: [
                    "Bulk eSIM deliveries",
                    "Corporate invoicing",
                    "Usage analytics",
                    "Multi-country plans",
                ],
                iconName: "briefcase",
                iconColor: "#68cfff",
                iconBg: "#e7f8ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image13",
                width: "100%",
                height: "420px",
            },
        },

        /* --------------------------------------------------------------------------
         * 🟠 11. PRICING TABLE — 3 PACKS
         * -------------------------------------------------------------------------- */
        {
            type: "grid",
            columns: 3,
            cards: [
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Starter",
                    price: "5",
                    tokens: 100,
                    description: "Perfect for trying your first eSIM.",
                    features: ["Instant delivery", "Works in 1 country", "Email support"],
                    buttonText: "Buy Now",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Traveler Pack",
                    price: "15",
                    tokens: 400,
                    description: "Ideal for vacation trips or weekend city breaks.",
                    features: ["Regional support", "Unlimited downloads", "Priority support"],
                    buttonText: "Buy Pack",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Global Nomad",
                    price: "30",
                    tokens: 1000,
                    description:
                        "For digital nomads and frequent flyers who need international coverage.",
                    features: ["Global access", "Multi-device", "Full analytics", "24/7 support"],
                    buttonText: "Go Premium",
                },
            ],
        },

        /* --------------------------------------------------------------------------
         * 🔵 12. 20-QUESTION FAQ — Massive SEO
         * -------------------------------------------------------------------------- */
        {
            type: "faq",
            items: [
                { question: "What is an eSIM?", answer: "An eSIM is a digital SIM you install without a physical card." },
                { question: "Which phones support eSIM?", answer: "All modern iPhones, Samsung S20+, Google Pixel, and many others." },
                { question: "How fast is eSIM delivery?", answer: "Instant. You receive the QR code immediately after purchase." },
                { question: "Do I need to remove my physical SIM?", answer: "No. You can keep your number and simply use eSIM for data." },
                { question: "Can I use multiple eSIMs?", answer: "Yes. You can store many eSIMs and switch anytime." },
                { question: "Does eSIM work on locked phones?", answer: "Your phone must be unlocked to install international eSIMs." },
                { question: "What speeds do you offer?", answer: "4G/LTE/5G depending on local carrier availability." },
                { question: "How do I install the eSIM?", answer: "Open settings → Mobile Network → Add eSIM → Scan QR code." },
                { question: "Do I get unlimited plans?", answer: "Yes, for selected countries like USA, Japan, UK, EU." },
                { question: "Do I need passport verification?", answer: "No. eSIM activation requires no documents." },
                { question: "Is roaming disabled?", answer: "Yes. You use local data plans at local prices." },
                { question: "Can I refund?", answer: "Unused eSIMs with no activation can be refunded." },
                { question: "Can I hotspot on eSIM?", answer: "Yes, all our plans support tethering unless specified." },
                { question: "Does eSIM expire?", answer: "Activation must occur within 12 months." },
                { question: "Can I change plans?", answer: "Yes. You can switch to any plan anytime." },
                { question: "What if QR code doesn’t work?", answer: "We provide manual installation instructions and full support." },
                { question: "Is my data secure?", answer: "Yes. eSIM uses encrypted carrier-level security." },
                { question: "Can I keep my WhatsApp number?", answer: "Yes. WhatsApp continues working with your original SIM." },
                { question: "Can businesses buy eSIMs in bulk?", answer: "Yes. We support enterprise purchases and invoicing." },
                { question: "How do I top up data?", answer: "You can refill or buy add-on data packs anytime." },
            ],
        },


        {
            type: "hero",
            bgImage: "image14",
            title: "Travel Smarter with Instant Global eSIMs",
            description: "No roaming. No physical SIM cards. No stress. Just pure connectivity.",
            buttons: [
                { text: "Browse eSIMs", link: "/products", color: "primary" },
                { text: "Contact Support", link: "/contact-us", color: "secondary" },
            ],
        },
    ],
};

export default schema;

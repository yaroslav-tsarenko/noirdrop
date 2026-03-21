import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";
import { DEFAULT_TESTIMONIALS_ITEMS, DEFAULT_TESTIMONIALS_TITLE } from "@/resources/testimonials";

const blogSchema: PageSchema = {
    meta: {
        title: `Blog — ${COMPANY_NAME} eSIM for Europe`,
        description: `Explore travel guides, eSIM tutorials, European connectivity tips, and practical advice from ${COMPANY_NAME}. Updated regularly with travel planning resources.`,
        keywords: [
            "esim blog",
            "travel internet tips",
            "european connectivity",
            "roaming alternatives",
            "eSIM guides",
            "digital nomad tips",
            "travel data tips",
            `${COMPANY_NAME} articles`,
        ],
        canonical: "/blog",
        ogImage: {
            title: `${COMPANY_NAME} Blog`,
            description: "European travel tips, eSIM guides, and connectivity advice.",
            bg: "#f5f6ff",
            color: "#6a39ff",
        },
    },

    blocks: [
        // 🚀 HERO
        {
            type: "hero",
            bgImage: "image10",
            title: "Your Guide to Global Connectivity",
            description:
                `From eSIM how-to guides to real travel hacks — discover insights that help you stay connected wherever you go. Updated weekly by the ${COMPANY_NAME} editorial team.`,
            buttons: [
                { text: "Latest Articles", link: "#latest", color: "primary" },
                { text: "View Pricing", link: "/pricing", color: "secondary" },
            ],
        },

        // ⭐ FEATURED ARTICLE (big layout)
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image50",
                height: "420px",
                alt: "Featured blog article",
            },
            right: {
                type: "text",
                title: "Featured: The Complete Beginner’s Guide to eSIM",
                description:
                    "Learn what an eSIM is, how activation works, which devices support it, and how to avoid roaming fees while traveling.",
                bullets: [
                    "Setup in under 2 minutes",
                    "Works in 45+ European countries",
                    "Travel-friendly pricing",
                ],
                iconName: "auto_stories",
                iconSize: 46,
                iconColor: "#6a39ff",
                iconBg: "#f3edff",
                buttons: [
                    { text: "Read Featured", link: "/blog/sim-vs-esim", color: "primary" },
                    { text: "Browse Plans", link: "/pricing", color: "secondary" },
                ],
            },
        },

        // 📰 LATEST ARTICLES (real list)
        {
            type: "grid",
            id: "latest",
            columns: 3,
            gap: "2.4rem",
            cards: [
                {
                    image: "image20",
                    title: "Physical SIM vs eSIM: Which One Wins in 2026?",
                    description: "A simple comparison for travelers: setup, speed, security, and how to keep your main number.",
                    buttonLink: "/blog/sim-vs-esim",
                    buttonText: "Read More",
                },
                {
                    image: "image21",
                    title: "How to Activate an eSIM in Under 2 Minutes",
                    description: "Step-by-step instructions for iPhone and Android, plus common mistakes to avoid at the airport.",
                    buttonLink: "/how-it-works",
                    buttonText: "Read More",
                },
                {
                    image: "image22",
                    title: "How AI Routing Improves Mobile Internet Abroad",
                    description: "Why carrier selection and smart routing matter for speed, latency, and stability while traveling.",
                    buttonLink: "/blog/ai-routing",
                    buttonText: "Read More",
                },
                {
                    image: "image23",
                    title: "Top 20 Countries for Using eSIM in 2026",
                    description: "A practical traveler ranking based on coverage, stability, and value — not just marketing claims.",
                    buttonLink: "/blog/top-countries-esim",
                    buttonText: "Read More",
                },
                {
                    image: "image24",
                    title: "eSIM Data Plans: How Much Do You Really Need?",
                    description: "A quick calculator mindset: light browsing vs maps vs streaming vs remote work.",
                    buttonLink: "/pricing",
                    buttonText: "View Plans",
                },
                {
                    image: "image25",
                    title: "Roaming vs eSIM: How to Stop Paying Surprise Fees",
                    description: "Understand roaming charges, find safer alternatives, and keep control of your travel budget.",
                    buttonLink: "/pricing",
                    buttonText: "Compare Options",
                },
            ],
        },

        // ✨ TOP AUTHORS
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Meet the Authors",
                description:
                    "Our blog is written by telecom engineers, travel experts, product managers, and seasoned digital nomads.",
                bullets: [
                    "Telecom infrastructure specialists",
                    "Experienced travelers",
                    "Connectivity engineers",
                    "Technical writers & analysts",
                ],
                iconName: "groups",
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image60",
                height: "400px",
                alt: "Blog authors team",
            },
        },

        // 🔥 POPULAR POSTS GRID
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image33",
                    title: "Top 20 Countries for Using eSIM in 2026",
                    description: "A full comparison of speed, stability, and coverage.",
                    buttonLink: "/blog/top-countries-esim",
                    buttonText: "Read More",
                },
                {
                    image: "image31",
                    title: "How AI Routing Improves Mobile Internet Abroad",
                    description: "Deep dive into telecom intelligence.",
                    buttonLink: "/blog/ai-routing",
                    buttonText: "Read More",
                },
                {
                    image: "image44",
                    title: "Physical SIM vs eSIM: Which One Wins in 2026?",
                    description: "We compare speed, security, fees, and convenience.",
                    buttonLink: "/blog/sim-vs-esim",
                    buttonText: "Read More",
                },
            ],
        },

        // 💬 TESTIMONIALS ABOUT BLOG
        {
            type: "testimonials",
            title: DEFAULT_TESTIMONIALS_TITLE,
            items: DEFAULT_TESTIMONIALS_ITEMS,
        },

        // 📮 CTA — Subscribe
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Join Our Connectivity Newsletter",
                description:
                    "Get travel tips, eSIM guides, European destination insights, and updates on new plans.",
                bullets: [
                    "Weekly updates",
                    "Exclusive guides",
                    "Travel industry insights",
                ],
                iconName: "mail",
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image70",
                height: "400px",
                alt: "Newsletter illustration",
            },
        },

        // ⭐ FINAL CTA
        {
            type: "hero",
            bgImage: "image40",
            title: "Explore Europe with Better Connectivity",
            description: `Browse articles, learn travel tips, and get the most from your eSIM with ${COMPANY_NAME}.`,
            buttons: [
                { text: "Explore Articles", link: "#latest", color: "primary" },
                { text: "View Pricing", link: "/pricing", color: "secondary" },
            ],
        },
    ],
};

export default blogSchema;

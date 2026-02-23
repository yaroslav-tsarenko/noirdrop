import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

export const cookiePolicyEn: PageSchema = {
    meta: {
        title: `Cookie Policy – ${COMPANY_NAME}`,
        description:
            `How ${COMPANY_NAME} uses cookies and similar technologies to run the site securely, maintain sessions, and support Wallet and Order features.`,
        keywords: [
            "cookie policy",
            "cookies",
            "privacy",
            "session",
            "security",
            "token wallet",
            "orders",
            "esim",
            COMPANY_NAME?.toLowerCase() || "noirdrop",
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Cookie Policy`,
            description: "Cookie usage and your controls.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Cookie Policy",
            description: "Effective date: 17 October 2024",
        },
        {
            type: "text",
            title: "1. Introduction",
            description: `This Cookie Policy explains how ${COMPANY_LEGAL_NAME} ("we", "us", "our") uses cookies and similar technologies to recognise you when you visit our website at ${COMPANY_NAME} (the "Site"). It explains what these technologies are, why we use them, and your choices and rights to control their use. This Cookie Policy should be read together with our Privacy Policy.`,
        },
        {
            type: "text",
            title: "2. What are Cookies?",
            description:
                "Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work (or work more efficiently), to keep you signed in, to remember preferences, and to provide reporting information.",
            bullets: [
                "Local Storage / Session Storage: to store certain settings or session-related data in your browser.",
                "Pixels / tags / SDKs (where used): to measure usage or improve performance.",
                "Server-side logs: to help secure the Service and prevent fraud.",
            ],
        },
        {
            type: "text",
            title: "3. Why do we use Cookies?",
            description:
                "We use first-party and third-party cookies for several reasons. Some cookies are required for technical and security reasons to operate the Service (strictly necessary cookies). Other cookies help us understand usage and improve the Service (performance & analytics), remember your choices (functionality), or support advertising/marketing (where applicable) (targeting & advertising).",
        },
        {
            type: "text",
            title: "4. Types of Cookies We Use",
            bullets: [
                "Strictly Necessary: Essential for the Site to function, including secure login, maintaining your session, preventing fraud, processing Orders, and managing your Token Wallet. Without these, core features cannot operate.",
                "Performance & Analytics: Help us understand how visitors use the Site (e.g., which pages are visited, error rates, performance) so we can improve reliability and user experience. Data is typically aggregated and does not aim to directly identify you.",
                "Functionality: Remember choices you make (such as language, region, or UI preferences) and provide enhanced, more personal features.",
                "Targeting & Advertising: Used to make advertising more relevant and to measure campaign effectiveness (where enabled). These cookies may be set by us and/or advertising partners.",
            ],
        },
        {
            type: "text",
            title: "5. Specifically: Wallet, Orders, and Security",
            description:
                "Because we use a Token Wallet and support digital delivery of eSIM Plans, we use certain cookies and similar technologies to:",
            bullets: [
                "keep you securely logged in and protect Account access;",
                "link Wallet and Order actions to your session to prevent unauthorised activity;",
                "reduce the risk of duplicate actions (for example, accidental double-submissions during checkout);",
                "help detect fraud, abuse, and unusual behaviour (such as suspicious login attempts);",
                "ensure the Site performs reliably during Order placement and delivery of eSIM/activation details.",
            ],
        },
        {
            type: "text",
            title: "6. How can I control Cookies?",
            bullets: [
                "Cookie Preference Manager: You can set your preferences using our cookie consent banner (and/or cookie settings link, if available on the Site).",
                "Browser Controls: You can configure your browser to accept or refuse cookies, or to delete cookies. If you disable strictly necessary cookies, the Site may not function properly and key features (like login, Wallet, and Orders) may be unavailable.",
                "Analytics Opt-Out (if applicable): If we use third-party analytics (such as Google Analytics), you may be able to opt out via the provider’s tools and settings, in addition to our cookie banner preferences.",
            ],
        },
        {
            type: "text",
            title: "7. How often will we update this Cookie Policy?",
            description:
                "We may update this Cookie Policy from time to time to reflect changes in the cookies we use, improvements to the Service, or legal/regulatory requirements. We will update the “Effective date” at the top of this page. Please review this Policy periodically.",
        },
        {
            type: "text",
            title: "8. Data Retention",
            bullets: [
                "Session cookies: deleted automatically when you close your browser.",
                "Persistent cookies: remain for a defined period (often between 30 days and 24 months) or until you delete them via your browser settings.",
                "Retention can vary by cookie type and purpose.",
            ],
        },
        {
            type: "text",
            title: "9. Contact Us",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default cookiePolicyEn;

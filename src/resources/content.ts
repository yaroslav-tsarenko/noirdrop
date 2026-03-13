import { media } from "@/resources/media";
import {COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_LEGAL_NAME, COMPANY_NUMBER} from "@/resources/constants";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const headerContent = {
    logo: {
        src: media.logo.src,
        alt: "Site Logo",
        href: "/"
    },
    links: [
        { label: "Solutions", href: "/services" },
        { label: "Plans & Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact-us" },
        { label: "About Us", href: "/about-us" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
    ]
};

export const footerContent = {
    logo: { src: media.logo.src, alt: "Site Logo", href: "/" },
    columns: [
        {
            title: "Navigation",
            links: [
                { label: "Contact", href: "/contact-us" },
                { label: "About Us", href: "/about-us" },
                { label: "How It Works", href: "/how-it-works" },
            ]
        },
        {
            title: "Useful Links",
            links: [
                { label: "Solutions", href: "/services" },
                { label: "Plans & Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
            ]
        },
        {
            title: "Legal",
            links: [
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Privacy Policy", href: "/privacy-policy" },
            ],
        },
    ],
    contact: {
        email: COMPANY_EMAIL,
    },
    legal: {
        companyName: COMPANY_LEGAL_NAME,
        companyNumber: COMPANY_NUMBER,
        companyEmail: COMPANY_EMAIL,
        addressLines: [
            COMPANY_ADDRESS,
        ],
    },
};

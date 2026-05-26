import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_URL,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Terms & Conditions – ${COMPANY_NAME}`,
        description:
            `Terms and conditions for using ${COMPANY_NAME}: account eligibility, eSIM data plan orders, delivery, refunds, acceptable use, and liability.`,
        keywords: [
            "terms",
            "terms and conditions",
            "esim",
            "eSIM terms",
            "data plans",
            "orders",
            "refunds",
            "acceptable use",
            "liability",
            COMPANY_NAME?.toLowerCase() || "noirdrop",
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: `${COMPANY_NAME} – Terms & Conditions`,
            description: "Terms for using our website and eSIM services.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description: "Effective date: 17 October 2024",
        },
        {
            type: "text",
            title: "1. Introduction",
            bullets: [
                `These Terms and Conditions ("Terms") govern your access to and use of the website at ${COMPANY_URL} and related services (the "Service"), operated by ${COMPANY_LEGAL_NAME} (company number ${COMPANY_NUMBER}), with registered office at ${COMPANY_ADDRESS} ("we", "us", "our").`,
                `By accessing or using the Service, creating an Account, purchasing an eSIM data plan, or receiving/using an eSIM, you agree to be bound by these Terms. If you do not agree, you must not use the Service.`,
                `These Terms are intended to be read together with our Privacy Policy and Cookies Policy (together, our "Policies"). If there is a conflict, these Terms prevail in relation to use of the Service.`,
            ],
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "Account: the user profile created on the Service.",
                "eSIM: a digital SIM profile delivered electronically (e.g., via QR code / activation details) for installation on a compatible device.",
                "Plan: an eSIM data plan offered through the Service, specifying data allowance (in GB), validity period (in days), coverage area, and price.",
                "Order: a confirmed purchase of a Plan through the Service.",
                "Digital Content: eSIM profiles, QR codes, activation instructions, and any digital materials provided with a Plan.",
                "Fiat: government-issued currency (GBP, EUR, USD).",
            ],
        },
        {
            type: "text",
            title: "3. Eligibility and Account Registration",
            bullets: [
                "You must be at least 18 years old to create an Account and use the Service.",
                "You must provide accurate and up-to-date information (including your name, email address, and a password). You are responsible for maintaining the confidentiality of your login credentials and for all activity under your Account.",
                `You must notify us immediately at ${COMPANY_EMAIL} if you suspect any unauthorised use of your Account or security breach.`,
                "We may refuse registration, suspend, or terminate Accounts where we reasonably suspect fraud, abuse, unlawful activity, or a breach of these Terms.",
            ],
        },
        {
            type: "text",
            title: "4. eSIM Plans, Pricing, and Payments",
            bullets: [
                "Plans and Pricing: We offer data-only eSIM plans for European travel. Each Plan specifies the data allowance (e.g., 1 GB, 3 GB, 5 GB, 10 GB, 20 GB, or 50 GB), validity period (e.g., 7 days or 30 days), covered countries, and price. Pricing is displayed at checkout in the selected currency (GBP, EUR, or USD).",
                "Data-Only Service: Unless explicitly stated otherwise, all Plans are data-only and do not include voice calls, SMS, or a phone number. Emergency calling may not be supported on data-only eSIMs.",
                "Payment Methods: Payments are processed using supported payment methods (currently Visa and MasterCard). By submitting payment details, you authorise us (via our third-party payment processors) to charge the total amount due. We do not store full card details.",
                "Taxes: Prices may include or exclude applicable taxes (such as VAT) depending on your location and the applicable rules. Any applicable taxes will be shown at checkout before you confirm payment.",
                "No Subscriptions: All purchases are one-time payments. There are no recurring charges, automatic renewals, or subscriptions unless explicitly stated.",
            ],
        },
        {
            type: "text",
            title: "5. Orders and Delivery",
            bullets: [
                "Placing an Order: When you purchase a Plan, payment is processed immediately. Upon successful payment, the Order is confirmed.",
                "Digital Delivery: After confirmation, your eSIM QR code and activation details are delivered to your registered email address and made available in your Account dashboard.",
                "Delivery Timing: Delivery is typically instant or near-instant, but may vary due to technical or third-party dependencies.",
                "Deemed Delivery: Delivery is deemed to have occurred when the eSIM/activation details are made available in your Account or sent to your registered email address.",
                "Technical Compatibility: You are responsible for ensuring your device is eSIM-compatible, unlocked, and supports the relevant bands/technology required for the Plan. We do not guarantee that all devices, operating systems, or older software versions will work with every Plan.",
            ],
        },
        {
            type: "text",
            title: "6. eSIM Use, Activation, and Plan Conditions",
            bullets: [
                "Installation and Activation: You must follow the provided installation and activation instructions. Some Plans may require an internet connection (Wi‑Fi or mobile) for installation.",
                "When a Plan Starts: The validity period of a Plan may start (a) upon installation, (b) upon first network connection in the destination, or (c) upon delivery — depending on the Plan terms shown at purchase. The applicable rule will be shown in the Plan description or delivery details.",
                "Data Allowance: Each Plan includes a fixed data allowance (e.g., 1 GB, 5 GB, 10 GB). Once the data allowance is used or the validity period expires (whichever comes first), the data connection stops. There are no overage charges.",
                "Coverage and Quality: Coverage, speeds, latency, and network availability depend on local operators and conditions (including congestion, geography, maintenance, and regulatory constraints). We do not guarantee uninterrupted service, specific speeds, or continuous coverage.",
                "Fair Use and Prohibited Use: You must not use any Plan for unlawful purposes, network abuse, excessive tethering where prohibited, resale, SIM-boxing, spamming, or any activity that could harm networks or violate operator policies. Plans may be subject to fair use policies or technical limits described at purchase.",
                "One-Time Use / Non-Transferability: Unless explicitly stated, eSIM profiles and activation details are intended for use by a single end user/device and are not transferable, resellable, or shareable.",
            ],
        },
        {
            type: "text",
            title: "7. Refunds, Cancellations, and Consumer Rights (UK)",
            bullets: [
                "Consumer Cancellation Right: If you are a consumer in the UK, you may have a legal right to cancel within 14 days of purchase, provided the eSIM has not been installed or activated and no Digital Content has been supplied.",
                "Loss of Cancellation Right for Digital Content: Where you purchase a Plan and request or accept immediate delivery of the eSIM/activation details, you acknowledge that you may lose your right to cancel under the Consumer Contracts Regulations once delivery begins, to the extent permitted by law.",
                "Refunds After Delivery: Due to the nature of digital eSIM delivery and the risk of copying/activation, fulfilled Orders are generally non-refundable except where we fail to deliver, the Digital Content is defective or not as described, or a refund is required by applicable consumer law.",
                "Refunds After Activation: Where an eSIM has been installed and/or activated, refunds are generally not available unless required by law or there is a verified fault attributable to us.",
                `How to Request a Refund/Support: All refund requests and fault reports must be submitted to ${COMPANY_EMAIL} with your Account email and Order details. We do not process automatic refunds.`,
            ],
        },
        {
            type: "text",
            title: "8. Third Parties and Our Role",
            bullets: [
                "We operate the platform and may source Plans and connectivity via third-party technology providers and mobile network operators. Your service experience may depend on those third parties.",
                "We are not responsible for outages, interruptions, or performance issues caused by third-party networks or circumstances outside our reasonable control, subject to your statutory rights.",
            ],
        },
        {
            type: "text",
            title: "9. Intellectual Property and Licence",
            bullets: [
                "All intellectual property rights in the Service (including software, branding, and website content) are owned by us or our licensors.",
                "We grant you a limited, non-exclusive, non-transferable, revocable licence to use the Service for your personal or internal business use (as applicable) in accordance with these Terms.",
                "You must not copy, modify, reverse engineer, scrape, or attempt to extract source code or proprietary components of the Service, except to the extent permitted by law.",
            ],
        },
        {
            type: "text",
            title: "10. Acceptable Use and Prohibited Conduct",
            bullets: [
                "You must not:",
                "use the Service for unlawful or fraudulent activity;",
                "attempt to bypass security or access other users' Accounts;",
                "interfere with the Service or networks (including automated abuse);",
                "resell eSIMs/Plans or represent them as your own;",
                "submit false information or impersonate others.",
            ],
        },
        {
            type: "text",
            title: "11. Limitation of Liability and Indemnity",
            bullets: [
                "Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under law.",
                "Subject to the above, our total liability arising out of or in connection with the Service shall not exceed the total amount you paid for Plans in the 12 months preceding the event giving rise to the claim.",
                "We are not liable for indirect, incidental, special, or consequential losses, including loss of profits, loss of business, loss of data, or loss arising from network outages or device incompatibility, to the maximum extent permitted by law.",
                "You agree to indemnify us against claims, losses, and expenses arising from your misuse of the Service, breach of these Terms, or unlawful activity.",
            ],
        },
        {
            type: "text",
            title: "12. Data Protection",
            bullets: [
                "We process personal data (including Account identifiers and order history) in accordance with our Privacy Policy.",
            ],
        },
        {
            type: "text",
            title: "13. Changes to These Terms",
            bullets: [
                "We may update these Terms from time to time. We will post the updated version on the Service and update the 'Effective date'.",
                "Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.",
            ],
        },
        {
            type: "text",
            title: "14. Governing Law and Jurisdiction",
            bullets: [
                "These Terms are governed by the laws of England and Wales.",
                "The courts of England and Wales shall have exclusive jurisdiction, subject to mandatory consumer protection rights that may apply in your country of residence.",
            ],
        },
        {
            type: "text",
            title: "15. Contact Details",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Registered office: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default termsSchema;

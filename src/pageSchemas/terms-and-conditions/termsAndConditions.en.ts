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
            `Terms and conditions for using ${COMPANY_NAME}: account eligibility, token wallet, orders, eSIM delivery, refunds, acceptable use, and liability.`,
        keywords: [
            "terms",
            "terms and conditions",
            "esim",
            "eSIM terms",
            "token wallet",
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
            description: `These Terms and Conditions ("Terms") govern your access to and use of the website at ${COMPANY_URL} and related services (the "Service"), operated by ${COMPANY_LEGAL_NAME} (company number ${COMPANY_NUMBER}), with registered office at ${COMPANY_ADDRESS} ("we", "us", "our"). By accessing or using the Service, creating an Account, purchasing Tokens, placing an Order, or receiving/using an eSIM, you agree to be bound by these Terms. If you do not agree, you must not use the Service. These Terms are intended to be read together with our Privacy Policy and Cookies Policy (together, our "Policies"). If there is a conflict, these Terms prevail in relation to use of the Service.`,
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "Account: the user profile created on the Service.",
                "Wallet: your Account balance of Tokens and the related transaction history displayed in your Account.",
                "Token(s): the internal virtual unit of account used on the Service to purchase eligible digital products and services.",
                "Fiat: government-issued currency (GBP, EUR, USD).",
                "eSIM: a digital SIM profile delivered electronically (e.g., via QR code / activation details) for installation on a compatible device.",
                "Plan: an eSIM data plan (and any included services, if explicitly stated) offered through the Service.",
                "Order: a request placed through the Service to obtain a Plan using Tokens.",
                "Escrow / Reserve: Tokens temporarily held (reserved) from your Wallet when you place an Order, pending fulfilment, cancellation, or completion.",
                "Digital Content: eSIM profiles, QR codes, activation instructions, and any digital materials provided with a Plan.",
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
            title: "4. Tokens, Pricing, Payments, and Wallet",
            bullets: [
                "Nature of Tokens: Tokens are an internal credit system used solely within the Service. Tokens are not legal tender, not e-money, and not a financial instrument. Tokens cannot be redeemed for cash or transferred outside the platform, except where mandatory consumer law requires otherwise.",
                "Buying Tokens (Fiat → Tokens): You can purchase Token packages using supported payment methods (currently Visa and MasterCard) in GBP, EUR, or USD. Token package pricing, exchange rates (if any), and the number of Tokens included are displayed at checkout.",
                "Taxes: Prices may include or exclude applicable taxes (such as VAT) depending on your location and the applicable rules. Any applicable taxes will be shown at checkout before you confirm payment.",
                "Payment Processing: Payments are handled by secure third-party payment processors. By submitting payment details, you authorise us (via our processors) to charge the total amount due. We do not store full card details.",
                "Wallet Records: Your Wallet may show your Token balance, Orders, reservations (Escrow/Reserve), refunds, and other transaction entries. You agree that our transaction records are prima facie evidence of your Token activity, subject to correction in case of error.",
                "Chargebacks and Reversals: If you initiate a chargeback or payment reversal, we may suspend your Account and/or cancel pending Orders while investigating. Where a chargeback is upheld or a payment is reversed, we may deduct the corresponding Tokens from your Wallet (or require repayment) and recover any third-party fees reasonably incurred.",
                "Dormant Accounts: If your Account remains completely inactive for a continuous period of 24 months, we may classify it as dormant. We will provide at least 30 days’ notice to your registered email address before taking action (which may include account closure). Any action taken will comply with applicable consumer law.",
            ],
        },
        {
            type: "text",
            title: "5. Orders, Escrow (Safe Deal), and Delivery",
            bullets: [
                "Placing an Order: When you place an Order for a Plan, the required number of Tokens will be reserved (Escrow/Reserve) from your Wallet.",
                "Fulfilment: Once the Order is confirmed and fulfilled, the reserved Tokens will be captured/spent, and you will receive access to the eSIM/activation details in your Account and/or via email notification.",
                "Cancellation and Token Return: If an Order is cancelled before fulfilment (for example, where fulfilment is not possible or you cancel within the Service where cancellation is available), the reserved Tokens will be returned to your Wallet.",
                "Digital Delivery: eSIMs and related Digital Content are delivered digitally. Delivery may be immediate or near-immediate, but timing can vary due to technical or third-party dependencies.",
                "Deemed Delivery: Delivery is deemed to have occurred when the eSIM/activation details are made available in your Account or sent to your registered email address.",
                "Technical Compatibility: You are responsible for ensuring your device is eSIM-compatible, unlocked, and supports the relevant bands/technology required for the Plan. We do not guarantee that all devices, operating systems, or older software versions will work with every Plan.",
            ],
        },
        {
            type: "text",
            title: "6. eSIM Use, Activation, and Plan Conditions",
            bullets: [
                "Installation and Activation: You must follow the provided installation and activation instructions. Some Plans may require an internet connection (Wi‑Fi or mobile) for installation.",
                "When a Plan Starts: The validity period of a Plan may start (a) upon installation, (b) upon first network connection in the destination, or (c) upon delivery—depending on the Plan terms shown at purchase. The applicable rule will be shown in the Plan description or delivery details.",
                "Data-Only / Voice / SMS: Unless explicitly stated otherwise, Plans are typically data-only and may not include voice calls, SMS, or a phone number. Emergency calling may not be supported on data-only eSIMs.",
                "Coverage and Quality: Coverage, speeds, latency, and network availability depend on local operators and conditions (including congestion, geography, maintenance, and regulatory constraints). We do not guarantee uninterrupted service, specific speeds, or continuous coverage.",
                "Fair Use and Prohibited Use: You must not use any Plan for unlawful purposes, network abuse, excessive tethering where prohibited, resale, SIM-boxing, spamming, or any activity that could harm networks or violate operator policies. Plans may be subject to fair use policies or technical limits described at purchase.",
                "One-Time Use / Non-Transferability: Unless explicitly stated, eSIM profiles and activation details are intended for use by a single end user/device and are not transferable, resellable, or shareable.",
            ],
        },
        {
            type: "text",
            title: "7. Refunds, Cancellations, and Consumer Rights (UK)",
            bullets: [
                "Token Packages (Consumer Cancellation Right): If you are a consumer in the UK, you may have a legal right to cancel the purchase of a Token package within 14 days, provided you have not used any Tokens and no Digital Content has been supplied based on those Tokens.",
                "Loss of Cancellation Right for Digital Content: Where you redeem Tokens to obtain an eSIM/Plan (Digital Content) and you request or accept immediate delivery, you acknowledge that you may lose your right to cancel under the Consumer Contracts Regulations once delivery begins, to the extent permitted by law.",
                "Plans / eSIM Refunds: Due to the nature of digital eSIM delivery and the risk of copying/activation, fulfilled Orders are generally non-refundable except where we fail to deliver, the Digital Content is defective or not as described, or a refund is required by applicable consumer law.",
                "Order Cancellation (Before Fulfilment): Where cancellation is available before fulfilment, reserved Tokens will be returned to your Wallet.",
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
            description: "You must not:",
            bullets: [
                "use the Service for unlawful or fraudulent activity;",
                "attempt to bypass security or access other users’ Accounts;",
                "interfere with the Service or networks (including automated abuse);",
                "resell eSIMs/Plans or Tokens, or represent them as your own;",
                "submit false information or impersonate others.",
            ],
        },
        {
            type: "text",
            title: "11. Limitation of Liability and Indemnity",
            bullets: [
                "Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under law.",
                "Subject to the above, our total liability arising out of or in connection with the Service shall not exceed the total amount you paid for Token packages in the 12 months preceding the event giving rise to the claim.",
                "We are not liable for indirect, incidental, special, or consequential losses, including loss of profits, loss of business, loss of data, or loss arising from network outages or device incompatibility, to the maximum extent permitted by law.",
                "You agree to indemnify us against claims, losses, and expenses arising from your misuse of the Service, breach of these Terms, or unlawful activity.",
            ],
        },
        {
            type: "text",
            title: "12. Data Protection",
            description:
                "We process personal data (including Account identifiers, Wallet balance, and transaction history) in accordance with our Privacy Policy.",
        },
        {
            type: "text",
            title: "13. Changes to These Terms",
            description:
                "We may update these Terms from time to time. We will post the updated version on the Service and update the “Effective date”. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.",
        },
        {
            type: "text",
            title: "14. Governing Law and Jurisdiction",
            description:
                "These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction, subject to mandatory consumer protection rights that may apply in your country of residence.",
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

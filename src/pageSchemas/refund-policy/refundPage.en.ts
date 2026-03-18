import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
    COMPANY_URL,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: `Refund & Return Policy – ${COMPANY_NAME}`,
        description:
            `How ${COMPANY_NAME} handles refund requests for Token purchases and eSIM Plan orders, considering digital delivery and applicable UK consumer law.`,
        keywords: [
            "refund",
            "return policy",
            "refund policy",
            "esim refund",
            "token refund",
            "wallet",
            "chargeback",
            COMPANY_NAME?.toLowerCase() || "noirdrop",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refund & Return Policy`,
            description: "Refund rules for Token Wallet purchases and eSIM Plan orders.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Refund & Return Policy",
            description: "Effective date: 17 October 2024",
        },
        {
            type: "text",
            title: "1. Summary",
            bullets: [
                "Request Handling: All refund requests are handled under this Policy and applicable UK consumer law, taking into account the digital nature of eSIM delivery and Token-based Wallet payments.",
                "Processing Time: Typically 5–10 business days after approval (bank processing timelines may vary).",
                "Token Usage: Tokens are a digital credit used to place Orders. Once Tokens are captured/spent for a fulfilled eSIM/Plan, they are generally non-refundable, except where required by law or where we fail to deliver.",
                "No Physical Returns: We provide digital eSIM profiles and activation details. There are no physical goods to ship or return.",
                "Network/Preference Disclaimer: Refunds are not granted solely due to personal preference, expected speed, roaming experience, local coverage issues, or change of mind after delivery/activation, subject to your statutory rights.",
                `Contact: To submit a request, email ${COMPANY_EMAIL} with your Account details and Order reference.`,
            ],
        },
        {
            type: "text",
            title: "2. Scope and Legal Notice",
            description: `This Refund & Return Policy ("Policy") governs cancellations, disputes, and refund requests for purchases made via ${COMPANY_URL}, including Token purchases (Wallet top-ups) and the redemption of Tokens for eSIM Plans. The Service is operated by ${COMPANY_LEGAL_NAME} (Company Number ${COMPANY_NUMBER}), registered at ${COMPANY_ADDRESS}. Nothing in this Policy is intended to limit your statutory rights under UK law (including the Consumer Rights Act 2015 and Consumer Contracts Regulations 2013), except where lawful exemptions for digital content apply.`,
        },
        {
            type: "text",
            title: "3. Key Definitions",
            bullets: [
                "Tokens: Digital credit held in your Wallet, used to place Orders within the Service.",
                "Wallet: Your Token balance and transaction history within your Account.",
                "Plan / eSIM: A digital SIM profile and related activation details delivered electronically (e.g., QR code / activation instructions) enabling mobile data (and any included services if explicitly stated).",
                "Order: A confirmed purchase of a Plan using Tokens.",
                "Escrow / Reserve: Tokens temporarily held from your Wallet when you place an Order, pending fulfilment or cancellation.",
                "Digital Content: eSIM profile, QR code, activation details, and any digital instructions/materials supplied with the Plan.",
            ],
        },
        {
            type: "text",
            title: "4. General Refund Principles",
            bullets: [
                "Digital Delivery and Loss of Withdrawal Right (Where Applicable): By redeeming Tokens and placing an Order for an eSIM/Plan, you may be asked to consent to immediate digital delivery/performance. Where you consent to immediate delivery, you acknowledge that you may lose your statutory right to withdraw (the 14-day cooling-off period) for that specific digital content once delivery begins, to the extent permitted by law.",
                "Refund Cap: Any fiat refund, where granted, is limited to the fiat amount paid for the relevant Token transaction or Order. We are not responsible for third-party fees (e.g., bank charges), currency conversion losses, or overdraft fees.",
                "Device Compatibility and User Setup: You are responsible for ensuring your device is eSIM-compatible, unlocked, and capable of installing/using the Plan. Refunds may be refused where issues arise from incompatible devices, unsupported software, incorrect installation steps, or local device restrictions—subject to your statutory rights.",
                "Network Conditions and Subjectivity: Connectivity depends on local operators, congestion, geography, maintenance, building penetration, and regulation. Refunds will not be issued solely because you expected faster speeds or stronger coverage; service quality varies by location/time; you changed your travel plans or no longer need the Plan; or you prefer a different operator than the one used for routing/coverage. This does not affect your rights if the service is materially not as described or we fail to deliver.",
            ],
        },
        {
            type: "text",
            title: "5. Token Purchases (Wallet Top-Ups)",
            bullets: [
                "Prepayment Only: Tokens are sold as bundles and used solely within the Service. Tokens are not redeemable for cash outside the platform, except where required by applicable law.",
                "14-Day Cancellation for Unused Tokens (Consumers): If you are a UK consumer, you may request a refund for a Token package within 14 days of purchase only if none of the Tokens from that specific purchase have been used and no digital content has been supplied based on those Tokens. Once any Tokens from that purchase are used (even partially), the package is treated as used and is generally non-refundable, and we do not issue partial refunds for partially used Token packages (subject to mandatory consumer law).",
                "Expiry & Inactivity: Tokens do not expire under normal usage. If your Account remains completely inactive for a continuous period of 24 months, we may classify it as dormant and take proportionate measures in line with our Terms and applicable law, after providing notice.",
            ],
        },
        {
            type: "text",
            title: "6. Cancellations and Refunds for Plans (Orders)",
            bullets: [
                "Before Fulfilment (Escrow/Reserve Stage): If an Order is cancelled before we deliver the eSIM/activation details, the reserved Tokens will be returned to your Wallet.",
                "After Fulfilment (Delivered eSIM/Activation Details): Once the eSIM/activation details have been delivered (made available in your Account and/or sent to your email), the Order is generally non-cancellable and non-refundable, due to the nature of digital delivery—except where we fail to deliver; the Digital Content is defective or not as described; or a refund is required by law.",
                "Activation and Use: Where an eSIM has been installed and/or activated, refunds are generally not available unless required by law or there is a verified fault attributable to us (for example, we supplied invalid activation details).",
            ],
        },
        {
            type: "text",
            title: "7. Quality Issues and Technical Faults",
            bullets: [
                "Non-Delivery / Invalid Details: If you did not receive the eSIM/activation details, or the provided details are invalid due to our error, notify us within 7 days of delivery. We will, at our option: reissue the eSIM/activation details; credit your Wallet with the exact amount of Tokens spent for that Order; or issue a fiat refund if we cannot rectify the issue and a refund is required or appropriate under the circumstances.",
                "Technical Issues on Our Side vs. Device/Network Issues: We may ask for reasonable evidence (screenshots, error codes, device model, OS version) to determine whether the issue is due to our systems, third-party provisioning, or the user’s device/network. If the issue is caused by device incompatibility, user error, or local network conditions, refunds may be refused, subject to your statutory rights.",
            ],
        },
        {
            type: "text",
            title: "8. How to Request a Refund",
            description: `Email ${COMPANY_EMAIL} with the subject line “Refund Request” and include:`,
            bullets: [
                "Account email address;",
                "Order reference / transaction reference;",
                "Description of the issue (e.g., “Activation details invalid”, “Duplicate charge”, “eSIM not delivered”);",
                "Evidence (screenshots, error messages, proof of double charge if applicable).",
                "Timeline: We aim to acknowledge receipt within 48 hours; provide a decision within 5 business days; and process approved fiat refunds within 5–10 business days (your bank may take longer to reflect funds).",
            ],
        },
        {
            type: "text",
            title: "9. Chargebacks and Disputes",
            bullets: [
                "We encourage you to contact support before initiating a bank dispute. Many issues can be resolved faster by reissuing an eSIM or crediting Tokens where appropriate.",
                "If a chargeback is initiated for a validly delivered Token purchase or fulfilled Order without a legitimate basis, we may suspend your Account during investigation and take reasonable steps to protect the Service, including providing relevant transaction and access records to payment processors and banks where permitted by law.",
            ],
        },
        {
            type: "text",
            title: "10. Taxes",
            description:
                "Prices are shown as inclusive or exclusive of applicable taxes as stated at checkout. If a fiat refund is issued, we will refund any tax component included in the original payment where required by law and/or where it is part of the refunded amount.",
        },
        {
            type: "text",
            title: "11. Data Retention and Data Protection",
            description:
                "To process refunds, prevent fraud, and meet accounting/tax obligations, we may retain transaction and dispute records for up to 6 years, in line with UK legal and accounting requirements. This processing is conducted in accordance with our Privacy Policy.",
        },
        {
            type: "text",
            title: "12. Illustrative Examples",
            bullets: [
                "Scenario A (No Refund): You purchased a Token package, used Tokens to receive an eSIM/Plan, and then decided you no longer need it. Result: Tokens were spent and digital delivery occurred. No refund (subject to statutory rights).",
                "Scenario B (Refund Approved – Duplicate Charge): You attempted to buy Tokens, the page froze, and your card was charged twice. Result: We refund the duplicate fiat transaction in full to your original payment method.",
                "Scenario C (Token Credit / Reissue): You placed an Order and received activation details, but they were invalid due to our provisioning error. Result: Contact support within 7 days. We will reissue the eSIM or credit back the spent Tokens (and refund in fiat if we cannot rectify and a refund is appropriate/required).",
            ],
        },
        {
            type: "text",
            title: "13. Contact Details",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Registered office: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default refundPolicySchema;

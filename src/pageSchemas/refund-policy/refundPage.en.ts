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
            `How ${COMPANY_NAME} handles refund requests for eSIM data plan purchases, considering digital delivery and applicable UK consumer law.`,
        keywords: [
            "refund",
            "return policy",
            "refund policy",
            "esim refund",
            "chargeback",
            COMPANY_NAME?.toLowerCase() || "noirdrop",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refund & Return Policy`,
            description: "Refund rules for eSIM data plan purchases.",
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
                "Request Handling: All refund requests are handled under this Policy and applicable UK consumer law, taking into account the digital nature of eSIM delivery.",
                "Processing Time: Typically 5–10 business days after approval (bank processing timelines may vary).",
                "Digital Products: eSIM data plans are digital products. Once delivered and/or activated, they are generally non-refundable, except where required by law or where we fail to deliver.",
                "No Physical Returns: We provide digital eSIM profiles and activation details. There are no physical goods to ship or return.",
                "Network/Preference Disclaimer: Refunds are not granted solely due to personal preference, expected speed, roaming experience, local coverage issues, or change of mind after delivery/activation, subject to your statutory rights.",
                `Contact: To submit a request, email ${COMPANY_EMAIL} with your Account details and Order reference.`,
            ],
        },
        {
            type: "text",
            title: "2. Scope and Legal Notice",
            bullets: [
                `This Refund & Return Policy ("Policy") governs cancellations, disputes, and refund requests for eSIM data plan purchases made via ${COMPANY_URL}.`,
                `The Service is operated by ${COMPANY_LEGAL_NAME} (Company Number ${COMPANY_NUMBER}), registered at ${COMPANY_ADDRESS}.`,
                `Nothing in this Policy is intended to limit your statutory rights under UK law (including the Consumer Rights Act 2015 and Consumer Contracts Regulations 2013), except where lawful exemptions for digital content apply.`,
            ],
        },
        {
            type: "text",
            title: "3. Key Definitions",
            bullets: [
                "Plan / eSIM: A digital SIM profile and related activation details delivered electronically (e.g., QR code / activation instructions) enabling mobile data in the specified data allowance (GB) and validity period.",
                "Order: A confirmed purchase of a Plan.",
                "Digital Content: eSIM profile, QR code, activation details, and any digital instructions/materials supplied with the Plan.",
            ],
        },
        {
            type: "text",
            title: "4. General Refund Principles",
            bullets: [
                "Digital Delivery and Loss of Withdrawal Right (Where Applicable): By purchasing a Plan, you may be asked to consent to immediate digital delivery/performance. Where you consent to immediate delivery, you acknowledge that you may lose your statutory right to withdraw (the 14-day cooling-off period) for that specific digital content once delivery begins, to the extent permitted by law.",
                "Refund Cap: Any refund, where granted, is limited to the amount paid for the relevant Order. We are not responsible for third-party fees (e.g., bank charges), currency conversion losses, or overdraft fees.",
                "Device Compatibility and User Setup: You are responsible for ensuring your device is eSIM-compatible, unlocked, and capable of installing/using the Plan. Refunds may be refused where issues arise from incompatible devices, unsupported software, incorrect installation steps, or local device restrictions — subject to your statutory rights.",
                "Network Conditions and Subjectivity: Connectivity depends on local operators, congestion, geography, maintenance, building penetration, and regulation. Refunds will not be issued solely because you expected faster speeds or stronger coverage; service quality varies by location/time; you changed your travel plans or no longer need the Plan; or you prefer a different operator than the one used for routing/coverage. This does not affect your rights if the service is materially not as described or we fail to deliver.",
            ],
        },
        {
            type: "text",
            title: "5. Cancellations Before Delivery",
            bullets: [
                "14-Day Cancellation (Consumers): If you are a UK consumer, you may request a cancellation within 14 days of purchase only if the eSIM has not been delivered, installed, or activated.",
                "Once delivery has occurred (eSIM/activation details made available in your Account or sent to your email), cancellation is generally not available due to the digital nature of the product — subject to your statutory rights.",
            ],
        },
        {
            type: "text",
            title: "6. Refunds for Delivered Plans",
            bullets: [
                "Before Installation: If the eSIM QR code has been delivered but not yet scanned/installed on a device, contact us within 7 days of delivery. We may, at our discretion, issue a refund where technically possible to verify non-installation.",
                "After Installation/Activation: Once the eSIM has been installed and/or activated (connected to a network), refunds are generally not available — except where we fail to deliver, the Digital Content is defective or not as described, or a refund is required by applicable consumer law.",
            ],
        },
        {
            type: "text",
            title: "7. Quality Issues and Technical Faults",
            bullets: [
                "Non-Delivery / Invalid Details: If you did not receive the eSIM/activation details, or the provided details are invalid due to our error, notify us within 7 days of purchase. We will, at our option: reissue the eSIM/activation details, or issue a full refund if we cannot rectify the issue.",
                "Technical Issues on Our Side vs. Device/Network Issues: We may ask for reasonable evidence (screenshots, error codes, device model, OS version) to determine whether the issue is due to our systems, third-party provisioning, or the user's device/network. If the issue is caused by device incompatibility, user error, or local network conditions, refunds may be refused — subject to your statutory rights.",
            ],
        },
        {
            type: "text",
            title: "8. How to Request a Refund",
            bullets: [
                `Email ${COMPANY_EMAIL} with the subject line "Refund Request" and include:`,
                "Account email address;",
                "Order reference / transaction reference;",
                `Description of the issue (e.g., "Activation details invalid", "Duplicate charge", "eSIM not delivered");`,
                "Evidence (screenshots, error messages, proof of double charge if applicable).",
                "Timeline: We aim to acknowledge receipt within 48 hours; provide a decision within 5 business days; and process approved refunds within 5–10 business days (your bank may take longer to reflect funds).",
            ],
        },
        {
            type: "text",
            title: "9. Chargebacks and Disputes",
            bullets: [
                "We encourage you to contact support before initiating a bank dispute. Many issues can be resolved faster by reissuing an eSIM or providing a refund where appropriate.",
                "If a chargeback is initiated for a validly delivered Order without a legitimate basis, we may suspend your Account during investigation and take reasonable steps to protect the Service, including providing relevant transaction and access records to payment processors and banks where permitted by law.",
            ],
        },
        {
            type: "text",
            title: "10. Taxes",
            bullets: [
                "Prices are shown as inclusive or exclusive of applicable taxes as stated at checkout.",
                "If a refund is issued, we will refund any tax component included in the original payment where required by law and/or where it is part of the refunded amount.",
            ],
        },
        {
            type: "text",
            title: "11. Data Retention and Data Protection",
            bullets: [
                "To process refunds, prevent fraud, and meet accounting/tax obligations, we may retain transaction and dispute records for up to 6 years, in line with UK legal and accounting requirements.",
                "This processing is conducted in accordance with our Privacy Policy.",
            ],
        },
        {
            type: "text",
            title: "12. Illustrative Examples",
            bullets: [
                "Scenario A (No Refund): You purchased a 5 GB / 30-day plan, installed the eSIM, and used it. You later decided you no longer need it. Result: The plan was delivered and activated. No refund (subject to statutory rights).",
                "Scenario B (Refund Approved – Duplicate Charge): You attempted to buy a plan, the page froze, and your card was charged twice. Result: We refund the duplicate transaction in full to your original payment method.",
                "Scenario C (Reissue / Refund): You placed an Order and received activation details, but the QR code was invalid due to our provisioning error. Result: Contact support within 7 days. We will reissue the eSIM or issue a full refund.",
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

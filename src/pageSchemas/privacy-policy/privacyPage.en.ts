import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
    COMPANY_URL,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: `Privacy Policy – ${COMPANY_NAME}`,
        description:
            `How ${COMPANY_NAME} collects, uses, stores, and protects personal data for accounts, Token Wallet purchases, and eSIM Plan orders in line with UK GDPR.`,
        keywords: [
            "privacy policy",
            "data protection",
            "UK GDPR",
            "cookies",
            "token wallet",
            "esim",
            "orders",
            COMPANY_NAME?.toLowerCase() || "noirdrop",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Privacy Policy`,
            description: "Your privacy and data protection rights.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description: "Effective date: 17 October 2024",
        },
        {
            type: "text",
            title: "1. Introduction",
            description: `We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what personal data we collect, why we use it, how long we keep it, and how you can exercise your rights when using ${COMPANY_URL} and our eSIM-related services (the "Service").\n\nController: ${COMPANY_LEGAL_NAME} (Company No. ${COMPANY_NUMBER}), ${COMPANY_ADDRESS}.\nContact: ${COMPANY_EMAIL}.\nScope: This Policy applies to all users of the Service, including individuals who create an Account, purchase Tokens, place Orders, and receive or use an eSIM/Plan.\n\nBy using the Service, you acknowledge that your personal data will be processed in accordance with this Privacy Policy and applicable data protection laws, including the UK GDPR and the Data Protection Act 2018.`,
        },
        {
            type: "text",
            title: "2. Personal Data We Collect",
            description:
                "We collect only the data necessary to provide the Service, deliver eSIM Plans, process payments, maintain your Wallet and transaction history, secure the platform, and improve performance.",
        },
        {
            type: "text",
            title: "2.1. Data you provide directly",
            bullets: [
                "Account & Identity: Full name, email address, and password (stored in a protected form; we do not store plaintext passwords).",
                "Wallet & Tokens: Token balance, Order history, Token reservation (escrow/reserve) entries, Token spending logs, refunds/credits, and related transaction records.",
                "Order & Service Details: Plan selected, destination/coverage selection (if applicable), Order status, and delivery records (e.g., when eSIM/activation details were made available).",
                "Support & Communication: Messages you send to customer support (including attachments such as screenshots) and any information you choose to share for troubleshooting.",
            ],
        },
        {
            type: "text",
            title: "2.2. Data collected automatically",
            bullets: [
                "Technical Data: IP address, device identifiers (where available), device model, browser type, operating system, language settings, approximate region/timezone, and session identifiers.",
                "Usage Data: How you interact with the Service (pages visited, clicks, login events, Order attempts, error events, and performance metrics).",
                "Security & Fraud Signals: Login logs, failed authentication attempts, suspicious activity patterns, and signals used to protect Accounts, Tokens, and payments.",
            ],
        },
        {
            type: "text",
            title: "2.3. Data from third parties",
            bullets: [
                "Payment Processors: Payment confirmation, transaction references, card brand, and limited card details such as last four digits (where provided), as well as fraud/risk indicators. We do not store full payment card numbers or CVV on our servers.",
                "Connectivity / eSIM Partners (where applicable): Provisioning status and service delivery metadata necessary to deliver or troubleshoot an eSIM Plan (for example, whether an eSIM profile was successfully issued).",
            ],
        },
        {
            type: "text",
            title: "3. Why We Process Your Data and Our Legal Bases",
            description:
                "We process personal data under the UK GDPR on the following legal bases:",
            bullets: [
                "Performance of a contract: to create and manage your Account; maintain your Wallet and Token transactions; process Orders and deliver eSIM/activation details; provide customer support and handle service issues related to delivery.",
                "Legitimate interests: fraud prevention and security; service improvement; and platform integrity (preventing misuse and enforcing our Terms).",
                "Legal obligation: maintaining accounting and tax records and complying with applicable consumer protection requirements; responding to lawful requests from regulators or authorities where required.",
                "Consent: where required, for non-essential cookies/analytics; for marketing communications (if you opt in), which you can opt out of at any time.",
            ],
        },
        {
            type: "text",
            title: "4. Automated Processing",
            description:
                "We may use automated tools to help detect fraud, prevent abuse, and secure the Service (for example, risk scoring based on login/payment patterns). These measures are designed to protect users and the platform. We do not conduct automated decision-making that produces legal or similarly significant effects on you without appropriate safeguards; where required, you may request human review.",
        },
        {
            type: "text",
            title: "5. Sharing Your Data and International Transfers",
            description:
                "We share personal data only when necessary to operate the Service (for example: payment providers, hosting/infrastructure providers, analytics providers, eSIM/connectivity partners, and customer support tools). Some service providers may be located outside the UK and/or EEA. Where this occurs, we use appropriate safeguards such as adequacy regulations and/or approved contractual protections (e.g., UK IDTA and/or EU Standard Contractual Clauses, as applicable) to protect your data.",
        },
        {
            type: "text",
            title: "6. Data Retention",
            bullets: [
                "Account data: retained while your Account remains active.",
                "Inactive Accounts: if your Account remains completely inactive (no logins and no Token usage) for 24 months, we may delete or anonymise your Account data, subject to legal retention obligations.",
                "Financial and transaction records: retained for up to 6 years to meet UK accounting/tax obligations and handle disputes/chargebacks.",
                "Support records: retained for a reasonable period to resolve issues, enforce Terms, and maintain service quality.",
            ],
        },
        {
            type: "text",
            title: "7. Security",
            bullets: [
                "Encryption in transit (TLS/SSL) and protective controls where possible.",
                "Access controls and least-privilege policies for internal systems.",
                "Monitoring and logging to detect suspicious activity.",
                "Separation of payment processing from our core systems (payment data is handled by third-party processors).",
                "No online system is 100% secure. You are responsible for keeping your password confidential and using secure devices/networks where possible.",
            ],
        },
        {
            type: "text",
            title: "8. Your Rights",
            description:
                "Under the UK GDPR, you may have the right to:",
            bullets: [
                "Access your personal data.",
                "Rectification of inaccurate data.",
                "Erasure (right to be forgotten), subject to legal retention requirements.",
                "Restriction of processing in certain circumstances.",
                "Data portability (where applicable).",
                "Object to processing based on legitimate interests (including direct marketing).",
                "Withdraw consent at any time for processing based on consent (this does not affect processing already carried out).",
                `To exercise your rights, contact us at ${COMPANY_EMAIL}. We typically respond within 30 days.`,
            ],
        },
        {
            type: "text",
            title: "9. Cookies",
            description:
                "We use cookies and similar technologies to operate the Service, maintain secure sessions, protect Accounts/Wallets, and analyse site performance. Essential cookies are required for core functionality. For more details, please refer to our Cookies Policy.",
        },
        {
            type: "text",
            title: "10. Contact Details and Complaints",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
                "If you believe we have mishandled your personal data, you have the right to lodge a complaint with the UK supervisory authority, the Information Commissioner’s Office (ICO). We would appreciate the opportunity to address your concerns directly first.",
            ],
        },
    ],
};

export default privacyPolicySchema;

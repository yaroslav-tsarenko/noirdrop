import { sendEmail } from "@/backend/utils/sendEmail";
import { COMPANY_EMAIL } from "@/resources/constants";

export const contactService = {
    async sendContact(data: {
        name: string;
        secondName: string;
        email: string;
        phone: string;
        message?: string;
    }) {
        const digits = data.phone.replace(/\D/g, "");
        if (digits.length < 7) {
            throw new Error("Invalid phone number");
        }

        const text = `
Name: ${data.name}
Second Name: ${data.secondName}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message || "(none)"}
        `;
        await Promise.all([
            sendEmail(
                COMPANY_EMAIL ?? "",
                "Contact form request",
                text
            ),
            sendEmail(
                data.email,
                "We received your request",
                `Hi ${data.name}, we received your request and will get back to you shortly.`
            ),
        ]);
        return { message: "Contact request sent" };
    },
};

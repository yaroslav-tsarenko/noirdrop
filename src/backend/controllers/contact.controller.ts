import { contactService } from "../services/contact.service";

export const contactController = {
    async send(req: Request) {
        try {
            const body = await req.json();
            await contactService.sendContact(body);
            return new Response(JSON.stringify({ message: "Contact request sent" }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to send contact request";

            return new Response(JSON.stringify({ message }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
    },
};

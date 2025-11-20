import { NextResponse } from "next/server";
import { sendEmail } from "@/backend/utils/sendEmail";
import { ENV } from "@/backend/config/env";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            fullName,
            email,
            country,
            items,
            total,
        } = body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json(
                { error: "Cart is empty" },
                { status: 400 }
            );
        }

        const managerEmail = ENV.EMAIL_FROM; // <-- ВАЖЛИВО

        const html = `
            <div style="font-family:Arial; padding:20px">
                <h2 style="color:#1a73e8">📦 New eSIM Order</h2>

                <h3>👤 Customer Info</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Country:</strong> ${country}</p>

                <h3>🛒 Items</h3>
                <ul>
                    ${items
            .map(
                (i: any) =>
                    `<li><strong>${i.name}</strong> — €${i.price} × ${i.qty}</li>`
            )
            .join("")}
                </ul>

                <h2>Total: €${total}</h2>
            </div>
        `;

        await sendEmail(
            managerEmail,
            "New eSIM Order",
            "A new order was placed",
            html
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Error sending order email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}

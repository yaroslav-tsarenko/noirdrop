import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { EsimOrder } from "@/backend/models/esimOrder.model";
import { sendEmail } from "@/backend/utils/sendEmail";
import { ENV } from "@/backend/config/env";

type CheckoutItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
};

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuth(req);
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

        if (!fullName || !email || !country) {
            return NextResponse.json(
                { error: "Missing checkout fields" },
                { status: 400 }
            );
        }

        await connectDB();

        const order = await EsimOrder.create({
            userId: user.sub,
            email,
            fullName,
            country,
            items,
            total,
            status: "submitted",
        });

        const managerEmail = ENV.EMAIL_FROM; // <-- ВАЖЛИВО

        const checkoutItems = items as CheckoutItem[];

        const html = `
            <div style="font-family:Arial; padding:20px">
                <h2 style="color:#1a73e8">📦 New eSIM Order</h2>

                <h3>👤 Customer Info</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Country:</strong> ${country}</p>

                <h3>🛒 Items</h3>
                <ul>
                    ${checkoutItems
            .map(
                (i) =>
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

        return NextResponse.json({ success: true, orderId: order._id });
    } catch (error: unknown) {
        console.error("❌ Error sending order email:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to send email" },
            { status: 500 }
        );
    }
}

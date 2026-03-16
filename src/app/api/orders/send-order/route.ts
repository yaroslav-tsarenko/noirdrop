import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { EsimOrder } from "@/backend/models/esimOrder.model";
import { sendEmail } from "@/backend/utils/sendEmail";
import { ENV } from "@/backend/config/env";
import { COMPANY_EMAIL } from "@/resources/constants";
import { renderToBuffer } from "@react-pdf/renderer";
import { EsimInvoicePdf } from "@/backend/templates/EsimInvoicePdf";

type CheckoutItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
};

const formatMoney = (amount: number) => `EUR ${amount.toFixed(2)}`;

const buildItemsMarkup = (items: CheckoutItem[]) =>
    items
        .map(
            (item) =>
                `<li><strong>${item.name}</strong> — ${item.qty} x ${formatMoney(item.price)} = ${formatMoney(item.price * item.qty)}</li>`
        )
        .join("");

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

        const checkoutItems = items as CheckoutItem[];
        const createdAt = new Date(order.createdAt).toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
        });
        const invoiceNumber = `ESIM-${order._id.toString().slice(-8).toUpperCase()}`;
        const invoiceBuffer = await renderToBuffer(
            EsimInvoicePdf({
                invoiceNumber,
                createdAt,
                customer: { fullName, email, country },
                items: checkoutItems,
                total: Number(total),
            })
        );
        const attachments = [
            {
                filename: `${invoiceNumber}.pdf`,
                content: invoiceBuffer.toString("base64"),
                encoding: "base64" as const,
            },
        ];

        const customerHtml = `
            <div style="font-family:Arial,sans-serif;padding:24px;color:#111827">
                <h2 style="margin:0 0 16px;color:#111827">Your eSIM order is confirmed</h2>
                <p style="margin:0 0 12px">Thank you, ${fullName}. Your order <strong>${invoiceNumber}</strong> has been received.</p>
                <p style="margin:0 0 12px">We attached your PDF invoice to this email.</p>
                <div style="padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb">
                    <p style="margin:0 0 8px"><strong>Country:</strong> ${country}</p>
                    <p style="margin:0 0 8px"><strong>Total:</strong> ${formatMoney(Number(total))}</p>
                    <ul style="padding-left:18px;margin:12px 0 0">
                        ${buildItemsMarkup(checkoutItems)}
                    </ul>
                </div>
            </div>
        `;

        const internalHtml = `
            <div style="font-family:Arial,sans-serif;padding:24px;color:#111827">
                <h2 style="margin:0 0 16px;color:#111827">New paid eSIM order</h2>
                <p style="margin:0 0 8px"><strong>Invoice:</strong> ${invoiceNumber}</p>
                <p style="margin:0 0 8px"><strong>Customer:</strong> ${fullName}</p>
                <p style="margin:0 0 8px"><strong>Email:</strong> ${email}</p>
                <p style="margin:0 0 8px"><strong>Country:</strong> ${country}</p>
                <p style="margin:0 0 8px"><strong>Total paid:</strong> ${formatMoney(Number(total))}</p>
                <p style="margin:0 0 12px"><strong>Date:</strong> ${createdAt}</p>

                <h3 style="margin:20px 0 8px">Items</h3>
                <ul style="padding-left:18px;margin:0">
                    ${buildItemsMarkup(checkoutItems)}
                </ul>
            </div>
        `;

        const managerEmail =
            process.env.ORDER_NOTIFICATIONS_EMAIL ||
            COMPANY_EMAIL ||
            ENV.EMAIL_FROM;

        await Promise.all([
            sendEmail(
                email,
                `Invoice ${invoiceNumber} from Noirdrop`,
                `Your eSIM purchase for ${formatMoney(Number(total))} is confirmed.`,
                customerHtml,
                attachments
            ),
            sendEmail(
                managerEmail,
                `New eSIM purchase: ${invoiceNumber}`,
                `${fullName} purchased eSIM products for ${formatMoney(Number(total))}.`,
                internalHtml,
                attachments
            ),
        ]);

        return NextResponse.json({ success: true, orderId: order._id });
    } catch (error: unknown) {
        console.error("❌ Error sending order email:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to send email" },
            { status: 500 }
        );
    }
}

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
            <div style="font-family:Arial,sans-serif;background:#f6f2ff;padding:32px;color:#111827">
                <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #eadfff;border-radius:18px;overflow:hidden">
                    <div style="padding:24px 24px 18px;background:linear-gradient(135deg,#3a063d,#8f1bb3 70%,#b86dd0);color:#fff">
                        <p style="margin:0 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.8">Noirdrop orders</p>
                        <h1 style="margin:0;font-size:26px;line-height:1.2">Your eSIM order is confirmed</h1>
                        <p style="margin:12px 0 0;font-size:15px;opacity:.92">Invoice <strong>${invoiceNumber}</strong> is attached as PDF.</p>
                    </div>
                    <div style="padding:24px">
                        <p style="margin:0 0 16px">Hi ${fullName},</p>
                        <p style="margin:0 0 20px">Thank you for your order. We recorded your purchase successfully and sent this confirmation to <strong>${email}</strong>.</p>
                        <div style="display:grid;gap:12px;margin:0 0 20px">
                            <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Destination</p>
                                <p style="margin:0;font-size:16px;font-weight:700">${country}</p>
                            </div>
                            <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Total paid</p>
                                <p style="margin:0;font-size:16px;font-weight:700">${formatMoney(Number(total))}</p>
                            </div>
                        </div>
                        <div style="padding:16px;border:1px solid #eadfff;border-radius:12px;background:#f9f7ff;margin-bottom:20px">
                            <p style="margin:0 0 10px;font-weight:700">Order details</p>
                            <ul style="padding-left:18px;margin:0">
                                ${buildItemsMarkup(checkoutItems)}
                            </ul>
                        </div>
                        <div style="padding:16px;border-radius:12px;background:#f7f4ff;border:1px solid #eadfff">
                            <p style="margin:0 0 8px;font-weight:700">Next steps</p>
                            <p style="margin:0 0 6px">Keep the attached invoice for your records.</p>
                            <p style="margin:0">If you need help with billing, activation or delivery, reply to this email and include invoice <strong>${invoiceNumber}</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const internalHtml = `
            <div style="font-family:Arial,sans-serif;background:#f6f2ff;padding:24px;color:#111827">
                <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #eadfff;border-radius:16px;padding:24px">
                    <h2 style="margin:0 0 18px;color:#3d0a49">New paid eSIM order</h2>
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
            </div>
        `;

        const managerEmail =
            process.env.ORDER_NOTIFICATIONS_EMAIL ||
            COMPANY_EMAIL ||
            ENV.EMAIL_FROM;

        const [customerEmailResult, managerEmailResult] = await Promise.allSettled([
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

        if (customerEmailResult.status === "rejected") {
            throw customerEmailResult.reason;
        }

        if (managerEmailResult.status === "rejected") {
            console.error("Failed to send internal eSIM order notification:", managerEmailResult.reason);
        }

        return NextResponse.json({ success: true, orderId: order._id });
    } catch (error: unknown) {
        console.error("❌ Error sending order email:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to send email" },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { EsimOrder } from "@/backend/models/esimOrder.model";
import { User } from "@/backend/models/user.model";
import { Transaction } from "@/backend/models/transaction.model";
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

function generateInvoiceNumber(orderId: string): string {
    return `ESIM-${orderId.slice(-8).toUpperCase()}`;
}

const buildItemsMarkup = (items: CheckoutItem[]) =>
    items
        .map(
            (item) =>
                `<li><strong>${item.name}</strong> — ${item.qty} x ${item.price} tokens = ${item.price * item.qty} tokens</li>`
        )
        .join("");

export async function POST(req: NextRequest) {
    try {
        const authUser = await requireAuth(req);
        const body = await req.json();

        const { fullName, email, country, items, total } = body;

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

        const tokensRequired = Number(total);
        if (!tokensRequired || tokensRequired <= 0) {
            return NextResponse.json(
                { error: "Invalid total" },
                { status: 400 }
            );
        }

        await connectDB();

        const user = await User.findById(authUser.sub);
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        if ((user.tokens ?? 0) < tokensRequired) {
            return NextResponse.json(
                {
                    error: "Insufficient tokens",
                    required: tokensRequired,
                    available: user.tokens ?? 0,
                },
                { status: 400 }
            );
        }

        user.tokens = (user.tokens ?? 0) - tokensRequired;
        await user.save();

        await Transaction.create({
            userId: user._id,
            email: user.email,
            amount: tokensRequired,
            type: "spend",
        });

        const order = await EsimOrder.create({
            userId: authUser.sub,
            email,
            fullName,
            country,
            items,
            total,
            tokensSpent: tokensRequired,
            invoiceNumber: "TMP",
            status: "pending",
        });

        const invoiceNumber = generateInvoiceNumber(order._id.toString());
        order.invoiceNumber = invoiceNumber;
        await order.save();

        const checkoutItems = items as CheckoutItem[];
        const createdAt = new Date(order.createdAt).toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
        });

        const invoiceBuffer = await renderToBuffer(
            EsimInvoicePdf({
                invoiceNumber,
                createdAt,
                customer: { fullName, email, country },
                items: checkoutItems,
                total: tokensRequired,
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
                        <h1 style="margin:0;font-size:26px;line-height:1.2">Your eSIM purchase is completed!</h1>
                        <p style="margin:12px 0 0;font-size:15px;opacity:.92">Invoice <strong>${invoiceNumber}</strong> is attached as PDF.</p>
                    </div>
                    <div style="padding:24px">
                        <p style="margin:0 0 16px">Hi ${fullName},</p>
                        <p style="margin:0 0 20px">Thank you for your purchase! Your eSIM order has been placed successfully using <strong>${tokensRequired} tokens</strong>.</p>
                        <div style="display:grid;gap:12px;margin:0 0 20px">
                            <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Destination</p>
                                <p style="margin:0;font-size:16px;font-weight:700">${country}</p>
                            </div>
                            <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Tokens spent</p>
                                <p style="margin:0;font-size:16px;font-weight:700">${tokensRequired} tokens</p>
                            </div>
                        </div>
                        <div style="padding:16px;border:1px solid #eadfff;border-radius:12px;background:#f9f7ff;margin-bottom:20px">
                            <p style="margin:0 0 10px;font-weight:700">Order details</p>
                            <ul style="padding-left:18px;margin:0">
                                ${buildItemsMarkup(checkoutItems)}
                            </ul>
                        </div>
                        <div style="padding:16px;border-radius:12px;background:#fff3cd;border:1px solid #ffc107;margin-bottom:20px">
                            <p style="margin:0 0 8px;font-weight:700;color:#856404">What happens next?</p>
                            <p style="margin:0;color:#856404">Your order is now being reviewed. <strong>A manager will contact you soon</strong> to complete the eSIM activation and delivery process. You can track the status of your order in your dashboard.</p>
                        </div>
                        <div style="padding:16px;border-radius:12px;background:#f7f4ff;border:1px solid #eadfff">
                            <p style="margin:0 0 8px;font-weight:700">Need help?</p>
                            <p style="margin:0">If you have any questions, reply to this email and include invoice <strong>${invoiceNumber}</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const internalHtml = `
            <div style="font-family:Arial,sans-serif;background:#f6f2ff;padding:24px;color:#111827">
                <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #eadfff;border-radius:16px;padding:24px">
                    <h2 style="margin:0 0 18px;color:#3d0a49">New eSIM order (tokens)</h2>
                    <p style="margin:0 0 8px"><strong>Invoice:</strong> ${invoiceNumber}</p>
                    <p style="margin:0 0 8px"><strong>Customer:</strong> ${fullName}</p>
                    <p style="margin:0 0 8px"><strong>Email:</strong> ${email}</p>
                    <p style="margin:0 0 8px"><strong>Country:</strong> ${country}</p>
                    <p style="margin:0 0 8px"><strong>Tokens spent:</strong> ${tokensRequired}</p>
                    <p style="margin:0 0 8px"><strong>Status:</strong> Pending — manager action required</p>
                    <p style="margin:0 0 12px"><strong>Date:</strong> ${createdAt}</p>
                    <h3 style="margin:20px 0 8px">Items</h3>
                    <ul style="padding-left:18px;margin:0">
                        ${buildItemsMarkup(checkoutItems)}
                    </ul>
                    <div style="margin-top:20px;padding:14px;background:#fff3cd;border:1px solid #ffc107;border-radius:10px">
                        <p style="margin:0;color:#856404;font-weight:600">Action required: Please contact the customer to complete eSIM activation.</p>
                    </div>
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
                `eSIM Purchase Confirmed — ${invoiceNumber}`,
                `Your eSIM purchase for ${tokensRequired} tokens is confirmed. A manager will contact you soon.`,
                customerHtml,
                attachments
            ),
            sendEmail(
                managerEmail,
                `New eSIM order: ${invoiceNumber} — Action Required`,
                `${fullName} purchased eSIM products for ${tokensRequired} tokens. Manager action required.`,
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

        return NextResponse.json({
            success: true,
            orderId: order._id,
            invoiceNumber,
            tokensSpent: tokensRequired,
            remainingTokens: user.tokens,
        });
    } catch (error: unknown) {
        console.error("Error processing eSIM order:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to process order" },
            { status: 500 }
        );
    }
}

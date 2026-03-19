import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { sendEmail } from "@/backend/utils/sendEmail";
import { Transaction } from "../models/transaction.model";
import { renderToBuffer } from "@react-pdf/renderer";
import { TokenPurchaseInvoicePdf } from "@/backend/templates/TokenPurchaseInvoicePdf";
import { COMPANY_EMAIL } from "@/resources/constants";
import { ENV } from "../config/env";

export const userController = {
    async buyTokens(
        userId: string,
        {
            amount,
            packageTitle,
            pricePaid,
            currency,
        }: {
            amount: number;
            packageTitle?: string;
            pricePaid?: number;
            currency?: string;
        }
    ): Promise<UserType> {
        await connectDB();
        const user = await userService.addTokens(userId, amount);
        await Transaction.create({
            userId: user._id,
            email: user.email,
            amount,
            type: "add",
        });

        const purchaseSummary =
            pricePaid && currency
                ? `${currency.toUpperCase()} ${pricePaid.toFixed(2)}`
                : "Included in invoice";

        const createdAt = new Date().toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
        });
        const invoiceNumber = `TOK-${Date.now().toString().slice(-8)}`;
        const safePackageTitle = packageTitle || "Custom token purchase";
        const safeCurrency = currency || "EUR";

        const invoiceBuffer = await renderToBuffer(
            TokenPurchaseInvoicePdf({
                invoiceNumber,
                createdAt,
                customer: {
                    fullName: user.name,
                    email: user.email,
                },
                packageTitle: safePackageTitle,
                tokenAmount: amount,
                pricePaid: pricePaid ?? 0,
                currency: safeCurrency,
                newBalance: user.tokens,
            })
        );

        const attachments = [
            {
                filename: `${invoiceNumber}.pdf`,
                content: invoiceBuffer.toString("base64"),
                encoding: "base64" as const,
            },
        ];

        const managerEmail =
            process.env.ORDER_NOTIFICATIONS_EMAIL ||
            COMPANY_EMAIL ||
            ENV.EMAIL_FROM;

        void Promise.allSettled([
            sendEmail(
                user.email,
                `Token invoice ${invoiceNumber} from Noirdrop`,
                `You have successfully purchased ${amount} tokens. Your new balance is ${user.tokens} tokens.`,
                `
                    <div style="font-family:Arial,sans-serif;background:#f6f2ff;padding:32px;color:#1f2937">
                        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #eadfff;border-radius:18px;overflow:hidden">
                            <div style="padding:24px 24px 18px;background:linear-gradient(135deg,#3a063d,#8f1bb3 70%,#b86dd0);color:#fff">
                                <p style="margin:0 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.8">Noirdrop billing</p>
                                <h1 style="margin:0;font-size:26px;line-height:1.2">Your token purchase is confirmed</h1>
                                <p style="margin:12px 0 0;font-size:15px;opacity:.92">Invoice <strong>${invoiceNumber}</strong> is attached as PDF for your records.</p>
                            </div>
                            <div style="padding:24px">
                                <p style="margin:0 0 16px">Hi ${user.name},</p>
                                <p style="margin:0 0 20px">We successfully credited your account with new tokens. You can use them immediately for purchases and future top-ups.</p>
                                <div style="display:grid;gap:12px;margin:0 0 20px">
                                    <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                        <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Package</p>
                                        <p style="margin:0;font-size:16px;font-weight:700">${safePackageTitle}</p>
                                    </div>
                                    <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                        <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Tokens added</p>
                                        <p style="margin:0;font-size:16px;font-weight:700">${amount}</p>
                                    </div>
                                    <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                        <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Amount paid</p>
                                        <p style="margin:0;font-size:16px;font-weight:700">${purchaseSummary}</p>
                                    </div>
                                    <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                        <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">New balance</p>
                                        <p style="margin:0;font-size:16px;font-weight:700">${user.tokens} tokens</p>
                                    </div>
                                </div>
                                <div style="padding:16px;border-radius:12px;background:#f7f4ff;border:1px solid #eadfff">
                                    <p style="margin:0 0 8px;font-weight:700">What happens next</p>
                                    <p style="margin:0 0 6px">Your token balance is already updated in your account.</p>
                                    <p style="margin:0">If you need a billing correction or support, reply to this email and include invoice <strong>${invoiceNumber}</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                attachments
            ),
            sendEmail(
                managerEmail,
                `New token purchase: ${invoiceNumber}`,
                `${user.name} purchased ${amount} tokens.`,
                `
                    <div style="font-family:Arial,sans-serif;background:#f6f2ff;padding:24px;color:#111827">
                        <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #eadfff;border-radius:16px;padding:24px">
                            <h2 style="margin:0 0 18px;color:#3d0a49">New token purchase</h2>
                            <p style="margin:0 0 8px"><strong>Invoice:</strong> ${invoiceNumber}</p>
                            <p style="margin:0 0 8px"><strong>Customer:</strong> ${user.name}</p>
                            <p style="margin:0 0 8px"><strong>Email:</strong> ${user.email}</p>
                            <p style="margin:0 0 8px"><strong>Package:</strong> ${safePackageTitle}</p>
                            <p style="margin:0 0 8px"><strong>Tokens added:</strong> ${amount}</p>
                            <p style="margin:0 0 8px"><strong>Amount paid:</strong> ${purchaseSummary}</p>
                            <p style="margin:0"><strong>New balance:</strong> ${user.tokens}</p>
                        </div>
                    </div>
                `,
                attachments
            ),
        ]).then((results) => {
            const [customerResult, managerResult] = results;

            if (customerResult.status === "rejected") {
                console.error("Failed to send token purchase email:", customerResult.reason);
            }

            if (managerResult.status === "rejected") {
                console.error("Failed to send token purchase notification:", managerResult.reason);
            }
        });

        return {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            tokens: user.tokens,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    },
};

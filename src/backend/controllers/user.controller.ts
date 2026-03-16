import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { sendEmail } from "@/backend/utils/sendEmail";
import { Transaction } from "../models/transaction.model";

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
                ? `Payment received: ${currency} ${pricePaid.toFixed(2)}.`
                : "";

        void sendEmail(
            user.email,
            "Tokens Purchased",
            `You have successfully purchased ${amount} tokens. Your new balance is ${user.tokens} tokens.`,
            `
                <div style="font-family:Arial,sans-serif;padding:24px;color:#111827">
                    <h2 style="margin:0 0 16px">Tokens added successfully</h2>
                    <p style="margin:0 0 10px"><strong>Package:</strong> ${packageTitle || "Custom token purchase"}</p>
                    <p style="margin:0 0 10px"><strong>Tokens added:</strong> ${amount}</p>
                    <p style="margin:0 0 10px"><strong>New balance:</strong> ${user.tokens}</p>
                    <p style="margin:0">${purchaseSummary}</p>
                </div>
            `
        ).catch((error) => {
            console.error("Failed to send token purchase email:", error);
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

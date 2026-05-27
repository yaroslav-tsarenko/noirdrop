import { connectDB } from "@/backend/config/db";
import { PaymentOrder } from "@/backend/models/payment-order.model";
import { Transaction } from "@/backend/models/transaction.model";
import { User } from "@/backend/models/user.model";
import { logCardServEvent } from "@/backend/services/cardserv.service";

interface GatewayUpdateInput {
    orderMerchantId: string;
    orderState: string;
    orderSystemId: string | null;
    redirectUrl?: string | null;
    errorCode: string | null;
    errorMessage: string | null;
    raw: unknown;
    source: string;
}

type GatewayUpdateResult =
    | { ok: true; finalized: boolean; credited: boolean; tokensAdded: number; newBalance: number | null; orderStatus: string }
    | { ok: false; error: string };

const TERMINAL_STATES = ["APPROVED", "DECLINED", "ERROR", "FILTERED"];

export async function applyCardServGatewayUpdate(input: GatewayUpdateInput): Promise<GatewayUpdateResult> {
    await connectDB();

    const order = await PaymentOrder.findOne({ orderMerchantId: input.orderMerchantId });
    if (!order) {
        return { ok: false, error: "Order not found" };
    }

    if (order.status === "CREDITED") {
        return { ok: true, finalized: true, credited: false, tokensAdded: 0, newBalance: null, orderStatus: "CREDITED" };
    }

    const isTerminal = TERMINAL_STATES.includes(input.orderState);
    const isApproved = input.orderState === "APPROVED";

    if (isApproved) {
        // Atomically claim the order for crediting — prevents double-credit
        // when result route and webhook fire concurrently.
        const claimed = await PaymentOrder.findOneAndUpdate(
            { orderMerchantId: input.orderMerchantId, status: { $ne: "CREDITED" } },
            {
                $set: {
                    status: "CREDITED",
                    creditedAt: new Date(),
                    orderSystemId: input.orderSystemId ?? order.orderSystemId,
                    redirectUrl: input.redirectUrl ?? order.redirectUrl,
                    errorCode: input.errorCode ?? order.errorCode,
                    errorMessage: input.errorMessage ?? order.errorMessage,
                    gatewayRaw: input.raw as Record<string, unknown>,
                },
            },
            { new: true },
        );

        if (!claimed) {
            return { ok: true, finalized: true, credited: false, tokensAdded: 0, newBalance: null, orderStatus: "CREDITED" };
        }

        try {
            const user = await User.findByIdAndUpdate(
                order.userId,
                { $inc: { tokens: order.tokens } },
                { new: true },
            );

            if (!user) {
                logCardServEvent("payment-orders.credit_error", {
                    orderMerchantId: input.orderMerchantId,
                    error: "User not found",
                });
                await PaymentOrder.updateOne(
                    { orderMerchantId: input.orderMerchantId },
                    { $set: { status: "ERROR", errorMessage: "User not found for crediting" } },
                );
                return { ok: false, error: "User not found" };
            }

            await Transaction.create({
                userId: order.userId,
                email: user.email,
                amount: order.tokens,
                type: "add",
            });

            logCardServEvent("payment-orders.credited", {
                orderMerchantId: input.orderMerchantId,
                tokens: order.tokens,
                newBalance: user.tokens,
                source: input.source,
            });

            return {
                ok: true,
                finalized: true,
                credited: true,
                tokensAdded: order.tokens,
                newBalance: user.tokens,
                orderStatus: "CREDITED",
            };
        } catch (err) {
            logCardServEvent("payment-orders.credit_exception", {
                orderMerchantId: input.orderMerchantId,
                error: err instanceof Error ? err.message : String(err),
            });
            await PaymentOrder.updateOne(
                { orderMerchantId: input.orderMerchantId },
                { $set: { status: "ERROR", errorMessage: `Credit exception: ${err instanceof Error ? err.message : String(err)}` } },
            ).catch(() => {});
            return { ok: false, error: "Failed to credit tokens" };
        }
    }

    // Not approved — update gateway fields and status
    order.orderSystemId = input.orderSystemId ?? order.orderSystemId;
    order.redirectUrl = input.redirectUrl ?? order.redirectUrl;
    order.errorCode = input.errorCode ?? order.errorCode;
    order.errorMessage = input.errorMessage ?? order.errorMessage;
    order.gatewayRaw = input.raw as Record<string, unknown>;

    if (isTerminal) {
        order.status = input.orderState as typeof order.status;
    }
    await order.save();

    return { ok: true, finalized: isTerminal, credited: false, tokensAdded: 0, newBalance: null, orderStatus: order.status };
}


import { NextRequest, NextResponse } from "next/server";

import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { connectDB } from "@/backend/config/db";
import { isForceSuccessEnabled, type CardServCurrency } from "@/backend/config/cardserv-config";
import { PaymentOrder } from "@/backend/models/payment-order.model";
import { getCardServStatus, logCardServEvent } from "@/backend/services/cardserv.service";
import { applyCardServGatewayUpdate } from "@/backend/services/payment-orders.service";

export async function POST(req: NextRequest) {
    try {
        const authPayload = await requireAuth(req);
        const userId = authPayload.sub;

        await connectDB();
        const { orderMerchantId } = await req.json();

        if (typeof orderMerchantId !== "string" || orderMerchantId.length < 4) {
            return NextResponse.json({ error: "Invalid orderMerchantId" }, { status: 400 });
        }

        logCardServEvent("status.route_request", {
            orderMerchantId,
            userId,
            forceSuccess: isForceSuccessEnabled(),
        });

        const order = await PaymentOrder.findOne({ orderMerchantId });
        if (!order || order.userId.toString() !== userId) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }

        if (isForceSuccessEnabled()) {
            const forced = await applyCardServGatewayUpdate({
                orderMerchantId,
                orderState: "APPROVED",
                orderSystemId: order.orderSystemId ?? `forced_${orderMerchantId}`,
                errorCode: null,
                errorMessage: null,
                raw: { forced: true, source: "status", at: new Date().toISOString() },
                source: "status",
            });

            return NextResponse.json({
                ok: true,
                orderMerchantId,
                orderSystemId: order.orderSystemId ?? `forced_${orderMerchantId}`,
                state: "APPROVED",
                redirectUrl: null,
                errorCode: null,
                errorMessage: null,
                finalized: forced.ok ? forced.finalized : false,
                credited: forced.ok && "credited" in forced ? forced.credited : false,
                tokensAdded: forced.ok && "tokensAdded" in forced ? forced.tokensAdded : 0,
                newBalance: forced.ok && "newBalance" in forced ? forced.newBalance : null,
            });
        }

        const status = await getCardServStatus(
            orderMerchantId,
            order.currency as CardServCurrency,
            order.orderSystemId,
        );

        const result = await applyCardServGatewayUpdate({
            orderMerchantId,
            orderState: status.orderState,
            orderSystemId: status.orderSystemId,
            redirectUrl: status.redirectUrl,
            errorCode: status.errorCode,
            errorMessage: status.errorMessage,
            raw: status.raw,
            source: "status",
        });

        return NextResponse.json({
            ok: true,
            orderMerchantId,
            orderSystemId: status.orderSystemId,
            state: status.orderState,
            redirectUrl: status.redirectUrl,
            errorCode: status.errorCode,
            errorMessage: status.errorMessage,
            finalized: result.ok ? result.finalized : false,
            credited: result.ok && "credited" in result ? result.credited : false,
            tokensAdded: result.ok && "tokensAdded" in result ? result.tokensAdded : 0,
            newBalance: result.ok && "newBalance" in result ? result.newBalance : null,
        });
    } catch (error) {
        logCardServEvent("status.route_error", {
            error: error instanceof Error ? error.message : String(error),
        });
        const message = error instanceof Error ? error.message : "Failed to fetch payment status";
        const status = message === "Missing auth" || message === "Invalid or expired token" ? 401 : 500;
        return NextResponse.json({ ok: false, error: message }, { status });
    }
}

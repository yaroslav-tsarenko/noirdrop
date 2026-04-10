import { NextResponse } from "next/server";

import { connectDB } from "@/backend/config/db";
import { PaymentOrder } from "@/backend/models/payment-order.model";
import { parseCardServWebhookPayload, readCardServWebhookOrderId, logCardServEvent } from "@/backend/services/cardserv.service";
import { applyCardServGatewayUpdate } from "@/backend/services/payment-orders.service";

export async function POST(req: Request) {
    try {
        await connectDB();
        const payload = (await req.json().catch(() => ({}))) as Record<string, unknown>;
        const orderMerchantId = readCardServWebhookOrderId(payload);

        logCardServEvent("webhook.route_request", { orderMerchantId, payload });

        if (!orderMerchantId) {
            return NextResponse.json({ ok: false, error: "Missing orderMerchantId" }, { status: 400 });
        }

        const order = await PaymentOrder.findOne({ orderMerchantId });
        if (!order) {
            return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 });
        }

        const status = parseCardServWebhookPayload(payload);

        const result = await applyCardServGatewayUpdate({
            orderMerchantId,
            orderState: status.orderState,
            orderSystemId: status.orderSystemId,
            redirectUrl: status.redirectUrl,
            errorCode: status.errorCode,
            errorMessage: status.errorMessage,
            raw: { webhook: payload },
            source: "webhook",
        });

        return NextResponse.json({
            ok: true,
            orderMerchantId,
            state: status.orderState,
            finalized: result.ok ? result.finalized : false,
            credited: result.ok && "credited" in result ? result.credited : false,
            tokensAdded: result.ok && "tokensAdded" in result ? result.tokensAdded : 0,
        });
    } catch (error) {
        logCardServEvent("webhook.route_error", {
            error: error instanceof Error ? error.message : String(error),
        });
        const message = error instanceof Error ? error.message : "Webhook processing failed";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}


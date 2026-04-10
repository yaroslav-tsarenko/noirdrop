import mongoose, { Schema, Document } from "mongoose";

export interface PaymentOrderDocument extends Document {
    userId: mongoose.Types.ObjectId;
    packageId: string;
    packageName: string;
    currency: string;
    amountNet: number;
    vatAmount: number;
    amountGross: number;
    tokens: number;
    status: "PENDING" | "APPROVED" | "DECLINED" | "ERROR" | "CREDITED";
    orderMerchantId: string;
    orderSystemId?: string | null;
    redirectUrl?: string | null;
    errorCode?: string | null;
    errorMessage?: string | null;
    gatewayRaw?: Record<string, unknown>;
    creditedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const paymentOrderSchema = new Schema<PaymentOrderDocument>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
        packageId: { type: String, required: true },
        packageName: { type: String, required: true },
        currency: { type: String, required: true },
        amountNet: { type: Number, required: true },
        vatAmount: { type: Number, default: 0 },
        amountGross: { type: Number, required: true },
        tokens: { type: Number, required: true },
        status: {
            type: String,
            enum: ["PENDING", "APPROVED", "DECLINED", "ERROR", "CREDITED"],
            default: "PENDING",
        },
        orderMerchantId: { type: String, required: true, unique: true, index: true },
        orderSystemId: { type: String, default: null },
        redirectUrl: { type: String, default: null },
        errorCode: { type: String, default: null },
        errorMessage: { type: String, default: null },
        gatewayRaw: { type: Schema.Types.Mixed, default: null },
        creditedAt: { type: Date, default: null },
    },
    { timestamps: true },
);

export const PaymentOrder =
    mongoose.models.PaymentOrder ||
    mongoose.model<PaymentOrderDocument>("PaymentOrder", paymentOrderSchema);


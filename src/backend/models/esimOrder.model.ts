import mongoose, { Document, Schema } from "mongoose";

export interface EsimOrderItem {
    id: string;
    name: string;
    price: number;
    qty: number;
}

export interface EsimOrderDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    fullName: string;
    country: string;
    items: EsimOrderItem[];
    total: number;
    status: "submitted";
    createdAt: Date;
}

const esimOrderItemSchema = new Schema<EsimOrderItem>(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true, min: 1 },
    },
    { _id: false }
);

const esimOrderSchema = new Schema<EsimOrderDocument>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    country: { type: String, required: true },
    items: { type: [esimOrderItemSchema], required: true, default: [] },
    total: { type: Number, required: true },
    status: { type: String, enum: ["submitted"], default: "submitted" },
    createdAt: { type: Date, default: Date.now },
});

export const EsimOrder =
    mongoose.models.EsimOrder ||
    mongoose.model<EsimOrderDocument>("EsimOrder", esimOrderSchema);

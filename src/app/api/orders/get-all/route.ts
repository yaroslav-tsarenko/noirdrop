import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/backend/config/db";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { EsimOrder } from "@/backend/models/esimOrder.model";

export async function GET(req: NextRequest) {
    try {
        const user = await requireAuth(req);

        await connectDB();

        const orders = await EsimOrder.find({ userId: user.sub }).sort({ createdAt: -1 });

        return NextResponse.json({ orders });
    } catch (error: unknown) {
        return NextResponse.json(
            { message: error instanceof Error ? error.message : "Failed to fetch orders" },
            { status: 400 }
        );
    }
}

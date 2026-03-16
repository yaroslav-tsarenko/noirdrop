import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { userController } from "@/backend/controllers/user.controller";

type BuyTokensRequest = {
    amount?: number | string;
    tokenAmount?: number | string;
    packageTitle?: string;
    pricePaid?: number | string;
    currency?: string;
};

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const body = (await req.json()) as BuyTokensRequest;
        const rawAmount = body.tokenAmount ?? body.amount;
        const amount =
            typeof rawAmount === "string" ? Number(rawAmount) : rawAmount;
        const pricePaid =
            typeof body.pricePaid === "string"
                ? Number(body.pricePaid)
                : body.pricePaid;

        if (!Number.isFinite(amount) || !amount || amount <= 0) {
            return NextResponse.json({ message: "Invalid token amount" }, { status: 400 });
        }

        const user = await userController.buyTokens(payload.sub, {
            amount: Math.floor(amount),
            packageTitle: body.packageTitle,
            pricePaid: Number.isFinite(pricePaid) ? pricePaid : undefined,
            currency: body.currency,
        });

        return NextResponse.json({ user, message: "Tokens purchased successfully" });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "Failed to buy tokens";
        const status =
            message === "Missing auth" || message === "Invalid or expired token"
                ? 401
                : 400;

        return NextResponse.json({ message }, { status });
    }
}

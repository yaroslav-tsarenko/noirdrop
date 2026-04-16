import { NextRequest, NextResponse } from "next/server";
import { requireAuth, applyRefreshedCookies } from "@/backend/middlewares/auth.middleware";
import { authController } from "@/backend/controllers/auth.controller";

export async function GET(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const user = await authController.me(payload.sub);
        const res = NextResponse.json({ user });
        applyRefreshedCookies(res, payload);
        return res;
    } catch {
        return NextResponse.json({ type: "Unauthorized", message: "Unauthorized" }, { status: 401 });
    }
}

import { NextRequest, NextResponse } from "next/server";
import { ENV } from "../config/env";
import { verifyAccessToken, verifyRefreshToken } from "../utils/jwt";
import { authController } from "../controllers/auth.controller";
import { attachAuthCookies } from "../utils/cookies";
import { connectDB } from "../config/db";

export interface AuthPayload {
    sub: string;
    email: string;
    role: string;
    /** If set, caller should forward these updated Set-Cookie headers to the response */
    _refreshedCookies?: { accessToken: string; refreshToken: string };
}

export async function requireAuth(req: NextRequest): Promise<AuthPayload> {
    const access = req.cookies.get(ENV.ACCESS_COOKIE_NAME)?.value
        || req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

    // Try access token first
    if (access) {
        try {
            const payload = await verifyAccessToken<{ sub: string; email: string; role: string }>(access);
            return payload;
        } catch {
            // Access token invalid/expired – fall through to refresh
        }
    }

    // Try refresh token
    const refreshToken = req.cookies.get(ENV.REFRESH_COOKIE_NAME)?.value;
    if (refreshToken) {
        try {
            await connectDB();
            const ua = req.headers.get("user-agent") || undefined;
            const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
            const { user, tokens } = await authController.refresh(refreshToken, ua, ip);
            return {
                sub: String(user._id),
                email: user.email,
                role: user.role,
                _refreshedCookies: { accessToken: tokens.accessToken, refreshToken: tokens.refreshToken },
            };
        } catch {
            // Refresh failed
        }
    }

    throw new Error(access ? "Invalid or expired token" : "Missing auth");
}

/**
 * Helper: apply refreshed cookies to the response if requireAuth performed a silent refresh.
 */
export function applyRefreshedCookies(res: NextResponse, payload: AuthPayload): void {
    if (payload._refreshedCookies) {
        attachAuthCookies(res, payload._refreshedCookies.accessToken, payload._refreshedCookies.refreshToken, 60 * 60 * 24 * 30);
    }
}

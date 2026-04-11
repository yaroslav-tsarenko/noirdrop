import { cookies } from "next/headers";
import { ENV } from "@/backend/config/env";
import { verifyAccessToken } from "@/backend/utils/jwt";
import { authController } from "@/backend/controllers/auth.controller";
import { IUser, Nullable } from "@/types/user.types";

/**
 * Server-side utility: reads the access token cookie, verifies it,
 * and returns the current user from the database.
 * Returns null if the token is missing, invalid, or expired.
 */
export async function getServerUser(): Promise<Nullable<IUser>> {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get(ENV.ACCESS_COOKIE_NAME)?.value;

        if (!accessToken) return null;

        const payload = await verifyAccessToken<{ sub: string; email: string; role: string }>(accessToken);
        const user = await authController.me(payload.sub);

        // Serialize Dates to ISO strings to match the IUser interface
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            tokens: user.tokens ?? null,
            createdAt: user.createdAt instanceof Date ? user.createdAt.toISOString() : String(user.createdAt),
            updatedAt: user.updatedAt instanceof Date ? user.updatedAt.toISOString() : String(user.updatedAt),
        };
    } catch {
        return null;
    }
}


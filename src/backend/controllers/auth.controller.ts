import { connectDB } from "../config/db";
import { authService } from "../services/auth.service";
import { LogoutResponse } from "@/backend/types/auth.types";
import { UserType } from "@/backend/types/user.types";

export const authController = {
    async register(body: {
        name: string;
        firstName?: string;
        lastName?: string;
        email: string;
        password: string;
        phone?: string;
        street?: string;
        city?: string;
        country?: string;
        postcode?: string;
        dateOfBirth?: string;
        acceptedTerms?: boolean;
    }) {
        await connectDB();
        const { user, accessToken, refreshToken } = await authService.register(body);
        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async login(body: { email: string; password: string }, userAgent?: string, ip?: string) {
        await connectDB();
        const { user, accessToken, refreshToken } = await authService.login(body.email, body.password, userAgent, ip);
        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        await connectDB();
        const { user, accessToken, refreshToken } = await authService.refresh(refreshJWT, userAgent, ip);
        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async me(userId: string): Promise<UserType> {
        await connectDB();
        const user = await authService.me(userId);
        return toUser(user);
    },

    async logout(refreshJWT: string): Promise<LogoutResponse> {
        await connectDB();
        await authService.logout(refreshJWT);
        return { message: "Logged out successfully" };
    },

    async logoutAll(userId: string): Promise<LogoutResponse> {
        await connectDB();
        await authService.logoutAll(userId);
        return { message: "All sessions revoked" };
    },
};

function toUser(u: {
    _id: { toString(): string };
    name: string;
    email: string;
    role: "user" | "admin";
    tokens: number;
    createdAt: Date;
    updatedAt: Date;
}): UserType {
    return {
        _id: u._id.toString(),
        name: u.name,
        email: u.email,
        role: u.role,
        tokens: u.tokens,
        createdAt: u.createdAt,
        updatedAt: u.updatedAt,
    };
}

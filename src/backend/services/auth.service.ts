import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import { RefreshSession } from "../models/refreshSession.model";
import { sha256, randomToken } from "../utils/crypto";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import { ENV } from "../config/env";
import { Types } from "mongoose";
import {sendEmail} from "@/backend/utils/sendEmail";
import {COMPANY_EMAIL, COMPANY_NAME, COMPANY_URL} from "@/resources/constants";

function parseDurationToSec(input: string): number {
    const m = input.match(/^(\d+)([smhd])?$/i);
    if (!m) return 60 * 60 * 24 * 30;
    const n = parseInt(m[1], 10);
    const unit = (m[2] || "s").toLowerCase();
    const mult = unit === "s" ? 1 : unit === "m" ? 60 : unit === "h" ? 3600 : 86400;
    return n * mult;
}

const REFRESH_TTL_SEC = parseDurationToSec(ENV.REFRESH_TOKEN_EXPIRES);

export const authService = {
    async register(data: {
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
        const existing = await User.findOne({ email: data.email.toLowerCase() });
        if (existing) throw new Error("Email already registered");
        if (!data.acceptedTerms) throw new Error("You must accept the Terms & Conditions");

        const hashed = await bcrypt.hash(data.password, 12);
        const user = await User.create({
            ...data,
            email: data.email.toLowerCase(),
            password: hashed,
            dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
        });
        const result = await this.issueTokensAndSession(user._id, user.email, user.role, undefined, undefined);
        try {
            await sendEmail(
                user.email,
                `Welcome to ${COMPANY_NAME} 🎉`,
                `Hi ${user.name}, thanks for registering at ${COMPANY_NAME}.`,
                `
                    <div style="font-family:Arial,sans-serif;background:#f6f2ff;padding:32px;color:#111827">
                        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #eadfff;border-radius:18px;overflow:hidden">
                            <div style="padding:24px 24px 18px;background:linear-gradient(135deg,#3a063d,#8f1bb3 70%,#b86dd0);color:#fff">
                                <p style="margin:0 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.8">${COMPANY_NAME} account</p>
                                <h1 style="margin:0;font-size:26px;line-height:1.2">Welcome to ${COMPANY_NAME}</h1>
                                <p style="margin:12px 0 0;font-size:15px;opacity:.92">Your registration is complete and your account is ready to use.</p>
                            </div>
                            <div style="padding:24px">
                                <p style="margin:0 0 16px">Hi ${user.name},</p>
                                <p style="margin:0 0 20px">Thanks for creating your account. You can now sign in, manage purchases, receive invoices, and keep your travel eSIM activity in one place.</p>
                                <div style="display:grid;gap:12px;margin:0 0 20px">
                                    <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                        <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">Account email</p>
                                        <p style="margin:0;font-size:16px;font-weight:700">${user.email}</p>
                                    </div>
                                    <div style="padding:14px 16px;border:1px solid #eee3ff;border-radius:12px;background:#fbf9ff">
                                        <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase">What you can do now</p>
                                        <p style="margin:0">Sign in, buy packages, receive PDF invoices and manage future orders from one account.</p>
                                    </div>
                                </div>
                                <div style="padding:16px;border-radius:12px;background:#f7f4ff;border:1px solid #eadfff;margin-bottom:20px">
                                    <p style="margin:0 0 8px;font-weight:700">Next steps</p>
                                    <p style="margin:0 0 6px">1. Sign in to your account.</p>
                                    <p style="margin:0 0 6px">2. Choose the package or custom token amount you need.</p>
                                    <p style="margin:0">3. Keep all future invoices and order history in your dashboard.</p>
                                </div>
                                <div style="text-align:center;margin:24px 0">
                                    <a href="${COMPANY_URL}/sign-in" style="display:inline-block;padding:14px 24px;border-radius:999px;background:linear-gradient(90deg,#350036,#940096 58%,#9a6d97);color:#fff;text-decoration:none;font-weight:700">
                                        Sign in to your account
                                    </a>
                                </div>
                                <p style="margin:20px 0 0;color:#6b7280;font-size:14px">If you did not create this account or need help, contact ${COMPANY_EMAIL}.</p>
                            </div>
                        </div>
                    </div>
                `
            );
        } catch (error) {
            console.error("Failed to send welcome email:", error);
        }

        return { user, ...result };
    },

    async login(email: string, password: string, userAgent?: string, ip?: string) {
        const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        const result = await this.issueTokensAndSession(user._id, user.email, user.role, userAgent, ip);
        return { user, ...result };
    },

    async issueTokensAndSession(userId: Types.ObjectId, email: string, role: string, userAgent?: string, ip?: string) {
        // refresh як рандомний токен (не JWT); у БД зберігаємо hash
        const rawRefresh = randomToken(64);
        const tokenHash = sha256(rawRefresh);

        const expiresAt = new Date(Date.now() + REFRESH_TTL_SEC * 1000);
        const session = await RefreshSession.create({
            userId,
            tokenHash,
            userAgent,
            ip,
            expiresAt,
        });

        const accessToken = await signAccessToken({ sub: userId.toString(), email, role });
        // додатково — JWT refresh з payload (sid) для швидкої перевірки підпису:
        const refreshJWT = await signRefreshToken({ sub: userId.toString(), sid: session._id.toString() }, ENV.REFRESH_TOKEN_EXPIRES);

        // передаємо клієнту: access JWT + "rawRefresh" як cookie значення (але ми дамо саме refreshJWT у cookie, а raw — НЕ віддаємо)
        // Трюк: кладемо у cookie refresh **JWT** (підписаний), а в БД тримаємо hash від "rawRefresh".
        // Щоб зв'язати їх, в JWT тримаємо sid сесії. При refresh перевіряємо JWT (підпис) + наявність сесії (sid) + не відкликана.
        // Захист від повторного використання: ротуємо сесію (revoke + нова).
        // Альтернатива: зберігати в cookie rawRefresh, а перевіряти hash — теж ок, але тут ми перевіряємо підпис і сесію одночасно.

        return { accessToken, refreshToken: refreshJWT, session };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        // вериф підпису refresh JWT і дістанемо sid
        const { verifyRefreshToken } = await import("../utils/jwt");
        let payload: { sub: string; sid: string };
        try {
            payload = await verifyRefreshToken(refreshJWT);
        } catch {
            throw new Error("SessionInvalid");
        }

        const session = await RefreshSession.findById(payload.sid);
        if (!session || session.revokedAt || session.expiresAt.getTime() < Date.now()) {
            throw new Error("SessionInvalid");
        }

        // **Ротація**: відкликаємо стару, створюємо нову сесію/refresh
        session.revokedAt = new Date();
        await session.save();

        const user = await User.findById(session.userId);
        if (!user) throw new Error("UserNotFound");

        const { accessToken, refreshToken } = await this.issueTokensAndSession(user._id, user.email, user.role, userAgent, ip);

        return { user, accessToken, refreshToken };
    },

    async me(userId: string) {
        const user = await User.findById(userId).select("-password");
        if (!user) throw new Error("UserNotFound");
        return user;
    },

    async logout(refreshJWT: string) {
        const { verifyRefreshToken } = await import("../utils/jwt");
        try {
            const payload = await verifyRefreshToken<{ sub: string; sid: string }>(refreshJWT);
            await RefreshSession.findByIdAndUpdate(payload.sid, { $set: { revokedAt: new Date() } });
        } catch {
            // ідempotent
        }
    },

    async logoutAll(userId: string) {
        await RefreshSession.updateMany({ userId }, { $set: { revokedAt: new Date() } });
    },
};

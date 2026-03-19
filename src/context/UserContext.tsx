"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {IUser, Nullable} from "@/types/user.types";

type UserContextValue = {
    user: Nullable<IUser>;
    loading: boolean;
    refreshUser: () => Promise<void>;
};

export const UserContext = createContext<UserContextValue>({
    user: null,
    loading: true,
    refreshUser: async () => {},
});

export function useUser(): Nullable<IUser> {
    return useContext(UserContext).user;
}

export function useUserStatus(): UserContextValue {
    return useContext(UserContext);
}

export function UserProvider({
                                 user: initialUser,
                                 children,
                             }: {
    user?: Nullable<IUser>;
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<Nullable<IUser>>(initialUser ?? null);
    const [loading, setLoading] = useState(true);

    const refreshUser = useCallback(async () => {
        try {
            const meRes = await fetch("/api/auth/me", {
                method: "GET",
                credentials: "include",
                cache: "no-store",
            });

            if (meRes.ok) {
                const data = await meRes.json();
                setUser(data.user ?? null);
                return;
            }

            if (meRes.status === 401) {
                const refreshRes = await fetch("/api/auth/refresh", {
                    method: "POST",
                    credentials: "include",
                    cache: "no-store",
                });

                if (refreshRes.ok) {
                    const refreshData = await refreshRes.json();
                    setUser(refreshData.user ?? null);
                    return;
                }
            }

            setUser(null);
        } catch (error) {
            console.error("Failed to fetch current user:", error);
            setUser(null);
        }
    }, []);

    useEffect(() => {
        let active = true;

        (async () => {
            await refreshUser();
            if (active) setLoading(false);
        })();

        return () => {
            active = false;
        };
    }, [refreshUser]);

    const value = useMemo(
        () => ({
            user,
            loading,
            refreshUser,
        }),
        [user, loading, refreshUser]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

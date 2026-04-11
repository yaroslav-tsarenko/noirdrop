import React from "react";
import AppShell from "@/components/app/AppShell";
import { getServerUser } from "@/utils/getServerUser";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
    const initialUser = await getServerUser();
    return <AppShell initialUser={initialUser}>{children}</AppShell>;
}

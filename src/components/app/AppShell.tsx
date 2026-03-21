"use client";

import React from "react";
import { AlertProvider } from "@/context/AlertContext";
import { UserProvider } from "@/context/UserContext";
import PageWrapper from "@/components/ui/page-wrapper/PageWrapper";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import ProtectedRoute from "@/components/features/protected-route/ProtectedRoute";
import { I18nProvider } from "@/context/i18nContext";
import { AllOrdersProvider } from "@/context/AllOrdersContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { TransactionsProvider } from "@/context/TransactionContext";

export default function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider user={null}>
            <I18nProvider>
                <AlertProvider>
                    <AllOrdersProvider>
                        <ProtectedRoute>
                            <TransactionsProvider>
                                <CurrencyProvider>
                                    <Header />
                                    <PageWrapper>{children}</PageWrapper>
                                    <Footer />
                                </CurrencyProvider>
                            </TransactionsProvider>
                        </ProtectedRoute>
                    </AllOrdersProvider>
                </AlertProvider>
            </I18nProvider>
        </UserProvider>
    );
}

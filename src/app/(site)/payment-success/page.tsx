"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("order");
    const [polling, setPolling] = useState(true);
    const [statusData, setStatusData] = useState<Record<string, unknown> | null>(null);

    useEffect(() => {
        if (!orderId) {
            setPolling(false);
            return;
        }

        let attempts = 0;
        const maxAttempts = 5;

        const poll = async () => {
            try {
                const res = await fetch("/api/cardserv/status", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ orderMerchantId: orderId }),
                });
                const data = await res.json();
                setStatusData(data);

                if (data.finalized || data.credited) {
                    setPolling(false);
                    return;
                }
            } catch {
                // ignore
            }

            attempts++;
            if (attempts >= maxAttempts) {
                setPolling(false);
            }
        };

        poll();
        const interval = setInterval(() => {
            if (attempts >= maxAttempts) {
                clearInterval(interval);
                setPolling(false);
                return;
            }
            poll();
        }, 3000);

        return () => clearInterval(interval);
    }, [orderId]);

    return (
        <div style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)",
        }}>
            <div style={{
                maxWidth: 520,
                width: "100%",
                textAlign: "center",
                background: "#fff",
                borderRadius: 20,
                padding: "48px 32px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 12 }}>
                    Payment Successful!
                </h1>
                <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 8 }}>
                    Your tokens have been added to your account.
                </p>

                {orderId && (
                    <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: 16 }}>
                        Order: <code>{orderId}</code>
                    </p>
                )}

                {polling && (
                    <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: 16 }}>
                        Confirming payment…
                    </p>
                )}

                {statusData && "tokensAdded" in statusData && Number(statusData.tokensAdded) > 0 && (
                    <p style={{
                        background: "#f0fdf4",
                        border: "1px solid #bbf7d0",
                        borderRadius: 12,
                        padding: "12px 16px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#166534",
                        marginBottom: 16,
                    }}>
                        +{String(statusData.tokensAdded)} tokens credited
                    </p>
                )}

                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
                    <Link href="/dashboard" style={{
                        padding: "12px 28px",
                        borderRadius: 12,
                        background: "linear-gradient(135deg, #3d0a49, #8f1bb3)",
                        color: "#fff",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                    }}>
                        Go to Dashboard
                    </Link>
                    <Link href="/pricing" style={{
                        padding: "12px 28px",
                        borderRadius: 12,
                        border: "1px solid #ddd",
                        color: "#333",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "1rem",
                    }}>
                        Back to Pricing
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense>
            <PaymentSuccessContent />
        </Suspense>
    );
}

"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentFailedPage() {
    const searchParams = useSearchParams();
    const reason = searchParams.get("reason");
    const orderId = searchParams.get("order");

    return (
        <div style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            background: "linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%)",
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
                <div style={{ fontSize: 64, marginBottom: 16 }}>❌</div>
                <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 12 }}>
                    Payment Failed
                </h1>
                <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 8 }}>
                    Unfortunately your payment could not be completed.
                </p>

                {reason && (
                    <p style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: 12,
                        padding: "12px 16px",
                        fontSize: "0.9rem",
                        color: "#991b1b",
                        marginBottom: 16,
                    }}>
                        Reason: {reason}
                    </p>
                )}

                {orderId && (
                    <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: 16 }}>
                        Order: <code>{orderId}</code>
                    </p>
                )}

                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
                    <Link href="/pricing" style={{
                        padding: "12px 28px",
                        borderRadius: 12,
                        background: "linear-gradient(135deg, #3d0a49, #8f1bb3)",
                        color: "#fff",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                    }}>
                        Try Again
                    </Link>
                    <Link href="/contact-us" style={{
                        padding: "12px 28px",
                        borderRadius: 12,
                        border: "1px solid #ddd",
                        color: "#333",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "1rem",
                    }}>
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}


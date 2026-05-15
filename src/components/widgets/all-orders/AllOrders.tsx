"use client";

import React from "react";
import { useAllOrders, AiOrder } from "@/context/AllOrdersContext";
import { useI18n } from "@/context/i18nContext";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TokenIcon from "@mui/icons-material/Token";
import styles from "./AllOrders.module.scss";

const statusConfig: Record<AiOrder["status"], { label: string; color: "warning" | "primary" | "success" | "danger" | "neutral" }> = {
    pending: { label: "Pending", color: "warning" },
    processing: { label: "Processing", color: "primary" },
    completed: { label: "Completed", color: "success" },
    cancelled: { label: "Cancelled", color: "danger" },
    submitted: { label: "Submitted", color: "neutral" },
};

const translations = {
    en: {
        title: "Your eSIM Orders",
        empty: "No eSIM orders yet.",
        managerNote: "A manager will contact you soon to complete the activation.",
    },
    tr: {
        title: "eSIM Siparişleriniz",
        empty: "Henüz eSIM siparişi yok.",
        managerNote: "Aktivasyonu tamamlamak için bir yönetici sizinle yakında iletişime geçecektir.",
    },
};

const OrdersSection: React.FC = () => {
    const { orders } = useAllOrders();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }) + " " + date.toLocaleTimeString(lang === "tr" ? "tr-TR" : "en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <Box className={styles.ordersSection}>
            <Typography level="h3" sx={{ mb: 2, fontWeight: 700 }}>
                {t.title}
            </Typography>
            {orders.length === 0 ? (
                <Typography level="body-md" sx={{ color: "#777" }}>
                    {t.empty}
                </Typography>
            ) : (
                <Box sx={{ display: "grid", gap: 2 }}>
                    {orders.map((order) => {
                        const status = statusConfig[order.status] || statusConfig.pending;
                        const invoiceId = order.invoiceNumber || `ESIM-${order._id.slice(-8).toUpperCase()}`;
                        return (
                            <Card
                                key={order._id}
                                variant="outlined"
                                sx={{
                                    borderRadius: 12,
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                                    transition: "box-shadow 0.2s",
                                    "&:hover": {
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Avatar variant="soft" size="sm">
                                            <CreditCardIcon fontSize="small" />
                                        </Avatar>
                                        <Typography level="title-md" sx={{ fontWeight: 600 }}>
                                            {invoiceId} · {order.fullName}
                                        </Typography>
                                    </Box>
                                    <Chip color={status.color} variant="soft">
                                        {status.label}
                                    </Chip>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <ReceiptIcon fontSize="small" sx={{ color: "#8b5cf6" }} />
                                    <Typography level="body-sm" sx={{ fontWeight: 600 }}>
                                        Invoice: {invoiceId}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <EmailIcon fontSize="small" sx={{ color: "#0070f3" }} />
                                    <Typography level="body-sm">{order.email}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <PublicIcon fontSize="small" sx={{ color: "#666" }} />
                                    <Typography level="body-sm">{order.country}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <CalendarMonthIcon fontSize="small" sx={{ color: "#666" }} />
                                    <Typography level="body-xs" sx={{ color: "#666" }}>
                                        {formatDate(order.createdAt)}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "grid", gap: 0.5 }}>
                                    {order.items.map((item) => (
                                        <Typography key={item.id} level="body-sm">
                                            {item.name} · Qty {item.qty} · {item.price} tokens
                                        </Typography>
                                    ))}
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <TokenIcon fontSize="small" sx={{ color: "#059669" }} />
                                    <Typography level="title-sm" sx={{ fontWeight: 700, color: "#059669" }}>
                                        {order.tokensSpent ?? order.total} tokens
                                    </Typography>
                                </Box>

                                {(order.status === "pending" || order.status === "processing") && (
                                    <Box
                                        sx={{
                                            mt: 1,
                                            p: 1.5,
                                            borderRadius: 8,
                                            background: "#fffbeb",
                                            border: "1px solid #fbbf24",
                                        }}
                                    >
                                        <Typography level="body-sm" sx={{ color: "#92400e" }}>
                                            {t.managerNote}
                                        </Typography>
                                    </Box>
                                )}
                            </Card>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
};

export default OrdersSection;

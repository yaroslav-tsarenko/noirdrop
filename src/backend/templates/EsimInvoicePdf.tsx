import React from "react";
import {
    Document,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
} from "@/resources/constants";

type InvoiceItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
};

type EsimInvoicePdfProps = {
    invoiceNumber: string;
    createdAt: string;
    customer: {
        fullName: string;
        email: string;
        country: string;
    };
    items: InvoiceItem[];
    total: number;
};

const styles = StyleSheet.create({
    page: {
        padding: 32,
        fontSize: 11,
        color: "#1f2937",
        fontFamily: "Helvetica",
        backgroundColor: "#fcfbff",
    },
    header: {
        marginBottom: 20,
        padding: 18,
        borderRadius: 14,
        backgroundColor: "#f5edff",
        borderWidth: 1,
        borderColor: "#e5d7ff",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    brandBlock: {
        maxWidth: "58%",
    },
    metaBlock: {
        minWidth: 150,
        alignItems: "flex-end",
    },
    brand: {
        fontSize: 21,
        fontWeight: 700,
        marginBottom: 4,
        color: "#3d0a49",
    },
    title: {
        fontSize: 15,
        fontWeight: 700,
        marginBottom: 6,
    },
    muted: {
        color: "#6b7280",
        marginBottom: 4,
    },
    section: {
        marginBottom: 18,
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18,
    },
    card: {
        width: "48%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ebe4f5",
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 8,
        color: "#3d0a49",
    },
    customerBox: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#ebe4f5",
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#d8caeb",
        paddingBottom: 8,
        marginBottom: 8,
        fontWeight: 700 as const,
        color: "#3d0a49",
    },
    row: {
        flexDirection: "row",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f1ebf8",
    },
    colName: {
        flex: 3,
        paddingRight: 8,
    },
    colQty: {
        flex: 1,
        textAlign: "center",
    },
    colPrice: {
        flex: 1.2,
        textAlign: "right",
    },
    totalBox: {
        marginTop: 18,
        marginLeft: "auto",
        width: 250,
        padding: 14,
        borderRadius: 10,
        backgroundColor: "#f8f4ff",
        borderWidth: 1,
        borderColor: "#e5d7ff",
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
    },
    totalLabel: {
        fontWeight: 700,
    },
    totalValue: {
        fontWeight: 700,
    },
    totalGrand: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: "#ccb4f0",
    },
    noteBox: {
        marginTop: 18,
        padding: 14,
        borderRadius: 10,
        backgroundColor: "#fffbeb",
        borderWidth: 1,
        borderColor: "#fbbf24",
    },
    noteText: {
        fontSize: 10,
        color: "#92400e",
        lineHeight: 1.5,
    },
    footer: {
        marginTop: 28,
        fontSize: 10,
        color: "#6b7280",
        lineHeight: 1.5,
    },
});

export function EsimInvoicePdf({
    invoiceNumber,
    createdAt,
    customer,
    items,
    total,
}: EsimInvoicePdfProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.brandBlock}>
                        <Text style={styles.brand}>Noirdrop</Text>
                        <Text style={styles.title}>eSIM Purchase Invoice</Text>
                        <Text style={styles.muted}>{COMPANY_LEGAL_NAME}</Text>
                        <Text style={styles.muted}>Company No. {COMPANY_NUMBER}</Text>
                        <Text style={styles.muted}>{COMPANY_EMAIL}</Text>
                    </View>
                    <View style={styles.metaBlock}>
                        <Text style={styles.muted}>Invoice: {invoiceNumber}</Text>
                        <Text style={styles.muted}>Issued: {createdAt}</Text>
                        <Text style={styles.muted}>Status: Pending</Text>
                        <Text style={styles.muted}>Payment: Tokens</Text>
                    </View>
                </View>

                <View style={styles.grid}>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Bill To</Text>
                        <View style={styles.customerBox}>
                            <Text>{customer.fullName}</Text>
                            <Text>{customer.email}</Text>
                            <Text>{customer.country}</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Company Details</Text>
                        <Text style={styles.muted}>{COMPANY_LEGAL_NAME}</Text>
                        <Text style={styles.muted}>Company No. {COMPANY_NUMBER}</Text>
                        <Text style={styles.muted}>{COMPANY_ADDRESS}</Text>
                        <Text style={styles.muted}>{COMPANY_EMAIL}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Order Items</Text>
                    <View style={styles.tableHeader}>
                        <Text style={styles.colName}>Item</Text>
                        <Text style={styles.colQty}>Qty</Text>
                        <Text style={styles.colPrice}>Tokens</Text>
                    </View>

                    {items.map((item) => (
                        <View key={`${item.id}-${item.name}`} style={styles.row}>
                            <Text style={styles.colName}>{item.name}</Text>
                            <Text style={styles.colQty}>{item.qty}</Text>
                            <Text style={styles.colPrice}>
                                {item.price * item.qty} tokens
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalBox}>
                    <View style={styles.totalRow}>
                        <Text>Subtotal</Text>
                        <Text>{total} tokens</Text>
                    </View>
                    <View style={[styles.totalRow, styles.totalGrand]}>
                        <Text style={styles.totalLabel}>Total Paid</Text>
                        <Text style={styles.totalValue}>{total} tokens</Text>
                    </View>
                </View>

                <View style={styles.noteBox}>
                    <Text style={styles.noteText}>
                        Your order is pending. A manager will contact you soon to complete the eSIM activation and delivery.
                    </Text>
                </View>

                <Text style={styles.footer}>
                    This invoice confirms the eSIM purchase recorded by Noirdrop.
                    Keep this document for your records. For questions about your order,
                    contact {COMPANY_EMAIL} and include invoice number {invoiceNumber}.
                </Text>
            </Page>
        </Document>
    );
}

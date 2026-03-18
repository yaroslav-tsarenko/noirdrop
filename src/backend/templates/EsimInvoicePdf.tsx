import React from "react";
import {
    Document,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";

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
    },
    header: {
        marginBottom: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#d1d5db",
    },
    brand: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 8,
        color: "#111827",
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 8,
    },
    muted: {
        color: "#6b7280",
        marginBottom: 4,
    },
    section: {
        marginBottom: 18,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 8,
        color: "#111827",
    },
    customerBox: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 8,
        backgroundColor: "#f9fafb",
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#d1d5db",
        paddingBottom: 8,
        marginBottom: 8,
        fontWeight: 700,
    },
    row: {
        flexDirection: "row",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f3f4f6",
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
        width: 220,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#111827",
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
    footer: {
        marginTop: 28,
        fontSize: 10,
        color: "#6b7280",
        lineHeight: 1.5,
    },
});

const formatMoney = (amount: number) => `EUR ${amount.toFixed(2)}`;

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
                    <Text style={styles.brand}>Noirdrop</Text>
                    <Text style={styles.title}>eSIM Purchase Invoice</Text>
                    <Text style={styles.muted}>Invoice: {invoiceNumber}</Text>
                    <Text style={styles.muted}>Date: {createdAt}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Customer</Text>
                    <View style={styles.customerBox}>
                        <Text>{customer.fullName}</Text>
                        <Text>{customer.email}</Text>
                        <Text>{customer.country}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Order Items</Text>
                    <View style={styles.tableHeader}>
                        <Text style={styles.colName}>Item</Text>
                        <Text style={styles.colQty}>Qty</Text>
                        <Text style={styles.colPrice}>Price</Text>
                    </View>

                    {items.map((item) => (
                        <View key={`${item.id}-${item.name}`} style={styles.row}>
                            <Text style={styles.colName}>{item.name}</Text>
                            <Text style={styles.colQty}>{item.qty}</Text>
                            <Text style={styles.colPrice}>
                                {formatMoney(item.price * item.qty)}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalBox}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>{formatMoney(total)}</Text>
                    </View>
                </View>

                <Text style={styles.footer}>
                    This invoice confirms the purchase request recorded by Noirdrop.
                    The customer receives this PDF automatically after checkout.
                </Text>
            </Page>
        </Document>
    );
}

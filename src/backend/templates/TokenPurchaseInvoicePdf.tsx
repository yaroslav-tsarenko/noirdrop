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

type TokenPurchaseInvoicePdfProps = {
    invoiceNumber: string;
    createdAt: string;
    customer: {
        fullName: string;
        email: string;
    };
    packageTitle: string;
    tokenAmount: number;
    pricePaid: number;
    currency: string;
    newBalance: number;
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
    summaryBox: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#ebe4f5",
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    totalBox: {
        marginTop: 18,
        marginLeft: "auto",
        width: 260,
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
    footer: {
        marginTop: 28,
        fontSize: 10,
        color: "#6b7280",
        lineHeight: 1.5,
    },
});

const formatMoney = (amount: number, currency: string) =>
    `${currency.toUpperCase()} ${amount.toFixed(2)}`;

export function TokenPurchaseInvoicePdf({
    invoiceNumber,
    createdAt,
    customer,
    packageTitle,
    tokenAmount,
    pricePaid,
    currency,
    newBalance,
}: TokenPurchaseInvoicePdfProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.brandBlock}>
                        <Text style={styles.brand}>Noirdrop</Text>
                        <Text style={styles.title}>Token Purchase Invoice</Text>
                        <Text style={styles.muted}>{COMPANY_LEGAL_NAME}</Text>
                        <Text style={styles.muted}>Company No. {COMPANY_NUMBER}</Text>
                        <Text style={styles.muted}>{COMPANY_EMAIL}</Text>
                    </View>
                    <View style={styles.metaBlock}>
                        <Text style={styles.muted}>Invoice: {invoiceNumber}</Text>
                        <Text style={styles.muted}>Issued: {createdAt}</Text>
                        <Text style={styles.muted}>Status: Paid</Text>
                    </View>
                </View>

                <View style={styles.grid}>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Bill To</Text>
                        <View style={styles.customerBox}>
                            <Text>{customer.fullName}</Text>
                            <Text>{customer.email}</Text>
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
                    <Text style={styles.sectionTitle}>Purchase Summary</Text>
                    <View style={styles.summaryBox}>
                        <View style={styles.summaryRow}>
                            <Text>Package</Text>
                            <Text>{packageTitle}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text>Tokens added</Text>
                            <Text>{tokenAmount}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text>New balance</Text>
                            <Text>{newBalance}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text>Rate</Text>
                            <Text>100 tokens per 1 unit</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.totalBox}>
                    <View style={styles.totalRow}>
                        <Text>Subtotal</Text>
                        <Text>{formatMoney(pricePaid, currency)}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text>VAT</Text>
                        <Text>Included where applicable</Text>
                    </View>
                    <View style={[styles.totalRow, styles.totalGrand]}>
                        <Text style={styles.totalLabel}>Total Paid</Text>
                        <Text style={styles.totalValue}>{formatMoney(pricePaid, currency)}</Text>
                    </View>
                </View>

                <Text style={styles.footer}>
                    This invoice confirms the token purchase recorded by Noirdrop.
                    Keep this PDF for accounting purposes. For billing questions, contact {COMPANY_EMAIL}.
                </Text>
            </Page>
        </Document>
    );
}

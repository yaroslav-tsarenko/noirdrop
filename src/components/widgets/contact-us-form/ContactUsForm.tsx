"use client";

import React, { useState } from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import { Textarea, Button, Card, Typography } from "@mui/joy";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import styles from "./ContactUsForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import InputUI from "@/components/ui/input/InputUI";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
} from "@/resources/constants";

const ContactUsForm = () => {
    const { showAlert } = useAlert();
    const [showConfetti, setShowConfetti] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: typeof initialValues,
        {
            setSubmitting,
            resetForm,
        }: {
            setSubmitting: (isSubmitting: boolean) => void;
            resetForm: () => void;
        }
    ) => {
        try {
            await sendContactRequest(values);
            resetForm();
            setSuccessMsg("✅ Thanks! Your message has been sent successfully!");
            setShowConfetti(true);
            showAlert("Success", "Your request has been sent!", "success");
            setTimeout(() => setShowConfetti(false), 4000);
        } catch {
            showAlert("Error", "Failed to send. Please try again.", "error");
        }
        setSubmitting(false);
    };

    return (
        <div className={styles.contactWrapper}>
            {showConfetti && <Confetti />}

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Card className={styles.contactCard}>
                    {successMsg ? (
                        <motion.div
                            className={styles.successMsg}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                        >
                            {successMsg}
                        </motion.div>
                    ) : (
                        <>
                            {/* HEADER TEXT */}
                            <motion.div
                                className={styles.headerBlock}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                <Typography level="h2" className={styles.formTitle}>
                                    Need help with your eSIM order? 📲
                                </Typography>
                                <Typography level="body-md" className={styles.formDesc}>
                                    Tell us what happened with your{" "}
                                    <span className={styles.highlight}>eSIM purchase</span> —
                                    activation, coverage, payment or refund — and our support team
                                    will get back within{" "}
                                    <span className={styles.highlight}>24 hours</span> with a
                                    solution.
                                </Typography>
                            </motion.div>

                            {/* STATS / TRUST PILLS */}
                            <motion.div
                                className={styles.metaRow}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <div className={styles.pill}>
                                    <span>⏱</span>
                                    <div>
                                        <p>Average reply time</p>
                                        <strong>&lt; 24 hours</strong>
                                    </div>
                                </div>
                                <div className={styles.pill}>
                                    <span>📶</span>
                                    <div>
                                        <p>eSIMs activated</p>
                                        <strong>10k+ customers</strong>
                                    </div>
                                </div>
                                <div className={styles.pill}>
                                    <span>🌍</span>
                                    <div>
                                        <p>Coverage</p>
                                        <strong>45+ European countries</strong>
                                    </div>
                                </div>
                            </motion.div>

                            {/* EXTRA CONTENT: ESIM-CENTRIC COPY */}
                            <motion.div
                                className={styles.bulletGrid}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <div className={styles.bulletItem}>
                                    <h4>Typical questions we handle</h4>
                                    <p>
                                        Having issues with activation, QR-code, wrong country,
                                        balance, roaming or speed? We’re here to help with:
                                    </p>
                                    <ul>
                                        <li>eSIM didn’t activate or shows “No Service”</li>
                                        <li>Top-up or payment didn’t arrive on balance</li>
                                        <li>Wrong country/zone selected by mistake</li>
                                        <li>Refunds & changes to your eSIM plan</li>
                                    </ul>
                                </div>

                                <div className={styles.bulletItem}>
                                    <h4>What happens after you send this form</h4>
                                    <ul>
                                        <li>
                                            We check your order, device model and network in the
                                            background
                                        </li>
                                        <li>
                                            You get a personalised reply with clear step-by-step
                                            instructions
                                        </li>
                                        <li>
                                            If needed, we’ll suggest the best eSIM pack for your next
                                            trip
                                        </li>
                                    </ul>
                                    <p className={styles.smallHint}>
                                        Tip: adding your <strong>Order ID</strong> and{" "}
                                        <strong>device model</strong> helps us solve it faster.
                                    </p>
                                </div>
                            </motion.div>

                            {/* COMPANY DETAILS */}
                            <motion.div
                                className={styles.companyDetails}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.32, duration: 0.4 }}
                            >
                                <Typography level="title-md" className={styles.companyTitle}>
                                    Company details
                                </Typography>
                                <div className={styles.companyGrid}>
                                    {COMPANY_LEGAL_NAME && (
                                        <div className={styles.companyItem}>
                                            <span>Legal name</span>
                                            <strong>{COMPANY_LEGAL_NAME}</strong>
                                        </div>
                                    )}
                                    {COMPANY_NUMBER && (
                                        <div className={styles.companyItem}>
                                            <span>Company number</span>
                                            <strong>{COMPANY_NUMBER}</strong>
                                        </div>
                                    )}
                                    {COMPANY_ADDRESS && (
                                        <div className={styles.companyItem}>
                                            <span>Registered address</span>
                                            <strong>{COMPANY_ADDRESS}</strong>
                                        </div>
                                    )}
                                    {COMPANY_EMAIL && (
                                        <div className={styles.companyItem}>
                                            <span>Email</span>
                                            <strong>{COMPANY_EMAIL}</strong>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* FORM ITSELF */}
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, isSubmitting }) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35, duration: 0.45 }}
                                    >
                                        <Form className={styles.form}>
                                            <div className={styles.formGroupRow}>
                                                <Field name="name">
                                                    {({ field }: FieldProps) => (
                                                        <InputUI
                                                            {...field}
                                                            label="First Name"
                                                            placeholder="John"
                                                            error={
                                                                touched.name && errors.name
                                                                    ? (errors.name as string)
                                                                    : ""
                                                            }
                                                        />
                                                    )}
                                                </Field>

                                                <Field name="secondName">
                                                    {({ field }: FieldProps) => (
                                                        <InputUI
                                                            {...field}
                                                            label="Last Name"
                                                            placeholder="Doe"
                                                            error={
                                                                touched.secondName &&
                                                                errors.secondName
                                                                    ? (errors.secondName as string)
                                                                    : ""
                                                            }
                                                        />
                                                    )}
                                                </Field>
                                            </div>

                                            <Field name="email">
                                                {({ field }: FieldProps) => (
                                                    <InputUI
                                                        {...field}
                                                        type="email"
                                                        label="Email Address"
                                                        placeholder="you@example.com"
                                                        error={
                                                            touched.email && errors.email
                                                                ? (errors.email as string)
                                                                : ""
                                                        }
                                                    />
                                                )}
                                            </Field>

                                            <Field name="phone">
                                                {({ field }: FieldProps) => (
                                                    <InputUI
                                                        {...field}
                                                        type="tel"
                                                        label="Phone Number"
                                                        placeholder="+1 555 000 000"
                                                        error={
                                                            touched.phone && errors.phone
                                                                ? (errors.phone as string)
                                                                : ""
                                                        }
                                                    />
                                                )}
                                            </Field>

                                            <Field name="message">
                                                {({ field }: FieldProps) => (
                                                    <Textarea
                                                        {...field}
                                                        minRows={4}
                                                        placeholder="Describe your eSIM issue or question. Please include: order ID, country where you are now, device model (e.g. iPhone 15, Samsung S24) and what exactly goes wrong."
                                                        className={styles.textarea}
                                                    />
                                                )}
                                            </Field>

                                            <Button
                                                type="submit"
                                                loading={isSubmitting}
                                                className={styles.submitBtn}
                                            >
                                                Send
                                            </Button>

                                            <p className={styles.footerNote}>
                                                By submitting this form, you agree that we can contact
                                                you about your eSIM order. No spam. We never share your
                                                details with third parties.
                                            </p>
                                        </Form>
                                    </motion.div>
                                )}
                            </Formik>
                        </>
                    )}
                </Card>
            </motion.div>
        </div>
    );
};

export default ContactUsForm;

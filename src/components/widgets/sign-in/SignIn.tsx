"use client";

import Link from "next/link";
import { Formik, Form, Field, FormikHelpers, FieldProps } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import { signInValidation, signInInitialValues, signInOnSubmit } from "@/validationSchemas/sign-in/schema";
import AuthShell from "@/components/widgets/auth/AuthShell";
import styles from "../sign-up/AuthForms.module.scss";

export type SignInValues = { email: string; password: string };

const copy = {
    eyebrow: "Secure access",
    title: "Sign in to manage your travel eSIMs",
    description: "Access orders, QR delivery, support history and your balance from one clean dashboard.",
    sideTitle: "Travel-ready account access",
    sideDescription:
        "Use one secure login to keep your eSIM purchases, order history and future top-ups organized without relying on inbox search.",
    sidePoints: [
        "Order history and activation details in one place",
        "Faster support because your purchases are attached to your account",
        "Simple re-entry for future trips and repeat purchases",
    ],
};

export default function SignInPage() {
    const { showAlert } = useAlert();
    const router = useRouter();

    return (
        <AuthShell
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            sideTitle={copy.sideTitle}
            sideDescription={copy.sideDescription}
            sidePoints={copy.sidePoints}
            footerText="Don’t have an account yet?"
            footerLinkLabel="Create account"
            footerLinkHref="/sign-up"
        >
            <Formik<SignInValues>
                initialValues={signInInitialValues}
                validate={signInValidation}
                onSubmit={async (values, { setSubmitting }: FormikHelpers<SignInValues>) =>
                    signInOnSubmit(values, { setSubmitting }, showAlert, router)
                }
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className={styles.form}>
                        <Field name="email">
                            {({ field }: FieldProps) => (
                                <label className={styles.field}>
                                    <span>Email</span>
                                    <input
                                        {...field}
                                        type="email"
                                        placeholder="you@example.com"
                                        className={styles.input}
                                    />
                                    <small className={styles.error}>{touched.email ? errors.email : ""}</small>
                                </label>
                            )}
                        </Field>

                        <Field name="password">
                            {({ field }: FieldProps) => (
                                <label className={styles.field}>
                                    <span>Password</span>
                                    <input
                                        {...field}
                                        type="password"
                                        placeholder="Enter your password"
                                        className={styles.input}
                                    />
                                    <small className={styles.helper}>
                                        Use the same email and password you used during registration.
                                    </small>
                                    <small className={styles.error}>{touched.password ? errors.password : ""}</small>
                                </label>
                            )}
                        </Field>

                        <button type="submit" className={styles.submit} disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : "Sign in"}
                        </button>

                        <div className={styles.inlineNote}>
                            <span>Need a new account?</span>
                            <Link href="/sign-up">Create one now</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </AuthShell>
    );
}

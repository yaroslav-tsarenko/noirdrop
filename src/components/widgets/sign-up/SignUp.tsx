"use client";

import Link from "next/link";
import { Formik, Form, Field, FormikHelpers, FieldProps } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit,
    SignUpFormValues,
} from "@/validationSchemas/sign-up/schema";
import AuthShell from "@/components/widgets/auth/AuthShell";
import styles from "./AuthForms.module.scss";
import { COUNTRIES } from "@/components/widgets/esim/countries";

const copy = {
    eyebrow: "Create account",
    title: "Set up your Noirdrop account",
    description: "Register once, keep your future purchases tidy, and make support and repeat orders much faster.",
    sideTitle: "One account for every trip",
    sideDescription:
        "This registration flow follows the structure from your example and gives the user a more serious, credible onboarding experience.",
    sidePoints: [
        "Structured profile fields instead of a one-line signup",
        "Terms acceptance baked into the flow",
        "Ready for real customer support and repeat orders",
    ],
};

const renderError = (value?: string) => <small className={styles.error}>{value || ""}</small>;

export default function SignUpPage() {
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
            footerText="Already have an account?"
            footerLinkLabel="Sign in"
            footerLinkHref="/sign-in"
        >
            <Formik<SignUpFormValues>
                initialValues={signUpInitialValues}
                validate={signUpValidation}
                onSubmit={async (values, { setSubmitting }: FormikHelpers<SignUpFormValues>) =>
                    signUpOnSubmit(values, { setSubmitting }, showAlert, router)
                }
            >
                {({ errors, touched, isSubmitting, values, setFieldValue }) => (
                    <Form className={styles.form}>
                        <div className={styles.gridTwo}>
                            <Field name="firstName">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>First name</span>
                                        <input {...field} type="text" placeholder="John" className={styles.input} />
                                        {renderError(touched.firstName ? errors.firstName : "")}
                                    </label>
                                )}
                            </Field>

                            <Field name="lastName">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>Last name</span>
                                        <input {...field} type="text" placeholder="Doe" className={styles.input} />
                                        {renderError(touched.lastName ? errors.lastName : "")}
                                    </label>
                                )}
                            </Field>
                        </div>

                        <div className={styles.gridTwo}>
                            <Field name="dateOfBirth">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>Date of birth</span>
                                        <input {...field} type="date" className={styles.input} />
                                        {renderError(touched.dateOfBirth ? errors.dateOfBirth : "")}
                                    </label>
                                )}
                            </Field>

                            <Field name="phone">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>Phone number</span>
                                        <input {...field} type="tel" placeholder="+44 1234 567890" className={styles.input} />
                                        {renderError(touched.phone ? errors.phone : "")}
                                    </label>
                                )}
                            </Field>
                        </div>

                        <Field name="email">
                            {({ field }: FieldProps) => (
                                <label className={styles.field}>
                                    <span>Email</span>
                                    <input {...field} type="email" placeholder="you@example.com" className={styles.input} />
                                    {renderError(touched.email ? errors.email : "")}
                                </label>
                            )}
                        </Field>

                        <Field name="street">
                            {({ field }: FieldProps) => (
                                <label className={styles.field}>
                                    <span>Street</span>
                                    <input {...field} type="text" placeholder="221B Baker Street" className={styles.input} />
                                    {renderError(touched.street ? errors.street : "")}
                                </label>
                            )}
                        </Field>

                        <div className={styles.gridTwo}>
                            <Field name="city">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>City</span>
                                        <input {...field} type="text" placeholder="London" className={styles.input} />
                                        {renderError(touched.city ? errors.city : "")}
                                    </label>
                                )}
                            </Field>

                            <label className={styles.field}>
                                <span>Country</span>
                                <select
                                    value={values.country}
                                    onChange={(event) => setFieldValue("country", event.target.value)}
                                    className={styles.input}
                                >
                                    <option value="">Select a country</option>
                                    {COUNTRIES.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {renderError(touched.country ? errors.country : "")}
                            </label>
                        </div>

                        <Field name="postcode">
                            {({ field }: FieldProps) => (
                                <label className={styles.field}>
                                    <span>Post code</span>
                                    <input {...field} type="text" placeholder="NW1 6XE" className={styles.input} />
                                    {renderError(touched.postcode ? errors.postcode : "")}
                                </label>
                            )}
                        </Field>

                        <div className={styles.gridTwo}>
                            <Field name="password">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>Password</span>
                                        <input {...field} type="password" placeholder="At least 8 characters" className={styles.input} />
                                        <small className={styles.helper}>Use at least 8 characters, including letters and numbers.</small>
                                        {renderError(touched.password ? errors.password : "")}
                                    </label>
                                )}
                            </Field>

                            <Field name="confirmPassword">
                                {({ field }: FieldProps) => (
                                    <label className={styles.field}>
                                        <span>Confirm password</span>
                                        <input {...field} type="password" placeholder="Repeat your password" className={styles.input} />
                                        {renderError(touched.confirmPassword ? errors.confirmPassword : "")}
                                    </label>
                                )}
                            </Field>
                        </div>

                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={values.acceptedTerms}
                                onChange={(event) => setFieldValue("acceptedTerms", event.target.checked)}
                            />
                            <span>
                                I have read and accept the <Link href="/terms-and-conditions">Terms & Conditions</Link>
                            </span>
                        </label>
                        {renderError(touched.acceptedTerms ? errors.acceptedTerms : "")}

                        <button type="submit" className={styles.submit} disabled={isSubmitting}>
                            {isSubmitting ? "Creating account..." : "Create account"}
                        </button>
                    </Form>
                )}
            </Formik>
        </AuthShell>
    );
}

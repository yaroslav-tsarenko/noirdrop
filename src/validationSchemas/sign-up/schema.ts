import { AlertColor } from "@mui/material/Alert";

export type SignUpFormValues = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    country: string;
    postcode: string;
    password: string;
    confirmPassword: string;
    acceptedTerms: boolean;
};

export const signUpInitialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    country: "",
    postcode: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
};

export const signUpValidation = (values: SignUpFormValues) => {
    const errors: Partial<Record<keyof SignUpFormValues, string>> = {};

    if (!values.firstName.trim()) errors.firstName = "First name is required";
    if (!values.email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email";

    if (!values.phone.trim()) errors.phone = "Phone number is required";
    else if (values.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number";

    if (!values.street.trim()) errors.street = "Street is required";
    if (!values.city.trim()) errors.city = "City is required";
    if (!values.country.trim()) errors.country = "Country is required";
    if (!values.postcode.trim()) errors.postcode = "Post code is required";

    if (!values.dateOfBirth) errors.dateOfBirth = "Date of birth is required";

    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 8) errors.password = "Use at least 8 characters";

    if (!values.confirmPassword) errors.confirmPassword = "Confirm your password";
    else if (values.confirmPassword !== values.password) errors.confirmPassword = "Passwords do not match";

    if (!values.acceptedTerms) errors.acceptedTerms = "You must accept the Terms & Conditions";

    return errors;
};

export const signUpOnSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const payload = {
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            name: [values.firstName.trim(), values.lastName.trim()].filter(Boolean).join(" "),
            dateOfBirth: values.dateOfBirth,
            email: values.email.trim(),
            phone: values.phone.trim(),
            street: values.street.trim(),
            city: values.city.trim(),
            country: values.country.trim(),
            postcode: values.postcode.trim(),
            password: values.password,
            acceptedTerms: values.acceptedTerms,
        };

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => null);

        if (res.ok && data?.user) {
            showAlert("Registration successful!", "", "success");
            router.replace("/");
            router.refresh();
        } else {
            showAlert(data?.message || "Registration failed", "", "error");
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "Network error";
        showAlert(message, "", "error");
    } finally {
        setSubmitting(false);
    }
};

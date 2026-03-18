import * as Yup from "yup";

export async function sendContactRequest(data: {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message?: string;
}) {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    const payload = await res.json().catch(() => null);
    if (!res.ok) throw new Error(payload?.message || "Failed to send contact request");
    return payload;
}

export const validationSchema = Yup.object().shape({
    name: Yup.string().required("First name is required"),
    secondName: Yup.string().required("Second name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
        .matches(/^\+?[0-9()\-\s]+$/, "Use a valid phone number")
        .test("phone-digits", "Enter at least 7 digits", (value) => {
            const digits = (value ?? "").replace(/\D/g, "");
            return digits.length >= 7;
        })
        .required("Phone number is required"),
    message: Yup.string(),
});

export const initialValues = {
    name: "",
    secondName: "",
    email: "",
    phone: "",
    message: "",
};

import type { Metadata } from "next";

import { COMPANY_NAME } from "@/resources/constants";

export const metadata: Metadata = {
    title: `Physical SIM vs eSIM: Which One Wins in 2025? — ${COMPANY_NAME}`,
    description:
        "A balanced comparison for travelers: setup, reliability, security, switching carriers, and cost control.",
    alternates: { canonical: "/blog/sim-vs-esim" },
};

export default function Page() {
    return (
        <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 16px" }}>
            <h1>Physical SIM vs eSIM: Which One Wins in 2025?</h1>
            <p>
                Both physical SIMs and eSIMs get you connected. The best choice depends on how you travel, whether
                you need to keep your primary number active, and how often you switch countries.
            </p>

            <h2>Quick comparison</h2>
            <ul>
                <li>
                    <strong>Setup:</strong> eSIM usually wins (scan a QR code), physical SIM often requires a store visit.
                </li>
                <li>
                    <strong>Convenience:</strong> eSIM wins for multi-country trips and last-minute travel.
                </li>
                <li>
                    <strong>Reliability:</strong> both can be excellent; performance depends on local networks and plan quality.
                </li>
                <li>
                    <strong>Security:</strong> eSIM reduces risk of losing a tiny plastic card; both require good account hygiene.
                </li>
                <li>
                    <strong>Keeping your number:</strong> with dual SIM, you can keep your physical SIM for calls/SMS and use
                    eSIM for data.
                </li>
            </ul>

            <h2>Who should pick eSIM</h2>
            <ul>
                <li>Travelers who want instant activation</li>
                <li>People visiting multiple countries</li>
                <li>Remote workers who need predictable costs and fast setup</li>
            </ul>

            <h2>Who might still prefer a physical SIM</h2>
            <ul>
                <li>Devices without eSIM support</li>
                <li>Travelers who need specific local carrier services that require in-person registration</li>
            </ul>

            <p style={{ marginTop: 32 }}>
                If your phone supports eSIM, it’s usually the easiest path. <a href="/pricing">Browse plans</a>.
            </p>
        </main>
    );
}


"use client";

import React, { useMemo, useState } from "react";
import { COUNTRIES } from "./countries";
import { ESIM_DATA, getEsimRates, resolveEsimCountry } from "./esimData";
import ESimRates from "./ESimRates";
import { Select, Option } from "@mui/joy";
import styles from "./ESimPicker.module.scss";
import { useCurrency } from "@/context/CurrencyContext";
import { convertFromEur } from "@/utils/currency";

export default function ESimPicker() {
    const [country, setCountry] = useState("United Kingdom");
    const { currency } = useCurrency();

    const rates = useMemo(
        () => getEsimRates(country as any, (eur) => convertFromEur(eur, currency)),
        [country, currency]
    );

    const availableCountries = useMemo(
        () => COUNTRIES.filter((c) => Boolean(resolveEsimCountry(c))),
        []
    );

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Where do you go next?</h2>

            <p className={styles.subtitle}>
                Data-only eSIM plans for 45+ European countries.
                <br /> Compare rates and choose the right plan for your trip.
            </p>

            <div className={styles.card}>
                <h3 className={styles.cardTitle}>Rates per Country</h3>

                <div className={styles.selectWrapper}>
                    <Select
                        value={country}
                        onChange={(_, v) => v && setCountry(v)}
                        className="w-full"
                    >
                        {availableCountries.map((c) => (
                            <Option key={c} value={c}>
                                {c}
                            </Option>
                        ))}
                    </Select>
                </div>

                {rates ? (
                    <ESimRates data={rates} />
                ) : (
                    <div className={styles.noRates}>No pricing available.</div>
                )}
            </div>
        </div>
    );
}

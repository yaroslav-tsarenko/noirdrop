"use client";

import React, { useState } from "react";
import { COUNTRIES } from "./countries";
import { ESIM_DATA } from "./esimData";
import ESimRates from "./ESimRates";
import { Select, Option } from "@mui/joy";
import styles from "./ESimPicker.module.scss";

export default function ESimPicker() {
    const [country, setCountry] = useState("Afghanistan");
    const rates = ESIM_DATA[country];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Where do you go next?</h2>

            <p className={styles.subtitle}>
                Simple, low pay-per-use rates. ONE Balance – Works Worldwide.
                <br /> Pay Only for What You Use.
            </p>

            <div className={styles.card}>
                <h3 className={styles.cardTitle}>Rates per Country</h3>

                <div className={styles.selectWrapper}>
                    <Select
                        value={country}
                        onChange={(_, v) => v && setCountry(v)}
                        className="w-full"
                    >
                        {COUNTRIES.map((c) => (
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

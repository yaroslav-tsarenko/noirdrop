"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ESimRates.module.scss";
import { FiArrowRight } from "react-icons/fi";
import { useCurrency } from "@/context/CurrencyContext";

interface Props {
    data: {
        ultra: number;
        plus: number;
        globalEsim: number;
        globalSim: number;
    };
}

export default function ESimRates({ data }: Props) {
    const router = useRouter();
    const { currency } = useCurrency();

    const format = (value: number) =>
        new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency,
            maximumFractionDigits: value < 1 ? 3 : 2,
        }).format(value);

    const LinkBtn = ({ label, href }: { label: string; href: string }) => (
        <div
            className={styles.linkBtn}
            onClick={() => router.push(href)}
        >
            {label}
            <FiArrowRight className={styles.arrow} />
        </div>
    );

    return (
        <div className={styles.grid}>
            {/* ULTRA */}
            <div className={styles.card}>
                <p className={styles.title}>
                    <span className={styles.dotPurple}></span>
                    Travel eSIM ULTRA
                </p>

                <p className={styles.price}>{format(data.ultra)}</p>
                <p className={styles.unit}>/GB</p>

                <LinkBtn label="Select this eSIM" href="/esim/esim-ultra" />
            </div>

            {/* PLUS */}
            <div className={styles.card}>
                <p className={styles.title}>
                    <span className={styles.dotBlue}></span>
                    Travel eSIM PLUS
                </p>

                <p className={styles.price}>{format(data.plus)}</p>
                <p className={styles.unit}>/GB</p>

                <LinkBtn label="Select this eSIM" href="/esim/esim-plus" />
            </div>

            {/* GLOBAL ESIM */}
            <div className={`${styles.card} ${styles.highlight}`}>
                <p className={styles.title}>
                    <span className={styles.dotTeal}></span>
                    Global eSIM
                </p>

                <p className={styles.price}>{format(data.globalEsim)}</p>
                <p className={styles.unit}>/MB</p>

                <LinkBtn label="Select this eSIM" href="/esim/esim-global" />
            </div>

            {/* GLOBAL SIM */}
            <div className={styles.card}>
                <p className={styles.title}>
                    <span className={styles.dotOrange}></span>
                    Global SIM
                </p>

                <p className={styles.price}>{format(data.globalSim)}</p>
                <p className={styles.unit}>/MB</p>

                <LinkBtn label="Select this SIM" href="/esim/global-sim" />
            </div>
        </div>
    );
}

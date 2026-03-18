"use client";

import Link from "next/link";
import React from "react";
import { MdBolt, MdPublic, MdShield } from "react-icons/md";
import styles from "./AuthShell.module.scss";

type AuthShellProps = {
    eyebrow: string;
    title: string;
    description: string;
    children: React.ReactNode;
    footerText: string;
    footerLinkLabel: string;
    footerLinkHref: string;
    sideTitle: string;
    sideDescription: string;
    sidePoints: string[];
};

const sideIcons = [MdShield, MdBolt, MdPublic] as const;

export default function AuthShell({
    eyebrow,
    title,
    description,
    children,
    footerText,
    footerLinkLabel,
    footerLinkHref,
    sideTitle,
    sideDescription,
    sidePoints,
}: AuthShellProps) {
    return (
        <section className={styles.shell}>
            <div className={styles.glowA} />
            <div className={styles.glowB} />

            <div className={styles.layout}>
                <aside className={styles.sidePanel}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h1 className={styles.sideTitle}>{sideTitle}</h1>
                    <p className={styles.sideDescription}>{sideDescription}</p>

                    <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>eSIM access</span>
                        <strong>Instant account setup</strong>
                        <p>Sign in once and keep your orders, QR delivery, and travel-ready balance in one place.</p>
                    </div>

                    <div className={styles.pointList}>
                        {sidePoints.map((point, index) => {
                            const Icon = sideIcons[index % sideIcons.length];
                            return (
                                <div key={point} className={styles.pointItem}>
                                    <span className={styles.pointIcon}>
                                        <Icon />
                                    </span>
                                    <span>{point}</span>
                                </div>
                            );
                        })}
                    </div>
                </aside>

                <div className={styles.formPanel}>
                    <div className={styles.formCard}>
                        <span className={styles.eyebrow}>{eyebrow}</span>
                        <h2 className={styles.formTitle}>{title}</h2>
                        <p className={styles.formDescription}>{description}</p>

                        {children}

                        <p className={styles.formFooter}>
                            {footerText}{" "}
                            <Link href={footerLinkHref}>{footerLinkLabel}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

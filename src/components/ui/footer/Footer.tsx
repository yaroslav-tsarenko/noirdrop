"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import styles from "./Footer.module.scss";
import { footerContent } from "@/resources/content";
import { useI18n } from "@/context/i18nContext";
import {
  COMPANY_INSTAGRAM_URL,
  COMPANY_LINKEDIN_URL,
} from "@/resources/constants";

const Footer: React.FC = () => {
  const { logo, columns, contact, legal } = footerContent;
  const { lang } = useI18n();

  const translations = {
    en: { company: "Company", rights: "All rights reserved.", social: "Follow us" },
    tr: { company: "Şirket", rights: "Tüm hakları saklıdır.", social: "Bizi takip edin" },
  } as const;

  const t = translations[lang] ?? translations.en;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href={logo.href} className={styles.logo}>
          <Image src={logo.src} alt={logo.alt} width={120} height={40} />
        </Link>

        {/* Columns */}
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Company Info */}
          {legal && (
            <div className={styles.column}>
              <h4>{t.company}</h4>
              <p>{legal.companyName}</p>
              {legal.companyNumber && <p>{legal.companyNumber}</p>}
              {legal.addressLines?.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              {contact.email && (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              )}

              <div className={styles.socialBlock}>
                <h4>{t.social}</h4>
                <div className={styles.socials}>
                  <a
                    href={COMPANY_INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={COMPANY_LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div
                className={styles.payments}
                aria-label="Accepted payment methods"
              >
                <img
                  src="/icons/visa-logo.svg"
                  alt="Visa"
                  className={styles.paymentLogo}
                />
                <img
                  src="/icons/mastercard-logo.svg"
                  alt="Mastercard"
                  className={styles.paymentLogo}
                />
                <img
                  src="/icons/pci-dss-compliant-logo-vector.svg"
                  alt="PCI DSS compliant"
                  className={styles.paymentLogo}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rights and Payments Row */}
      <div className={styles.rightsRow}>
        <div className={styles.rights}>
          © {new Date().getFullYear()} {t.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { ButtonGroup, Button, Select, Option } from "@mui/joy";
import styles from "./Selectors.module.scss";
import { useI18n } from "@/context/i18nContext";
import { useCurrency, type Currency } from "@/context/CurrencyContext";

const Selectors = () => {
    const { currency, setCurrency } = useCurrency();
    const { lang, setLang } = useI18n();

    return (
        <div className={styles.selectorsWrapper}>
            <div className={styles.selectorBlock}>
                <ButtonGroup variant="soft" size="md">
                    {["GBP", "USD", "EUR", "AUD"].map((cur) => (
                        <Button
                            key={cur}
                            onClick={() => setCurrency(cur as Currency)}
                            sx={{
                                fontWeight: 600,
                                minWidth: 70,
                                transition: "background 0.2s",
                                background: currency === cur ? "#d900aa" : undefined,
                                color: currency === cur ? "#fff" : undefined,
                                "&:hover": {
                                    background: currency === cur ? "#d900aa" : "#f0f0f0",
                                },
                            }}
                        >
                            {cur}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
            {/*<div className={styles.selectorBlock}>
                <Select
                    value={lang}
                    onChange={(_, newValue) => newValue && setLang(newValue as "en" | "tr")}
                    size="md"
                    variant="soft"
                    sx={{
                        background: "#f7f7fa",
                        borderRadius: "8px",
                        minWidth: 120,
                        fontWeight: 600,
                    }}
                >
                    <Option value="en">English</Option>
                    <Option value="tr">Türkçe</Option>
                </Select>
            </div>*/}
        </div>
    );
};

export default Selectors;

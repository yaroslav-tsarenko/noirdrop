"use client";

import React, {useMemo, useState} from "react";
import {useUser} from "@/context/UserContext";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import {Tooltip, IconButton, Drawer, Divider, Badge} from "@mui/material";
import {FaShoppingCart} from "react-icons/fa";
import {MdGeneratingTokens} from "react-icons/md";
import {useAuthActions} from "@/utils/logoutClient";
import {useAlert} from "@/context/AlertContext";
import {useCartStore} from "@/store/cartStore";
import type { CartItem } from "@/store/cartStore";
import ButtonUI from "@/components/ui/button/ButtonUI";
import styles from "./AuthButtons.module.scss";
import { useRouter } from "next/navigation";
import {useCurrency} from "@/context/CurrencyContext";
import type { Currency } from "@/context/CurrencyContext";

const AuthButtons: React.FC = () => {
    const user = useUser();
    const {logout} = useAuthActions();
    const {showAlert} = useAlert();
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const {currency, setCurrency} = useCurrency();

    const items = useCartStore((s) => s.items);
    const removeItem = useCartStore((s) => s.removeItem);

    // simple static rates; can be swapped for API later
    const rates: Record<Currency, number> = useMemo(() => ({
        EUR: 1,
        GBP: 0.85,
        USD: 1.1,
        AUD: 1.7,
    }), []);

    const formatMoney = (amountEur: number) => {
        const value = amountEur * rates[currency];
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

    const handleLogout = async () => {
        const ok = await logout();
        showAlert(ok ? "Logged out" : "Logout failed", "", ok ? "success" : "error");
    };

    const totalEur = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const totalQty = items.reduce((sum, i) => sum + i.qty, 0);

    return (
        <div className={user ? styles.authedUser : styles.nonAuthedButtons}>
            {/* Currency selector (visible for everyone) */}
            <div className={styles.currencyWrap}>
                <select
                    className={styles.currencySelect}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as Currency)}
                    aria-label="Currency"
                >
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                </select>
            </div>

            {/*
 CART BUTTON
 visible for everyone */}
            <Tooltip title="Your eSIM Orders">
                <IconButton onClick={toggleDrawer(true)} sx={{color: "#1A1A1A", mr: 1}}>
                    <Badge
                        badgeContent={totalQty}
                        color="error"
                        overlap="circular"
                        invisible={totalQty === 0}
                    >
                        <FaShoppingCart size={20}/>
                    </Badge>
                </IconButton>
            </Tooltip>

            {/* CART DRAWER */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div className={styles.cartDrawer}>
                    {/* HEADER WITH BIG ESIM CARD */}
                    <div className={styles.cartHeader}>
                        <div className={styles.headerText}>
                            <h3>Your eSIM Orders</h3>
                            <p>{totalQty > 0 ? `${totalQty} item(s) ready for checkout.` : "Add an eSIM plan to start your order."}</p>
                        </div>
                    </div>

                    <Divider sx={{my: 2}}/>

                    {/* ITEMS LIST */}
                    <div className={styles.cartItems}>
                        {items.length === 0 ? (
                            <p className={styles.emptyText}>Your cart is empty.</p>
                        ) : (
                            items.map((item: CartItem) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.simCardMini}>
                                        <div className={styles.simChipMini}/>
                                        <span className={styles.simMiniBadge}>eSIM</span>
                                    </div>

                                    <div className={styles.itemInfo}>
                                        <strong className={styles.itemName}>{item.name}</strong>
                                        <span className={styles.price}>{formatMoney(item.price * item.qty)}</span>
                                        <span className={styles.qty}>Qty: {item.qty}</span>

                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className={styles.removeBtn}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <Divider sx={{my: 2}}/>
                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <strong>{formatMoney(totalEur)}</strong>
                    </div>

                    {user ? (
                        <button
                            className={styles.checkoutBtn}
                            onClick={() => router.push("/checkout")}
                        >
                            Checkout
                        </button>
                    ) : (
                        <p className={styles.signInPrompt}>Please sign in to proceed to checkout.</p>
                    )}
                </div>
            </Drawer>

            {/* AUTHED STATE */}
            {user ? (
                <>
                    <div className={styles.userInfo}>
                        <Avatar src={user.name} alt={user.name} className={styles.avatar}/>

                        <div className={styles.userDetails}>
                            <span className={styles.userName}>{user.name}</span>

                            <div className={styles.userBalance}>
                                <Tooltip title={`Your balance: ${user.tokens ?? 0} Tokens`}>
                                    <p className={styles.balanceText}>
                                        <MdGeneratingTokens className={styles.tokenIcon}/>
                                        {user.tokens?.toLocaleString("de-DE") ?? 0}
                                    </p>
                                </Tooltip>

                                <Link href="/pricing" className={styles.buyLink}>
                                    Add funds
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/dashboard" className={styles.link}>
                        <ButtonUI text="Go to App" shape="default" color="secondary"/>
                    </Link>

                    <ButtonUI
                        text="Logout"
                        shape="default"
                        color="linkHover"
                        onClick={handleLogout}
                    />
                </>
            ) : (
                <>
                    <Link href="/sign-in" className={styles.link}>
                        <ButtonUI
                            text="Sign In"
                            shape="default"
                            color="linkHover"
                            hoverColor="linkHover"
                            hoverEffect="none"
                            fullWidth
                        />
                    </Link>
                    <Link href="/sign-up" className={styles.link}>
                        <ButtonUI
                            text="Sign Up"
                            shape="default"
                            color="secondary"
                            hoverColor="secondary"
                            hoverEffect="none"
                            fullWidth
                        />
                    </Link>
                </>
            )}
        </div>
    );
};

export default AuthButtons;

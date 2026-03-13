"use client"

import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import { useUser } from "@/context/UserContext";
import Transactions from "@/components/widgets/transactions/Transactions";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<'orders' | 'transactions'>('orders');
    const user = useUser();

    const handleTabChange = (_event: React.SyntheticEvent<Element, Event> | null, newValue: string | number | null) => {
        if (typeof newValue === "string") {
            setActiveTab(newValue as 'orders' | 'transactions');
        }
    };

    return (
        <div className={styles.wrapper}>
            {user && (
                <Card variant="soft" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={user.avatar} alt={user.name} size="lg" />
                    <div>
                        <Typography level="h4">{user.name}</Typography>
                        <Typography level="body-sm" color="neutral">{user.email}</Typography>
                    </div>
                </Card>
            )}
            <div className={styles.header}>
                <Tabs value={activeTab} onChange={handleTabChange}>
                    <TabList>
                        <Tab value="orders">My eSIM Orders</Tab>
                        <Tab value="transactions">Transactions</Tab>
                    </TabList>
                </Tabs>
            </div>
            <div className={styles.widgets}>
                {activeTab === 'orders' && <AllOrders />}
                {activeTab === 'transactions' && <Transactions />}
            </div>
        </div>
    );
};

export default Dashboard;

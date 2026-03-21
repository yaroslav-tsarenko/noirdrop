"use client";
import React, { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default FadeIn;

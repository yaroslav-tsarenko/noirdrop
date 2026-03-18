"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonUIProps } from "@/types/button-ui";
import { buttonColors } from "@/resources/styles-config";

const resolveColor = (color?: string) => {
    if (!color) return "";
    return buttonColors[color as keyof typeof buttonColors] || color;
};

const hexToRgba = (hex: string, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    if (hex.startsWith("rgba") || hex.startsWith("rgb") || hex.startsWith("var"))
        return hex;
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((ch) => ch + ch).join("");
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const normalizeVariant = (variant: NonNullable<ButtonUIProps["variant"]>) => {
    switch (variant) {
        case "solid":
        case "soft":
            return "contained";
        case "plain":
            return "text";
        default:
            return variant;
    }
};

const normalizeSize = (size: NonNullable<ButtonUIProps["size"]>) => {
    switch (size) {
        case "sm":
            return "small";
        case "md":
            return "medium";
        case "lg":
            return "large";
        default:
            return size;
    }
};

const ButtonUI: React.FC<ButtonUIProps & {
    hoverEffect?: "none" | "shadow" | "glow" | "scale";
}> = ({
          variant = "contained",
          shape = "default",
          size = "medium",
          fullWidth = false,
          color = "primary",
          hoverColor = "hover",
          textColor,
          hoverTextColor,
          hoverEffect = "shadow",
          disabled,
          children,
          sx,
          loading,
          text,
          type,
          startIcon,
          endIcon,
          onClick,
          ...rest
      }) => {
    const muiVariant = normalizeVariant(variant);
    const muiSize = normalizeSize(size);
    const resolvedBase = resolveColor(color);
    const resolvedHover = resolveColor(hoverColor) || resolvedBase;
    const resolvedText = textColor ? resolveColor(textColor) : undefined;
    const resolvedHoverText = hoverTextColor
        ? resolveColor(hoverTextColor)
        : resolvedText;

    const circleSizes: Record<"small" | "medium" | "large", number> = {
        small: 32,
        medium: 40,
        large: 56,
    };
    const isCircle = shape === "circle";
    const side = circleSizes[size as keyof typeof circleSizes] || 40;

    // Custom hover effects (for sx prop)
    const hoverEffects: Record<NonNullable<typeof hoverEffect>, React.CSSProperties> = {
        none: {},
        shadow: {
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            transform: "translateY(-2px)",
        },
        glow: {
            boxShadow: `0 0 10px ${resolvedHover}`,
            transform: "translateY(-1px)",
        },
        scale: {
            transform: "translateY(-2px) scale(1.05)",
        },
    };

    // Custom variant styles (for sx prop)
    const byVariant =
        muiVariant === "outlined"
            ? {
                color: resolvedText || resolvedBase,
                borderColor: resolvedBase,
                backgroundColor: "transparent",
                transition: "all 0.25s ease-in-out",
                "&:hover": {
                    color: resolvedHoverText || resolvedHover,
                    borderColor: resolvedHover,
                    backgroundColor: hexToRgba(resolvedHover, 0.08),
                    ...hoverEffects[hoverEffect],
                },
            }
            : muiVariant === "text"
                ? {
                    color: resolvedText || resolvedBase,
                    backgroundColor: "transparent",
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                        color: resolvedHoverText || resolvedHover,
                        backgroundColor: hexToRgba(resolvedHover, 0.12),
                        ...hoverEffects[hoverEffect],
                    },
                }
                : {
                    // contained
                    color: resolvedText || resolveColor("inverse"),
                    backgroundColor: resolvedBase,
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                        color: resolvedHoverText || resolveColor("inverse"),
                        backgroundColor: resolvedHover,
                        ...hoverEffects[hoverEffect],
                    },
                };

    return (
        <Button
            variant={muiVariant}
            size={muiSize}
            type={type}
            disabled={disabled || loading}
            fullWidth={isCircle ? false : fullWidth}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            {...rest}
            sx={{
                borderRadius: isCircle ? "50%" : shape === "rounded" ? "30px" : "8px",
                ...(isCircle && {
                    width: side,
                    height: side,
                    minWidth: side,
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    flex: "0 0 auto",
                    alignSelf: "center",
                }),
                fontFamily: "var(--font-family, 'Roboto', sans-serif)",
                textTransform: "none",
                ...byVariant,
                ...sx,
            }}
        >
            {loading ? <CircularProgress size={24} color="inherit" /> : (isCircle ? null : (children ?? text))}
        </Button>
    );
};

export default ButtonUI;

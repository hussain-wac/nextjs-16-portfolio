"use client";

import { memo, ReactNode } from "react";
import Link from "next/link";
import { styles } from "@/lib";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  external?: boolean;
}

export const Button = memo(function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = `
    ${styles.btnBase}
    ${variant === "primary" ? styles.btnPrimary : styles.btnOutline}
    ${styles.btnSizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
});

"use client";

import { memo, ReactNode } from "react";
import { styles } from "@/lib";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = memo(function Card({
  children,
  className = "",
}: CardProps) {
  return <div className={`${styles.card} p-5 ${className}`}>{children}</div>;
});

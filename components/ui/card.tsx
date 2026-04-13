import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "tertiary";
}

const cardVariants: Record<NonNullable<CardProps["variant"]>, string> = {
  default:   "bg-arcade-bg border border-arcade-border-dark/40",
  secondary: "bg-arcade-bg-secondary border border-arcade-border-dark/40",
  tertiary:  "bg-arcade-bg-tertiary border border-arcade-border-dark/40",
};

export function Card({ variant = "secondary", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-xl p-4", cardVariants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

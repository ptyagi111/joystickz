import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "positive" | "negative" | "attentive" | "gem";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default:   "bg-arcade-bg-tertiary border border-arcade-border text-white",
  positive:  "bg-arcade-positive-deeper border border-arcade-positive text-arcade-positive",
  negative:  "bg-arcade-negative-deeper border border-arcade-negative text-arcade-negative",
  attentive: "bg-arcade-attentive-darker border border-arcade-attentive text-arcade-attentive",
  gem:       "bg-arcade-bg-tertiary border border-arcade-gem text-arcade-gem",
};

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-body-s font-bold leading-tight",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

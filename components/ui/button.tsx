import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "big" | "medium" | "small";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon rendered before the label */
  iconStart?: ReactNode;
  /** Icon rendered after the label */
  iconEnd?: ReactNode;
}

/* ── size tokens ──────────────────────────────────────────────── */

/** Padding + typography for text buttons */
const textSizeClasses: Record<ButtonSize, string> = {
  big:    "px-5 py-3.5 text-body-xl font-bold leading-normal",
  medium: "px-6 py-[14.5px] text-body-l font-bold leading-tight",
  small:  "px-5 py-[9px] text-body-m font-bold leading-none",
};

/** Equal padding (square) for icon-only buttons */
const iconOnlySizeClasses: Record<ButtonSize, string> = {
  big:    "p-3.5",
  medium: "p-[14.5px]",
  small:  "p-[9px]",
};

/** Gap between icon and label when combined */
const iconGapClasses: Record<ButtonSize, string> = {
  big:    "gap-2.5",
  medium: "gap-2",
  small:  "gap-1.5",
};

/* ── variant tokens ───────────────────────────────────────────── */

const activeVariantClasses: Record<ButtonVariant, string> = {
  primary:   "bg-gradient-to-l from-arcade-brand to-arcade-brand-dark text-arcade-bg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
  secondary: "bg-arcade-neutral border border-arcade-border-dark text-arcade-bg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
  tertiary:  "border border-arcade-border text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
};

const disabledClasses = "bg-arcade-bg-tertiary text-white/20 cursor-not-allowed shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]";

/* ── component ────────────────────────────────────────────────── */

export function Button({
  variant = "primary",
  size = "big",
  iconStart,
  iconEnd,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isIconOnly = !children && (!!iconStart || !!iconEnd);
  const hasIconWithText = (!!iconStart || !!iconEnd) && !!children;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full overflow-hidden font-sans transition-opacity",
        "hover:opacity-90 active:opacity-75",
        isIconOnly ? iconOnlySizeClasses[size] : textSizeClasses[size],
        hasIconWithText && iconGapClasses[size],
        disabled ? disabledClasses : activeVariantClasses[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {iconStart && <span className="shrink-0 flex">{iconStart}</span>}
      {children}
      {iconEnd && <span className="shrink-0 flex">{iconEnd}</span>}
    </button>
  );
}

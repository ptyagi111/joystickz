import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ── Heading ──────────────────────────────────────────────── */

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
}

const headingStyles = {
  h1: "text-h1 font-extrabold leading-tight tracking-heading",
  h2: "text-h2 font-bold leading-tight tracking-heading",
  h3: "text-h3 font-bold leading-tight",
};

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag className={cn("font-sans text-white", headingStyles[Tag], className)} {...props}>
      {children}
    </Tag>
  );
}

/* ── Text ─────────────────────────────────────────────────── */

type TextSize = "xl" | "l" | "m" | "s";
type TextColor = "primary" | "secondary" | "tertiary";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: TextSize;
  weight?: "regular" | "bold";
  color?: TextColor;
}

const textSizeClasses: Record<TextSize, string> = {
  xl: "text-body-xl leading-normal",
  l:  "text-body-l leading-tight",
  m:  "text-body-m leading-normal",
  s:  "text-body-s leading-tight",
};

const textColorClasses: Record<TextColor, string> = {
  primary:   "text-white",
  secondary: "text-white/80",
  tertiary:  "text-white/40",
};

export function Text({
  as: Tag = "p",
  size = "l",
  weight = "regular",
  color = "primary",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-sans",
        textSizeClasses[size],
        weight === "bold" ? "font-bold" : "font-normal",
        textColorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

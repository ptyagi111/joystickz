"use client";

import { cn } from "./utils";

/* ── Cursor ─────────────────────────────────────────────── */

interface CursorProps {
  disabled?: boolean;
  className?: string;
}

export function Cursor({ disabled = false, className }: CursorProps) {
  return (
    <div className={cn("h-[38px] w-2 relative flex items-center justify-center", className)}>
      <div
        className={cn(
          "w-px h-[28px] animate-[blink_1s_step-end_infinite]",
          disabled ? "bg-white/30" : "bg-arcade-brand"
        )}
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ── Shared underline cell ───────────────────────────────── */

function Cell({
  value,
  placeholder,
  active,
  className,
}: {
  value?: string;
  placeholder?: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 flex items-center justify-center pb-3.5 pt-2.5 border-b border-white",
        className
      )}
    >
      {active && !value ? (
        <Cursor />
      ) : (
        <span
          className={cn(
            "text-h2 font-bold leading-tight tracking-heading whitespace-nowrap",
            value ? "text-white" : "text-arcade-bg-tertiary"
          )}
        >
          {value ?? placeholder}
        </span>
      )}
    </div>
  );
}

/* ── Date Field ─────────────────────────────────────────── */

interface DateFieldProps {
  value?: { month?: string; day?: string; year?: string };
  state?: "active" | "filled";
  className?: string;
}

export function DateField({ value, state = "active", className }: DateFieldProps) {
  const isFilled = state === "filled";
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Cell value={isFilled ? value?.month : undefined} placeholder="MM" active={!isFilled} />
      <Cell value={isFilled ? value?.day : undefined} placeholder="DD" />
      <Cell value={isFilled ? value?.year : undefined} placeholder="YYYY" />
    </div>
  );
}

/* ── Code Field ─────────────────────────────────────────── */

interface CodeFieldProps {
  /** Length of the OTP/PIN */
  length?: number;
  values?: string[];
  state?: "active" | "filled";
  className?: string;
}

export function CodeField({ length = 6, values = [], state = "active", className }: CodeFieldProps) {
  const isFilled = state === "filled";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {Array.from({ length }).map((_, i) => (
        <Cell
          key={i}
          value={values[i]}
          active={!isFilled && i === 0}
          className="px-2.5"
        />
      ))}
    </div>
  );
}

/* ── Phone Field ─────────────────────────────────────────── */

interface PhoneFieldProps {
  value?: string;
  state?: "active" | "filled";
  /** Flag emoji or flag image element */
  countryFlag?: string;
  className?: string;
}

export function PhoneField({
  value,
  state = "active",
  countryFlag = "🇺🇸",
  className,
}: PhoneFieldProps) {
  const isFilled = state === "filled";
  return (
    <div
      className={cn(
        "flex items-center gap-4 border-b border-white pb-3.5 pt-2.5",
        className
      )}
    >
      {/* Country selector */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-2xl leading-none">{countryFlag}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Input area */}
      {!isFilled && <Cursor />}
      {isFilled && (
        <span className="text-h2 font-bold leading-tight tracking-heading text-white whitespace-nowrap">
          {value ?? "+1 343 345 3958"}
        </span>
      )}
    </div>
  );
}

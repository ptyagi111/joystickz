import { cn } from "./utils";

type ToastVariant = "success" | "error";

interface ToastProps {
  variant?: ToastVariant;
  message: string;
  className?: string;
}

function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 3L18 17H2L10 3Z" stroke="#c00f0d" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M10 8V11" stroke="#c00f0d" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="14" r="0.75" fill="#c00f0d" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 10L8 14L16 6" stroke="#14ae5c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Toast({ variant = "error", message, className }: ToastProps) {
  const isSuccess = variant === "success";

  return (
    <div
      role="alert"
      className={cn(
        "flex items-center gap-2.5 px-4 py-3.5 rounded-xl w-full",
        isSuccess ? "bg-arcade-positive-deeper" : "bg-arcade-negative-deeper",
        className
      )}
    >
      <span className="shrink-0">
        {isSuccess ? <CheckIcon /> : <AlertIcon />}
      </span>
      <span className="text-body-m text-white leading-normal text-center flex-1">
        {message}
      </span>
    </div>
  );
}

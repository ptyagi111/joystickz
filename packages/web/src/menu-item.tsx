import { type ReactNode } from "react";
import { cn } from "./utils";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MenuItem({
  icon,
  label,
  active = false,
  disabled = false,
  onClick,
  className,
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative flex flex-col items-center gap-1 pb-4 pt-2.5 px-4",
        "transition-opacity",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "cursor-pointer",
        className
      )}
    >
      {/* Active glow behind icon */}
      {active && (
        <div
          className="absolute -translate-x-1/2 left-1/2 size-[67px]"
          style={{ top: "-48px" }}
          aria-hidden
        >
          <div
            className="absolute inset-[-36%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0) 70%)",
            }}
          />
        </div>
      )}

      {/* Icon */}
      <span className="relative flex items-center justify-center size-7 shrink-0">
        {icon}
      </span>

      {/* Label */}
      <span className="text-body-s font-bold text-white leading-tight whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

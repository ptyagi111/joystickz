import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function FilterChip({ label, selected = false, onClick, className }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center px-4 py-1.5 rounded-[20px]",
        "text-body-m leading-normal font-sans transition-colors",
        selected
          ? "bg-arcade-neutral text-arcade-bg font-normal"
          : "bg-arcade-bg-tertiary text-white font-normal",
        className
      )}
    >
      {label}
    </button>
  );
}

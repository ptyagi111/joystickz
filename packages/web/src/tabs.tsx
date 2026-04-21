import { cn } from "./utils";

interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tab({ label, active = false, onClick, className }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center px-5 py-4 w-30 transition-colors font-sans",
        active
          ? "bg-arcade-blanket border border-white/[0.27] rounded-lg text-body-m font-bold text-white leading-none"
          : "text-body-m font-bold text-white/80 leading-none",
        className
      )}
    >
      {label}
    </button>
  );
}

interface TabGroupProps {
  tabs: string[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export function TabGroup({ tabs, activeIndex = 0, onChange, className }: TabGroupProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {tabs.map((tab, i) => (
        <Tab
          key={tab}
          label={tab}
          active={i === activeIndex}
          onClick={() => onChange?.(i)}
        />
      ))}
    </div>
  );
}

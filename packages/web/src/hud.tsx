import { type ReactNode } from "react";
import { cn } from "./utils";

/* ── Icon primitives ─────────────────────────────────────── */

function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.25" />
      <path d="M10 13.5V13m0-1.5c0-1.5 2.5-1.5 2.5-3a2.5 2.5 0 0 0-5 0" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="8.25" stroke="white" strokeWidth="1.25" />
      <path d="M11 7.5V14.5M7.5 11H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Currency chip ───────────────────────────────────────── */

interface CurrencyChipProps {
  icon: ReactNode;
  amount: number | string;
}

function CurrencyChip({ icon, amount }: CurrencyChipProps) {
  return (
    <div className="flex items-center gap-0.5 h-8 px-2.5 rounded-full bg-arcade-bg shadow-[inset_0px_2px_2px_0px_rgba(242,255,246,0.08),inset_0px_-2px_4px_0px_rgba(0,0,0,0.2)]">
      <span className="flex items-center justify-center">{icon}</span>
      <span className="text-body-m font-bold text-white leading-none">{amount}</span>
    </div>
  );
}

/* ── HUD ─────────────────────────────────────────────────── */

interface HudProps {
  /** Avatar element (img, Avatar component, etc.) */
  avatar?: ReactNode;
  gems?: number | string;
  cash?: number | string;
  title?: string;
  /** Show top row: avatar + currencies */
  showCurrencies?: boolean;
  /** Show bottom row: back + title + help */
  showNav?: boolean;
  onBack?: () => void;
  onHelp?: () => void;
  onAddCurrency?: () => void;
  className?: string;
}

export function Hud({
  avatar,
  gems = 500,
  cash = 500,
  title = "Page title",
  showCurrencies = true,
  showNav = true,
  onBack,
  onHelp,
  onAddCurrency,
  className,
}: HudProps) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col gap-5 px-5 pt-16 pb-4",
        "bg-gradient-to-b from-arcade-bg/100 via-arcade-bg/60 to-arcade-bg/0",
        className
      )}
    >
      {/* Top row — avatar + currencies */}
      {showCurrencies && (
        <div className="flex items-center justify-between">
          {/* Avatar */}
          <div className="size-8 rounded-full overflow-hidden bg-arcade-bg-tertiary shrink-0">
            {avatar ?? (
              <div className="size-full bg-arcade-bg-secondary flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="7" r="3.5" stroke="white" strokeWidth="1.25" />
                  <path d="M3 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>

          {/* Currency chips */}
          <div className="flex items-center gap-1.5">
            <CurrencyChip
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10.5 6H13L11 9L12 13L8 11L4 13L5 9L3 6H5.5L8 2Z" fill="#ea3fb8" />
                </svg>
              }
              amount={gems}
            />
            <CurrencyChip
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" fill="#14ae5c" />
                  <text x="8" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">$</text>
                </svg>
              }
              amount={cash}
            />
            <button
              onClick={onAddCurrency}
              className="flex items-center justify-center size-8 rounded-full bg-arcade-bg shadow-[inset_0px_2px_2px_0px_rgba(242,255,246,0.08),inset_0px_-2px_4px_0px_rgba(0,0,0,0.2)] hover:opacity-80 transition-opacity"
              aria-label="Add currency"
            >
              <PlusCircleIcon />
            </button>
          </div>
        </div>
      )}

      {/* Bottom row — back + title + help */}
      {showNav && (
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center justify-center size-8 rounded-full bg-arcade-bg shadow-[inset_0px_2px_2px_0px_rgba(242,255,246,0.08),inset_0px_-2px_4px_0px_rgba(0,0,0,0.2)] hover:opacity-80 transition-opacity"
            aria-label="Go back"
          >
            <ArrowLeftIcon />
          </button>

          {title && (
            <span className="text-body-l font-bold text-white leading-none">{title}</span>
          )}

          <button
            onClick={onHelp}
            className="flex items-center justify-center size-8 rounded-full bg-arcade-bg shadow-[inset_0px_2px_2px_0px_rgba(242,255,246,0.08),inset_0px_-2px_4px_0px_rgba(0,0,0,0.2)] hover:opacity-80 transition-opacity"
            aria-label="Help"
          >
            <HelpIcon />
          </button>
        </div>
      )}
    </div>
  );
}

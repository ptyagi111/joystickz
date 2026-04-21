import { type ReactNode } from "react";
import { cn } from "./utils";
import { Button } from "./button";

type LobbyCardType = "gems" | "sc";

interface LobbyCardProps {
  type?: LobbyCardType;
  name?: string;
  /** Prize pool amount */
  reward?: string | number;
  /** Entry cost */
  entry?: string | number;
  /** Player count */
  players?: number;
  /** Highlight border on the card */
  highlighted?: boolean;
  onPlay?: () => void;
  className?: string;
}

function GemIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 2L11.5 6.5H14.5L12 10L13 15L9 12.5L5 15L6 10L3.5 6.5H6.5L9 2Z" fill="#ea3fb8" />
    </svg>
  );
}

function CashIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" fill="#14ae5c" />
      <text x="9" y="13" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">$</text>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="5" cy="4.5" r="2" stroke="white" strokeOpacity="0.8" strokeWidth="1" />
      <circle cx="9.5" cy="4.5" r="1.5" stroke="white" strokeOpacity="0.8" strokeWidth="1" />
      <path d="M1 12c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="white" strokeOpacity="0.8" strokeWidth="1" strokeLinecap="round" />
      <path d="M11 12c0-1.66-.67-3.16-1.75-4.25" stroke="white" strokeOpacity="0.8" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function LobbyCard({
  type = "gems",
  name = "Game Name",
  reward = "2",
  entry = "20",
  players = 2,
  highlighted = false,
  onPlay,
  className,
}: LobbyCardProps) {
  const isGems = type === "gems";
  const isSC = type === "sc";

  const glowClass = isGems
    ? "shadow-[0_0_32px_0_rgba(163,63,234,0.25)]"
    : "shadow-[0_0_32px_0_rgba(0,153,81,0.25)]";

  const borderClass = highlighted
    ? isGems
      ? "border-arcade-attentive/70"
      : "border-arcade-positive/70"
    : "border-white/20";

  const rewardColor = isGems ? "text-arcade-gem" : "text-arcade-positive";

  return (
    <div
      className={cn(
        "relative flex items-center gap-4 w-full rounded-xl overflow-hidden",
        "bg-arcade-bg-secondary border border-[0.7px]",
        borderClass,
        highlighted && glowClass,
        className
      )}
    >
      {/* Glow blob */}
      {highlighted && (
        <div
          className={cn(
            "absolute bottom-[-49px] left-[-15px] w-[142px] h-[68px] rounded-full blur-3xl opacity-30 pointer-events-none",
            isGems ? "bg-purple-500" : "bg-arcade-positive"
          )}
        />
      )}

      {/* Prize pool */}
      <div className="flex items-center pl-4 h-[90px] shrink-0">
        <div className="flex flex-col gap-2 py-4 w-20">
          <div className="flex items-center gap-0.5">
            {isGems ? <GemIcon size={24} /> : <CashIcon size={24} />}
            <span className={cn("text-h3 font-bold leading-tight", rewardColor)}>{reward}</span>
          </div>
          <span className="text-body-m text-white/80 leading-none">Prize pool</span>
        </div>
        {/* Vertical divider */}
        <div className="self-stretch w-px bg-white/10 ml-4" />
      </div>

      {/* Game info */}
      <div className="flex flex-col gap-3 pt-1 min-w-0">
        <span className="text-body-l font-bold text-white leading-tight truncate">{name}</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            {isGems ? <GemIcon size={14} /> : <CashIcon size={14} />}
            <span className="text-body-m text-white/80 leading-none">{entry} Entry</span>
          </div>
          <div className="flex items-center gap-0.5">
            <UsersIcon />
            <span className="text-body-m text-white/80 leading-none">{players}</span>
          </div>
        </div>
      </div>

      {/* Play button */}
      <div className="flex-1 flex items-center justify-end pr-3">
        <Button variant="primary" size="small" onClick={onPlay}>
          Play Now
        </Button>
      </div>
    </div>
  );
}

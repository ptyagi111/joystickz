import { type ReactNode } from "react";
import { cn } from "./utils";
import { Button } from "./button";

type ResultState = "won" | "lost" | "tied" | "in progress";

interface ResultCardProps {
  state?: ResultState;
  gameName?: string;
  opponent?: string;
  entry?: string | number;
  /** Reward amount (gems won) */
  reward?: string | number;
  /** Game thumbnail — string URL or ReactNode */
  thumbnail?: string | ReactNode;
  onReplay?: () => void;
  className?: string;
}

function GemIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L10.5 6H13.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2.5 6H5.5L8 1.5Z" fill="#ea3fb8" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin text-arcade-brand"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Thumbnail({ src }: { src?: string | ReactNode }) {
  if (!src) {
    return <div className="size-16 rounded-[10px] bg-arcade-bg-tertiary shrink-0" />;
  }
  if (typeof src === "string") {
    return (
      <div className="size-16 rounded-[10px] overflow-hidden shrink-0">
        <img src={src} alt="" className="size-full object-cover" />
      </div>
    );
  }
  return <div className="size-16 rounded-[10px] overflow-hidden shrink-0">{src}</div>;
}

export function ResultCard({
  state = "won",
  gameName = "Blitz Bunch",
  opponent = "vs Saloni",
  entry = 15,
  reward = 30,
  thumbnail,
  onReplay,
  className,
}: ResultCardProps) {
  const isWon = state === "won";
  const isTied = state === "tied";
  const isInProgress = state === "in progress";

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-3 rounded-xl w-full",
        "bg-arcade-bg-secondary border border-white/5",
        className
      )}
    >
      {/* Thumbnail */}
      <Thumbnail src={thumbnail} />

      {/* Game info */}
      <div className="flex flex-col justify-between h-16 flex-1 min-w-0">
        <div className="flex flex-col gap-1">
          <span className="text-body-l font-bold text-white leading-tight truncate">{gameName}</span>
          <span className="text-body-s font-bold text-white/80 leading-tight">{opponent}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-body-s text-white/80 leading-tight">Entry</span>
          <GemIcon size={14} />
          <span className="text-body-s text-white/80 leading-tight">{entry}</span>
        </div>
      </div>

      {/* State indicator */}
      <div className="flex flex-col items-end gap-1 shrink-0">
        {isWon && (
          <>
            <span className="text-body-s text-white/80 leading-tight">Won</span>
            <div className="flex items-center gap-0.5">
              <GemIcon size={22} />
              <span className="text-body-xl font-bold text-arcade-gem leading-normal">{reward}</span>
            </div>
          </>
        )}
        {isTied && (
          <>
            <span className="text-body-m text-white/80 leading-none mb-1">Tied</span>
            <Button variant="primary" size="small" onClick={onReplay}>
              Replay
            </Button>
          </>
        )}
        {isInProgress && <SpinnerIcon />}
        {state === "lost" && (
          <span className="text-body-m text-white/80 leading-none">Lost</span>
        )}
      </div>
    </div>
  );
}

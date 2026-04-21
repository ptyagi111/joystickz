"use client";

import { useState } from "react";
import { Hud, FilterChip } from "@ptyagi111/jsz-web";

/* ── Decorative SVGs ──────────────────────────────────────── */

function StarSparkle({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M8 1l1.5 5.5L15 8l-5.5 1.5L8 15l-1.5-5.5L1 8l5.5-1.5L8 1Z" fill="currentColor" />
    </svg>
  );
}

function DiamondShape({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="currentColor" />
    </svg>
  );
}

function CrownIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2 14L5 6L10 11L15 6L18 14H2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M2 14h16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 3h14v8a7 7 0 0 1-14 0V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 6H3a3 3 0 0 0 3 3M19 6h2a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16v4M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1" />
      <path d="M6 3.5V6l1.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M5 2v6M2 5l3 3 3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M2 5h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M5.5 1C5.5 3.5 3 4 3 6.5a2.5 2.5 0 0 0 5 0C8 4 5.5 3.5 5.5 1Z" fill="#ffa935" />
      <path d="M5.5 3.5C5.5 5 4.5 5.5 4.5 7a1 1 0 0 0 2 0c0-1.5-1-2-1-3.5Z" fill="#ffee35" />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────── */

interface Player {
  rank: number;
  username: string;
  initials: string;
  avatarColor: string;
  earnings: string;
  winRate: string;
  streak: number;
  trend: "up" | "down" | "same";
  trendChange: number;
  isMe?: boolean;
}

const WEEKLY_PLAYERS: Player[] = [
  { rank: 1, username: "NeonViper88",  initials: "NV", avatarColor: "#6d28d9", earnings: "$2,840", winRate: "84%", streak: 12, trend: "up",   trendChange: 2 },
  { rank: 2, username: "BladeRunner",  initials: "BR", avatarColor: "#0e7490", earnings: "$1,920", winRate: "77%", streak: 7,  trend: "same", trendChange: 0 },
  { rank: 3, username: "StarCrusher",  initials: "SC", avatarColor: "#9a3412", earnings: "$1,350", winRate: "71%", streak: 5,  trend: "up",   trendChange: 1 },
  { rank: 4, username: "PixelPhantom", initials: "PP", avatarColor: "#1e3a5f", earnings: "$980",   winRate: "68%", streak: 4,  trend: "down", trendChange: 1 },
  { rank: 5, username: "CyberAce",     initials: "CA", avatarColor: "#3b0764", earnings: "$870",   winRate: "65%", streak: 3,  trend: "up",   trendChange: 3 },
  { rank: 6, username: "GhostRacer",   initials: "GR", avatarColor: "#14532d", earnings: "$720",   winRate: "61%", streak: 2,  trend: "down", trendChange: 2 },
  { rank: 7, username: "TurboKing",    initials: "TK", avatarColor: "#713f12", earnings: "$610",   winRate: "58%", streak: 1,  trend: "up",   trendChange: 4 },
  { rank: 8, username: "You",          initials: "ME", avatarColor: "#1c1c30", earnings: "$490",   winRate: "54%", streak: 2,  trend: "up",   trendChange: 5, isMe: true },
  { rank: 9, username: "NightOwl",     initials: "NO", avatarColor: "#1e1b4b", earnings: "$380",   winRate: "51%", streak: 0,  trend: "down", trendChange: 1 },
  { rank: 10, username: "ArcadePro",   initials: "AP", avatarColor: "#450a0a", earnings: "$290",   winRate: "48%", streak: 3,  trend: "same", trendChange: 0 },
];

const PERIODS = ["This Week", "All Time", "Friends"];

/* ── Avatar ───────────────────────────────────────────────── */

function PlayerAvatar({
  initials,
  avatarColor,
  size = "md",
  isMe = false,
}: {
  initials: string;
  avatarColor: string;
  size?: "sm" | "md" | "lg";
  isMe?: boolean;
}) {
  const sizeClass = size === "lg" ? "size-14" : size === "sm" ? "size-8" : "size-10";
  const textClass = size === "lg" ? "text-[17px]" : size === "sm" ? "text-[10px]" : "text-[13px]";
  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-extrabold ${textClass} text-white shrink-0 relative`}
      style={{
        background: isMe
          ? "linear-gradient(135deg, #ea3fb8, #8404b8)"
          : avatarColor,
        boxShadow: isMe ? "0 0 12px rgba(234,63,184,0.5)" : undefined,
      }}
    >
      {initials}
    </div>
  );
}

/* ── Podium player ────────────────────────────────────────── */

const MEDAL = {
  1: {
    ring: "linear-gradient(135deg, #FFD700, #ff9500, #FFD700)",
    shadow: "0 0 20px rgba(255,215,0,0.5)",
    earningsColor: "#FFD700",
    columnBg: "linear-gradient(180deg, #2a2200 0%, #24243b 100%)",
    columnHeight: "h-24",
    rankLabel: "1st",
  },
  2: {
    ring: "linear-gradient(135deg, #d0d0d0, #a8a8a8, #e8e8e8)",
    shadow: "0 0 14px rgba(192,192,192,0.35)",
    earningsColor: "#C0C0C0",
    columnBg: "linear-gradient(180deg, #1e1e1e 0%, #24243b 100%)",
    columnHeight: "h-16",
    rankLabel: "2nd",
  },
  3: {
    ring: "linear-gradient(135deg, #CD7F32, #8B4513, #CD7F32)",
    shadow: "0 0 12px rgba(205,127,50,0.35)",
    earningsColor: "#CD7F32",
    columnBg: "linear-gradient(180deg, #1c1000 0%, #24243b 100%)",
    columnHeight: "h-10",
    rankLabel: "3rd",
  },
} as const;

function PodiumPlayer({ player, position }: { player: Player; position: 1 | 2 | 3 }) {
  const m = MEDAL[position];
  const isFirst = position === 1;
  const avatarSize = isFirst ? "lg" : "md";
  const avatarRingSize = isFirst ? "size-[72px]" : "size-[60px]";

  return (
    <div className="flex flex-col items-center gap-1.5">
      {/* Crown above 1st */}
      {isFirst ? (
        <CrownIcon className="text-[#FFD700] mb-0.5" />
      ) : (
        <div className="h-5" /> /* spacer so all three align the same way */
      )}

      {/* Medal ring + avatar */}
      <div className="relative">
        <div
          className={`${avatarRingSize} rounded-full p-[2.5px] flex items-center justify-center`}
          style={{ background: m.ring, boxShadow: m.shadow }}
        >
          <PlayerAvatar initials={player.initials} avatarColor={player.avatarColor} size={avatarSize} />
        </div>
        {/* rank pill */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 h-[18px] rounded-full flex items-center justify-center text-[9px] font-extrabold text-[#10101e]"
          style={{ background: m.ring, boxShadow: m.shadow, whiteSpace: "nowrap" }}
        >
          {m.rankLabel}
        </div>
      </div>

      {/* Name + earnings */}
      <div className="mt-3 text-center px-1">
        <p className="text-[11px] font-bold text-white leading-tight truncate max-w-[76px]">
          {player.username}
        </p>
        <p
          className="text-[15px] font-extrabold leading-tight mt-0.5"
          style={{ color: m.earningsColor, textShadow: `0 0 12px ${m.earningsColor}88` }}
        >
          {player.earnings}
        </p>
        <p className="text-[10px] text-white/30 leading-tight">this week</p>
      </div>

      {/* Podium column */}
      <div
        className={`w-full ${m.columnHeight} rounded-t-xl border border-white/[0.07] flex items-start justify-center pt-2`}
        style={{ background: m.columnBg }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 text-white">
          {m.rankLabel}
        </span>
      </div>
    </div>
  );
}

/* ── Rank row (4th and below) ─────────────────────────────── */

function RankRow({ player }: { player: Player }) {
  const TrendIcon =
    player.trend === "up"
      ? ArrowUpIcon
      : player.trend === "down"
      ? ArrowDownIcon
      : MinusIcon;

  const trendColor =
    player.trend === "up"
      ? "text-arcade-positive"
      : player.trend === "down"
      ? "text-arcade-negative"
      : "text-white/30";

  return (
    <div
      className={`flex items-center gap-3 px-3 py-3 rounded-xl relative overflow-hidden border transition-colors ${
        player.isMe
          ? "border-arcade-gem/35 bg-[rgba(234,63,184,0.07)]"
          : "border-white/[0.05] bg-arcade-bg-secondary"
      }`}
    >
      {/* Gem left-edge accent for current user */}
      {player.isMe && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-arcade-gem"
          style={{ boxShadow: "0 0 8px #ea3fb8" }}
        />
      )}

      {/* Rank number */}
      <span className="w-5 text-center text-[13px] font-extrabold text-white/25 shrink-0 leading-none">
        {player.rank}
      </span>

      {/* Trend */}
      <div className={`flex flex-col items-center shrink-0 gap-0.5 ${trendColor}`}>
        <TrendIcon />
        {player.trendChange > 0 && (
          <span className="text-[8px] font-bold leading-none">{player.trendChange}</span>
        )}
      </div>

      {/* Avatar */}
      <PlayerAvatar
        initials={player.initials}
        avatarColor={player.avatarColor}
        size="sm"
        isMe={player.isMe}
      />

      {/* Name + stats */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-body-m font-bold leading-tight truncate ${
            player.isMe ? "text-arcade-gem" : "text-white"
          }`}
        >
          {player.isMe ? "You" : player.username}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] text-white/35">{player.winRate} WR</span>
          {player.streak > 0 && (
            <span className="flex items-center gap-0.5 text-[10px] text-arcade-attentive font-bold">
              <FlameIcon />
              {player.streak}
            </span>
          )}
        </div>
      </div>

      {/* Earnings */}
      <div className="text-right shrink-0">
        <p
          className="text-body-m font-extrabold leading-tight"
          style={
            player.isMe
              ? { color: "#ea3fb8", textShadow: "0 0 8px rgba(234,63,184,0.5)" }
              : { color: "#ffee35" }
          }
        >
          {player.earnings}
        </p>
        <p className="text-[10px] text-white/25 leading-tight">this week</p>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function LeaderboardPage() {
  const [periodIdx, setPeriodIdx] = useState(0);

  const top3 = WEEKLY_PLAYERS.slice(0, 3);
  const rest = WEEKLY_PLAYERS.slice(3);
  const me = WEEKLY_PLAYERS.find((p) => p.isMe);

  return (
    <div className="min-h-screen bg-arcade-bg max-w-[390px] mx-auto relative overflow-x-hidden font-sans">

      {/* ── Background radial glows ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-80 opacity-[0.12]"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #FFD700 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-48 left-0 right-0 h-64 opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse at 25% 50%, #ea3fb8 0%, transparent 60%)" }}
      />
      <StarSparkle className="pointer-events-none absolute top-10 right-8 text-arcade-brand opacity-25 w-5 h-5" />
      <DiamondShape className="pointer-events-none absolute top-28 left-6 text-arcade-gem opacity-20 w-3 h-3" />
      <StarSparkle className="pointer-events-none absolute top-72 right-14 text-white opacity-[0.08] w-3 h-3" />

      {/* ── HUD ── */}
      <Hud title="Leaderboard" showCurrencies gems={1250} cash={842} />

      {/* ── Scrollable content ── */}
      <div className="px-4 pb-32 space-y-4">

        {/* Period selector */}
        <div className="flex gap-2">
          {PERIODS.map((label, i) => (
            <FilterChip
              key={label}
              label={label}
              selected={periodIdx === i}
              onClick={() => setPeriodIdx(i)}
            />
          ))}
        </div>

        {/* Countdown + live indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-white/45">
            <ClockIcon />
            <span className="text-[11px] font-bold">Resets in</span>
            <span className="text-[11px] font-extrabold text-arcade-attentive">2d 14h 32m</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-arcade-positive animate-pulse" />
            <span className="text-[10px] font-bold text-arcade-positive uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Prize pool banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 rounded-2xl blur-sm opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(to right, #FFD700, #cc7701)" }}
          />
          <div
            className="relative rounded-2xl p-4 border border-[#FFD700]/20 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1c1600 0%, #2a2100 50%, #181200 100%)" }}
          >
            {/* shimmer */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)",
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-[#FFD700]/55 uppercase tracking-widest mb-1">
                  Weekly Prize Pool
                </p>
                <p
                  className="text-[2.25rem] font-extrabold text-[#FFD700] leading-none"
                  style={{ textShadow: "0 0 24px rgba(255,215,0,0.45)" }}
                >
                  $12,500
                </p>
                <p className="text-[10px] text-[#FFD700]/40 mt-1">Split among top 10 players</p>
              </div>
              <TrophyIcon className="text-[#FFD700] w-12 h-12 opacity-75" />
            </div>
          </div>
        </div>

        {/* ── Podium (top 3) ── */}
        <div className="flex items-end justify-center gap-2 px-1 pt-2">
          {/* 2nd */}
          <div className="flex-1">
            <PodiumPlayer player={top3[1]} position={2} />
          </div>
          {/* 1st (center, tallest) */}
          <div className="flex-1">
            <PodiumPlayer player={top3[0]} position={1} />
          </div>
          {/* 3rd */}
          <div className="flex-1">
            <PodiumPlayer player={top3[2]} position={3} />
          </div>
        </div>

        {/* ── Rankings 4-10 ── */}
        <div className="space-y-2">
          {/* Section header */}
          <div className="flex items-center gap-3 px-1">
            <span className="text-[10px] font-bold text-white/25 uppercase tracking-widest whitespace-nowrap">
              Rankings
            </span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          {rest.map((player) => (
            <RankRow key={player.rank} player={player} />
          ))}
        </div>

      </div>

      {/* ── Sticky bottom: Your Rank ── */}
      {me && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] px-4 pb-6 pt-3 pointer-events-none"
          style={{ background: "linear-gradient(to top, #10101e 55%, transparent)" }}>
          <div
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl border border-arcade-gem/30 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(234,63,184,0.14) 0%, rgba(132,4,184,0.09) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Gem left accent */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-arcade-gem"
              style={{ boxShadow: "0 0 10px #ea3fb8" }}
            />
            {/* Radial bg glow */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{ background: "radial-gradient(circle at 0% 50%, #ea3fb8, transparent 70%)" }}
            />

            {/* "Your Rank" label */}
            <div className="shrink-0 z-10 text-center leading-tight">
              <span className="block text-[9px] font-bold text-white/35 uppercase tracking-widest">Your</span>
              <span className="block text-[9px] font-bold text-white/35 uppercase tracking-widest">Rank</span>
            </div>

            {/* Rank number circle */}
            <div
              className="size-9 rounded-full flex items-center justify-center font-extrabold text-[16px] text-white shrink-0 z-10"
              style={{
                background: "linear-gradient(135deg, #ea3fb8, #8404b8)",
                boxShadow: "0 0 14px rgba(234,63,184,0.5)",
              }}
            >
              {me.rank}
            </div>

            <PlayerAvatar initials={me.initials} avatarColor={me.avatarColor} size="sm" isMe />

            {/* Name + win rate */}
            <div className="flex-1 min-w-0 z-10">
              <p className="text-body-m font-bold text-arcade-gem leading-tight">You</p>
              <p className="text-[10px] text-white/35">{me.winRate} win rate</p>
            </div>

            {/* Earnings + trend */}
            <div className="text-right shrink-0 z-10">
              <p
                className="text-body-l font-extrabold leading-tight"
                style={{ color: "#ea3fb8", textShadow: "0 0 10px rgba(234,63,184,0.5)" }}
              >
                {me.earnings}
              </p>
              <div className="flex items-center gap-0.5 justify-end mt-0.5 text-arcade-positive">
                <ArrowUpIcon />
                <span className="text-[10px] font-bold">+{me.trendChange}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

"use client";

import { Heading, Text } from "@/components/ui/typography";

/* ─── decorative SVGs ─────────────────────────────────────── */

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

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11 2.5l2.5 2.5-7.5 7.5H3.5V10L11 2.5z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M9.5 4l2.5 2.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.5" stroke="#8484b3" strokeWidth="1.25" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
        stroke="#8484b3" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 11a9 9 0 0 1 18 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2" y="11" width="4" height="6" rx="2" fill="white" />
      <rect x="18" y="11" width="4" height="6" rx="2" fill="white" />
      <path d="M22 17a4 4 0 0 1-4 4h-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4l4 4-4 4" stroke="white" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#10101e" strokeWidth="1.25" />
      <path d="M10 5v10M7.5 7.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5S11.38 10 10 10s-2.5 1.12-2.5 2.5S8.62 15 10 15s2.5-1.12 2.5-2.5"
        stroke="#10101e" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function LightningBolt() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M8 1L3 8h5l-2 5 6-7H7l1-5Z" fill="#10101e" />
    </svg>
  );
}

/* ─── game icons ─────────────────────────────────────────────── */

function CarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l2-5h10l2 5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="3" y="12" width="18" height="6" rx="2" stroke="white" strokeWidth="1.5" />
      <circle cx="7" cy="18" r="1.5" fill="white" />
      <circle cx="17" cy="18" r="1.5" fill="white" />
    </svg>
  );
}

function SlotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="12" r="3" stroke="white" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="3" stroke="white" strokeWidth="1.5" />
      <path d="M11 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3C12 3 17 7 17 13H7C7 7 12 3 12 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 13l-2 4h14l-2-4" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="1.5" fill="white" />
    </svg>
  );
}

/* ─── rank medal ──────────────────────────────────────────────── */

const RANK_STYLES = [
  { bg: "bg-gradient-to-b from-[#FFD700] to-[#cc9900]", text: "text-[#10101e]", shadow: "shadow-[0_0_10px_rgba(255,215,0,0.6)]" },
  { bg: "bg-gradient-to-b from-[#C0C0C0] to-[#888]",    text: "text-[#10101e]", shadow: "shadow-[0_0_8px_rgba(192,192,192,0.5)]" },
  { bg: "bg-gradient-to-b from-[#CD7F32] to-[#8B4513]", text: "text-white",      shadow: "shadow-[0_0_8px_rgba(205,127,50,0.4)]" },
];

function RankBadge({ rank }: { rank: number }) {
  const style = RANK_STYLES[rank - 1] ?? { bg: "bg-arcade-bg-tertiary", text: "text-white/60", shadow: "" };
  return (
    <div className={`size-7 rounded-full flex items-center justify-center font-extrabold text-[11px] shrink-0 ${style.bg} ${style.text} ${style.shadow}`}>
      {rank}
    </div>
  );
}

/* ─── stat card ─────────────────────────────────────────────── */

interface StatCardProps {
  value: string;
  label: string;
  valueColor: string;
  glowColor: string;
  icon: React.ReactNode;
}

function StatCard({ value, label, valueColor, glowColor, icon }: StatCardProps) {
  return (
    <div className="flex-1 flex flex-col items-center gap-2 bg-arcade-bg-secondary rounded-2xl p-4 relative overflow-hidden">
      {/* radial glow */}
      <div className={`absolute inset-0 opacity-20 ${glowColor}`} style={{ background: `radial-gradient(circle at 50% 100%, currentColor 0%, transparent 70%)` }} />
      <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest leading-tight z-10">{label}</span>
      <span className={`text-[2rem] font-extrabold leading-none tracking-tight z-10 ${valueColor}`}
        style={{ textShadow: "0 0 20px currentColor" }}>
        {value}
      </span>
      <span className="text-white/30 z-10">{icon}</span>
    </div>
  );
}

/* ─── high score row ────────────────────────────────────────── */

interface HighScoreRowProps {
  rank: number;
  iconBg: string;
  icon: React.ReactNode;
  gameName: string;
  gameMode: string;
  scoreValue: string;
  scoreLabel: string;
  scoreColor: string;
  glowColor: string;
}

function HighScoreRow({ rank, iconBg, icon, gameName, gameMode, scoreValue, scoreLabel, scoreColor, glowColor }: HighScoreRowProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-arcade-bg rounded-xl border border-white/[0.06] relative overflow-hidden">
      {/* side glow accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl ${glowColor}`} />
      <RankBadge rank={rank} />
      <div className={`size-11 rounded-xl flex items-center justify-center shrink-0 ${iconBg} relative`}>
        {icon}
        <div className="absolute inset-0 rounded-xl opacity-40" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-body-l font-bold text-white leading-tight">{gameName}</p>
        <p className="text-body-s text-white/50 leading-tight">{gameMode}</p>
      </div>
      <div className="text-right shrink-0">
        <p className={`text-body-xl font-extrabold leading-tight ${scoreColor}`}
          style={{ textShadow: "0 0 12px currentColor" }}>
          {scoreValue}
        </p>
        <p className="text-body-s text-white/40 leading-tight">{scoreLabel}</p>
      </div>
    </div>
  );
}

/* ─── menu row ──────────────────────────────────────────────── */

interface MenuRowProps {
  icon: React.ReactNode;
  label: string;
  highlight?: boolean;
}

function MenuRow({ icon, label, highlight = false }: MenuRowProps) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all hover:opacity-90 ${
        highlight
          ? "bg-gradient-to-r from-arcade-positive to-arcade-positive-dark shadow-[0_0_16px_rgba(20,174,92,0.35)]"
          : "bg-transparent hover:bg-white/5"
      }`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1 text-left text-body-l font-bold leading-tight text-white">{label}</span>
      <ChevronRight />
    </button>
  );
}

/* ─── page ──────────────────────────────────────────────────── */

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-arcade-bg px-4 pt-10 pb-12 space-y-3 max-w-[390px] mx-auto font-sans relative overflow-hidden">

      {/* ── Background decorative elements ── */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-64 opacity-10"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ea3fb8 0%, transparent 70%)" }} />
      <StarSparkle className="pointer-events-none absolute top-8 right-8 text-arcade-gem opacity-30 w-5 h-5" />
      <DiamondShape className="pointer-events-none absolute top-24 left-5 text-arcade-brand opacity-20 w-3 h-3" />
      <StarSparkle className="pointer-events-none absolute top-40 right-16 text-arcade-brand opacity-15 w-3 h-3" />

      {/* ── Profile header card ── */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1c1c30 0%, #24243b 100%)", border: "1px solid rgba(132,132,179,0.2)" }}>
        {/* Pink corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, #ea3fb8, transparent 70%)" }} />

        <div className="p-4 space-y-3 relative z-10">
          {/* Avatar + name */}
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              {/* Outer gem ring */}
              <div className="size-[72px] rounded-full p-[2px]"
                style={{ background: "linear-gradient(135deg, #ea3fb8, #8484b3, #ea3fb8)" }}>
                <div className="size-full rounded-full bg-arcade-bg-tertiary flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="12" r="6" fill="white" fillOpacity="0.5" />
                    <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="white" fillOpacity="0.3" />
                  </svg>
                </div>
              </div>
              {/* Online dot */}
              <span className="absolute bottom-0.5 right-0.5 size-3.5 rounded-full bg-arcade-positive border-2 border-arcade-bg-secondary shadow-[0_0_6px_#14ae5c]" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Heading as="h3" className="text-white">GameMaster_Alex</Heading>
                <StarSparkle className="text-arcade-brand w-4 h-4" />
              </div>
              <Text size="s" color="secondary" className="mt-0.5">Member since March 2023</Text>
              {/* XP bar */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[10px] font-bold text-arcade-brand uppercase tracking-wider">Lv.47</span>
                <div className="flex-1 h-1.5 bg-arcade-bg-tertiary rounded-full overflow-hidden">
                  <div className="h-full w-[72%] rounded-full"
                    style={{ background: "linear-gradient(to right, #ffee35, #ea3fb8)" }} />
                </div>
                <span className="text-[10px] text-white/40">72%</span>
              </div>
            </div>
          </div>

          {/* Edit Profile */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#8484b3]/40 text-[#8484b3] hover:bg-[#8484b3]/10 transition-colors">
            <EditIcon />
            <span className="text-body-m font-bold">Edit Profile</span>
          </button>
        </div>
      </div>

      {/* ── Cash Out ── */}
      <div className="relative">
        {/* outer glow */}
        <div className="absolute inset-0 rounded-2xl blur-md opacity-50"
          style={{ background: "linear-gradient(to left, #ffee35, #cc7701)" }} />
        <button className="relative w-full flex items-center justify-center gap-3 py-4 rounded-2xl overflow-hidden hover:opacity-95 active:scale-[0.98] transition-all"
          style={{ background: "linear-gradient(to left, #ffee35, #cc7701)", boxShadow: "0 4px 24px rgba(255,238,53,0.3)" }}>
          {/* shimmer overlay */}
          <div className="absolute inset-0 opacity-30"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)" }} />
          <LightningBolt />
          <DollarIcon />
          <span className="text-body-xl font-extrabold text-arcade-bg tracking-tight">Cash Out — $1,247.50</span>
          <DiamondShape className="text-[#10101e] opacity-40 w-2.5 h-2.5" />
        </button>
      </div>

      {/* ── Stats dashboard ── */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.06]"
        style={{ background: "linear-gradient(160deg, #1a1a2e 0%, #24243b 100%)" }}>
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <Heading as="h3" className="text-white">Dashboard</Heading>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-arcade-positive animate-pulse" />
            <span className="text-[10px] font-bold text-arcade-positive uppercase tracking-widest">Live</span>
          </div>
        </div>
        {/* Stats */}
        <div className="flex gap-2 p-3">
          <StatCard
            value="247"
            label="Games"
            valueColor="text-[#8484b3]"
            glowColor="text-[#8484b3]"
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="5" cy="8" r="1" fill="currentColor" />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
                <circle cx="11" cy="8" r="1" fill="currentColor" />
              </svg>
            }
          />
          <StatCard
            value="189"
            label="Wins"
            valueColor="text-arcade-positive"
            glowColor="text-arcade-positive"
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2h8v5a4 4 0 0 1-8 0V2Z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M4 4H2a2 2 0 0 0 2 2M12 4h2a2 2 0 0 1-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M8 11v3M6 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
          />
          <StatCard
            value="$3.4k"
            label="Won"
            valueColor="text-arcade-brand"
            glowColor="text-arcade-brand"
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.5 5.5L15 8l-5.5 1.5L8 15l-1.5-5.5L1 8l5.5-1.5L8 1Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
        {/* Win rate bar */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Win Rate</span>
            <span className="text-[11px] font-extrabold text-arcade-gem">76.5%</span>
          </div>
          <div className="h-2 bg-arcade-bg rounded-full overflow-hidden">
            <div className="h-full rounded-full relative overflow-hidden"
              style={{ width: "76.5%", background: "linear-gradient(to right, #ea3fb8, #ffee35)" }}>
              <div className="absolute inset-0 opacity-40"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Account section ── */}
      <div className="bg-arcade-bg-secondary rounded-2xl p-4 space-y-1 border border-white/[0.05]">
        <Heading as="h3" className="mb-3">Account</Heading>
        <MenuRow
          icon={
            <div className="size-9 rounded-xl bg-arcade-bg-tertiary flex items-center justify-center">
              <SettingsIcon />
            </div>
          }
          label="Settings"
        />
        <div className="h-px bg-white/5 mx-1" />
        <MenuRow
          icon={
            <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center">
              <HeadsetIcon />
            </div>
          }
          label="Need Help? Contact Us"
          highlight
        />
      </div>

      {/* ── Personal High Scores ── */}
      <div className="rounded-2xl border border-white/[0.06] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1a1a2e 0%, #24243b 100%)" }}>
        {/* header */}
        <div className="px-4 pt-4 pb-3 flex items-center gap-3">
          <div className="flex-1">
            <Heading as="h3" className="text-white">High Scores</Heading>
          </div>
          <div className="flex items-center gap-1">
            <StarSparkle className="text-arcade-brand w-3.5 h-3.5" />
            <span className="text-[10px] font-bold text-arcade-brand uppercase tracking-widest">Personal Best</span>
          </div>
        </div>

        {/* separator with gem gradient */}
        <div className="h-px mx-4 mb-3" style={{ background: "linear-gradient(to right, transparent, #ea3fb8, transparent)" }} />

        <div className="px-3 pb-4 space-y-2">
          <HighScoreRow
            rank={1}
            iconBg="bg-[#6d28d9]"
            icon={<CarIcon />}
            gameName="Neon Racer"
            gameMode="Speed Challenge"
            scoreValue="24,750"
            scoreLabel="Best Score"
            scoreColor="text-[#8484b3]"
            glowColor="bg-[#8484b3]"
          />
          <HighScoreRow
            rank={2}
            iconBg="bg-arcade-positive-dark"
            icon={<SlotIcon />}
            gameName="Cyber Slots"
            gameMode="Jackpot Madness"
            scoreValue="$892.50"
            scoreLabel="Biggest Win"
            scoreColor="text-arcade-positive"
            glowColor="bg-arcade-positive"
          />
          <HighScoreRow
            rank={3}
            iconBg="bg-arcade-brand-dark"
            icon={<RocketIcon />}
            gameName="Space Invaders"
            gameMode="Retro Classic"
            scoreValue="156,340"
            scoreLabel="High Score"
            scoreColor="text-arcade-gem"
            glowColor="bg-arcade-gem"
          />
        </div>
      </div>

    </div>
  );
}

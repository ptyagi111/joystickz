"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@ptyagi111/jsz-web";
import { Badge } from "@ptyagi111/jsz-web";
import { Card, CardHeader, CardContent } from "@ptyagi111/jsz-web";
import { Heading, Text } from "@ptyagi111/jsz-web";
import { TabGroup } from "@ptyagi111/jsz-web";
import { Toast } from "@ptyagi111/jsz-web";
import { LobbyCard } from "@ptyagi111/jsz-web";
import { CodeBlock } from "@/components/docs/code-block";

/* ── Interactive tab preview ─────────────────────────────────── */

function TabPreview() {
  const [active, setActive] = useState(0);
  return <TabGroup tabs={["Matches", "Leaderboard", "History"]} activeIndex={active} onChange={setActive} />;
}

/* ── Component preview cells ─────────────────────────────────── */

function PreviewCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-arcade-bg rounded-xl p-5 flex items-center justify-center min-h-[100px] border border-white/[0.05]">
      {children}
    </div>
  );
}

const COMPONENTS = [
  {
    name: "Button",
    href: "/docs/components/button",
    tag: "Foundation",
    desc: "Primary, secondary, tertiary + icon layouts",
    preview: (
      <PreviewCell>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary" size="small">Play Now</Button>
          <Button variant="secondary" size="small">View</Button>
          <Button variant="tertiary" size="small">Cancel</Button>
        </div>
      </PreviewCell>
    ),
  },
  {
    name: "Badge",
    href: "/docs/components/badge",
    tag: "Foundation",
    desc: "Semantic status indicators",
    preview: (
      <PreviewCell>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="positive">Win</Badge>
          <Badge variant="negative">Loss</Badge>
          <Badge variant="gem">2x Gems</Badge>
          <Badge variant="attentive">Live</Badge>
        </div>
      </PreviewCell>
    ),
  },
  {
    name: "Typography",
    href: "/docs/components/typography",
    tag: "Foundation",
    desc: "DM Sans — 7-step scale",
    preview: (
      <PreviewCell>
        <div className="text-left w-full space-y-1">
          <Heading as="h3">Game Over</Heading>
          <Text color="secondary">Speed Challenge · 4 players</Text>
          <Text size="s" color="tertiary">Entry fee: 20 Gems</Text>
        </div>
      </PreviewCell>
    ),
  },
  {
    name: "Card",
    href: "/docs/components/card",
    tag: "Foundation",
    desc: "Surface containers with depth levels",
    preview: (
      <PreviewCell>
        <Card variant="default" className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Heading as="h3">Neon Racer</Heading>
              <Badge variant="gem">Live</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Text size="s" color="secondary">2-minute time trial · 4 players</Text>
          </CardContent>
        </Card>
      </PreviewCell>
    ),
  },
  {
    name: "Tabs",
    href: "/docs/components/tabs",
    tag: "Navigation",
    desc: "Segmented pill navigation",
    preview: (
      <PreviewCell>
        <div className="w-full">
          <TabPreview />
        </div>
      </PreviewCell>
    ),
  },
  {
    name: "Toast",
    href: "/docs/components/toast",
    tag: "Feedback",
    desc: "Success and error banners",
    preview: (
      <PreviewCell>
        <div className="w-full space-y-2">
          <Toast variant="success" message="You won 30 Gems!" />
          <Toast variant="error" message="Insufficient balance." />
        </div>
      </PreviewCell>
    ),
  },
  {
    name: "Lobby Card",
    href: "/docs/components/lobby-card",
    tag: "Game",
    desc: "Game lobby entry tiles",
    preview: (
      <PreviewCell>
        <div className="w-full">
          <LobbyCard type="gems" name="Blitz Bunch" reward="2" entry="20" players={2} highlighted />
        </div>
      </PreviewCell>
    ),
  },
  {
    name: "HUD",
    href: "/docs/components/hud",
    tag: "Navigation",
    desc: "In-game heads-up display bar",
    preview: (
      <PreviewCell>
        <div className="w-full text-center text-[12px] text-white/30 italic">
          Full-width — see docs
        </div>
      </PreviewCell>
    ),
  },
];

const TAG_COLORS: Record<string, string> = {
  Foundation: "text-[#8484b3] bg-[#8484b3]/10 border-[#8484b3]/20",
  Navigation: "text-arcade-positive bg-arcade-positive/10 border-arcade-positive/20",
  Game:       "text-arcade-gem bg-arcade-gem/10 border-arcade-gem/20",
  Forms:      "text-arcade-brand bg-arcade-brand/10 border-arcade-brand/20",
  Feedback:   "text-arcade-attentive bg-arcade-attentive/10 border-arcade-attentive/20",
};

const PRINCIPLES = [
  {
    icon: "🎮",
    title: "Game-First",
    desc: "Every component is designed for the intensity and speed of arcade gaming — never generic.",
  },
  {
    icon: "⚡",
    title: "Bold & Expressive",
    desc: "High contrast, punchy gradients, and extrabold type. Designed to feel energetic.",
  },
  {
    icon: "🌑",
    title: "Dark Native",
    desc: "Built dark from the ground up. No light-mode toggle — the dark canvas is the experience.",
  },
  {
    icon: "🧩",
    title: "Token-Driven",
    desc: "Every color, size, and spacing value is a named design token. Swap the theme, not the code.",
  },
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function DocsOverview() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden mb-12 border border-white/[0.06]"
        style={{
          background: "linear-gradient(135deg, #0f0f28 0%, #1a1035 40%, #0f1f40 100%)",
        }}
      >
        {/* glow blobs */}
        <div
          className="absolute -top-16 -left-16 size-72 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffee35, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-16 right-8 size-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ea3fb8, transparent 70%)" }}
        />

        <div className="relative px-10 py-14 text-center">
          {/* Logo mark */}
          <div
            className="size-16 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl"
            style={{ background: "linear-gradient(135deg, #ffee35, #cc7701)" }}
          >
            <svg width="28" height="28" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 5.5L16 8l-6 2L8 16l-2-6L0 8l6-2L8 1Z" fill="#10101e" />
            </svg>
          </div>

          {/* Version pill */}
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-arcade-brand/10 text-arcade-brand border border-arcade-brand/20">
            v1.0 — Stable
          </span>

          <h1 className="text-[3rem] font-extrabold text-white tracking-tight leading-none mb-4">
            Joystickz Design System
          </h1>
          <p className="text-[16px] text-white/50 max-w-md mx-auto leading-relaxed mb-8">
            Bold, expressive components built for arcade gaming. Tailwind v4 + DM Sans.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/docs/components/button">
              <Button variant="primary" size="medium">Browse Components</Button>
            </Link>
            <Link href="/docs/tokens">
              <Button variant="tertiary" size="medium">View Tokens</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3 mb-12">
        {[
          { value: "12", label: "Components", sub: "Production ready" },
          { value: "30+", label: "Variants", sub: "Per component" },
          { value: "20+", label: "Tokens", sub: "Colors + type" },
        ].map(({ value, label, sub }) => (
          <div
            key={label}
            className="bg-arcade-bg-secondary rounded-2xl p-5 border border-white/[0.07] text-center"
          >
            <div className="text-[2.25rem] font-extrabold text-arcade-brand leading-none">{value}</div>
            <div className="text-[13px] font-bold text-white/70 mt-1">{label}</div>
            <div className="text-[11px] text-white/30 mt-0.5">{sub}</div>
          </div>
        ))}
      </div>

      {/* ── Design Principles ─────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-[1.05rem] font-bold text-white mb-4">Design Principles</h2>
        <div className="grid grid-cols-2 gap-3">
          {PRINCIPLES.map(p => (
            <div
              key={p.title}
              className="p-5 rounded-2xl border border-white/[0.07] bg-arcade-bg-secondary"
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <p className="font-bold text-white text-[14px] mb-1">{p.title}</p>
              <p className="text-[12px] text-white/45 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Start ───────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-[1.05rem] font-bold text-white mb-4">Quick Start</h2>
        <CodeBlock
          language="tsx"
          code={`import { Button, Badge, Card, CardHeader, CardContent, Toast } from "@ptyagi111/jsz-web";

export default function Example() {
  return (
    <Card variant="default">
      <CardHeader>
        <Badge variant="gem">2x Gems</Badge>
      </CardHeader>
      <CardContent>
        <Button variant="primary" size="big">Play Now</Button>
        <Toast variant="success" message="You won the match!" />
      </CardContent>
    </Card>
  );
}`}
        />
      </section>

      {/* ── Component Gallery ─────────────────────────────────── */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[1.05rem] font-bold text-white">All Components</h2>
          <span className="text-[12px] text-white/30">{COMPONENTS.length} shown · 12 total</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {COMPONENTS.map(c => (
            <Link
              key={c.name}
              href={c.href}
              className="group flex flex-col rounded-2xl border border-white/[0.07] bg-arcade-bg-secondary hover:border-arcade-brand/25 hover:bg-arcade-bg-secondary transition-all overflow-hidden"
            >
              {/* Live preview */}
              <div className="p-4 border-b border-white/[0.05]">
                {c.preview}
              </div>

              {/* Meta */}
              <div className="px-4 py-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-bold text-[14px] text-white group-hover:text-arcade-brand transition-colors">{c.name}</p>
                  <p className="text-[12px] text-white/40 mt-0.5 truncate">{c.desc}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${TAG_COLORS[c.tag]}`}>
                  {c.tag}
                </span>
              </div>

              <div className="px-4 pb-3">
                <span className="text-[11px] text-arcade-brand/50 group-hover:text-arcade-brand transition-colors flex items-center gap-1">
                  View docs
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────────── */}
      <div className="rounded-2xl border border-white/[0.07] bg-arcade-bg-secondary p-6 flex items-center justify-between gap-6">
        <div>
          <p className="font-bold text-white text-[15px]">Explore all 12 components</p>
          <p className="text-[13px] text-white/40 mt-0.5">With props tables, live previews, do/don&apos;t guidelines, and code.</p>
        </div>
        <Link href="/docs/components/button">
          <Button variant="primary" size="medium">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}

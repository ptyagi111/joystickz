"use client";

import { useState } from "react";
import { PageHeader, Section, DocCallout } from "@/components/docs/doc-section";

const COLORS = [
  { group: "Background", tokens: [
    { name: "arcade-bg",           hex: "#10101e", label: "Base background",       usage: "bg-arcade-bg" },
    { name: "arcade-bg-secondary", hex: "#24243b", label: "Cards / panels",        usage: "bg-arcade-bg-secondary" },
    { name: "arcade-bg-tertiary",  hex: "#32324e", label: "Inputs / tertiary",     usage: "bg-arcade-bg-tertiary" },
    { name: "arcade-bg-deep",      hex: "#020217", label: "Code blocks / overlays",usage: "bg-arcade-bg-deep" },
  ]},
  { group: "Brand", tokens: [
    { name: "arcade-brand",      hex: "#ffee35", label: "Primary brand yellow", usage: "text-arcade-brand" },
    { name: "arcade-brand-dark", hex: "#cc7701", label: "Gradient end",          usage: "bg-arcade-brand-dark" },
    { name: "arcade-neutral",    hex: "#f5f5f5", label: "Light neutral",         usage: "bg-arcade-neutral" },
  ]},
  { group: "Positive", tokens: [
    { name: "arcade-positive",        hex: "#14ae5c", label: "Success / wins",       usage: "text-arcade-positive" },
    { name: "arcade-positive-hover",  hex: "#009951", label: "Hover state",          usage: "hover:bg-arcade-positive-hover" },
    { name: "arcade-positive-dark",   hex: "#008043", label: "Dark accent",          usage: "bg-arcade-positive-dark" },
    { name: "arcade-positive-deeper", hex: "#024023", label: "Toast background",     usage: "bg-arcade-positive-deeper" },
  ]},
  { group: "Negative", tokens: [
    { name: "arcade-negative",        hex: "#c00f0d", label: "Error / loss",        usage: "text-arcade-negative" },
    { name: "arcade-negative-dark",   hex: "#690807", label: "Dark accent",         usage: "bg-arcade-negative-dark" },
    { name: "arcade-negative-deeper", hex: "#4d0b0a", label: "Toast background",    usage: "bg-arcade-negative-deeper" },
  ]},
  { group: "Attentive", tokens: [
    { name: "arcade-attentive",       hex: "#ffa935", label: "Warning / attention", usage: "text-arcade-attentive" },
    { name: "arcade-attentive-dark",  hex: "#cc7702", label: "Dark variant",        usage: "bg-arcade-attentive-dark" },
    { name: "arcade-attentive-darker",hex: "#995901", label: "Deeper variant",      usage: "bg-arcade-attentive-darker" },
  ]},
  { group: "Special", tokens: [
    { name: "arcade-gem",         hex: "#ea3fb8", label: "Gem currency / accent", usage: "text-arcade-gem" },
    { name: "arcade-border",      hex: "#8484b3", label: "Muted border / text",   usage: "border-arcade-border" },
    { name: "arcade-border-dark", hex: "#24243b", label: "Subtle border",         usage: "border-arcade-border-dark" },
  ]},
];

const TYPE_SCALE = [
  { name: "h1",      size: "3.5rem / 56px",  weight: "800", sample: "Game Over" },
  { name: "h2",      size: "2rem / 32px",    weight: "800", sample: "Leaderboard" },
  { name: "h3",      size: "1.5rem / 24px",  weight: "700", sample: "Neon Racer" },
  { name: "body-xl", size: "1.25rem / 20px", weight: "400", sample: "Speed Challenge" },
  { name: "body-l",  size: "1rem / 16px",    weight: "400", sample: "4 players · 2-minute trial" },
  { name: "body-m",  size: "0.875rem / 14px",weight: "400", sample: "Entry fee: 20 Gems" },
  { name: "body-s",  size: "0.75rem / 12px", weight: "400", sample: "Joined 3 minutes ago" },
];

const sampleStyle = (name: string): React.CSSProperties => ({
  h1:      { fontSize: "2.25rem", fontWeight: 800 },
  h2:      { fontSize: "1.6rem",  fontWeight: 800 },
  h3:      { fontSize: "1.25rem", fontWeight: 700 },
  "body-xl":{ fontSize: "1.1rem", fontWeight: 400 },
  "body-l": { fontSize: "1rem",   fontWeight: 400 },
  "body-m": { fontSize: "0.875rem",fontWeight: 400 },
  "body-s": { fontSize: "0.75rem", fontWeight: 400 },
}[name] ?? {});

function ColorSwatch({ name, hex, label, usage }: { name: string; hex: string; label: string; usage: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      title={`Copy ${hex}`}
      className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-arcade-bg-secondary hover:border-white/[0.12] hover:bg-arcade-bg-tertiary transition-all text-left w-full"
    >
      <div
        className="size-10 rounded-lg shrink-0 border border-white/10 transition-transform group-hover:scale-105"
        style={{ backgroundColor: hex }}
      />
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] text-white/70 truncate">{name}</p>
        <p className="font-mono text-[10px] text-white/35">{hex}</p>
        <p className="text-[10px] text-white/30 mt-0.5 truncate">{label}</p>
      </div>
      <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <span className="text-[10px] text-arcade-positive font-bold">✓</span>
        ) : (
          <span className="text-[10px] text-white/25 font-mono">{usage}</span>
        )}
      </div>
    </button>
  );
}

export default function TokensPage() {
  return (
    <div>
      <PageHeader
        title="Design Tokens"
        description="All color, typography, and spacing tokens that make up the Arcade design system. Click any color swatch to copy the hex value."
        tag="Tokens"
      />

      <DocCallout variant="info">
        Tokens are defined in <code className="font-mono text-arcade-brand text-[12px]">app/globals.css</code> using Tailwind v4&apos;s <code className="font-mono text-arcade-brand text-[12px]">@theme inline</code>. Use them via Tailwind utility classes — e.g. <code className="font-mono text-arcade-brand text-[12px]">bg-arcade-brand</code>, <code className="font-mono text-arcade-brand text-[12px]">text-arcade-gem</code>, <code className="font-mono text-arcade-brand text-[12px]">border-arcade-positive</code>.
      </DocCallout>

      {/* ── Colors ── */}
      <Section title="Colors" description="Click any swatch to copy the hex value to your clipboard.">
        <div className="space-y-8">
          {COLORS.map(group => (
            <div key={group.group}>
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3">{group.group}</p>
              <div className="grid grid-cols-2 gap-2">
                {group.tokens.map(token => (
                  <ColorSwatch key={token.name} {...token} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Typography ── */}
      <Section title="Typography scale" description="DM Sans — weights 400, 700, 800. Applied via Heading and Text components.">
        <div className="rounded-xl overflow-hidden border border-white/[0.07]">
          {TYPE_SCALE.map((t, i) => (
            <div
              key={t.name}
              className={`flex items-center gap-4 px-5 py-3.5 ${i > 0 ? "border-t border-white/[0.05]" : ""} ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}
            >
              <span className="font-mono text-[10px] text-arcade-gem w-16 shrink-0">{t.name}</span>
              <span className="text-white/80 flex-1 truncate" style={sampleStyle(t.name)}>{t.sample}</span>
              <div className="text-right shrink-0 hidden sm:block">
                <p className="text-[11px] text-white/30">{t.size}</p>
                <p className="text-[10px] text-white/20">weight {t.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Spacing / Key values ── */}
      <Section title="Key values" description="Consistent values used across all components.">
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { name: "Border radius (default)", value: "12px",  cls: "rounded-xl" },
            { name: "Border radius (large)",   value: "16px",  cls: "rounded-2xl" },
            { name: "Border radius (pill)",     value: "9999px",cls: "rounded-full" },
            { name: "Card padding",             value: "16px",  cls: "p-4" },
            { name: "Section gap",              value: "12px",  cls: "gap-3" },
            { name: "Letter spacing (heading)", value: "-0.03em",cls: "tracking-tight" },
            { name: "Line height (tight)",      value: "1.2",   cls: "leading-none" },
            { name: "Font weight (extrabold)",  value: "800",   cls: "font-extrabold" },
          ].map(({ name, value, cls }) => (
            <div key={name} className="p-4 rounded-xl bg-arcade-bg-secondary border border-white/[0.05]">
              <p className="text-[11px] text-white/35 mb-1.5">{name}</p>
              <p className="font-mono text-[13px] text-arcade-brand">{value}</p>
              <p className="font-mono text-[10px] text-white/25 mt-0.5">{cls}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Gradients ── */}
      <Section title="Brand gradients" description="The primary brand uses a yellow-to-orange gradient.">
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Primary brand", css: "linear-gradient(to left, #ffee35, #cc7701)", desc: "Used on Button primary, logo mark" },
            { name: "Gem glow",      css: "linear-gradient(135deg, #ea3fb8, #8404b8)",  desc: "Used on gem currency highlights" },
            { name: "Positive glow", css: "linear-gradient(135deg, #14ae5c, #008043)",  desc: "Used on SC currency highlights" },
            { name: "Deep overlay",  css: "linear-gradient(180deg, #020217 0%, #10101e 100%)", desc: "Modal / overlay backgrounds" },
          ].map(g => (
            <div key={g.name} className="rounded-xl border border-white/[0.07] overflow-hidden">
              <div className="h-16" style={{ background: g.css }} />
              <div className="p-3 bg-arcade-bg-secondary">
                <p className="text-[12px] font-bold text-white">{g.name}</p>
                <p className="text-[11px] text-white/35 mt-0.5">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

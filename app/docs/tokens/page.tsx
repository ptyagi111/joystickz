import type { CSSProperties } from "react";
import { PageHeader, Section } from "@/components/docs/doc-section";

const COLORS = [
  { group: "Background", tokens: [
    { name: "arcade-bg", hex: "#10101e", label: "Base background" },
    { name: "arcade-bg-secondary", hex: "#24243b", label: "Cards / panels" },
    { name: "arcade-bg-tertiary", hex: "#32324e", label: "Inputs / tertiary" },
    { name: "arcade-bg-deep", hex: "#020217", label: "Code blocks / overlays" },
  ]},
  { group: "Brand", tokens: [
    { name: "arcade-brand", hex: "#ffee35", label: "Primary brand (yellow)" },
    { name: "arcade-brand-dark", hex: "#cc7701", label: "Brand gradient end" },
    { name: "arcade-neutral", hex: "#f5f5f5", label: "Light neutral / secondary CTA" },
  ]},
  { group: "Positive", tokens: [
    { name: "arcade-positive", hex: "#14ae5c", label: "Success / wins" },
    { name: "arcade-positive-hover", hex: "#009951", label: "Hover state" },
    { name: "arcade-positive-dark", hex: "#008043", label: "Dark accent" },
    { name: "arcade-positive-deeper", hex: "#024023", label: "Toast background" },
  ]},
  { group: "Negative", tokens: [
    { name: "arcade-negative", hex: "#c00f0d", label: "Error / loss" },
    { name: "arcade-negative-dark", hex: "#690807", label: "Dark accent" },
    { name: "arcade-negative-deeper", hex: "#4d0b0a", label: "Toast background" },
  ]},
  { group: "Attentive", tokens: [
    { name: "arcade-attentive", hex: "#ffa935", label: "Warning / attention" },
    { name: "arcade-attentive-dark", hex: "#cc7702", label: "Dark variant" },
    { name: "arcade-attentive-darker", hex: "#995901", label: "Deeper variant" },
  ]},
  { group: "Special", tokens: [
    { name: "arcade-gem", hex: "#ea3fb8", label: "Gem currency / accent" },
    { name: "arcade-border", hex: "#8484b3", label: "Default border / muted text" },
    { name: "arcade-border-dark", hex: "#24243b", label: "Subtle border" },
  ]},
];

const TYPE_SCALE = [
  { name: "h1", size: "3.5rem / 56px", weight: "Extrabold", sample: "Aa" },
  { name: "h2", size: "2rem / 32px", weight: "Extrabold", sample: "Aa" },
  { name: "h3", size: "1.5rem / 24px", weight: "Bold", sample: "Aa" },
  { name: "body-xl", size: "1.25rem / 20px", weight: "Regular", sample: "Aa" },
  { name: "body-l", size: "1rem / 16px", weight: "Regular", sample: "Aa" },
  { name: "body-m", size: "0.875rem / 14px", weight: "Regular", sample: "Aa" },
  { name: "body-s", size: "0.75rem / 12px", weight: "Regular", sample: "Aa" },
];

function sampleStyle(name: string): CSSProperties {
  const map: Record<string, React.CSSProperties> = {
    h1: { fontSize: "2.5rem", fontWeight: 800 },
    h2: { fontSize: "1.75rem", fontWeight: 800 },
    h3: { fontSize: "1.25rem", fontWeight: 700 },
    "body-xl": { fontSize: "1.15rem", fontWeight: 400 },
    "body-l": { fontSize: "1rem", fontWeight: 400 },
    "body-m": { fontSize: "0.875rem", fontWeight: 400 },
    "body-s": { fontSize: "0.75rem", fontWeight: 400 },
  };
  return map[name] ?? {};
}

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

export default function TokensPage() {
  return (
    <div>
      <PageHeader
        title="Design Tokens"
        description="All color, typography, and spacing tokens that make up the Arcade design system."
        tag="Tokens"
      />

      {/* Colors */}
      <Section title="Colors" description="Use these via Tailwind classes: bg-arcade-brand, text-arcade-gem, border-arcade-positive, etc.">
        <div className="space-y-8">
          {COLORS.map((group) => (
            <div key={group.group}>
              <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-3">{group.group}</p>
              <div className="grid grid-cols-2 gap-2">
                {group.tokens.map((token) => (
                  <div key={token.name} className="flex items-center gap-3 p-3 rounded-xl bg-arcade-bg-secondary border border-white/[0.05]">
                    {/* Swatch */}
                    <div
                      className="size-10 rounded-lg shrink-0 border border-white/10"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-white/80 truncate">{token.name}</p>
                      <p className="font-mono text-[10px] text-white/40">{token.hex}</p>
                      <p className="text-[11px] text-white/40 mt-0.5 truncate">{token.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography Scale" description="DM Sans — weights 400, 700, 800. Class prefix: text-h1, text-body-l, etc.">
        <div className="rounded-xl overflow-hidden border border-white/[0.07]">
          {TYPE_SCALE.map((t, i) => (
            <div
              key={t.name}
              className={`flex items-center gap-6 px-5 py-4 ${i > 0 ? "border-t border-white/[0.05]" : ""} ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}
            >
              <span className="font-mono text-[11px] text-arcade-gem w-20 shrink-0">{t.name}</span>
              <span className="text-white/80 flex-1" style={sampleStyle(t.name)}>
                The quick brown fox
              </span>
              <div className="text-right shrink-0">
                <p className="text-[11px] text-white/40">{t.size}</p>
                <p className="text-[10px] text-white/25">{t.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing / Layout */}
      <Section title="Key Values" description="Consistent values used across components.">
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Border radius (default)", value: "12px / rounded-xl" },
            { name: "Border radius (large)", value: "16px / rounded-2xl" },
            { name: "Card padding", value: "16px" },
            { name: "Section gap", value: "12px" },
            { name: "Letter spacing (heading)", value: "-0.03em" },
            { name: "Line height (tight)", value: "1.2" },
            { name: "Line height (normal)", value: "1.4" },
            { name: "Font weight (extrabold)", value: "800" },
          ].map(({ name, value }) => (
            <div key={name} className="p-4 rounded-xl bg-arcade-bg-secondary border border-white/[0.05]">
              <p className="text-[11px] text-white/40 mb-1">{name}</p>
              <p className="font-mono text-[12px] text-arcade-brand">{value}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

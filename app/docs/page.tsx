import Link from "next/link";
import { PageHeader } from "@/components/docs/doc-section";

const COMPONENTS = [
  { name: "Typography", href: "/docs/components/typography", desc: "Headings and body text scale", tag: "Foundation" },
  { name: "Button", href: "/docs/components/button", desc: "Primary, secondary, tertiary & disabled", tag: "Foundation" },
  { name: "Badge", href: "/docs/components/badge", desc: "Status indicators and labels", tag: "Foundation" },
  { name: "Card", href: "/docs/components/card", desc: "Surface containers with variants", tag: "Foundation" },
  { name: "HUD", href: "/docs/components/hud", desc: "In-game heads-up display bar", tag: "Navigation" },
  { name: "Tabs", href: "/docs/components/tabs", desc: "Segmented tab navigation", tag: "Navigation" },
  { name: "Menu Item", href: "/docs/components/menu-item", desc: "Bottom nav bar items", tag: "Navigation" },
  { name: "Filter Chip", href: "/docs/components/filter-chip", desc: "Toggle filter pills", tag: "Navigation" },
  { name: "Lobby Card", href: "/docs/components/lobby-card", desc: "Game lobby entry tiles", tag: "Game" },
  { name: "Result Card", href: "/docs/components/result-card", desc: "Match outcome cards", tag: "Game" },
  { name: "Input Fields", href: "/docs/components/input-field", desc: "Date, Phone, OTP fields", tag: "Forms" },
  { name: "Toast", href: "/docs/components/toast", desc: "Success and error notifications", tag: "Feedback" },
];

const TAG_COLORS: Record<string, string> = {
  Foundation: "text-[#8484b3] bg-[#8484b3]/10 border-[#8484b3]/20",
  Navigation: "text-arcade-positive bg-arcade-positive/10 border-arcade-positive/20",
  Game: "text-arcade-gem bg-arcade-gem/10 border-arcade-gem/20",
  Forms: "text-arcade-brand bg-arcade-brand/10 border-arcade-brand/20",
  Feedback: "text-arcade-attentive bg-arcade-attentive/10 border-arcade-attentive/20",
};

export default function DocsOverview() {
  return (
    <div>
      <PageHeader
        title="Arcade Design System"
        description="A complete component library built for arcade gaming experiences. Bold, expressive, and built with Tailwind v4 + DM Sans."
        tag="v1.0"
      />

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { value: "12", label: "Components" },
          { value: "30+", label: "Variants" },
          { value: "20+", label: "Design Tokens" },
        ].map(({ value, label }) => (
          <div key={label} className="bg-arcade-bg-secondary rounded-2xl p-5 border border-white/[0.07]">
            <div className="text-[2rem] font-extrabold text-arcade-brand leading-none">{value}</div>
            <div className="text-[12px] text-white/50 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Quick start */}
      <section className="mb-12">
        <h2 className="text-[1.1rem] font-bold text-white mb-4">Quick Start</h2>
        <div className="rounded-xl border border-white/[0.08] overflow-hidden" style={{ background: "#020217" }}>
          <div className="px-4 py-2.5 border-b border-white/[0.06]">
            <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest">tsx</span>
          </div>
          <pre className="p-4 text-[13px] leading-6 text-white/80 font-mono overflow-x-auto">{`import { Button, Badge, Card, Toast } from "@/components/ui";

export default function Example() {
  return (
    <div>
      <Badge variant="positive">Win</Badge>
      <Button variant="primary" size="big">Play Now</Button>
      <Toast variant="success" message="You won the match!" />
    </div>
  );
}`}</pre>
        </div>
      </section>

      {/* Component grid */}
      <section>
        <h2 className="text-[1.1rem] font-bold text-white mb-4">All Components</h2>
        <div className="grid grid-cols-2 gap-3">
          {COMPONENTS.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group flex flex-col gap-2 p-4 rounded-2xl border border-white/[0.07] bg-arcade-bg-secondary hover:border-arcade-brand/30 hover:bg-arcade-bg-secondary transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="font-bold text-[14px] text-white group-hover:text-arcade-brand transition-colors">{c.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${TAG_COLORS[c.tag]}`}>{c.tag}</span>
              </div>
              <span className="text-[12px] text-white/50">{c.desc}</span>
              <span className="text-[11px] text-arcade-brand/60 group-hover:text-arcade-brand transition-colors mt-auto flex items-center gap-1">
                View docs
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable, DoDont, DocCallout } from "@/components/docs/doc-section";
import { ButtonPlayground } from "@/components/docs/button-playground";
import type { ReactNode } from "react";

/* ─── demo icons ─────────────────────────────────────────────── */

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M5 3.5l10 5.5-10 5.5V3.5Z" fill="currentColor" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M10 5l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M5 2.5h8v6a4 4 0 0 1-8 0V2.5Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5 5H3a2 2 0 0 0 2 2M13 5h2a2 2 0 0 1-2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M9 12.5v3M7 15.5h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 2l1.8 5.5H17l-5 3.6 1.8 5.5L9 13.1l-4.8 3.5L6 11 1 7.5h6.2L9 2Z" fill="currentColor" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 2v9M5.5 8l3.5 3.5L12.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 13.5v1A1.5 1.5 0 0 0 3.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="4" cy="9" r="2" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M6 8l6-3M6 10l6 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

/* ─── size-scaled icon helpers ───────────────────────────────── */

type IconFn = (props: { size?: number }) => ReactNode;
const iconSize: Record<"big" | "medium" | "small", number> = { big: 20, medium: 18, small: 16 };

function scaled(Icon: IconFn, size: "big" | "medium" | "small") {
  return <Icon size={iconSize[size]} />;
}

const VARIANTS = ["primary", "secondary", "tertiary"] as const;
const SIZES = ["big", "medium", "small"] as const;

/* ─── page ───────────────────────────────────────────────────── */

export default function ButtonDocs() {
  return (
    <div>
      <PageHeader
        title="Button"
        description="The primary interactive element. Supports text-only, icon+text (prefix and postfix), and icon-only layouts across 3 variants and 3 sizes."
        tag="Foundation"
        status="stable"
      />
      <ImportBlock pkg="Button" />
      <ButtonPlayground />

      {/* ── TEXT ONLY ── */}
      <Section title="Text only" description="The baseline — no icon props needed.">
        {VARIANTS.map((v) => (
          <DocExample
            key={v}
            title={v.charAt(0).toUpperCase() + v.slice(1)}
            code={`<Button variant="${v}" size="big">Play Now</Button>
<Button variant="${v}" size="medium">Play Now</Button>
<Button variant="${v}" size="small">Play Now</Button>`}
          >
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((s) => (
                <Button key={s} variant={v} size={s}>Play Now</Button>
              ))}
            </div>
          </DocExample>
        ))}

        <DocExample
          title="Disabled"
          description="Pass the disabled prop — applies to any variant."
          code={`<Button disabled size="big">Play Now</Button>
<Button disabled size="medium">Play Now</Button>
<Button disabled size="small">Play Now</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((s) => (
              <Button key={s} disabled size={s}>Play Now</Button>
            ))}
          </div>
        </DocExample>
      </Section>

      {/* ── PREFIX ICON ── */}
      <Section
        title="Icon start (prefix)"
        description="Pass iconStart to place an icon before the label. Icon scales with the button size."
      >
        {VARIANTS.map((v) => (
          <DocExample
            key={v}
            title={v.charAt(0).toUpperCase() + v.slice(1)}
            code={`<Button variant="${v}" size="big"    iconStart={<PlayIcon size={20} />}>Play Now</Button>
<Button variant="${v}" size="medium" iconStart={<PlayIcon size={18} />}>Play Now</Button>
<Button variant="${v}" size="small"  iconStart={<PlayIcon size={16} />}>Play Now</Button>`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button variant={v} size="big"    iconStart={scaled(PlayIcon, "big")}>Play Now</Button>
              <Button variant={v} size="medium" iconStart={scaled(PlayIcon, "medium")}>Play Now</Button>
              <Button variant={v} size="small"  iconStart={scaled(PlayIcon, "small")}>Play Now</Button>
            </div>
          </DocExample>
        ))}

        <DocExample
          title="Disabled"
          code={`<Button disabled size="big"    iconStart={<PlayIcon size={20} />}>Play Now</Button>
<Button disabled size="medium" iconStart={<PlayIcon size={18} />}>Play Now</Button>
<Button disabled size="small"  iconStart={<PlayIcon size={16} />}>Play Now</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled size="big"    iconStart={scaled(PlayIcon, "big")}>Play Now</Button>
            <Button disabled size="medium" iconStart={scaled(PlayIcon, "medium")}>Play Now</Button>
            <Button disabled size="small"  iconStart={scaled(PlayIcon, "small")}>Play Now</Button>
          </div>
        </DocExample>
      </Section>

      {/* ── POSTFIX ICON ── */}
      <Section
        title="Icon end (postfix)"
        description="Pass iconEnd to place an icon after the label — great for navigation hints or expand indicators."
      >
        {VARIANTS.map((v) => (
          <DocExample
            key={v}
            title={v.charAt(0).toUpperCase() + v.slice(1)}
            code={`<Button variant="${v}" size="big"    iconEnd={<ArrowRightIcon size={20} />}>View Scores</Button>
<Button variant="${v}" size="medium" iconEnd={<ArrowRightIcon size={18} />}>View Scores</Button>
<Button variant="${v}" size="small"  iconEnd={<ArrowRightIcon size={16} />}>View Scores</Button>`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button variant={v} size="big"    iconEnd={scaled(ArrowRightIcon, "big")}>View Scores</Button>
              <Button variant={v} size="medium" iconEnd={scaled(ArrowRightIcon, "medium")}>View Scores</Button>
              <Button variant={v} size="small"  iconEnd={scaled(ArrowRightIcon, "small")}>View Scores</Button>
            </div>
          </DocExample>
        ))}

        <DocExample
          title="Disabled"
          code={`<Button disabled size="big"    iconEnd={<ArrowRightIcon size={20} />}>View Scores</Button>
<Button disabled size="medium" iconEnd={<ArrowRightIcon size={18} />}>View Scores</Button>
<Button disabled size="small"  iconEnd={<ArrowRightIcon size={16} />}>View Scores</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled size="big"    iconEnd={scaled(ArrowRightIcon, "big")}>View Scores</Button>
            <Button disabled size="medium" iconEnd={scaled(ArrowRightIcon, "medium")}>View Scores</Button>
            <Button disabled size="small"  iconEnd={scaled(ArrowRightIcon, "small")}>View Scores</Button>
          </div>
        </DocExample>
      </Section>

      {/* ── BOTH ICONS ── */}
      <Section
        title="Icon start + Icon end"
        description="Both iconStart and iconEnd can be used together. The label sits between them."
      >
        {VARIANTS.map((v) => (
          <DocExample
            key={v}
            title={v.charAt(0).toUpperCase() + v.slice(1)}
            code={`<Button variant="${v}" size="big"
  iconStart={<TrophyIcon size={20} />}
  iconEnd={<ArrowRightIcon size={20} />}
>
  Leaderboard
</Button>`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button variant={v} size="big"
                iconStart={scaled(TrophyIcon, "big")}
                iconEnd={scaled(ArrowRightIcon, "big")}
              >Leaderboard</Button>
              <Button variant={v} size="medium"
                iconStart={scaled(TrophyIcon, "medium")}
                iconEnd={scaled(ArrowRightIcon, "medium")}
              >Leaderboard</Button>
              <Button variant={v} size="small"
                iconStart={scaled(TrophyIcon, "small")}
                iconEnd={scaled(ArrowRightIcon, "small")}
              >Leaderboard</Button>
            </div>
          </DocExample>
        ))}

        <DocExample
          title="Disabled"
          code={`<Button disabled size="big"
  iconStart={<TrophyIcon size={20} />}
  iconEnd={<ArrowRightIcon size={20} />}
>
  Leaderboard
</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled size="big" iconStart={scaled(TrophyIcon, "big")} iconEnd={scaled(ArrowRightIcon, "big")}>Leaderboard</Button>
            <Button disabled size="medium" iconStart={scaled(TrophyIcon, "medium")} iconEnd={scaled(ArrowRightIcon, "medium")}>Leaderboard</Button>
            <Button disabled size="small" iconStart={scaled(TrophyIcon, "small")} iconEnd={scaled(ArrowRightIcon, "small")}>Leaderboard</Button>
          </div>
        </DocExample>
      </Section>

      {/* ── ICON ONLY ── */}
      <Section
        title="Icon only"
        description="When no children are passed, the button becomes square with equal padding. Use iconStart or iconEnd (or both for the icon)."
      >
        {VARIANTS.map((v) => (
          <DocExample
            key={v}
            title={v.charAt(0).toUpperCase() + v.slice(1)}
            code={`{/* No children → icon-only square layout */}
<Button variant="${v}" size="big"    iconStart={<StarIcon size={20} />} />
<Button variant="${v}" size="medium" iconStart={<StarIcon size={18} />} />
<Button variant="${v}" size="small"  iconStart={<StarIcon size={16} />} />`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button variant={v} size="big"    iconStart={scaled(StarIcon, "big")} />
              <Button variant={v} size="medium" iconStart={scaled(StarIcon, "medium")} />
              <Button variant={v} size="small"  iconStart={scaled(StarIcon, "small")} />
            </div>
          </DocExample>
        ))}

        <DocExample
          title="Disabled"
          code={`<Button disabled size="big"    iconStart={<StarIcon size={20} />} />
<Button disabled size="medium" iconStart={<StarIcon size={18} />} />
<Button disabled size="small"  iconStart={<StarIcon size={16} />} />`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled size="big"    iconStart={scaled(StarIcon, "big")} />
            <Button disabled size="medium" iconStart={scaled(StarIcon, "medium")} />
            <Button disabled size="small"  iconStart={scaled(StarIcon, "small")} />
          </div>
        </DocExample>

        <DocExample
          title="Different icons — icon only, primary, all sizes"
          description="Each icon reads clearly at all three sizes."
          code={`<Button variant="primary" size="big"    iconStart={<PlusIcon size={20} />} />
<Button variant="primary" size="big"    iconStart={<DownloadIcon size={20} />} />
<Button variant="primary" size="big"    iconStart={<ShareIcon size={20} />} />
<Button variant="primary" size="big"    iconStart={<TrophyIcon size={20} />} />`}
        >
          <div className="space-y-3 w-full">
            {SIZES.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <span className="w-16 text-[11px] text-white/40 font-mono">{s}</span>
                <Button variant="primary" size={s} iconStart={scaled(PlusIcon, s)} />
                <Button variant="primary" size={s} iconStart={scaled(DownloadIcon, s)} />
                <Button variant="primary" size={s} iconStart={scaled(ShareIcon, s)} />
                <Button variant="primary" size={s} iconStart={scaled(TrophyIcon, s)} />
                <Button variant="primary" size={s} iconStart={scaled(StarIcon, s)} />
                <Button variant="primary" size={s} iconStart={scaled(PlayIcon, s)} />
              </div>
            ))}
          </div>
        </DocExample>
      </Section>

      {/* ── PROPS ── */}
      <Section title="Props">
        <PropsTable props={[
          { name: "variant",    type: '"primary" | "secondary" | "tertiary"', default: '"primary"', description: "Visual style of the button" },
          { name: "size",       type: '"big" | "medium" | "small"', default: '"big"', description: "Height/padding scale — also controls icon size expectations" },
          { name: "iconStart",  type: "ReactNode", description: "Icon rendered before the label. Omit label (children) for icon-only layout" },
          { name: "iconEnd",    type: "ReactNode", description: "Icon rendered after the label. Omit label for icon-only layout" },
          { name: "disabled",   type: "boolean", default: "false", description: "Disabled styles and blocks interaction" },
          { name: "onClick",    type: "() => void", description: "Click handler" },
          { name: "className",  type: "string", description: "Extra Tailwind classes" },
          { name: "children",   type: "ReactNode", description: "Label text. Omit entirely (with iconStart/iconEnd) for icon-only square layout" },
        ]} />
      </Section>

      {/* ── DO / DON'T ── */}
      <Section title="Do / Don't">
        <DoDont
          doItem={{
            children: (
              <div className="flex items-center gap-3">
                <Button variant="primary" size="medium">Play Now</Button>
                <Button variant="secondary" size="medium">View Rules</Button>
              </div>
            ),
            description: "Use primary for the single most important action. Use secondary for supporting actions.",
          }}
          dontItem={{
            children: (
              <div className="flex items-center gap-3">
                <Button variant="primary" size="medium">Play Now</Button>
                <Button variant="primary" size="medium">View Rules</Button>
                <Button variant="primary" size="medium">Cancel</Button>
              </div>
            ),
            description: "Don't use multiple primary buttons side by side — it creates ambiguity about what to do.",
          }}
        />
      </Section>

      {/* ── GUIDELINES ── */}
      <Section title="Guidelines">
        <div className="space-y-3">
          <DocCallout variant="tip">
            Use <strong>big</strong> size for primary CTAs (e.g. &quot;Play Now&quot;, &quot;Join Game&quot;). Use <strong>small</strong> for inline or compact contexts like table rows.
          </DocCallout>
          <DocCallout variant="info">
            The <strong>tertiary</strong> variant has no fill — just a border. Use it for low-priority or cancel actions.
          </DocCallout>
          <DocCallout variant="warning">
            Always pair icon-only buttons with a tooltip or accessible <code className="text-arcade-brand font-mono text-[12px]">aria-label</code> so screen readers can describe the action.
          </DocCallout>
        </div>
      </Section>

      {/* ── ICON SIZING GUIDE ── */}
      <Section title="Icon sizing guide" description="Pass icons at the size that matches the button size for optical balance.">
        <div className="rounded-xl overflow-hidden border border-white/[0.07]">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.07]" style={{ background: "#020217" }}>
                {["Button size", "Icon size", "Gap", "Tailwind class"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[11px] font-bold text-white/30 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { size: "big",    icon: "20px", gap: "10px", cls: "gap-2.5" },
                { size: "medium", icon: "18px", gap: "8px",  cls: "gap-2" },
                { size: "small",  icon: "16px", gap: "6px",  cls: "gap-1.5" },
              ].map((row, i) => (
                <tr key={row.size} className={`border-b border-white/[0.05] ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}>
                  <td className="px-4 py-3 font-mono text-arcade-gem text-[12px]">{row.size}</td>
                  <td className="px-4 py-3 font-mono text-arcade-brand text-[12px]">{row.icon}</td>
                  <td className="px-4 py-3 font-mono text-white/50 text-[12px]">{row.gap}</td>
                  <td className="px-4 py-3 font-mono text-white/40 text-[12px]">{row.cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

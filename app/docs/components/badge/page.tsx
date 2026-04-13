import { Badge } from "@/components/ui/badge";
import {
  PageHeader, Section, ImportBlock, DocExample, PropsTable, DoDont, DocCallout,
} from "@/components/docs/doc-section";

export default function BadgeDocs() {
  return (
    <div>
      <PageHeader
        title="Badge"
        description="Compact status labels for game outcomes, currency types, and alerts. Five semantic variants map to system colors."
        tag="Foundation"
        status="stable"
      />
      <ImportBlock pkg="Badge" />

      {/* ── Variants ── */}
      <Section title="Variants" description="Each variant maps to a semantic system color.">
        <DocExample
          title="All variants"
          code={`<Badge variant="default">Default</Badge>
<Badge variant="positive">Win</Badge>
<Badge variant="negative">Loss</Badge>
<Badge variant="attentive">Warning</Badge>
<Badge variant="gem">Gem</Badge>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="positive">Win</Badge>
            <Badge variant="negative">Loss</Badge>
            <Badge variant="attentive">Warning</Badge>
            <Badge variant="gem">Gem</Badge>
          </div>
        </DocExample>
      </Section>

      {/* ── Color anatomy ── */}
      <Section title="Color anatomy" description="Each variant has a matching border, background, and text color derived from the token system.">
        <div className="rounded-xl overflow-hidden border border-white/[0.07]">
          {[
            { variant: "default",   bg: "#32324e",  border: "#8484b3", text: "#ffffff",  name: "Default"   },
            { variant: "positive",  bg: "#024023",  border: "#14ae5c", text: "#14ae5c",  name: "Positive"  },
            { variant: "negative",  bg: "#4d0b0a",  border: "#c00f0d", text: "#c00f0d",  name: "Negative"  },
            { variant: "attentive", bg: "#995901",  border: "#ffa935", text: "#ffa935",  name: "Attentive" },
            { variant: "gem",       bg: "#32324e",  border: "#ea3fb8", text: "#ea3fb8",  name: "Gem"       },
          ].map((row, i) => (
            <div
              key={row.variant}
              className={`flex items-center gap-4 px-4 py-3 ${i > 0 ? "border-t border-white/[0.05]" : ""} ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}
            >
              <Badge variant={row.variant as Parameters<typeof Badge>[0]["variant"]}>{row.name}</Badge>
              <div className="flex items-center gap-4 ml-2 text-[11px] font-mono text-white/40">
                <span className="flex items-center gap-1.5">
                  <span className="size-3 rounded-sm border border-white/20" style={{ background: row.bg }} />
                  bg: {row.bg}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-3 rounded-sm border border-white/20" style={{ background: row.border }} />
                  border: {row.border}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-3 rounded-sm border border-white/20" style={{ background: row.text }} />
                  text: {row.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Usage examples ── */}
      <Section title="Usage in context" description="Badges are most effective when paired with a label or used inside list rows.">
        <DocExample
          title="Inline with text"
          code={`<div className="flex items-center gap-2">
  <span className="font-bold text-white">Blitz Bunch</span>
  <Badge variant="gem">2x Gems</Badge>
</div>

<div className="flex items-center gap-2">
  <span className="font-bold text-white">Last Match</span>
  <Badge variant="positive">Win</Badge>
  <Badge variant="attentive">Close Game</Badge>
</div>`}
        >
          <div className="space-y-3 w-full">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-body-l">Blitz Bunch</span>
              <Badge variant="gem">2x Gems</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-body-l">Last Match</span>
              <Badge variant="positive">Win</Badge>
              <Badge variant="attentive">Close Game</Badge>
            </div>
          </div>
        </DocExample>
      </Section>

      {/* ── Do/Don't ── */}
      <Section title="Do / Don't" description="Guidance on correct badge usage.">
        <DoDont
          doItem={{
            children: (
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">Match Result</span>
                <Badge variant="positive">Win</Badge>
              </div>
            ),
            description: "Use a single, semantically correct variant that reflects the actual state.",
          }}
          dontItem={{
            children: (
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="positive">Win</Badge>
                <Badge variant="positive">Ranked</Badge>
                <Badge variant="positive">Live</Badge>
                <Badge variant="positive">New</Badge>
              </div>
            ),
            description: "Don't reuse the same variant color for unrelated concepts — it loses semantic meaning.",
          }}
        />
        <DoDont
          doItem={{
            children: <Badge variant="gem">2x Gems</Badge>,
            description: "Keep badge text short — 1–3 words maximum.",
          }}
          dontItem={{
            children: <Badge variant="gem">You earned double gems in this match</Badge>,
            description: "Don't use badges for long descriptive text — use a Toast or inline Text instead.",
          }}
        />
      </Section>

      {/* ── Callouts ── */}
      <Section title="Guidelines">
        <div className="space-y-3">
          <DocCallout variant="tip">
            Badges are read-only UI elements. For interactive filters, use <strong>Filter Chip</strong> instead.
          </DocCallout>
          <DocCallout variant="info">
            Always pair a badge with context — never render a badge floating alone without a label or container.
          </DocCallout>
          <DocCallout variant="warning">
            Avoid stacking more than 2 badges in a single row. It creates visual noise and competes with the primary content.
          </DocCallout>
        </div>
      </Section>

      {/* ── Props ── */}
      <Section title="Props">
        <PropsTable props={[
          { name: "variant",   type: '"default" | "positive" | "negative" | "attentive" | "gem"', default: '"default"', description: "Color scheme of the badge" },
          { name: "className", type: "string",         description: "Extra Tailwind classes" },
          { name: "children",  type: "React.ReactNode", required: true, description: "Badge text content" },
        ]} />
      </Section>
    </div>
  );
}

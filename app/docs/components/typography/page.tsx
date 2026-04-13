import { Heading, Text } from "@/components/ui/typography";
import {
  PageHeader, Section, ImportBlock, DocExample, PropsTable, DocCallout, DoDont,
} from "@/components/docs/doc-section";

export default function TypographyDocs() {
  return (
    <div>
      <PageHeader
        title="Typography"
        description="DM Sans in three weights (400/700/800) across a 7-step scale. Heading renders h1–h3 semantically; Text handles all body copy."
        tag="Foundation"
        status="stable"
      />
      <ImportBlock pkg="Heading, Text" />

      {/* ── Type scale overview ── */}
      <Section title="Full type scale" description="All seven steps from the Arcade type system at a glance.">
        <div className="rounded-xl overflow-hidden border border-white/[0.07]">
          {[
            { label: "H1",       size: "3.5rem / 56px", weight: "Extrabold 800", el: <Heading as="h1">Game Over</Heading> },
            { label: "H2",       size: "2rem / 32px",   weight: "Extrabold 800", el: <Heading as="h2">Leaderboard</Heading> },
            { label: "H3",       size: "1.5rem / 24px", weight: "Bold 700",      el: <Heading as="h3">Neon Racer</Heading> },
            { label: "Body XL",  size: "1.25rem / 20px",weight: "Regular 400",   el: <Text size="xl">Body XL — 20px</Text> },
            { label: "Body L",   size: "1rem / 16px",   weight: "Regular 400",   el: <Text size="l">Body L — 16px</Text> },
            { label: "Body M",   size: "0.875rem / 14px",weight:"Regular 400",   el: <Text size="m">Body M — 14px</Text> },
            { label: "Body S",   size: "0.75rem / 12px", weight: "Regular 400",  el: <Text size="s">Body S — 12px</Text> },
          ].map(({ label, size, weight, el }, i) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-5 py-3 ${i > 0 ? "border-t border-white/[0.05]" : ""} ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}
            >
              <span className="font-mono text-[10px] text-arcade-gem w-16 shrink-0">{label}</span>
              <div className="flex-1 min-w-0">{el}</div>
              <div className="text-right shrink-0 hidden sm:block">
                <p className="text-[11px] text-white/35">{size}</p>
                <p className="text-[10px] text-white/20">{weight}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Heading scale ── */}
      <Section title="Headings" description="Three semantic heading levels. Always use Heading for page titles and section headers — never raw h1/h2/h3.">
        <DocExample
          title="h1 — 56px / Extrabold"
          code={`<Heading as="h1">Game Over</Heading>`}
        >
          <Heading as="h1">Game Over</Heading>
        </DocExample>
        <DocExample
          title="h2 — 32px / Extrabold"
          code={`<Heading as="h2">Leaderboard</Heading>`}
        >
          <Heading as="h2">Leaderboard</Heading>
        </DocExample>
        <DocExample
          title="h3 — 24px / Bold"
          code={`<Heading as="h3">Neon Racer</Heading>`}
        >
          <Heading as="h3">Neon Racer</Heading>
        </DocExample>
      </Section>

      {/* ── Body text ── */}
      <Section title="Body text" description="Four sizes for all body copy. Default size is l (16px).">
        <DocExample
          title="All sizes"
          code={`<Text size="xl">Body XL — 20px</Text>
<Text size="l">Body L — 16px</Text>
<Text size="m">Body M — 14px</Text>
<Text size="s">Body S — 12px</Text>`}
        >
          <div className="space-y-3 text-left w-full">
            <Text size="xl">Body XL — 20px</Text>
            <Text size="l">Body L — 16px</Text>
            <Text size="m">Body M — 14px</Text>
            <Text size="s">Body S — 12px</Text>
          </div>
        </DocExample>
      </Section>

      {/* ── Color variants ── */}
      <Section title="Color variants" description="Three opacity tiers for visual hierarchy.">
        <DocExample
          title="Primary / Secondary / Tertiary"
          code={`<Text color="primary">Primary — full white</Text>
<Text color="secondary">Secondary — white/60</Text>
<Text color="tertiary">Tertiary — white/40</Text>`}
        >
          <div className="space-y-2 text-left w-full">
            <Text color="primary">Primary — full white</Text>
            <Text color="secondary">Secondary — white/60</Text>
            <Text color="tertiary">Tertiary — white/40</Text>
          </div>
        </DocExample>
      </Section>

      {/* ── Composition ── */}
      <Section title="Composition" description="Combine heading and body for richer layouts.">
        <DocExample
          title="Game card headline"
          code={`<div className="space-y-2">
  <Heading as="h2">Speed Challenge</Heading>
  <Text color="secondary">
    Race against 3 others in a 2-minute time trial.
    Top score wins the gem pool.
  </Text>
  <Text size="s" color="tertiary">Entry fee: 20 Gems</Text>
</div>`}
          center={false}
        >
          <div className="space-y-2">
            <Heading as="h2">Speed Challenge</Heading>
            <Text color="secondary">
              Race against 3 others in a 2-minute time trial. Top score wins the gem pool.
            </Text>
            <Text size="s" color="tertiary">Entry fee: 20 Gems</Text>
          </div>
        </DocExample>
      </Section>

      {/* ── Do/Don't ── */}
      <Section title="Do / Don't">
        <DoDont
          doItem={{
            children: (
              <div className="text-left space-y-1">
                <Heading as="h2">Daily Challenge</Heading>
                <Text color="secondary">Win to earn 100 bonus gems.</Text>
              </div>
            ),
            description: "Use Heading for titles and Text for body — each maps to the correct token.",
          }}
          dontItem={{
            children: (
              <div className="text-left space-y-1">
                <p className="text-white text-[28px] font-black">Daily Challenge</p>
                <p className="text-white/50 text-[14px]">Win to earn 100 bonus gems.</p>
              </div>
            ),
            description: "Don't hardcode font sizes with Tailwind utilities — it bypasses the token system.",
          }}
        />
      </Section>

      {/* ── Guidelines ── */}
      <Section title="Guidelines">
        <div className="space-y-3">
          <DocCallout variant="tip">
            H1 is reserved for page-level titles only. Use H2 for section headers and H3 for card/panel titles.
          </DocCallout>
          <DocCallout variant="info">
            Body M (14px) and S (12px) are ideal for metadata, timestamps, and sub-labels. Never use them as primary content text.
          </DocCallout>
        </div>
      </Section>

      {/* ── Props ── */}
      <Section title="Props — Heading">
        <PropsTable props={[
          { name: "as",        type: '"h1" | "h2" | "h3"', required: true, description: "Semantic heading level — maps to the type scale" },
          { name: "className", type: "string",          description: "Extra Tailwind classes" },
          { name: "children",  type: "React.ReactNode", required: true, description: "Heading text" },
        ]} />
      </Section>

      <Section title="Props — Text">
        <PropsTable props={[
          { name: "size",      type: '"xl" | "l" | "m" | "s"',              default: '"l"',       description: "Font size from the body scale" },
          { name: "color",     type: '"primary" | "secondary" | "tertiary"', default: '"primary"', description: "Opacity-based color variation" },
          { name: "className", type: "string",          description: "Extra Tailwind classes" },
          { name: "children",  type: "React.ReactNode", required: true, description: "Text content" },
        ]} />
      </Section>
    </div>
  );
}

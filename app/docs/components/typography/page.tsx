import { Heading, Text } from "@/components/ui/typography";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function TypographyDocs() {
  return (
    <div>
      <PageHeader
        title="Typography"
        description="DM Sans in three weights (400/700/800) across a 7-step scale. Heading renders h1–h3 semantically; Text handles body copy."
        tag="Foundation"
      />
      <ImportBlock pkg="Heading, Text" />

      <Section title="Heading scale">
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

      <Section title="Body text scale">
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

      <Section title="Color variants">
        <DocExample
          title="Text colors"
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

      <Section title="Composition">
        <DocExample
          title="Heading + body paragraph"
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

      <Section title="Props — Heading">
        <PropsTable props={[
          { name: "as", type: '"h1" | "h2" | "h3"', required: true, description: "Semantic heading level; maps to h1/h2/h3 type scale" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
          { name: "children", type: "React.ReactNode", required: true, description: "Heading text" },
        ]} />
      </Section>

      <Section title="Props — Text">
        <PropsTable props={[
          { name: "size", type: '"xl" | "l" | "m" | "s"', default: '"l"', description: "Font size from the body scale" },
          { name: "color", type: '"primary" | "secondary" | "tertiary"', default: '"primary"', description: "Opacity-based color variation" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
          { name: "children", type: "React.ReactNode", required: true, description: "Text content" },
        ]} />
      </Section>
    </div>
  );
}

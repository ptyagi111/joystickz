import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PageHeader, Section, ImportBlock, DocExample, PropsTable, DoDont, DocCallout,
} from "@/components/docs/doc-section";

export default function CardDocs() {
  return (
    <div>
      <PageHeader
        title="Card"
        description="Surface container for grouping related content. Use CardHeader and CardContent sub-components for consistent internal spacing."
        tag="Foundation"
        status="stable"
      />
      <ImportBlock pkg="Card, CardHeader, CardContent" />

      {/* ── Variants ── */}
      <Section title="Depth variants" description="Three levels of visual depth using the background token scale.">
        <DocExample
          title="Default"
          description="Secondary background — the most common card surface."
          code={`<Card variant="default">
  <CardHeader><Heading as="h3">Match Ready</Heading></CardHeader>
  <CardContent><Text color="secondary">Your opponent has joined.</Text></CardContent>
</Card>`}
        >
          <Card variant="default" className="w-full max-w-[280px]">
            <CardHeader><Heading as="h3">Match Ready</Heading></CardHeader>
            <CardContent><Text color="secondary">Your opponent has joined.</Text></CardContent>
          </Card>
        </DocExample>

        <DocExample
          title="Secondary"
          description="Slightly elevated surface — works well inside a default card."
          code={`<Card variant="secondary">
  <CardHeader><Heading as="h3">Leaderboard</Heading></CardHeader>
  <CardContent><Text color="secondary">You are ranked #3 today.</Text></CardContent>
</Card>`}
        >
          <Card variant="secondary" className="w-full max-w-[280px]">
            <CardHeader><Heading as="h3">Leaderboard</Heading></CardHeader>
            <CardContent><Text color="secondary">You are ranked #3 today.</Text></CardContent>
          </Card>
        </DocExample>

        <DocExample
          title="Tertiary"
          description="Deepest surface — use for nested content or code/data areas."
          code={`<Card variant="tertiary">
  <CardHeader><Heading as="h3">Stats</Heading></CardHeader>
  <CardContent><Text color="secondary">247 games played.</Text></CardContent>
</Card>`}
        >
          <Card variant="tertiary" className="w-full max-w-[280px]">
            <CardHeader><Heading as="h3">Stats</Heading></CardHeader>
            <CardContent><Text color="secondary">247 games played.</Text></CardContent>
          </Card>
        </DocExample>
      </Section>

      {/* ── Composition ── */}
      <Section title="Composition" description="Cards can hold any combination of components.">
        <DocExample
          title="Game lobby card"
          code={`<Card variant="default">
  <CardHeader>
    <div className="flex items-center justify-between">
      <Heading as="h3">Neon Racer</Heading>
      <Badge variant="gem">Live</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <Text color="secondary">Speed Challenge · 4 players</Text>
    <Text size="s" color="tertiary" className="mt-1">Entry: 20 Gems</Text>
  </CardContent>
</Card>`}
        >
          <Card variant="default" className="w-full max-w-[280px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Heading as="h3">Neon Racer</Heading>
                <Badge variant="gem">Live</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Text color="secondary">Speed Challenge · 4 players</Text>
              <Text size="s" color="tertiary" className="mt-1">Entry: 20 Gems</Text>
            </CardContent>
          </Card>
        </DocExample>

        <DocExample
          title="With action"
          code={`<Card variant="default">
  <CardHeader>
    <Heading as="h3">Daily Challenge</Heading>
  </CardHeader>
  <CardContent>
    <Text color="secondary">Finish in top 3 to earn 100 bonus gems.</Text>
    <div className="mt-4">
      <Button variant="primary" size="small">Join Now</Button>
    </div>
  </CardContent>
</Card>`}
        >
          <Card variant="default" className="w-full max-w-[280px]">
            <CardHeader>
              <Heading as="h3">Daily Challenge</Heading>
            </CardHeader>
            <CardContent>
              <Text color="secondary">Finish in top 3 to earn 100 bonus gems.</Text>
              <div className="mt-4">
                <Button variant="primary" size="small">Join Now</Button>
              </div>
            </CardContent>
          </Card>
        </DocExample>
      </Section>

      {/* ── Do/Don't ── */}
      <Section title="Do / Don't">
        <DoDont
          doItem={{
            children: (
              <Card variant="default" className="w-full max-w-[220px]">
                <CardHeader><Heading as="h3">Match Stats</Heading></CardHeader>
                <CardContent><Text size="s" color="secondary">Wins: 12 · Losses: 3</Text></CardContent>
              </Card>
            ),
            description: "Use CardHeader + CardContent sub-components for consistent internal padding.",
          }}
          dontItem={{
            children: (
              <Card variant="default" className="w-full max-w-[220px]">
                <div className="p-2 text-white/70 text-[12px]">Match Stats<br/>Wins: 12 · Losses: 3</div>
              </Card>
            ),
            description: "Don't add raw padding or typography directly — always use the provided sub-components.",
          }}
        />
      </Section>

      {/* ── Guidelines ── */}
      <Section title="Guidelines">
        <div className="space-y-3">
          <DocCallout variant="tip">
            Use <code className="text-arcade-brand text-[12px] font-mono">variant=&quot;default&quot;</code> as your baseline. Only go deeper (secondary/tertiary) when nesting cards inside each other.
          </DocCallout>
          <DocCallout variant="info">
            Cards don&apos;t have built-in hover states by default. Add <code className="text-arcade-brand text-[12px] font-mono">hover:border-arcade-brand/30</code> manually when the card is interactive/clickable.
          </DocCallout>
        </div>
      </Section>

      {/* ── Props ── */}
      <Section title="Props — Card">
        <PropsTable props={[
          { name: "variant",   type: '"default" | "secondary" | "tertiary"', default: '"default"', description: "Background surface level" },
          { name: "className", type: "string",          description: "Extra Tailwind classes" },
          { name: "children",  type: "React.ReactNode", required: true, description: "Card content" },
        ]} />
      </Section>

      <Section title="Props — CardHeader / CardContent">
        <PropsTable props={[
          { name: "className", type: "string",          description: "Extra Tailwind classes" },
          { name: "children",  type: "React.ReactNode", required: true, description: "Slot content" },
        ]} />
      </Section>
    </div>
  );
}

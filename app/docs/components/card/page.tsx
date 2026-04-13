import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function CardDocs() {
  return (
    <div>
      <PageHeader
        title="Card"
        description="Surface container for grouping related content. Use CardHeader and CardContent as sub-components for consistent internal spacing."
        tag="Foundation"
      />
      <ImportBlock pkg="Card, CardHeader, CardContent" />

      <Section title="Variants">
        <DocExample
          title="Default"
          description="Standard card on the secondary background."
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
          description="Slightly elevated surface."
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
          description="Deepest surface, used for nested content."
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

      <Section title="Composition example" description="Cards can hold any content including badges, typography, and actions.">
        <DocExample
          title="Rich card"
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
      </Section>

      <Section title="Props — Card">
        <PropsTable props={[
          { name: "variant", type: '"default" | "secondary" | "tertiary"', default: '"default"', description: "Background surface level" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
          { name: "children", type: "React.ReactNode", required: true, description: "Card content" },
        ]} />
      </Section>
    </div>
  );
}

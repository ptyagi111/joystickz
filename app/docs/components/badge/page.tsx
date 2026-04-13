import { Badge } from "@/components/ui/badge";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function BadgeDocs() {
  return (
    <div>
      <PageHeader
        title="Badge"
        description="Compact status labels for game outcomes, currency types, and alerts. Five semantic variants map to system colors."
        tag="Foundation"
      />
      <ImportBlock pkg="Badge" />

      <Section title="Variants">
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

      <Section title="Usage examples" description="Badges are commonly used alongside game result cards, lobby headers, and leaderboard rows.">
        <DocExample
          title="In context"
          code={`<div className="flex items-center gap-2">
  <span className="text-white font-bold">Blitz Bunch</span>
  <Badge variant="gem">2x Gems</Badge>
</div>

<div className="flex items-center gap-2">
  <span className="text-white font-bold">Last Match</span>
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

      <Section title="Props">
        <PropsTable props={[
          { name: "variant", type: '"default" | "positive" | "negative" | "attentive" | "gem"', default: '"default"', description: "Color scheme of the badge" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
          { name: "children", type: "React.ReactNode", required: true, description: "Badge text content" },
        ]} />
      </Section>
    </div>
  );
}

import { ResultCard } from "@ptyagi111/jsz-web";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function ResultCardDocs() {
  return (
    <div>
      <PageHeader
        title="Result Card"
        description="Match outcome card displayed in game history. Four states: won, tied, in progress, and lost. Each has distinct visual treatment."
        tag="Game Components"
      />
      <ImportBlock pkg="ResultCard" />

      <Section title="All states">
        <DocExample
          title="Won"
          description="Shows gem reward in pink with a gem icon."
          code={`<ResultCard
  state="won"
  gameName="Blitz Bunch"
  opponent="vs Saloni"
  entry={15}
  reward={30}
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <ResultCard state="won" gameName="Blitz Bunch" opponent="vs Saloni" entry={15} reward={30} />
          </div>
        </DocExample>

        <DocExample
          title="Tied"
          description="Neutral outcome with a Replay action."
          code={`<ResultCard
  state="tied"
  gameName="Dominos Gold"
  opponent="vs tbejavi"
  entry={15}
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <ResultCard state="tied" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
          </div>
        </DocExample>

        <DocExample
          title="In Progress"
          description="Animated spinner — match is ongoing."
          code={`<ResultCard
  state="in progress"
  gameName="Dominos Gold"
  opponent="vs tbejavi"
  entry={15}
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <ResultCard state="in progress" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
          </div>
        </DocExample>

        <DocExample
          title="Lost"
          description="Red/negative treatment."
          code={`<ResultCard
  state="lost"
  gameName="Dominos Gold"
  opponent="vs tbejavi"
  entry={15}
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <ResultCard state="lost" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
          </div>
        </DocExample>
      </Section>

      <Section title="Full history list">
        <DocExample
          title="Mixed states"
          code={`<div className="space-y-3 max-w-sm">
  <ResultCard state="won"         gameName="Blitz Bunch"  opponent="vs Saloni"  entry={15} reward={30} />
  <ResultCard state="tied"        gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
  <ResultCard state="in progress" gameName="Speed Round"  opponent="vs Jordan"  entry={20} />
  <ResultCard state="lost"        gameName="Neon Racer"   opponent="vs Maya"    entry={25} />
</div>`}
          bg="dark"
          center={false}
        >
          <div className="space-y-3 max-w-sm w-full">
            <ResultCard state="won" gameName="Blitz Bunch" opponent="vs Saloni" entry={15} reward={30} />
            <ResultCard state="tied" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
            <ResultCard state="in progress" gameName="Speed Round" opponent="vs Jordan" entry={20} />
            <ResultCard state="lost" gameName="Neon Racer" opponent="vs Maya" entry={25} />
          </div>
        </DocExample>
      </Section>

      <Section title="Props">
        <PropsTable props={[
          { name: "state", type: '"won" | "tied" | "in progress" | "lost"', required: true, description: "Match outcome state — drives visual treatment" },
          { name: "gameName", type: "string", required: true, description: "Name of the game" },
          { name: "opponent", type: "string", required: true, description: "Opponent label (e.g. 'vs Saloni')" },
          { name: "entry", type: "number", required: true, description: "Entry cost in gems" },
          { name: "reward", type: "number", description: "Gems won — only shown in 'won' state" },
          { name: "thumbnail", type: "string", description: "Optional game thumbnail URL" },
        ]} />
      </Section>
    </div>
  );
}

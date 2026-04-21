import { LobbyCard } from "@ptyagi111/jsz-web";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function LobbyCardDocs() {
  return (
    <div>
      <PageHeader
        title="Lobby Card"
        description="Game lobby entry tile showing game name, entry cost, reward, and player count. Two currency modes: gems (purple glow) and sweepstakes coins (green glow)."
        tag="Game Components"
      />
      <ImportBlock pkg="LobbyCard" />

      <Section title="Currency types">
        <DocExample
          title="Gems variant"
          description="Purple glow accent with gem icon."
          code={`<LobbyCard
  type="gems"
  name="Blitz Bunch"
  reward="2"
  entry="20"
  players={2}
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <LobbyCard type="gems" name="Blitz Bunch" reward="2" entry="20" players={2} />
          </div>
        </DocExample>

        <DocExample
          title="SC (Sweepstakes Coin) variant"
          description="Green glow accent with SC badge."
          code={`<LobbyCard
  type="sc"
  name="Dominos Gold"
  reward="5"
  entry="10"
  players={4}
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <LobbyCard type="sc" name="Dominos Gold" reward="5" entry="10" players={4} />
          </div>
        </DocExample>
      </Section>

      <Section title="Highlighted state" description="Used for recommended or featured lobbies. Renders a gradient border ring.">
        <DocExample
          title="Highlighted"
          code={`<LobbyCard
  type="gems"
  name="Blitz Bunch"
  reward="2"
  entry="20"
  players={2}
  highlighted
/>`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <LobbyCard type="gems" name="Blitz Bunch" reward="2" entry="20" players={2} highlighted />
          </div>
        </DocExample>
      </Section>

      <Section title="A full lobby list">
        <DocExample
          title="Multiple cards"
          code={`<div className="space-y-3 max-w-sm">
  <LobbyCard type="gems" name="Blitz Bunch"   reward="2"  entry="20" players={2} highlighted />
  <LobbyCard type="sc"   name="Dominos Gold"  reward="5"  entry="10" players={4} highlighted />
  <LobbyCard type="gems" name="Speed Round"   reward="10" entry="50" players={8} />
</div>`}
          bg="dark"
          center={false}
        >
          <div className="space-y-3 max-w-sm w-full">
            <LobbyCard type="gems" name="Blitz Bunch" reward="2" entry="20" players={2} highlighted />
            <LobbyCard type="sc" name="Dominos Gold" reward="5" entry="10" players={4} highlighted />
            <LobbyCard type="gems" name="Speed Round" reward="10" entry="50" players={8} />
          </div>
        </DocExample>
      </Section>

      <Section title="Props">
        <PropsTable props={[
          { name: "type", type: '"gems" | "sc"', required: true, description: "Currency mode — gems or sweepstakes coins" },
          { name: "name", type: "string", required: true, description: "Game/lobby name" },
          { name: "reward", type: "string", required: true, description: "Reward amount (as string)" },
          { name: "entry", type: "string", required: true, description: "Entry cost amount" },
          { name: "players", type: "number", required: true, description: "Number of players in the lobby" },
          { name: "highlighted", type: "boolean", default: "false", description: "Renders gradient border ring" },
          { name: "onPlay", type: "() => void", description: "Play button callback" },
        ]} />
      </Section>
    </div>
  );
}

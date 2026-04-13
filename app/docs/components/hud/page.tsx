import { Hud } from "@/components/ui/hud";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function HudDocs() {
  return (
    <div>
      <PageHeader
        title="HUD"
        description="In-game heads-up display bar. Shows gem and cash currency balances, a context title, and optional back/help navigation."
        tag="Navigation"
      />
      <ImportBlock pkg="Hud" />

      <Section title="Variants">
        <DocExample
          title="Lobby HUD — with nav"
          description="Default state with back arrow and help button visible."
          code={`<Hud gems={500} cash={500} title="Lobby" />`}
          bg="dark"
          center={false}
        >
          <Hud gems={500} cash={500} title="Lobby" />
        </DocExample>

        <DocExample
          title="Game HUD — nav hidden"
          description="Inside an active game: hides back/help nav row."
          code={`<Hud gems={1200} cash={800} title="Game" showNav={false} />`}
          bg="dark"
          center={false}
        >
          <Hud gems={1200} cash={800} title="Game" showNav={false} />
        </DocExample>

        <DocExample
          title="Currencies hidden"
          description="Minimal HUD for non-game screens where balance is irrelevant."
          code={`<Hud title="Settings" showCurrencies={false} />`}
          bg="dark"
          center={false}
        >
          <Hud title="Settings" showCurrencies={false} />
        </DocExample>
      </Section>

      <Section title="Props">
        <PropsTable props={[
          { name: "title", type: "string", required: true, description: "Screen or context label shown in the centre" },
          { name: "gems", type: "number", default: "0", description: "Gem balance to display" },
          { name: "cash", type: "number", default: "0", description: "Cash (SC) balance to display" },
          { name: "showCurrencies", type: "boolean", default: "true", description: "Toggle currency chips visibility" },
          { name: "showNav", type: "boolean", default: "true", description: "Toggle back + help navigation row" },
          { name: "onBack", type: "() => void", description: "Callback for back button" },
          { name: "onHelp", type: "() => void", description: "Callback for help button" },
        ]} />
      </Section>
    </div>
  );
}

import { Toast } from "@/components/ui/toast";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function ToastDocs() {
  return (
    <div>
      <PageHeader
        title="Toast"
        description="Inline notification banner for success and error feedback. Appears at the top or bottom of a screen. Not animated here — wire animation at the parent level."
        tag="Feedback"
      />
      <ImportBlock pkg="Toast" />

      <Section title="Variants">
        <DocExample
          title="Success"
          description="Green background with check icon."
          code={`<Toast variant="success" message="Successfully joined the game!" />`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <Toast variant="success" message="Successfully joined the game!" />
          </div>
        </DocExample>

        <DocExample
          title="Error"
          description="Red background with alert triangle icon."
          code={`<Toast variant="error" message="Failed to connect. Please try again." />`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <Toast variant="error" message="Failed to connect. Please try again." />
          </div>
        </DocExample>
      </Section>

      <Section title="More examples">
        <DocExample
          title="Various messages"
          code={`<Toast variant="success" message="You won 30 Gems!" />
<Toast variant="error"   message="Insufficient balance. Add Gems to continue." />
<Toast variant="success" message="Profile updated successfully." />`}
          bg="dark"
          center={false}
        >
          <div className="space-y-3 max-w-sm w-full">
            <Toast variant="success" message="You won 30 Gems!" />
            <Toast variant="error" message="Insufficient balance. Add Gems to continue." />
            <Toast variant="success" message="Profile updated successfully." />
          </div>
        </DocExample>
      </Section>

      <Section title="Props">
        <PropsTable props={[
          { name: "variant", type: '"success" | "error"', default: '"error"', description: "Controls icon and background color" },
          { name: "message", type: "string", required: true, description: "Notification message text" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
        ]} />
      </Section>
    </div>
  );
}

import { Toast } from "@/components/ui/toast";
import {
  PageHeader, Section, ImportBlock, DocExample, PropsTable, DoDont, DocCallout,
} from "@/components/docs/doc-section";

export default function ToastDocs() {
  return (
    <div>
      <PageHeader
        title="Toast"
        description="Inline notification banner for success and error feedback. Appears at the top or bottom of a screen. Animation is handled at the parent level."
        tag="Feedback"
        status="stable"
      />
      <ImportBlock pkg="Toast" />

      {/* ── Variants ── */}
      <Section title="Variants">
        <DocExample
          title="Success"
          description="Green background with check icon. Use for positive outcomes."
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
          description="Red background with alert icon. Use for failures and blocked actions."
          code={`<Toast variant="error" message="Failed to connect. Please try again." />`}
          bg="dark"
          center={false}
        >
          <div className="max-w-sm w-full">
            <Toast variant="error" message="Failed to connect. Please try again." />
          </div>
        </DocExample>
      </Section>

      {/* ── Examples ── */}
      <Section title="Real-world messages" description="Toasts should be brief, action-oriented, and specific.">
        <DocExample
          title="Game events"
          code={`<Toast variant="success" message="You won 30 Gems!" />
<Toast variant="error"   message="Insufficient balance. Add Gems to continue." />
<Toast variant="success" message="Profile updated successfully." />`}
          bg="dark"
          center={false}
        >
          <div className="space-y-2.5 max-w-sm w-full">
            <Toast variant="success" message="You won 30 Gems!" />
            <Toast variant="error"   message="Insufficient balance. Add Gems to continue." />
            <Toast variant="success" message="Profile updated successfully." />
          </div>
        </DocExample>
      </Section>

      {/* ── Do/Don't ── */}
      <Section title="Do / Don't">
        <DoDont
          doItem={{
            children: <div className="max-w-xs w-full"><Toast variant="success" message="You won 30 Gems!" /></div>,
            description: "Keep messages short and specific. Mention the outcome, not the action.",
          }}
          dontItem={{
            children: <div className="max-w-xs w-full"><Toast variant="success" message="Your action was completed successfully and your account has been updated." /></div>,
            description: "Don't write long-form descriptions in toasts — truncation is inevitable.",
          }}
        />
        <DoDont
          doItem={{
            children: (
              <div className="max-w-xs w-full space-y-2">
                <Toast variant="success" message="Match joined!" />
              </div>
            ),
            description: "Show one toast at a time per action. Stack only if truly independent events fire simultaneously.",
          }}
          dontItem={{
            children: (
              <div className="max-w-xs w-full space-y-2">
                <Toast variant="success" message="Match joined!" />
                <Toast variant="success" message="Gems updated!" />
                <Toast variant="success" message="Profile synced!" />
              </div>
            ),
            description: "Don't stack 3+ toasts for a single user action — combine related info into one message.",
          }}
        />
      </Section>

      {/* ── Guidelines ── */}
      <Section title="Guidelines">
        <div className="space-y-3">
          <DocCallout variant="info">
            Toast does not animate itself — wrap it in a motion library (e.g. Framer Motion) or CSS transition at the parent level.
          </DocCallout>
          <DocCallout variant="tip">
            Auto-dismiss after 3–5 seconds for success toasts. Keep error toasts visible until the user dismisses them manually.
          </DocCallout>
          <DocCallout variant="warning">
            Avoid showing toasts for background operations the user didn&apos;t trigger directly (e.g. realtime score updates).
          </DocCallout>
        </div>
      </Section>

      {/* ── Props ── */}
      <Section title="Props">
        <PropsTable props={[
          { name: "variant",   type: '"success" | "error"', default: '"error"', description: "Controls icon and background color" },
          { name: "message",   type: "string", required: true, description: "Notification message text" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
        ]} />
      </Section>
    </div>
  );
}

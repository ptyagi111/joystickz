"use client";

import { useState } from "react";
import { TabGroup } from "@ptyagi111/jsz-web";
import {
  PageHeader, Section, ImportBlock, DocExample, PropsTable, DocCallout, DoDont, KeyboardShortcuts,
} from "@/components/docs/doc-section";

export default function TabsDocs() {
  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(1);
  const [a3, setA3] = useState(0);

  return (
    <div>
      <PageHeader
        title="Tabs"
        description="Segmented navigation for switching between content views within a screen. Uses a pill-style active indicator on a dark capsule track."
        tag="Navigation"
        status="stable"
      />
      <ImportBlock pkg="TabGroup" />

      {/* ── Usage ── */}
      <Section title="Default usage">
        <DocExample
          title="Three-tab group"
          code={`const [activeTab, setActiveTab] = useState(0);

<TabGroup
  tabs={["Matches", "Leaderboard", "History"]}
  activeIndex={activeTab}
  onChange={setActiveTab}
/>`}
          bg="dark"
        >
          <div className="w-full">
            <TabGroup tabs={["Matches", "Leaderboard", "History"]} activeIndex={a1} onChange={setA1} />
          </div>
        </DocExample>

        <DocExample
          title="Two-tab group"
          code={`<TabGroup
  tabs={["Gems", "Sweepstakes"]}
  activeIndex={activeTab}
  onChange={setActiveTab}
/>`}
          bg="dark"
        >
          <div className="w-full">
            <TabGroup tabs={["Gems", "Sweepstakes"]} activeIndex={a2} onChange={setA2} />
          </div>
        </DocExample>

        <DocExample
          title="Four-tab group"
          code={`<TabGroup
  tabs={["All", "Wins", "Losses", "Pending"]}
  activeIndex={activeTab}
  onChange={setActiveTab}
/>`}
          bg="dark"
        >
          <div className="w-full">
            <TabGroup tabs={["All", "Wins", "Losses", "Pending"]} activeIndex={a3} onChange={setA3} />
          </div>
        </DocExample>
      </Section>

      {/* ── Do/Don't ── */}
      <Section title="Do / Don't">
        <DoDont
          doItem={{
            children: (
              <div className="w-full">
                <TabGroup tabs={["Matches", "Leaderboard"]} activeIndex={0} onChange={() => {}} />
              </div>
            ),
            description: "Use 2–4 tabs maximum. Each label should be a single noun or short phrase.",
          }}
          dontItem={{
            children: (
              <div className="w-full">
                <TabGroup tabs={["View All Matches", "Full Leaderboard Rankings", "Complete History Log"]} activeIndex={0} onChange={() => {}} />
              </div>
            ),
            description: "Don't use long labels — they overflow the pill track and break the layout.",
          }}
        />
      </Section>

      {/* ── Guidelines ── */}
      <Section title="Guidelines">
        <div className="space-y-3">
          <DocCallout variant="tip">
            Tabs control visible content — the currently selected tab should always correspond to what&apos;s rendered below it. Never use tabs as links to separate pages.
          </DocCallout>
          <DocCallout variant="info">
            TabGroup is a controlled component — you must manage <code className="text-arcade-brand text-[12px] font-mono">activeIndex</code> and <code className="text-arcade-brand text-[12px] font-mono">onChange</code> state in the parent.
          </DocCallout>
          <DocCallout variant="warning">
            Avoid more than 5 tabs. If you need more options, consider a Filter Chip row or a dropdown instead.
          </DocCallout>
        </div>
      </Section>

      {/* ── Keyboard ── */}
      <Section title="Keyboard interaction">
        <KeyboardShortcuts shortcuts={[
          { keys: ["Tab"],       action: "Move focus into the tab group" },
          { keys: ["← →"],      action: "Navigate between tabs" },
          { keys: ["Enter", "Space"], action: "Activate focused tab" },
        ]} />
      </Section>

      {/* ── Props ── */}
      <Section title="Props — TabGroup">
        <PropsTable props={[
          { name: "tabs",        type: "string[]",                  required: true, description: "Array of tab label strings" },
          { name: "activeIndex", type: "number",                    required: true, description: "Index of the currently active tab" },
          { name: "onChange",    type: "(index: number) => void",   required: true, description: "Callback fired when a tab is clicked" },
          { name: "className",   type: "string",                    description: "Extra Tailwind classes on the container" },
        ]} />
      </Section>
    </div>
  );
}

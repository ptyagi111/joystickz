"use client";

import { useState } from "react";
import { TabGroup } from "@/components/ui/tabs";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function TabsDocs() {
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(1);

  return (
    <div>
      <PageHeader
        title="Tabs"
        description="Segmented navigation for switching between content views within a screen. Uses a pill-style active indicator on a dark capsule track."
        tag="Navigation"
      />
      <ImportBlock pkg="Tab, TabGroup" />

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
            <TabGroup
              tabs={["Matches", "Leaderboard", "History"]}
              activeIndex={active1}
              onChange={setActive1}
            />
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
            <TabGroup
              tabs={["Gems", "Sweepstakes"]}
              activeIndex={active2}
              onChange={setActive2}
            />
          </div>
        </DocExample>
      </Section>

      <Section title="Props — TabGroup">
        <PropsTable props={[
          { name: "tabs", type: "string[]", required: true, description: "Array of tab label strings" },
          { name: "activeIndex", type: "number", required: true, description: "Index of the currently active tab" },
          { name: "onChange", type: "(index: number) => void", required: true, description: "Callback fired when a tab is clicked" },
          { name: "className", type: "string", description: "Extra Tailwind classes on the container" },
        ]} />
      </Section>
    </div>
  );
}

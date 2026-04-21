"use client";

import { useState } from "react";
import { MenuItem } from "@ptyagi111/jsz-web";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M4 12L14 4L24 12V24H18V18H10V24H4V12Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M8 4h12v10a6 6 0 0 1-12 0V4Z" stroke="white" strokeWidth="1.5" />
      <path d="M8 8H5a3 3 0 0 0 3 3M20 8h3a3 3 0 0 1-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 20v4M10 24h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function HistoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="9" stroke="white" strokeWidth="1.5" />
      <path d="M14 9v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function MenuItemDocs() {
  const [active, setActive] = useState(0);

  const items = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "Trophies", icon: <TrophyIcon /> },
    { label: "History", icon: <HistoryIcon /> },
  ];

  return (
    <div>
      <PageHeader
        title="Menu Item"
        description="Bottom navigation bar item. Shows an icon, label, and an active radial glow indicator. Arrange multiple items in a flex row."
        tag="Navigation"
      />
      <ImportBlock pkg="MenuItem" />

      <Section title="Interactive demo" description="Click items to switch active state.">
        <DocExample
          title="Bottom nav bar"
          code={`const [active, setActive] = useState(0);

<div className="flex bg-arcade-bg-secondary rounded-xl overflow-hidden">
  {items.map(({ label, icon }, i) => (
    <MenuItem
      key={label}
      label={label}
      icon={icon}
      active={i === active}
      onClick={() => setActive(i)}
    />
  ))}
</div>`}
          bg="dark"
          center={false}
        >
          <div className="flex bg-arcade-bg-secondary rounded-xl overflow-hidden w-full">
            {items.map(({ label, icon }, i) => (
              <MenuItem
                key={label}
                label={label}
                icon={icon}
                active={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </DocExample>
      </Section>

      <Section title="States">
        <DocExample
          title="Active vs Default"
          code={`<MenuItem label="Home" icon={<HomeIcon />} active />
<MenuItem label="Trophies" icon={<TrophyIcon />} active={false} />`}
          bg="dark"
          center={false}
        >
          <div className="flex bg-arcade-bg-secondary rounded-xl overflow-hidden w-full max-w-[280px]">
            <MenuItem label="Home" icon={<HomeIcon />} active />
            <MenuItem label="Trophies" icon={<TrophyIcon />} active={false} />
          </div>
        </DocExample>
      </Section>

      <Section title="Props">
        <PropsTable props={[
          { name: "label", type: "string", required: true, description: "Navigation label shown below the icon" },
          { name: "icon", type: "React.ReactNode", required: true, description: "SVG icon element" },
          { name: "active", type: "boolean", default: "false", description: "Highlights item and shows radial glow" },
          { name: "disabled", type: "boolean", default: "false", description: "Dims item and disables interaction" },
          { name: "onClick", type: "() => void", description: "Click handler" },
        ]} />
      </Section>
    </div>
  );
}

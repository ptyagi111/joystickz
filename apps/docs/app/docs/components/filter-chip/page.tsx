"use client";

import { useState } from "react";
import { FilterChip } from "@ptyagi111/jsz-web";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function FilterChipDocs() {
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(2);

  const filters = ["All", "Live", "Gems", "SC"];
  const durations = ["Today", "This Week", "This Month", "All Time"];

  return (
    <div>
      <PageHeader
        title="Filter Chip"
        description="Toggle pill for filtering lists. Selected state uses a bright neutral surface; default is the tertiary dark background."
        tag="Navigation"
      />
      <ImportBlock pkg="FilterChip" />

      <Section title="Interactive demo" description="Click chips to toggle selection.">
        <DocExample
          title="Game type filter"
          code={`const filters = ["All", "Live", "Gems", "SC"];
const [active, setActive] = useState(0);

<div className="flex gap-2 flex-wrap">
  {filters.map((f, i) => (
    <FilterChip
      key={f}
      label={f}
      selected={i === active}
      onClick={() => setActive(i)}
    />
  ))}
</div>`}
        >
          <div className="flex gap-2 flex-wrap">
            {filters.map((f, i) => (
              <FilterChip
                key={f}
                label={f}
                selected={i === active1}
                onClick={() => setActive1(i)}
              />
            ))}
          </div>
        </DocExample>

        <DocExample
          title="Time range filter"
          code={`const durations = ["Today", "This Week", "This Month", "All Time"];

<div className="flex gap-2 flex-wrap">
  {durations.map((d, i) => (
    <FilterChip
      key={d}
      label={d}
      selected={i === active}
      onClick={() => setActive(i)}
    />
  ))}
</div>`}
        >
          <div className="flex gap-2 flex-wrap">
            {durations.map((d, i) => (
              <FilterChip
                key={d}
                label={d}
                selected={i === active2}
                onClick={() => setActive2(i)}
              />
            ))}
          </div>
        </DocExample>
      </Section>

      <Section title="States">
        <DocExample
          title="Selected vs unselected"
          code={`<FilterChip label="Gems" selected />
<FilterChip label="SC" selected={false} />`}
        >
          <div className="flex gap-3">
            <FilterChip label="Gems" selected />
            <FilterChip label="SC" selected={false} />
          </div>
        </DocExample>
      </Section>

      <Section title="Props">
        <PropsTable props={[
          { name: "label", type: "string", required: true, description: "Chip text" },
          { name: "selected", type: "boolean", default: "false", description: "Whether this chip is selected" },
          { name: "onClick", type: "() => void", description: "Click handler" },
          { name: "className", type: "string", description: "Extra Tailwind classes" },
        ]} />
      </Section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@ptyagi111/jsz-web";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "big" | "medium" | "small" | "xsmall" | "link";
type IconMode = "none" | "start" | "end" | "both";

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M5 3.5l10 5.5-10 5.5V3.5Z" fill="currentColor" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M10 5l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconSize: Record<Size, number> = { big: 20, medium: 18, small: 16, xsmall: 12, link: 12 };

function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="space-y-1.5">
      <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">{label}</span>
      <div className="flex gap-1 bg-[#10101e] rounded-lg p-1">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`flex-1 px-3 py-1.5 rounded-md text-[12px] font-bold transition-colors capitalize ${
              value === o
                ? "bg-[#32324e] text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center justify-between w-full"
    >
      <span className="text-[12px] text-white/60">{label}</span>
      <div
        className={`relative w-8 h-4.5 rounded-full transition-colors ${
          checked ? "bg-arcade-brand" : "bg-[#32324e]"
        }`}
        style={{ height: "18px", width: "32px" }}
      >
        <span
          className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-[15px]" : "translate-x-0.5"
          }`}
          style={{ width: "14px", height: "14px" }}
        />
      </div>
    </button>
  );
}

function buildCode(
  variant: Variant,
  size: Size,
  iconMode: IconMode,
  disabled: boolean,
  label: string
): string {
  const sz = iconSize[size];
  const parts: string[] = [];
  if (variant !== "primary") parts.push(`variant="${variant}"`);
  if (size !== "big") parts.push(`size="${size}"`);
  if (iconMode === "start" || iconMode === "both")
    parts.push(`iconStart={<PlayIcon size={${sz}} />}`);
  if (iconMode === "end" || iconMode === "both")
    parts.push(`iconEnd={<ArrowRightIcon size={${sz}} />}`);
  if (disabled) parts.push("disabled");

  const attrs = parts.length ? " " + parts.join(" ") : "";
  const child = label ? `>${label}</Button>` : " />";
  return `<Button${attrs}${child}`;
}

export function ButtonPlayground() {
  const [variant, setVariant] = useState<Variant>("primary");
  const [size, setSize] = useState<Size>("big");
  const [iconMode, setIconMode] = useState<IconMode>("none");
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState("Play Now");

  const sz = iconSize[size];
  const iconStart =
    iconMode === "start" || iconMode === "both" ? <PlayIcon size={sz} /> : undefined;
  const iconEnd =
    iconMode === "end" || iconMode === "both" ? <ArrowRightIcon size={sz} /> : undefined;

  const code = buildCode(variant, size, iconMode, disabled, label);

  return (
    <div className="rounded-2xl border border-white/[0.07] overflow-hidden mb-10">
      {/* header */}
      <div className="px-5 py-3 border-b border-white/[0.07] bg-[#020217]">
        <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">
          Playground
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
        {/* preview */}
        <div className="flex items-center justify-center min-h-[160px] bg-[#10101e] p-10">
          <Button
            variant={variant}
            size={size}
            iconStart={iconStart}
            iconEnd={iconEnd}
            disabled={disabled}
          >
            {label || undefined}
          </Button>
        </div>

        {/* controls */}
        <div className="border-t lg:border-t-0 lg:border-l border-white/[0.07] bg-[#24243b] p-5 space-y-5">
          <SegmentedControl
            label="Variant"
            options={["primary", "secondary", "tertiary"]}
            value={variant}
            onChange={setVariant}
          />

          <SegmentedControl
            label="Size"
            options={["big", "medium", "small", "xsmall", "link"]}
            value={size}
            onChange={setSize}
          />

          <SegmentedControl
            label="Icons"
            options={["none", "start", "end", "both"]}
            value={iconMode}
            onChange={setIconMode}
          />

          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">
              Label
            </span>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="empty = icon only"
              className="w-full bg-[#10101e] border border-white/[0.1] rounded-lg px-3 py-2 text-[12px] text-white placeholder:text-white/20 outline-none focus:border-white/30"
            />
          </div>

          <div className="pt-1">
            <Toggle label="Disabled" checked={disabled} onChange={setDisabled} />
          </div>
        </div>
      </div>

      {/* code output */}
      <div className="border-t border-white/[0.07] bg-[#020217] px-5 py-3">
        <code className="text-[12px] font-mono text-arcade-brand">{code}</code>
      </div>
    </div>
  );
}

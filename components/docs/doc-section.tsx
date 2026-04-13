"use client";

import { useState } from "react";
import { CodeBlock } from "./code-block";

interface DocExampleProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  /** dark | light | grid — preview background style */
  bg?: "dark" | "medium" | "checkered";
  center?: boolean;
}

export function DocExample({ title, description, code, children, bg = "medium", center = true }: DocExampleProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const bgClass =
    bg === "dark" ? "bg-arcade-bg" :
    bg === "checkered" ? "bg-arcade-bg-tertiary" :
    "bg-arcade-bg-secondary";

  return (
    <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
      {title && (
        <div className="px-5 py-3 border-b border-white/[0.07] flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold text-white">{title}</p>
            {description && <p className="text-[12px] text-white/50 mt-0.5">{description}</p>}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {(["preview", "code"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold capitalize transition-all ${
                  tab === t
                    ? "bg-arcade-brand/10 text-arcade-brand"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {tab === "preview" ? (
        <div className={`${bgClass} ${center ? "flex items-center justify-center" : ""} p-8 min-h-[120px]`}>
          <div className={center ? "flex flex-col items-center gap-4 w-full max-w-sm" : "w-full"}>
            {children}
          </div>
        </div>
      ) : (
        <div className="p-4" style={{ background: "#020217" }}>
          <CodeBlock code={code} />
        </div>
      )}

      {!title && (
        <div className="border-t border-white/[0.07] px-4 py-3" style={{ background: "#020217" }}>
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
}

/* ─── Page-level helpers ─────────────────────────────────────── */

export function PageHeader({ title, description, tag }: { title: string; description: string; tag?: string }) {
  return (
    <div className="mb-10 pb-8 border-b border-white/[0.07]">
      {tag && (
        <span className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-arcade-brand/10 text-arcade-brand border border-arcade-brand/20">
          {tag}
        </span>
      )}
      <h1 className="text-[2.5rem] font-extrabold text-white tracking-tight leading-none">{title}</h1>
      <p className="mt-3 text-[15px] text-white/50 leading-relaxed max-w-xl">{description}</p>
    </div>
  );
}

export function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4 mb-10">
      <div>
        <h2 className="text-[1.1rem] font-bold text-white">{title}</h2>
        {description && <p className="text-[13px] text-white/50 mt-1">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function ImportBlock({ pkg }: { pkg: string }) {
  return (
    <div className="mb-8">
      <CodeBlock code={`import { ${pkg} } from "@/components/ui";`} language="ts" />
    </div>
  );
}

/* ─── Props table ────────────────────────────────────────────── */

interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.07]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-white/[0.07]" style={{ background: "#020217" }}>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th key={h} className="text-left px-4 py-3 text-[11px] font-bold text-white/30 uppercase tracking-widest">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={p.name} className={`border-b border-white/[0.05] ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}>
              <td className="px-4 py-3 font-mono text-arcade-gem text-[12px]">
                {p.name}
                {p.required && <span className="ml-1 text-arcade-negative text-[10px]">*</span>}
              </td>
              <td className="px-4 py-3 font-mono text-arcade-brand text-[12px]">{p.type}</td>
              <td className="px-4 py-3 font-mono text-white/40 text-[12px]">{p.default ?? "—"}</td>
              <td className="px-4 py-3 text-white/60">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

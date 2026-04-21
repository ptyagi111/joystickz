"use client";

import { useState } from "react";
import { CodeBlock } from "./code-block";

/* ── DocExample ───────────────────────────────────────────────── */

interface DocExampleProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  bg?: "dark" | "medium" | "checkered";
  center?: boolean;
}

export function DocExample({ title, description, code, children, bg = "medium", center = true }: DocExampleProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const bgClass =
    bg === "dark"      ? "bg-arcade-bg" :
    bg === "checkered" ? "bg-arcade-bg-tertiary" :
    "bg-arcade-bg-secondary";

  return (
    <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
      {title && (
        <div className="px-5 py-3 border-b border-white/[0.07] flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold text-white">{title}</p>
            {description && <p className="text-[12px] text-white/45 mt-0.5">{description}</p>}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {(["preview", "code"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold capitalize transition-all ${
                  tab === t ? "bg-arcade-brand/10 text-arcade-brand" : "text-white/35 hover:text-white/70"
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

/* ── PageHeader ───────────────────────────────────────────────── */

export function PageHeader({
  title, description, tag, status,
}: {
  title: string; description: string; tag?: string; status?: "stable" | "beta" | "new";
}) {
  const statusConfig = {
    stable: { label: "Stable", cls: "bg-arcade-positive/10 text-arcade-positive border-arcade-positive/20" },
    beta:   { label: "Beta",   cls: "bg-arcade-attentive/10 text-arcade-attentive border-arcade-attentive/20" },
    new:    { label: "New",    cls: "bg-arcade-gem/10 text-arcade-gem border-arcade-gem/20" },
  };

  return (
    <div className="mb-10 pb-8 border-b border-white/[0.07]">
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {tag && (
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-arcade-brand/10 text-arcade-brand border border-arcade-brand/20">
            {tag}
          </span>
        )}
        {status && (
          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${statusConfig[status].cls}`}>
            {statusConfig[status].label}
          </span>
        )}
      </div>
      <h1 className="text-[2.5rem] font-extrabold text-white tracking-tight leading-none">{title}</h1>
      <p className="mt-3 text-[15px] text-white/50 leading-relaxed max-w-xl">{description}</p>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section id={slugify(title)} className="space-y-4 mb-12 scroll-mt-6">
      <div>
        <h2 className="text-[1.05rem] font-bold text-white">{title}</h2>
        {description && <p className="text-[13px] text-white/45 mt-1">{description}</p>}
      </div>
      {children}
    </section>
  );
}

/* ── ImportBlock ─────────────────────────────────────────────── */

export function ImportBlock({ pkg }: { pkg: string }) {
  return (
    <div className="mb-8">
      <CodeBlock code={`import { ${pkg} } from "@ptyagi111/jsz-web";`} language="ts" />
    </div>
  );
}

/* ── PropsTable ──────────────────────────────────────────────── */

interface PropDef {
  name: string; type: string; default?: string; required?: boolean; description: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.07]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-white/[0.07]" style={{ background: "#020217" }}>
            {["Prop", "Type", "Default", "Description"].map(h => (
              <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-white/25 uppercase tracking-widest">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={p.name} className={`border-b border-white/[0.05] ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}>
              <td className="px-4 py-3 font-mono text-arcade-gem text-[12px]">
                {p.name}{p.required && <span className="ml-1 text-arcade-negative text-[10px]">*</span>}
              </td>
              <td className="px-4 py-3 font-mono text-[#7dd3fc] text-[12px]">{p.type}</td>
              <td className="px-4 py-3 font-mono text-white/35 text-[12px]">{p.default ?? "—"}</td>
              <td className="px-4 py-3 text-white/55 text-[13px]">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── DoDont ──────────────────────────────────────────────────── */

interface DoDontItem { children: React.ReactNode; description: string }

export function DoDont({ doItem, dontItem }: { doItem: DoDontItem; dontItem: DoDontItem }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Do */}
      <div className="rounded-2xl overflow-hidden border border-arcade-positive/25">
        <div className="px-4 py-2.5 border-b border-arcade-positive/15 flex items-center gap-2" style={{ background: "rgba(20,174,92,0.06)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#14ae5c" strokeWidth="1.2"/>
            <path d="M4 7l2.5 2.5L10 5" stroke="#14ae5c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[11px] font-extrabold text-arcade-positive uppercase tracking-widest">Do</span>
        </div>
        <div className="p-6 bg-arcade-bg-secondary flex items-center justify-center min-h-[100px]">
          {doItem.children}
        </div>
        <div className="px-4 py-3 border-t border-white/[0.05]" style={{ background: "rgba(20,174,92,0.04)" }}>
          <p className="text-[12px] text-white/55">{doItem.description}</p>
        </div>
      </div>

      {/* Don't */}
      <div className="rounded-2xl overflow-hidden border border-arcade-negative/25">
        <div className="px-4 py-2.5 border-b border-arcade-negative/15 flex items-center gap-2" style={{ background: "rgba(192,15,13,0.06)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#c00f0d" strokeWidth="1.2"/>
            <path d="M5 5l4 4M9 5l-4 4" stroke="#c00f0d" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="text-[11px] font-extrabold text-arcade-negative uppercase tracking-widest">Don&apos;t</span>
        </div>
        <div className="p-6 bg-arcade-bg-secondary flex items-center justify-center min-h-[100px]">
          {dontItem.children}
        </div>
        <div className="px-4 py-3 border-t border-white/[0.05]" style={{ background: "rgba(192,15,13,0.04)" }}>
          <p className="text-[12px] text-white/55">{dontItem.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ── DocCallout ──────────────────────────────────────────────── */

type CalloutVariant = "tip" | "info" | "warning" | "caution";

const CALLOUT: Record<CalloutVariant, { icon: string; label: string; border: string; bg: string; text: string }> = {
  tip:     { icon: "✦", label: "Tip",     border: "border-arcade-positive/25", bg: "rgba(20,174,92,0.06)",  text: "text-arcade-positive" },
  info:    { icon: "ℹ", label: "Note",    border: "border-arcade-brand/25",    bg: "rgba(255,238,53,0.06)", text: "text-arcade-brand"    },
  warning: { icon: "⚠", label: "Warning", border: "border-arcade-attentive/25",bg: "rgba(255,169,53,0.06)",text: "text-arcade-attentive" },
  caution: { icon: "✕", label: "Caution", border: "border-arcade-negative/25", bg: "rgba(192,15,13,0.06)",  text: "text-arcade-negative" },
};

export function DocCallout({ variant = "info", children }: { variant?: CalloutVariant; children: React.ReactNode }) {
  const c = CALLOUT[variant];
  return (
    <div className={`rounded-xl border ${c.border} flex gap-3 p-4`} style={{ background: c.bg }}>
      <span className={`${c.text} text-[14px] shrink-0 leading-5`}>{c.icon}</span>
      <div>
        <span className={`text-[11px] font-extrabold uppercase tracking-widest ${c.text} mr-2`}>{c.label}</span>
        <span className="text-[13px] text-white/60 leading-relaxed">{children}</span>
      </div>
    </div>
  );
}

/* ── KeyboardShortcuts ────────────────────────────────────────── */

export function KeyboardShortcuts({ shortcuts }: { shortcuts: { keys: string[]; action: string }[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.07]">
      {shortcuts.map((s, i) => (
        <div
          key={i}
          className={`flex items-center justify-between px-4 py-3 ${i > 0 ? "border-t border-white/[0.05]" : ""} ${i % 2 === 0 ? "bg-arcade-bg-secondary" : "bg-arcade-bg"}`}
        >
          <span className="text-[13px] text-white/60">{s.action}</span>
          <div className="flex items-center gap-1">
            {s.keys.map((k, ki) => (
              <span key={ki}>
                {ki > 0 && <span className="text-white/25 text-[11px] mx-0.5">+</span>}
                <kbd className="inline-block px-2 py-0.5 rounded-md text-[11px] font-mono font-bold text-white/70 border border-white/[0.12] bg-white/[0.06]">{k}</kbd>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

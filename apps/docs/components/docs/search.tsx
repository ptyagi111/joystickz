"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const INDEX = [
  { title: "Overview",      href: "/docs",                          desc: "Design system home, stats, quick start",            group: "Getting Started" },
  { title: "Design Tokens", href: "/docs/tokens",                   desc: "Colors, typography scale, spacing values",          group: "Getting Started" },
  { title: "Typography",    href: "/docs/components/typography",    desc: "Heading and body text — DM Sans",                   group: "Foundation"     },
  { title: "Button",        href: "/docs/components/button",        desc: "Primary, secondary, tertiary — icons, sizes",       group: "Foundation"     },
  { title: "Badge",         href: "/docs/components/badge",         desc: "Status indicators — positive, negative, gem",       group: "Foundation"     },
  { title: "Card",          href: "/docs/components/card",          desc: "Surface containers with three depth levels",        group: "Foundation"     },
  { title: "HUD",           href: "/docs/components/hud",           desc: "In-game heads-up display bar",                      group: "Navigation"     },
  { title: "Tabs",          href: "/docs/components/tabs",          desc: "Segmented tab navigation",                          group: "Navigation"     },
  { title: "Menu Item",     href: "/docs/components/menu-item",     desc: "Bottom nav bar items with icons",                   group: "Navigation"     },
  { title: "Filter Chip",   href: "/docs/components/filter-chip",   desc: "Toggle filter pills",                               group: "Navigation"     },
  { title: "Lobby Card",    href: "/docs/components/lobby-card",    desc: "Game lobby entry tiles — gems and SC modes",        group: "Game"           },
  { title: "Result Card",   href: "/docs/components/result-card",   desc: "Match outcome cards with win/loss styling",         group: "Game"           },
  { title: "Input Fields",  href: "/docs/components/input-field",   desc: "Date, phone number, and OTP code inputs",           group: "Forms"          },
  { title: "Toast",         href: "/docs/components/toast",         desc: "Success and error notification banners",            group: "Feedback"       },
];

const GC: Record<string, string> = {
  "Getting Started": "text-white/40",
  Foundation:        "text-[#8484b3]",
  Navigation:        "text-arcade-positive",
  Game:              "text-arcade-gem",
  Forms:             "text-arcade-brand",
  Feedback:          "text-arcade-attentive",
};

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = q.trim()
    ? INDEX.filter(x => `${x.title} ${x.desc} ${x.group}`.toLowerCase().includes(q.toLowerCase()))
    : INDEX;

  const go = useCallback((href: string) => {
    router.push(href); setOpen(false); setQ(""); setSel(0);
  }, [router]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(o => !o); }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, []);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); setSel(0); }, [open]);
  useEffect(() => setSel(0), [q]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel(s => Math.min(s + 1, results.length - 1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setSel(s => Math.max(s - 1, 0)); }
    if (e.key === "Enter" && results[sel]) go(results[sel].href);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
      style={{ background: "rgba(2,2,23,0.85)", backdropFilter: "blur(12px)" }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-[560px] rounded-2xl border border-white/[0.1] overflow-hidden shadow-2xl"
        style={{ background: "#16162a" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07]">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-white/30 shrink-0">
            <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="Search components, tokens…"
            className="flex-1 bg-transparent text-[14px] text-white placeholder-white/25 outline-none"
          />
          <kbd className="text-[10px] text-white/20 border border-white/[0.08] rounded-md px-1.5 py-0.5 font-mono">esc</kbd>
        </div>

        {/* Results */}
        <div className="max-h-[380px] overflow-y-auto py-2 px-2">
          {results.length === 0 ? (
            <p className="text-center text-[13px] text-white/25 py-10">No results for &ldquo;{q}&rdquo;</p>
          ) : (
            results.map((item, i) => (
              <button
                key={item.href}
                onMouseEnter={() => setSel(i)}
                onClick={() => go(item.href)}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  sel === i ? "bg-arcade-brand/8 border border-arcade-brand/15" : "border border-transparent hover:bg-white/[0.03]"
                }`}
              >
                <div className={`size-7 rounded-lg flex items-center justify-center shrink-0 ${sel === i ? "bg-arcade-brand/10" : "bg-white/[0.04]"}`}>
                  <span className={`text-[11px] font-extrabold ${GC[item.group] ?? "text-white/40"}`}>
                    {item.title[0]}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-[13px] font-semibold leading-none mb-0.5 ${sel === i ? "text-arcade-brand" : "text-white/80"}`}>
                    {item.title}
                  </p>
                  <p className="text-[11px] text-white/30 truncate">{item.desc}</p>
                </div>
                <span className={`text-[10px] font-bold shrink-0 ${GC[item.group] ?? "text-white/25"}`}>
                  {item.group}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-white/[0.06] flex items-center gap-5 text-[11px] text-white/20">
          <span><kbd className="font-mono text-white/30">↑↓</kbd> navigate</span>
          <span><kbd className="font-mono text-white/30">↵</kbd> open</span>
          <span><kbd className="font-mono text-white/30">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

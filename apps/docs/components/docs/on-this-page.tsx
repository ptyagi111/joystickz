"use client";

import { useEffect, useState } from "react";

interface Heading { id: string; text: string; level: number }

export function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("main h2[id], main h3[id]"));
    setHeadings(els.map(el => ({ id: el.id, text: el.textContent ?? "", level: parseInt(el.tagName[1]) })));

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-10% 0% -70% 0%", threshold: 0 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="sticky top-0 h-screen pt-12 pb-8 px-5 overflow-y-auto hidden xl:block shrink-0 w-[200px]">
      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-3 px-1">On this page</p>
      <ul className="space-y-0.5">
        {headings.map(h => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-[12px] py-1 px-2 rounded-lg transition-all duration-150 ${h.level === 3 ? "pl-4" : ""} ${
                activeId === h.id
                  ? "text-arcade-brand bg-arcade-brand/5 font-semibold"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem  { label: string; href: string }
interface NavGroup { title: string; items: NavItem[] }

const NAV: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Overview",       href: "/docs" },
      { label: "Why Joystickz",  href: "/docs/why-joystickz" },
      { label: "Design Tokens",  href: "/docs/tokens" },
    ],
  },
  {
    title: "Foundation",
    items: [
      { label: "Typography", href: "/docs/components/typography" },
      { label: "Button",     href: "/docs/components/button"     },
      { label: "Badge",      href: "/docs/components/badge"      },
      { label: "Card",       href: "/docs/components/card"       },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "HUD",         href: "/docs/components/hud"         },
      { label: "Tabs",        href: "/docs/components/tabs"        },
      { label: "Menu Item",   href: "/docs/components/menu-item"   },
      { label: "Filter Chip", href: "/docs/components/filter-chip" },
    ],
  },
  {
    title: "Game Components",
    items: [
      { label: "Lobby Card",  href: "/docs/components/lobby-card"  },
      { label: "Result Card", href: "/docs/components/result-card" },
    ],
  },
  {
    title: "Form Elements",
    items: [{ label: "Input Fields", href: "/docs/components/input-field" }],
  },
  {
    title: "Feedback",
    items: [{ label: "Toast", href: "/docs/components/toast" }],
  },
];

const GROUP_DOTS: Record<string, string> = {
  "Getting Started": "bg-white/20",
  Foundation:        "bg-[#8484b3]",
  Navigation:        "bg-arcade-positive",
  "Game Components": "bg-arcade-gem",
  "Form Elements":   "bg-arcade-brand",
  Feedback:          "bg-arcade-attentive",
};

function openSearch() {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }));
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] shrink-0 h-screen sticky top-0 flex flex-col border-r border-white/[0.06] overflow-y-auto" style={{ background: "#13132a" }}>
      {/* Brand */}
      <Link
        href="/docs"
        className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] shrink-0 hover:opacity-90 transition-opacity"
      >
        <div
          className="size-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg"
          style={{ background: "linear-gradient(135deg, #ffee35, #cc7701)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1l2 5.5L16 8l-6 2L8 16l-2-6L0 8l6-2L8 1Z" fill="#10101e"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-extrabold text-white text-[14px] leading-none">Joystickz</div>
          <div className="text-[10px] text-white/35 mt-0.5 leading-none">Design System</div>
        </div>
        <span className="text-[10px] font-bold text-arcade-brand/60 border border-arcade-brand/20 rounded-full px-1.5 py-0.5 bg-arcade-brand/5 shrink-0">
          v1.0
        </span>
      </Link>

      {/* Search trigger */}
      <div className="px-3 pt-3 pb-2 shrink-0">
        <button
          onClick={openSearch}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/35 hover:text-white/60 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all text-[12px]"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
            <circle cx="6" cy="6" r="3.75" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M9 9l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span className="flex-1 text-left">Search…</span>
          <kbd className="text-[10px] border border-white/[0.08] rounded-md px-1.5 py-0.5 font-mono bg-white/[0.04] text-white/20">⌘K</kbd>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-5 overflow-y-auto">
        {NAV.map(group => (
          <div key={group.title}>
            <div className="flex items-center gap-2 px-3 mb-1.5">
              <div className={`size-1.5 rounded-full shrink-0 ${GROUP_DOTS[group.title] ?? "bg-white/20"}`} />
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest">
                {group.title}
              </p>
            </div>
            <ul className="space-y-0.5">
              {group.items.map(item => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] font-medium transition-all ${
                        isActive
                          ? "bg-arcade-brand/10 text-arcade-brand font-bold border border-arcade-brand/15"
                          : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {isActive && <span className="size-1.5 rounded-full bg-arcade-brand shrink-0" />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t border-white/[0.06] shrink-0 flex items-center justify-between">
        <p className="text-[11px] text-white/20">Joystickz DS v1.0</p>
        <span className="text-[10px] text-white/15">DM Sans · Tailwind v4</span>
      </div>
    </aside>
  );
}

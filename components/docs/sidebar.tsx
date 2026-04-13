"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Overview", href: "/docs" },
      { label: "Design Tokens", href: "/docs/tokens" },
    ],
  },
  {
    title: "Foundation",
    items: [
      { label: "Typography", href: "/docs/components/typography" },
      { label: "Button", href: "/docs/components/button" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Card", href: "/docs/components/card" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "HUD", href: "/docs/components/hud" },
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Menu Item", href: "/docs/components/menu-item" },
      { label: "Filter Chip", href: "/docs/components/filter-chip" },
    ],
  },
  {
    title: "Game Components",
    items: [
      { label: "Lobby Card", href: "/docs/components/lobby-card" },
      { label: "Result Card", href: "/docs/components/result-card" },
    ],
  },
  {
    title: "Form Elements",
    items: [
      { label: "Input Fields", href: "/docs/components/input-field" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { label: "Toast", href: "/docs/components/toast" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] shrink-0 h-screen sticky top-0 flex flex-col bg-arcade-bg-secondary border-r border-white/[0.06] overflow-y-auto">
      {/* Brand */}
      <Link href="/docs" className="flex items-center gap-3 px-6 py-5 border-b border-white/[0.06] shrink-0 hover:opacity-90 transition-opacity">
        <div className="size-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, #ffee35, #cc7701)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1l2 5.5L16 8l-6 2L8 16l-2-6L0 8l6-2L8 1Z" fill="#10101e" />
          </svg>
        </div>
        <div>
          <div className="font-extrabold text-white text-[15px] leading-none">Arcade</div>
          <div className="text-[11px] text-white/40 mt-0.5 leading-none">Design System</div>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-6">
        {NAV.map((group) => (
          <div key={group.title}>
            <p className="px-3 mb-1.5 text-[10px] font-bold text-white/30 uppercase tracking-widest">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                        isActive
                          ? "bg-arcade-brand/10 text-arcade-brand font-bold"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-arcade-brand shrink-0" />
                      )}
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
      <div className="px-6 py-4 border-t border-white/[0.06] shrink-0">
        <p className="text-[11px] text-white/25">Arcade DS v1.0</p>
      </div>
    </aside>
  );
}

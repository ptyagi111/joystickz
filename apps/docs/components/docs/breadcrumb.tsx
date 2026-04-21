"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const GROUPS: Record<string, string> = {
  typography: "Foundation", button: "Foundation", badge: "Foundation", card: "Foundation",
  hud: "Navigation", tabs: "Navigation", "menu-item": "Navigation", "filter-chip": "Navigation",
  "lobby-card": "Game", "result-card": "Game",
  "input-field": "Forms",
  toast: "Feedback",
};

const NAMES: Record<string, string> = {
  typography: "Typography", button: "Button", badge: "Badge", card: "Card",
  hud: "HUD", tabs: "Tabs", "menu-item": "Menu Item", "filter-chip": "Filter Chip",
  "lobby-card": "Lobby Card", "result-card": "Result Card",
  "input-field": "Input Fields",
  toast: "Toast",
};

export function Breadcrumb() {
  const pathname = usePathname();
  if (pathname === "/docs") return null;

  const parts = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; href: string; active?: boolean }[] = [
    { label: "Docs", href: "/docs" },
  ];

  if (pathname === "/docs/tokens") {
    crumbs.push({ label: "Tokens", href: "/docs/tokens", active: true });
  } else if (parts[1] === "components" && parts[2]) {
    const slug = parts[2];
    if (GROUPS[slug]) crumbs.push({ label: GROUPS[slug], href: "/docs" });
    if (NAMES[slug]) crumbs.push({ label: NAMES[slug], href: pathname, active: true });
  }

  return (
    <nav className="flex items-center gap-1.5 mb-8">
      {crumbs.map((c, i) => (
        <span key={c.href} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-white/15 text-[12px]">/</span>}
          {c.active ? (
            <span className="text-[12px] text-white/50">{c.label}</span>
          ) : (
            <Link href={c.href} className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              {c.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

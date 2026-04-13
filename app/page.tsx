"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hud } from "@/components/ui/hud";
import { MenuItem } from "@/components/ui/menu-item";
import { Tab, TabGroup } from "@/components/ui/tabs";
import { LobbyCard } from "@/components/ui/lobby-card";
import { ResultCard } from "@/components/ui/result-card";
import { FilterChip } from "@/components/ui/filter-chip";
import { DateField, CodeField, PhoneField } from "@/components/ui/input-field";
import { Toast } from "@/components/ui/toast";

function TrophyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 4h12v10a6 6 0 0 1-12 0V4Z" stroke="white" strokeWidth="1.5" />
      <path d="M8 8H5a3 3 0 0 0 3 3M20 8h3a3 3 0 0 1-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 20v4M10 24h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 12L14 4L24 12V24H18V18H10V24H4V12Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <Heading as="h2">{title}</Heading>
      {children}
    </section>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeMenu, setActiveMenu] = useState(0);

  const filters = ["All", "Live", "Gems", "SC"];

  return (
    <main className="min-h-screen bg-arcade-bg space-y-16 pb-16">

      {/* ── HUD ──────────────────────────────────────── */}
      <Section title="">
        <div className="bg-arcade-bg-secondary rounded-xl overflow-hidden">
          <Hud gems={500} cash={500} title="Lobby" />
        </div>
        <div className="bg-arcade-bg-secondary rounded-xl overflow-hidden mt-2">
          <Hud gems={1200} cash={800} title="Game" showNav={false} />
        </div>
      </Section>

      <div className="px-12 space-y-16">

        {/* ── Foundation ─────────────────────────────── */}
        <Section title="Buttons">
          <div className="space-y-4">
            {(["primary", "secondary", "tertiary"] as const).map((v) => (
              <div key={v} className="flex flex-wrap items-center gap-4">
                <Button variant={v} size="big">Play Now</Button>
                <Button variant={v} size="medium">Play Now</Button>
                <Button variant={v} size="small">Play Now</Button>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled size="big">Play Now</Button>
              <Button disabled size="medium">Play Now</Button>
              <Button disabled size="small">Play Now</Button>
            </div>
          </div>
        </Section>

        <Section title="Badges">
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="positive">Win</Badge>
            <Badge variant="negative">Loss</Badge>
            <Badge variant="attentive">Warning</Badge>
            <Badge variant="gem">Gem</Badge>
          </div>
        </Section>

        <Section title="Cards">
          <div className="flex flex-wrap gap-4">
            {(["default", "secondary", "tertiary"] as const).map((v) => (
              <Card key={v} variant={v} className="w-56">
                <CardHeader><Heading as="h3">{v}</Heading></CardHeader>
                <CardContent><Text color="secondary">Card content here.</Text></CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── Navigation ─────────────────────────────── */}
        <Section title="Tab Group">
          <TabGroup
            tabs={["Matches", "Leaderboard", "History"]}
            activeIndex={activeTab}
            onChange={setActiveTab}
          />
        </Section>

        <Section title="Menu Items (Bottom Nav)">
          <div className="flex bg-arcade-bg-secondary rounded-xl overflow-hidden">
            {[
              { label: "Home", icon: <HomeIcon /> },
              { label: "Trophies", icon: <TrophyIcon /> },
              { label: "History", icon: <HomeIcon /> },
            ].map(({ label, icon }, i) => (
              <MenuItem
                key={label}
                label={label}
                icon={icon}
                active={i === activeMenu}
                onClick={() => setActiveMenu(i)}
              />
            ))}
          </div>
        </Section>

        <Section title="Filter Chips">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f, i) => (
              <FilterChip
                key={f}
                label={f}
                selected={i === activeFilter}
                onClick={() => setActiveFilter(i)}
              />
            ))}
          </div>
        </Section>

        {/* ── Game components ─────────────────────────── */}
        <Section title="Lobby Cards">
          <div className="space-y-3 max-w-sm">
            <LobbyCard type="gems" name="Blitz Bunch" reward="2" entry="20" players={2} highlighted />
            <LobbyCard type="sc" name="Dominos Gold" reward="5" entry="10" players={4} highlighted />
            <LobbyCard type="gems" name="Speed Round" reward="10" entry="50" players={8} />
          </div>
        </Section>

        <Section title="Result Cards">
          <div className="space-y-3 max-w-sm">
            <ResultCard state="won" gameName="Blitz Bunch" opponent="vs Saloni" entry={15} reward={30} />
            <ResultCard state="tied" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
            <ResultCard state="in progress" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
            <ResultCard state="lost" gameName="Dominos Gold" opponent="vs tbejavi" entry={15} />
          </div>
        </Section>

        {/* ── Input Fields ────────────────────────────── */}
        <Section title="Input Fields">
          <div className="space-y-8 max-w-xs">
            <div>
              <Text size="s" color="tertiary" className="mb-3">Date — active</Text>
              <DateField state="active" />
            </div>
            <div>
              <Text size="s" color="tertiary" className="mb-3">Date — filled</Text>
              <DateField state="filled" value={{ month: "12", day: "14", year: "1990" }} />
            </div>
            <div>
              <Text size="s" color="tertiary" className="mb-3">Phone — active</Text>
              <PhoneField state="active" />
            </div>
            <div>
              <Text size="s" color="tertiary" className="mb-3">Phone — filled</Text>
              <PhoneField state="filled" value="+1 343 345 3958" />
            </div>
            <div>
              <Text size="s" color="tertiary" className="mb-3">OTP Code — active</Text>
              <CodeField length={6} state="active" />
            </div>
            <div>
              <Text size="s" color="tertiary" className="mb-3">OTP Code — filled</Text>
              <CodeField length={6} state="filled" values={["5", "5", "5", "5", "5", "5"]} />
            </div>
          </div>
        </Section>

        {/* ── Toast ───────────────────────────────────── */}
        <Section title="Toast Notifications">
          <div className="space-y-3 max-w-sm">
            <Toast variant="success" message="Successfully joined the game!" />
            <Toast variant="error" message="Failed to connect. Please try again." />
          </div>
        </Section>

      </div>
    </main>
  );
}

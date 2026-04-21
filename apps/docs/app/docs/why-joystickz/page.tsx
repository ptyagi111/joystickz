/* ── Why Joystickz ─────────────────────────────────────────────
   The origin story, philosophy, and legacy of Joystickz DS.
   Presented as a styled narrative — chapter pills, pull-quotes,
   and a values grid. Matches the DS visual language.
─────────────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    icon: "✊",
    title: "Grip",
    desc: "Components that feel natural in any hand.",
    tint: "#ffee35",
  },
  {
    icon: "⚡",
    title: "Response",
    desc: "Interactions that react instantly, never sluggish.",
    tint: "#ea3fb8",
  },
  {
    icon: "🎯",
    title: "Range",
    desc: "Flexible enough to move in any direction.",
    tint: "#14ae5c",
  },
  {
    icon: "🕹️",
    title: "Control",
    desc: "Always the player, never the machine.",
    tint: "#7dd3fc",
  },
];

/* ── Reusable bits ───────────────────────────────────────────── */

function ChapterPill({ num, label, color }: { num: string; label: string; color: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span
        className="inline-flex items-center justify-center size-6 rounded-full text-[10px] font-extrabold"
        style={{ background: `${color}1a`, color, border: `1px solid ${color}33` }}
      >
        {num}
      </span>
      <span
        className="text-[10px] font-extrabold uppercase tracking-widest"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

function Chapter({
  num,
  label,
  color,
  title,
  children,
}: {
  num: string;
  label: string;
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14 scroll-mt-6">
      <ChapterPill num={num} label={label} color={color} />
      <h2 className="text-[1.75rem] font-extrabold text-white tracking-tight leading-tight mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-white/65">
        {children}
      </div>
    </section>
  );
}

function PullQuote({ children, color = "#ffee35" }: { children: React.ReactNode; color?: string }) {
  return (
    <blockquote
      className="my-6 rounded-2xl border p-6"
      style={{
        borderColor: `${color}33`,
        background: `linear-gradient(135deg, ${color}0f, transparent 70%)`,
      }}
    >
      <p
        className="text-[18px] font-bold leading-snug italic"
        style={{ color }}
      >
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function WhyJoystickz() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden mb-12 border border-white/[0.06]"
        style={{
          background: "linear-gradient(135deg, #0f0f28 0%, #1a1035 40%, #0f1f40 100%)",
        }}
      >
        {/* glow blobs */}
        <div
          className="absolute -top-16 -left-16 size-72 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffee35, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -right-16 size-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ea3fb8, transparent 70%)" }}
        />

        <div className="relative px-10 py-14 text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-arcade-brand/10 text-arcade-brand border border-arcade-brand/20">
            🎮 The Story of Joystickz
          </span>

          <h1 className="text-[2.75rem] font-extrabold text-white tracking-tight leading-none mb-4">
            Why Joystickz?
          </h1>
          <p className="text-[16px] text-white/55 max-w-lg mx-auto leading-relaxed">
            A design system is more than tokens and components. It&apos;s a doctrine.
            This is ours.
          </p>
        </div>
      </div>

      {/* ── Chapters ──────────────────────────────────────────── */}

      <Chapter num="01" label="Origin" color="#ffee35" title="🎮 Every great game starts with a single input.">
        <p>
          When the team at Skillz Arcade set out to build their design system, they asked one
          question:
        </p>

        <PullQuote color="#ffee35">
          What is the most honest, most human part of any arcade experience?
        </PullQuote>

        <p>Not the screen. Not the score. Not even the prize.</p>
        <p className="text-white">
          It&apos;s the moment your hand wraps around the joystick.
        </p>
        <p>
          That split second of intention — before the game begins, before you win or lose — where
          skill meets possibility. That&apos;s the feeling they wanted to bottle.
        </p>
        <p className="text-white font-bold">So they built Joystickz DS around it.</p>
      </Chapter>

      <Chapter num="02" label="Philosophy" color="#ea3fb8" title="⚡ A doctrine of control.">
        <p>
          Joystickz DS is not just a design system. Every component, every token, every
          interaction pattern is built around one belief:
        </p>

        <PullQuote color="#ea3fb8">The player is always in control.</PullQuote>

        <p>
          Just like a joystick responds instantly to every micro-movement of your hand — no lag,
          no drift, no guessing — Joystickz DS gives designers and developers that same feeling
          of precision and confidence.
        </p>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 not-prose">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/[0.07] bg-arcade-bg-secondary p-5 hover:border-white/[0.14] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="size-9 rounded-xl flex items-center justify-center text-[18px]"
                  style={{ background: `${p.tint}1a`, border: `1px solid ${p.tint}33` }}
                >
                  {p.icon}
                </div>
                <p className="text-[15px] font-extrabold text-white">{p.title}</p>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter num="03" label="The Name" color="#14ae5c" title="🏆 The &ldquo;z&rdquo; is not a typo. It&apos;s a signature.">
        <p>
          It&apos;s the mark of{" "}
          <span className="text-arcade-brand font-bold">Skillz</span> — a brand built on the
          belief that skill is real, competition is honest, and every player deserves a fair shot
          at winning.
        </p>

        <p>
          The{" "}
          <span className="font-mono text-[14px] px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-white">
            DS
          </span>{" "}
          is a quiet badge of craft. Short for Design System, it tells every designer and engineer
          who opens the Figma file:
        </p>

        <PullQuote color="#14ae5c">
          This was built with intention. This was built to last.
        </PullQuote>

        <p>
          Together, <span className="text-white font-bold">Joystickz DS</span> is the design
          language of a platform where millions of players come to prove themselves.
        </p>
      </Chapter>

      <Chapter num="04" label="Legacy" color="#7dd3fc" title="🌟 Decades from now…">
        <p>
          When someone opens a Skillz Arcade product and feels that instant, frictionless, alive
          quality of the UI — the snap of a button, the glow of a reward, the rush of a
          leaderboard update — they won&apos;t think about the design system behind it.
        </p>

        <p className="text-white text-[18px] font-bold">
          They&apos;ll just feel like they&apos;re winning.
        </p>

        <p className="text-white/40">That&apos;s Joystickz DS.</p>
      </Chapter>

      {/* ── Closing mark ──────────────────────────────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden border border-white/[0.06] mt-8"
        style={{
          background: "linear-gradient(135deg, #0f0f28 0%, #1a1035 100%)",
        }}
      >
        <div className="relative px-10 py-12 text-center">
          <div
            className="size-14 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-xl"
            style={{ background: "linear-gradient(135deg, #ffee35, #cc7701)" }}
          >
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 5.5L16 8l-6 2L8 16l-2-6L0 8l6-2L8 1Z" fill="#10101e" />
            </svg>
          </div>
          <p className="text-[20px] font-extrabold text-white tracking-tight">
            Joystick<span className="text-arcade-brand">z</span> DS
          </p>
          <p className="text-[12px] text-white/35 mt-2 uppercase tracking-widest font-bold">
            Built for the player
          </p>
        </div>
      </div>
    </div>
  );
}

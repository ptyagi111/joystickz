import Link from "next/link";

const entries = [
  {
    href: "/profile",
    label: "Profile",
    description: "Your account and stats",
  },
  {
    href: "/leaderboard",
    label: "Leaderboard",
    description: "Weekly rankings & prize pool",
  },
  {
    href: "/docs",
    label: "Docs",
    description: "Component library & design tokens",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-arcade-bg flex flex-col items-center justify-center px-6">
      <div className="mb-12 text-center space-y-2">
        <h1
          className="text-[3.5rem] font-extrabold tracking-[-0.03em] text-white leading-none"
        >
          Arcade
        </h1>
        <p className="text-[0.875rem] text-[#8484b3]">Choose where to go</p>
      </div>

      <nav className="flex flex-col gap-3 w-full max-w-xs">
        {entries.map(({ href, label, description }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center justify-between rounded-xl bg-[#24243b] px-5 py-4 transition-colors hover:bg-[#32324e]"
          >
            <div>
              <span className="block text-[1rem] font-bold text-white">
                {label}
              </span>
              <span className="block text-[0.75rem] text-[#8484b3] mt-0.5">
                {description}
              </span>
            </div>
            <svg
              className="text-[#8484b3] transition-transform group-hover:translate-x-0.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ))}
      </nav>
    </main>
  );
}

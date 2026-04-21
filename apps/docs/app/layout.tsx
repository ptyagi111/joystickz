import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Joystickz Design System",
  description: "Joystickz DS — the design language of Skillz Arcade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

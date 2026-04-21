import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages so Next.js can consume their raw .ts/.tsx sources.
  transpilePackages: ["@ptyagi111/jsz-web", "@ptyagi111/jsz-tokens"],
};

export default nextConfig;

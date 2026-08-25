import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projektwurzel festnageln, sonst sucht Turbopack im übergeordneten Ordner.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;

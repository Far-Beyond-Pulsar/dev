import type { NextConfig } from "next";

// Served from its own subdomain (dev.pulsarnative.com), so no basePath.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

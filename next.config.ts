import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required by the Dockerfile's runner stage.
  output: 'standalone',
  /* config options here */
  eslint: {
    // Temporarily disable ESLint for builds to fix internal errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

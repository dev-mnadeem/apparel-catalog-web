import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required by the Dockerfile's runner stage.
  output: 'standalone',
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

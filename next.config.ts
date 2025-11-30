import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true }
};

export default nextConfig;
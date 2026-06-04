import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.enterprise-learning.cdn",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      }
    ]
  },
  env: {
    WAKATIME_API_KEY: 'waka_ec86e50f-123f-4687-8b6a-0c39cbef98ec'
  }
};

export default nextConfig;

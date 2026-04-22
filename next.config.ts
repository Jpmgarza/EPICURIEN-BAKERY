import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 85, 90],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbrnjxgzfmhbcgcqawro.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "pbrnjxgzfmhbcgcqawro.supabase.co",
        pathname: "/storage/v1/render/image/public/**",
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);

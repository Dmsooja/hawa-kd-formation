import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "imgix",
    path: "https://images.prismic.io/",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

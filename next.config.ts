import type { NextConfig } from "next";
import writeDecapConfig from "./scripts/write-decap-config";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
  webpack: (
    cfg,
    _ /* { buildId, dev, isServer, defaultLoaders, webpack } */
  ) => {
    writeDecapConfig();
    cfg.module.rules.push({
      test: /\.html$/,
      type: "asset/source",
    });
    return cfg;
  },
  turbopack: {
    rules: {
      "*.html": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
  cacheComponents: true,
  transpilePackages: ["next-mdx-remote"],
  outputFileTracingIncludes: {
    "/blog/**/*": ["cms/**/*"],
  },
} as const satisfies NextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);

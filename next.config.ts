import type { NextConfig } from "next";
import writeDecapConfig from "./scripts/write-decap-config";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  webpack: (cfg, _ /* { buildId, dev, isServer, defaultLoaders, webpack } */) => {
    writeDecapConfig();
    cfg.module.rules.push({
      test: /\.html$/,
      type: 'asset/source',
    });
    return cfg;
  },
  experimental: {
    ppr: true,
    // dynamicIO: true,
    useCache: true, // TODO: issue with dynamicIO, see https://github.com/vercel/next.js/issues/75338
    turbo: {
      rules: {
        '*.html': {
          loaders: ['raw-loader'],
          as: '*.js',
        }
      },
    },
  },
  transpilePackages: ['next-mdx-remote'],
  outputFileTracingIncludes: {
    "/blog/**/*": ["cms/**/*"]
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)


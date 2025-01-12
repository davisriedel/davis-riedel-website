import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  webpack: (cfg, _ /* { buildId, dev, isServer, defaultLoaders, webpack } */) => {
    cfg.module.rules.push({
      test: /\.html$/,
      type: 'asset/source',
    });
    return cfg;
  },
  serverExternalPackages: ["handlebars"],
  experimental: {
    ppr: true,
    dynamicIO: true,
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
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)


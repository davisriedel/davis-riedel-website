import type { NextConfig } from "next";

export default {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  webpack: (cfg, _ /* { buildId, dev, isServer, defaultLoaders, webpack } */) => {
    cfg.module.rules.push({
      test: /\.html$/,
      type: 'asset/source',
    });
    return cfg;
  },
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
} satisfies NextConfig;

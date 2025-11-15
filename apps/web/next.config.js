const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@echoid/core', '@echoid/db', '@echoid/ui'],
  outputFileTracingRoot: path.join(__dirname, '../..'),
  experimental: {
    optimizePackageImports: ['@echoid/ui'],
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

module.exports = nextConfig;

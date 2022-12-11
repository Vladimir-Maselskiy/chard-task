/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
  },
  basePath: '/chard-task',
  assetPrefix: '/chard-task',
};

module.exports = nextConfig;

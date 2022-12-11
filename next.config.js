/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/chard-task/tree/gh-pages',
  assetPrefix: '/chard-task/tree/gh-pages',
};

module.exports = nextConfig;

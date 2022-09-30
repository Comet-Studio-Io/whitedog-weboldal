/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withSvgr(nextConfig);

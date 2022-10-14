/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["localhost"]
  }
}

module.exports = withSvgr(nextConfig);

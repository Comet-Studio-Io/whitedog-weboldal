/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "whitedog-weboldal.vercel.app",
      "whitedog-weboldal.herokuapp.com",
      "res.cloudinary.com"
    ],
  },
};

module.exports = withSvgr(nextConfig);

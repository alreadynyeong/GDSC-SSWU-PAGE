/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/GDSC-SSWU-PAGE",
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig

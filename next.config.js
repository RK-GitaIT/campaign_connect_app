/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  output: "export", // This enables static export automatically
  basePath: '/campaignConnect', // Add base path for campaignConnect
  assetPrefix: '/campaignConnect/', // Add asset prefix to match base path
};

module.exports = nextConfig;

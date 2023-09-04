/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      "localhost",
      "effa-196-188-125-159.ngrok-free.app",
      "https://commercialgraduatesassociation.com",
    ],
  },
};

module.exports = nextConfig;

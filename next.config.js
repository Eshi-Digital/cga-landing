/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "effa-196-188-125-159.ngrok-free.app"],
  },
  i18n: {
    locales: ["en", "am"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;

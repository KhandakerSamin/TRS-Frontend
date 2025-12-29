/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;

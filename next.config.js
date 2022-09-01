/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["http2.mlstatic.com"]
  },
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
  env: {
    API_URL: "http://localhost:8000/api"
  }
}

module.exports = nextConfig

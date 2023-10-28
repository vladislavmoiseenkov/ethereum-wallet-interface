/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ARBITRUM_USDC: process.env.ARBITRUM_USDC,
    ARBITRUM_USDT: process.env.ARBITRUM_USDT,
    ARBITRUM_CRV: process.env.ARBITRUM_CRV,
    POLYGON_USDC: process.env.POLYGON_USDC,
    POLYGON_USDT: process.env.POLYGON_USDT,
    POLYGON_CRV: process.env.POLYGON_CRV,
    ETH_USDC: process.env.ETH_USDC,
    ETH_USDT: process.env.ETH_USDT,
    ETH_CRV: process.env.ETH_CRV,
  }
}

module.exports = nextConfig

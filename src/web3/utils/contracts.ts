export const getTokensAddresses = (chainId: number): Record<string, `0x${string}`> => {
  switch (chainId) {
    case 42161:
      return {
        usdc: process.env.ARBITRUM_USDC as `0x${string}`,
        usdt: process.env.ARBITRUM_USDT as `0x${string}`,
        crv: process.env.ARBITRUM_CRV as `0x${string}`,
      };
    case 137:
      return {
        usdc: process.env.POLYGON_USDC as `0x${string}`,
        usdt: process.env.POLYGON_USDT as `0x${string}`,
        crv: process.env.POLYGON_CRV as `0x${string}`,
      };
    default:
      return {
        usdc: process.env.ERH_USDC as `0x${string}`,
        usdt: process.env.ERH_USDT as `0x${string}`,
        crv: process.env.ERH_CRV as `0x${string}`,
      };
  }
};

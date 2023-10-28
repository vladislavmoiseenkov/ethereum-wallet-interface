import { arbitrum, polygon } from '@wagmi/core/chains';

export const getTokensAddresses = (chainId: number): Record<'usdc' | 'usdt' | 'crv', `0x${string}`> => {
  switch (chainId) {
    case arbitrum.id:
      return {
        usdc: process.env.ARBITRUM_USDC as `0x${string}`,
        usdt: process.env.ARBITRUM_USDT as `0x${string}`,
        crv: process.env.ARBITRUM_CRV as `0x${string}`,
      };
    case polygon.id:
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

export const shortenAddr = (addr: string | undefined, first = 6, last = 4): string | undefined => {
  return addr ? [String(addr).slice(0, first), String(addr).slice(-last)].join('...') : undefined;
}

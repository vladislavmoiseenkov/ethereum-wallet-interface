import { configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { publicProvider } from '@wagmi/core/providers/public';

export const defaultChains = [mainnet, polygon, arbitrum];

const { chains, publicClient } = configureChains(
  defaultChains,
  [publicProvider()],
);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
});

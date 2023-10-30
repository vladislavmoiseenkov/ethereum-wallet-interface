import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react'

import { WagmiConfig } from 'wagmi';

import { WalletContextProvider } from '../src/context/WalletContext';

import { config } from '../src/web3';

import { theme } from '../src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ChakraProvider theme={theme}>
        <WalletContextProvider>
          <Component {...pageProps} />
        </WalletContextProvider>
      </ChakraProvider>
    </WagmiConfig>
  );
}

export default MyApp;

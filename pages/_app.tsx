import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react'

import { WagmiConfig } from 'wagmi';
import { config } from '../src/web3';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiConfig>
  );
}

export default MyApp;

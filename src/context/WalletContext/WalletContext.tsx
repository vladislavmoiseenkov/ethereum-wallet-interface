import { createContext, FC, ReactNode, useCallback, useMemo } from 'react';

import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';

import { chainIds } from '../../web3';

import { UnsupportedChainModal } from '../../components/UnsupportedChainModal';

interface IWalletContext {
  address: string;
  supportedChainIds: number[];
  onConnect: () => Promise<void>;
  onDisconnect: () => Promise<void>;
}

interface ISupportedChainIdsProvider {
  children: ReactNode;
}

const defaultValues: IWalletContext = {
  address: '',
  supportedChainIds: [],
  onConnect: () => Promise.resolve(),
  onDisconnect: () => Promise.resolve(),
}

const WalletContext = createContext(defaultValues);

export const WalletContextProvider: FC<ISupportedChainIdsProvider> = ({ children }) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { connectors, connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();

  const [MetaMaskConnector] = connectors;

  const isUnsupportedChain = useMemo(() => {
    return !chainIds.includes(chain?.id as typeof chainIds[number])
  }, [chain?.id]);

  const handleConnect = useCallback(async () => {
    try {
      await connectAsync({ connector: MetaMaskConnector });
    } catch (e) {
      console.error('Connect err:', e);
    }
  }, [MetaMaskConnector, connectAsync]);

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (e) {
      console.error('Disconnect err:', e);
    }
  }, [disconnectAsync]);

  const value = useMemo(() => ({
    address: address as string,
    supportedChainIds: chainIds,
    onConnect: handleConnect,
    onDisconnect: handleDisconnect,
  }), [address, handleConnect, handleDisconnect]);

  return (
    <WalletContext.Provider value={value}>
      {children}
      {isUnsupportedChain && address && (
        <UnsupportedChainModal onSwitchNetwork={switchNetwork} onClose={() => handleDisconnect()} />
      )}
    </WalletContext.Provider>
  )
};

export default WalletContext;

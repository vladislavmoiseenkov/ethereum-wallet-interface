import { FC, useMemo } from 'react';

import { useAccount, useBalance, useNetwork } from 'wagmi';

import { Box, Flex } from '@chakra-ui/react';

import { getTokensAddresses } from '../web3/utils/contracts';

export const TokenList: FC = () => {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();
  const { data } = useBalance({
    address: address as `0x${string}`,
  });

  const { data: usdcBalance } = useBalance({
    address: address as `0x${string}`,
    token: getTokensAddresses(chain?.id ?? 0).usdc,
  });

  const { data: usdtBalance } = useBalance({
    address: address as `0x${string}`,
    token: getTokensAddresses(chain?.id ?? 0).usdt,
  });

  const { data: crvBalance } = useBalance({
    address: address as `0x${string}`,
    token: getTokensAddresses(chain?.id ?? 0).crv,
  });

  const tokensData = useMemo(() => {
    if (!data && !usdcBalance && !usdtBalance && !crvBalance) {
      return [];
    }

    return [data, usdcBalance, usdtBalance, crvBalance];
  }, [crvBalance, data, usdcBalance, usdtBalance]);

  return (
    <Box>
      <Flex flexDirection={'column'} gap={2}>
        {tokensData.map((tokenData, index) => (
          <Box key={index}>{(tokenData?.formatted ? +tokenData.formatted : 0).toFixed(2)} - {tokenData?.symbol}</Box>
        ))}
      </Flex>
    </Box>
  );
};

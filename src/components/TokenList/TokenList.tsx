import { FC, useMemo } from 'react';

import { useAccount, useBalance, useNetwork } from 'wagmi';

import { Box, Flex } from '@chakra-ui/react';

import { getTokensAddresses } from '../../web3/utils';

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
      <Flex color={'white'} flexDirection={'column'} gap={2}>
        <Flex
          p={3}
          fontWeight={'bold'}
          textAlign={'center'}
          borderBottom={'1px solid'}
          justifyContent={'space-between'}
          borderBottomColor={'gray.900'}
        >
          <Box>Token</Box>
          <Box>Amount</Box>
        </Flex>
        {tokensData.map((tokenData, index) => (
          <Flex
            p={3}
            key={index}
            textAlign={'center'}
            borderBottom={'1px solid'}
            justifyContent={'space-between'}
            borderBottomColor={'gray.900'}
          >
            <Box>{tokenData?.symbol}</Box>
            <Box>{(tokenData?.formatted ? +tokenData.formatted : 0).toFixed(2)}</Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

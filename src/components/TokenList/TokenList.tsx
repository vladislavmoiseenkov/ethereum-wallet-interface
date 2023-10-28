import { FC, useMemo, useState } from 'react';

import { useAccount, useBalance, useNetwork } from 'wagmi';

import { Box, Flex, FormControl, Input } from '@chakra-ui/react';

import { useDebounce } from 'react-use';

import { getTokensAddresses } from '../../web3/utils';

export const TokenList: FC = () => {
  const [val, setVal] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

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

  useDebounce(
    () => {
      setDebouncedValue(val);
    },
    1000,
    [val],
  );

  const tokensData = useMemo(() => {
    if (!data && !usdcBalance && !usdtBalance && !crvBalance) {
      return [];
    }

    return debouncedValue ?
      [data, usdcBalance, usdtBalance, crvBalance]
        .filter(item =>
          (item?.symbol ?? '')
            .toLowerCase()
            .indexOf(debouncedValue.toLowerCase()) > -1)
      :
      [data, usdcBalance, usdtBalance, crvBalance];
  }, [crvBalance, data, debouncedValue, usdcBalance, usdtBalance]);

  return (
    <Box>
      <Flex color={'white'} flexDirection={'column'} gap={2}>
        <Box py={2}>
          <FormControl>
            <Input
              type="search"
              placeholder="Search token..."
              onChange={(e) => setVal(e.target.value)}
            />
          </FormControl>
        </Box>
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

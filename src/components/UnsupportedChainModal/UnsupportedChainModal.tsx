import { FC } from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Button, Flex } from '@chakra-ui/react';

import { defaultChains } from '../../web3';

interface IUnsupportedChainModal {
  onSwitchNetwork?: (chainId: number) => void;
  onClose: () => void;
}

export const UnsupportedChainModal: FC<IUnsupportedChainModal> = ({ onSwitchNetwork, onClose }) => {
  return (
    <Modal isOpen isCentered onClose={() => onClose()}>
      <ModalOverlay sx={{ backdropFilter: 'blur(4px)' }} />
      <ModalContent border="1px solid" borderColor="primaryYellow" bgColor="#0A0C0F">
        <ModalHeader>Unsupported chain id</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          You can use this app only on the following networks:
          <Flex justifyContent="space-between" mt={2}>
            {defaultChains.map((chain, index) => (
              <Button
                key={index}
                variant={'filled'}
                onClick={() => {
                  onSwitchNetwork?.(chain.id);
                }}
              >
                {chain.name}
              </Button>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

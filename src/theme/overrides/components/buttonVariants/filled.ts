import { SystemStyleObject } from '@chakra-ui/react';

export const filled: SystemStyleObject = {
  bg: 'primaryYellow.900',

  _hover: {
    bg: 'secondaryYellow.400',

    _disabled: {
      background: 'secondaryYellow.50',
    },
  },

  _disabled: {
    opacity: 1,
    bg: 'secondaryYellow.50',
  },

  _light: {
    _hover: {
      _disabled: {
        background: 'secondaryYellow.200',
      },
    },

    _disabled: {
      opacity: 1,
      bg: 'secondaryYellow.200',
    },
  },
};

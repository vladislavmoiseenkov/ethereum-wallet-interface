import { ComponentStyleConfig } from '@chakra-ui/react';
import { filled } from './buttonVariants';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '12px',
    color: 'black',
    fontWeight: '700',
    lineHeight: '24px',
    px: '24px',
  },
  sizes: {
    large: {
      fontSize: '16px',
      h: '50px',
      py: '13px',
    },
    medium: {
      fontSize: '14px',
      h: '42px',
      py: '9px',
    },
    small: {
      borderRadius: '10px',
      fontSize: '14px',
      h: '36px',
      p: '6px 20px',
    },
  },
  variants: {
    filled,
  },
  defaultProps: {
    size: 'medium',
    variant: 'filled',
  },
};

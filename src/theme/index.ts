import { DeepPartial, extendTheme, ThemeOverride, theme as defaultTheme } from '@chakra-ui/react';

import * as components from './overrides/components';
import { colors } from './overrides/colors';

const themeConfig: DeepPartial<ThemeOverride> = {
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: props => ({
      body: {
        bg: '#0A0C0F',
        color: '#FFB300',
      }
    })
  },
  components: {
    ...defaultTheme.components,
    ...components,
  },
  colors: {
    ...colors,
  }
}

export const theme = extendTheme(themeConfig, defaultTheme);

import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { defaultTheme } from '../src/shared/lib/theme/defaultTheme';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const decorators = [
  Story => (
    <ThemeProvider theme={defaultTheme}>
      <div className={inter.className}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

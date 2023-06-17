import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async config => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, '../src/app'),
      '@shared': path.resolve(__dirname, '../src/shared'),
      '@entities': path.resolve(__dirname, '../src/entities'),
      '@features': path.resolve(__dirname, '../src/features'),
      '@widgets': path.resolve(__dirname, '../src/widgets'),
    };

    return config;
  },
};

export default config;

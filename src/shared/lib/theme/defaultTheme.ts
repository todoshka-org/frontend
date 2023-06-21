import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: {
      color: '#8A3FFC',
      text: '#FFFFFF',
      border: '#6929C4',
      hover: '#7A37E1',
      active: '#7534D7',
    },
    secondary: {
      color: '#DDE1E6',
      text: '#121619',
      border: '#A2A9B0',
      hover: '#CFD4D9',
      active: '#CACFD4',
    },
    filter: {
      color: '#F2F4F8',
      text: '#121619',
      border: '#DDE1E6',
      hover: '#E6EAEE',
      active: '#E2E6EA',
    },
    ghost: {
      color: 'transparent',
      text: '#697077',
      hover: '#F0F2F3',
      active: '#EBEDEF',
    },
    disabled: { color: '#C1C7CD', text: '#697077', border: '#A2A9B0' },

    grey: {
      0: '#FFFFFF',
      10: '#F2F4F8',
      20: '#DDE1E6',
      30: '#C1C7CD;',
      40: '#A2A9B0',
      50: '#878D96',
      60: '#697077',
      70: '#4D5358',
      80: '#343A3F',
      90: '#21272A',
      100: '#121619',
    },
    purple: {
      10: '#F6F2FF',
      20: '#E8DAFF',
      30: '#D4BBFF',
      40: '#BE95FF',
      50: '#A56EFF',
      60: '#8A3FFC',
      70: '#6929C4',
      80: '#491D8B',
      90: '#31135E',
      100: '#1C0F30',
    },
  },
};

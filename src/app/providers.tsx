'use client';
import { defaultTheme } from '@shared/lib/theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

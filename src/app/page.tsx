'use client';
import { defaultTheme } from '@shared/lib/theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

const Home = () => (
  <ThemeProvider theme={defaultTheme}>
    <main>test</main>
  </ThemeProvider>
);

export default Home;

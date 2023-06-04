import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Nav from '@/components/layout/Nav';
import Bottom from '@/components/layout/Bottom';
import Head from 'next/head';
import { lightTheme, darkTheme, GlobalStyle } from '@/styles/Theme';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <>
      <Head>
        <title>GDSC-SSWU-4th</title>
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} darkMode={theme} />
        <Component {...pageProps} />
        <Bottom />
      </ThemeProvider>
    </>
  );
}

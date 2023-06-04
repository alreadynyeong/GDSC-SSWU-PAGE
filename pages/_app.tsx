import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "@/styles/Theme";
import Nav from "@/components/layout/Nav";
import Bottom from "@/components/layout/Bottom";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light"); // 기본 테마 설정
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // 테마 변경 후 localStorage에 저장
  };

  return (
    <>
      <Head>
        <title>GDSC-SSWU-4th</title>
      </Head>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} darkMode={theme === "dark"} />
        <Component {...pageProps} />
        <Bottom />
      </ThemeProvider>
    </>
  );
}

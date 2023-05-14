import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '@/components/layout/Nav'
import Bottom from '@/components/layout/Bottom'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GDSC-SSWU-4th</title>
      </Head>
      <Nav/>
      <Component {...pageProps}/>
      <Bottom/>
    </>
  )
}

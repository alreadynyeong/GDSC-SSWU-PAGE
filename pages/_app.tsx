import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '@/components/layout/Nav'
import Bottom from '@/components/layout/Bottom'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav/>
      <Component {...pageProps}/>
      <Bottom/>
    </>
  )
}

import Head from 'next/head'
import HomeTop from '@/components/\bhome/HomeTop'
import Nav from '@/components/layout/Nav'
import Bottom from '@/components/layout/Bottom'
import HomeMiddle from '@/components/\bhome/HomeMiddle'
import HomeBottom from '@/components/\bhome/HomeBottom'

export default function Home() {

  return (
    <>
      <Head>
        <title>GDSC-SSWU-4th</title>
        <meta name="description" content="GDSC 성신여자대학교 4기 홈페이지 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeTop/>
        <HomeMiddle/>
        <HomeBottom/>
      </main>
    </>
  )
}

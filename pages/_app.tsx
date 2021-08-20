import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import {useEffect} from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    import('@line/liff').then((liff) => {

      // @ts-ignore
      liff.init({liffId: process.env.PUBLIC_LIFFID}).then(() => {
        /*
        // @ts-ignore
        if(!liff.isLoggedIn()) {
          // @ts-ignore
          liff.login()
        }
        else {
        }*/
      })
    })
  }, [])
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

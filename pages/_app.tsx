import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from "next/router";
import '../styles/global.scss'
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    import('@line/liff').then(liff => {
      liff.init({ liffId: process.env.NEXT_PUBLIC_LIFFID }).then(() => {
        /*if(liff.isLoggedIn()){
          if(router.isReady) router.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/${router.query["liff.state"]}`)
        }*/
      })
    });
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

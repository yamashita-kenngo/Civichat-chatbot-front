import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from "next/router";
import '../styles/global.scss'
import {useEffect, useState} from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [lineId, setLineId] = useState('Loading...');
  useEffect(() => {
    import('@line/liff').then((liff) => {
      // @ts-ignore
      liff.init({liffId: process.env.NEXT_PUBLIC_LIFFID}).then(() => {
        // @ts-ignore
        if(!liff.isLoggedIn()) {
          // @ts-ignore
          //alert(`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`)
          // @ts-ignore
          liff.login({ redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}` })
        }else{
          // @ts-ignore
          liff.getProfile()
            .then((profile: { userId: string}) => {
              setLineId(profile.userId);
            })
        }
      })
    })
  }, [router.asPath])
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
      <Component {...pageProps} lineId={lineId} />
    </>
  )
}

export default MyApp

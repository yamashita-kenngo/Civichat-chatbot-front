import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);
  const router = useRouter();

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then((liff) => {
      console.log("start liff.init()...");
      liff
      // @ts-ignore
      .init({ liffId: process.env.NEXT_PUBLIC_LIFFID })
      .then(() => {
        console.log("liff.init() done");
        // @ts-ignore
        if (!liff.isLoggedIn()) {
          // @ts-ignore
            liff.login({ redirectUri: process.env.NEXT_PUBLIC_BASE_URL+router.asPath });
          }
          // @ts-ignore
          setLiffObject(liff);
        })
        // @ts-ignore
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          if(!process.env.NEXT_PUBLIC_LIFFID) console.info("LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.");
          setLiffError(error.toString());
        });
    });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
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

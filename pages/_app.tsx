import Head from 'next/head';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>chungguo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, maximum-scale=1, minimum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
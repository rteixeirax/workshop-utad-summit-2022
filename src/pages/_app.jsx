import Head from 'next/head'

import { StudentsContextProvider } from '../context/StudentsContextProvider';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React workshop | Utad Summit 2022</title>
        <meta name="description" content="React workshop 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StudentsContextProvider>
        <Component {...pageProps} />
      </StudentsContextProvider>
    </>
  );
}

export default MyApp

import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next site</title>
    </Head>
    <Component {...pageProps}/>
  </>
)

export default App
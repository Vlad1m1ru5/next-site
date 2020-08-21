import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Link from 'next/link'
import Main from 'components/main'
import Header from 'components/header'
import Footer from 'components/footer'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next site</title>
    </Head>
    <Header>
      Вы на портале документации. <Link href='/'>Домой</Link>?
    </Header>
    <Main>
      <Component {...pageProps}/>
    </Main>
    <Footer>

    </Footer>
  </>
)

export default App
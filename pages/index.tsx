import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { GetStaticProps } from 'next'

const IndexPage: React.FunctionComponent = () => (
  <>
    <Header />
    Hello its me
    <Footer />
  </>
)

export const getStaticProps: GetStaticProps = async () => ({ props: {} })

export default IndexPage

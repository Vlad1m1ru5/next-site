import React from 'react'
import Header from 'layouts/header'
import Footer from 'layouts/footer'
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

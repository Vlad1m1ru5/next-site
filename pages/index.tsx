import React from 'react'
import { GetStaticProps } from 'next'

const IndexPage: React.FunctionComponent = () => (
  <>
    I see dead people
  </>
)

export const getStaticProps: GetStaticProps = async () => ({ props: {} })

export default IndexPage

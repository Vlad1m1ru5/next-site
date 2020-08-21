import React from 'react'
import { GetStaticProps } from 'next'

const Footer: React.FunctionComponent = () => (
  <footer>
    <h2>Footer</h2>
  </footer>
)

export const getStaticProps: GetStaticProps = async () => {
  
  
  return {
    props: {}
  }
}

export default Footer

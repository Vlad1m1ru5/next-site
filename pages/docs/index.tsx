import React from 'react'
import { GetStaticProps } from 'next'
import { findAllServices } from 'api/services'

interface IProps {
  services: Service[]
}

const PostsPage: React.FunctionComponent<IProps> = ({ services }) => (
  <main>
    <h2>Posts Page</h2>
    {services.map(({ name, path }, index) => <p key={index}>{name}&nbsp;{path}</p>)}
  </main>
)

export const getStaticProps: GetStaticProps = async () => {
  const services = await findAllServices()

  return {
    props: {
      services
    }
  }
}

export default PostsPage

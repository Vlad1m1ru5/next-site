import React from 'react'
import { GetStaticProps } from 'next'
import { getAllPagesInfo } from 'utils/api'

interface IProps {
  files: PageInfo[]
}

const PostsPage: React.FunctionComponent<IProps> = ({ files }) => (
  <main>
    <h2>Posts Page</h2>
    {files
      .map(({ name }) => name)
      .map((name, index) => <p key={index}>{name}</p>)
    }
  </main>
)

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllPagesInfo('./node_modules/')

  return {
    props: {
      files
    }
  }
}

export default PostsPage

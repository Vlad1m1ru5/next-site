import React from 'react'
import { GetStaticProps } from 'next'
import { getFiles } from 'utils/api'

interface IProps {
  files: Post[]
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
  const files = await getFiles('./_pages/')

  return {
    props: {
      files
    }
  }
}

export default PostsPage

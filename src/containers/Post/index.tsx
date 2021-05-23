import { PostData } from '../../domain/posts/post'

import { Header } from '../../components/Header'
import { MainContainer } from '../../components/MainContainer'
import { Footer } from '../../components/Footer'
import { Heading } from '../../components/Heading'

export type PostProps = {
  post: PostData
}

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      <Footer />
    </>
  )
}

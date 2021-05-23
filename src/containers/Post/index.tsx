import { PostData } from '../../domain/posts/post'

import { Header } from '../../components/Header'
import { MainContainer } from '../../components/MainContainer'
import { Footer } from '../../components/Footer'
import { Heading } from '../../components/Heading'
import { PostCover } from '../../components/PostCover'

export type PostProps = {
  post: PostData
}

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.medium.url} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      <Footer />
    </>
  )
}

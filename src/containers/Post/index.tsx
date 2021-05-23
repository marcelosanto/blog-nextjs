import { PostData } from '../../domain/posts/post'

import { Header } from '../../components/Header'
import { MainContainer } from '../../components/MainContainer'
import { Footer } from '../../components/Footer'
import { Heading } from '../../components/Heading'
import { PostCover } from '../../components/PostCover'
import { PostDetails } from '../../components/PostDetails'

export type PostProps = {
  post: PostData
}

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.small?.url} alt={post.title} />
        <PostDetails
          author={post.author?.name}
          category={post.category?.name}
          date={post.created_at}
        />

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      <Footer />
    </>
  )
}

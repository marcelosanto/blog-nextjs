import { PostData } from '../../domain/posts/post'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { MainContainer } from '../../components/MainContainer'
import { Footer } from '../../components/Footer'
import { Heading } from '../../components/Heading'
import { PostCover } from '../../components/PostCover'
import { PostDetails } from '../../components/PostDetails'
import { PostContainer } from '../../components/PostContainer'
import { Comments } from '../../components/Comments'
import { SITE_NAME } from '../../config/app-config'
import { removeHtml } from '../../utils/remove-html'

export type PostProps = {
  post: PostData
}

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.small?.url} alt={post.title} />
        <PostDetails
          author={post.author?.name}
          category={post.category?.name}
          date={post.created_at}
        />

        <PostContainer content={post.content} />
        <Comments slug={post.slug} title={post.title} />
      </MainContainer>

      <Footer />
    </>
  )
}

import { Header } from '../../components/Header'
import { PostData } from '../../domain/posts/post'
import { Container } from './style'

export type HomePageProps = {
  posts: PostData[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <>
            <img src={post.cover.url} alt="" />
            <h2 key={post.slug}>{post.title}</h2>
          </>
        ))}
      </Container>
    </>
  )
}

import { PostData } from '../../domain/posts/post'
import { Container } from './style'

export type HomePageProps = {
  posts: PostData[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </Container>
  )
}

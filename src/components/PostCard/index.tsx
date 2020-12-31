import Link from 'next/link'
import { Container, PostCardCover, PostCardHeading } from './styled'

export const PostCard = () => {
  return (
    <Container>
      <PostCardCover></PostCardCover>
      <PostCardHeading></PostCardHeading>
    </Container>
  )
}

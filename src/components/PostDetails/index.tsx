import Link from 'next/link'
import { Date } from '../Date'
import { Container } from './styled'

export type PostDetailsProps = {
  date: string
  author: string
  category: string
}

export const PostDetails = ({ author, date, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{'  '}
      <Link href={`/categories/${category.toLowerCase()}`}>{category}</Link>
    </Container>
  )
}

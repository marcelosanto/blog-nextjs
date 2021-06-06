import { GetServerSideProps } from 'next'
import { getAllPosts } from '../../data/posts/get-all-posts'
import { PostData } from '../../domain/posts/post'
import HomePage from '../../containers/HomePage'

export type CategoryProps = {
  posts: PostData[]
}

export default function Category({ posts }: CategoryProps) {
  return <HomePage posts={posts} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`,
  )

  return {
    props: { posts },
  }
}
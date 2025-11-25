import { getBlogPosts } from 'app/blog/utils'
import DisplayPostsList from './displayPostsList'

export function BlogPostsList() {
  let allBlogs = getBlogPosts()

  return (
    <DisplayPostsList allBlogs={allBlogs} />
  )
}

import { getBlogPosts } from 'app/blog/utils'
import DisplayPosts from './displayPosts'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <DisplayPosts allBlogs={allBlogs} />
  )
}

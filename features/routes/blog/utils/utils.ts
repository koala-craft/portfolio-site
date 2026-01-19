import path from 'path'
import { getMDXData, BlogMetadata } from 'features/common/utils/mdx'

export { formatDate } from 'features/common/utils/formatDate'

export function getBlogPosts() {
  return getMDXData<BlogMetadata>(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

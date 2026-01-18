import path from 'path'
import { getMDXData, WorkMetadata } from 'features/common/utils/mdx'

export { formatDate } from 'features/common/utils/formatDate'

export function getWorkPosts() {
  return getMDXData<WorkMetadata>(path.join(process.cwd(), 'app', 'work', 'posts'))
}

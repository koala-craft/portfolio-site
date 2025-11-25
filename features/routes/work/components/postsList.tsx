import { getWorkPosts } from 'app/work/utils'
import DisplayPostsList from './displayPostsList'

export function WorkPostsList() {
  let allWorks = getWorkPosts()

  return (
    <DisplayPostsList allWorks={allWorks} />
  )
}

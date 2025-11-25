import { getWorkPosts } from 'app/work/utils'
import DisplayPosts from './displayPosts'

export function WorkPosts() {
  let allWorks = getWorkPosts()

  return (
    <DisplayPosts allWorks={allWorks} />
  )
}

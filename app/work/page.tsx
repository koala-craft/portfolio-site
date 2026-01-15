import DisplayWorkPostList from 'features/routes/work/components/displayWorkPostsList'
import { getWorkPosts } from '../../features/routes/work/utils/utils';

export const metadata = {
  title: '制作物一覧 -コアラ工房-',
  description: '制作物一覧ページ.',
}

export default function Page() {
  const allWorks = getWorkPosts();
  return (
    <>
      <section className='z-20'>
        <DisplayWorkPostList allWorks={allWorks} />
      </section>
    </>

  )
}

import DisplayPostList from 'features/routes/work/components/displayWorkPostsList'
import { getWorkPosts } from '../../features/routes/work/utils/utils';
import { PgIconsBg } from 'features/common/components/pgIconsBg';

export const metadata = {
  title: '制作物一覧 -木乃宮 ダイ-',
  description: '制作物一覧ページ.',
}

export default function Page() {
  const allWorks = getWorkPosts();
  return (
    <>
      <section className='z-20'>
        <DisplayPostList allWorks={allWorks} />
      </section>
    </>

  )
}

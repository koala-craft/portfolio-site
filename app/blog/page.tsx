import { PgIconsBg } from 'features/common/components/pgIconsBg';
import DisplayPostsList from 'features/routes/blog/components/displayBlogPostsList'
import { getBlogPosts } from 'features/routes/blog/utils/utils'

export const metadata = {
  title: 'ブログ一覧 -木乃宮 ダイ-',
  description: 'ブログ一覧ページ.',
}

export default function Page() {
  const allBlogs = getBlogPosts();
  return (

    <>
      <section className='z-20'>
        <DisplayPostsList allBlogs={allBlogs} />
      </section>
      <PgIconsBg />
    </>
  )
}

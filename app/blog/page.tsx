import { BlogPostsList } from 'features/routes/blog/components/postsList'

export const metadata = {
  title: 'ブログ一覧 -木乃宮 ダイ-',
  description: 'ブログ一覧ページ.',
}

export default function Page() {
  return (
    <section>
      <BlogPostsList />
    </section>
  )
}

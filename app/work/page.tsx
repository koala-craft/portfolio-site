import { WorkPostsList } from 'features/routes/work/components/postsList'

export const metadata = {
  title: '制作物一覧 -木乃宮 ダイ-',
  description: '制作物一覧ページ.',
}

export default function Page() {
  return (
    <section>
      <WorkPostsList />
    </section>
  )
}

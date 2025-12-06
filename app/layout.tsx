import '@splidejs/react-splide/css'
import './global.css'
import type { Metadata } from 'next'
import { Navbar } from '../features/common/components/header'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Footer from '../features/common/components/footer'
import { baseUrl } from './sitemap'
import { cx } from './utils/classnames'
import { ThemeProvider } from 'next-themes'
import { Noto_Sans_JP } from 'next/font/google'
import clsx from 'clsx';
import { SpNavButton } from 'features/common/components/spNavButton'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '木乃宮 ダイ | Front/Back end Engineer',
    template: '%s | 木宮大ポートフォリオ',
  },
  description: "木乃宮 ダイのポートフォリオサイトです。フロントエンド・バックエンド開発の制作実績や技術記事を掲載しています。",
  openGraph: {
    title: '木乃宮 ダイ | ポートフォリオ',
    description: 'フロントエンド／バックエンドエンジニア 木乃宮 ダイのポートフォリオサイト。',
    url: baseUrl,
    siteName: '木乃宮 ダイ | ポートフォリオ',
    locale: 'ja-JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800', '900'], // 使うウェイトだけ指定
  preload: true,  // パフォーマンス向上
  display: 'swap', // 読み込み中は代替フォント表示
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={cx(
        'box-border text-pf-text bg-pf-bg dark:text-pf-text-dark dark:bg-pf-bg-dark transition-colors duration-800 ease-in-out',
        '[&_ *]:duration-initial w-full',
      )}
    >
      <body className={clsx("antialiased lg:mx-auto w-full relative",
        noto.className)}>
        <ThemeProvider
          defaultTheme="system"
          enableSystem={true}>
          <Navbar />
          <main className="relative flex-auto min-w-0 flex flex-col">
            {children}
          </main>
          <Footer />
          <SpNavButton />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

import '@splidejs/react-splide/css'
import './global.css'
import type { Metadata } from 'next'
import { Navbar } from '../features/common/components/nav'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Footer from '../features/common/components/footer'
import { baseUrl } from './sitemap'
import { cx } from './utils/classnames'
import { ThemeProvider } from 'next-themes'
import { Noto_Sans_JP } from 'next/font/google'
import clsx from 'clsx';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Kinomiya Dai | Front/Back end Engineer',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
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
          <main className="flex-auto min-w-0 flex flex-col">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

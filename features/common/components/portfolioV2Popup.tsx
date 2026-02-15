'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { PORTFOLIO_V2_URL } from 'features/common/constants/portfolioV2'

const STORAGE_KEY = 'portfolio-v2-popup-dismissed'
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000 // 24時間
const SHOW_DELAY_MS = 2000 // ページ読み込み後2秒で表示

export function PortfolioV2Popup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissedAt = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    const shouldShow = !dismissedAt || Date.now() - Number(dismissedAt) > DISMISS_DURATION_MS

    if (!shouldShow) return

    const timer = setTimeout(() => setIsVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    }
  }

  const handleVisit = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    }
    window.open(PORTFOLIO_V2_URL, '_blank', 'noopener,noreferrer')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* ポップアップ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[min(90vw,400px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-glow bg-pf-surface dark:bg-pf-surface-dark border border-pf-ui-border dark:border-pf-ui-border-dark">
              {/* 装飾バー */}
              <div className="h-1 bg-gradient-to-r from-pf-accent via-purple-500 to-pf-accent" />

              <div className="p-6">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-lg text-pf-muted dark:text-pf-muted-dark hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10 hover:text-pf-accent dark:hover:text-pf-accent-dark transition-colors"
                  aria-label="閉じる"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-pf-accent/10 dark:bg-pf-accent-dark/10">
                    <HiOutlineSparkles className="w-6 h-6 text-pf-accent dark:text-pf-accent-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-pf-text dark:text-pf-text-dark">
                    ポートフォリオ第二弾ができました！
                  </h3>
                </div>

                <p className="text-pf-muted dark:text-pf-muted-dark text-sm leading-relaxed mb-6">
                  より洗練されたデザインと新しいコンテンツでお届けする第二弾のポートフォリオサイトが公開されました。ぜひご覧ください。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={PORTFOLIO_V2_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleVisit}
                    className="btn-primary text-center py-3 px-6 text-sm"
                  >
                    第二弾を見る
                  </a>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 rounded-full text-sm font-medium text-pf-muted dark:text-pf-muted-dark hover:text-pf-text dark:hover:text-pf-text-dark hover:bg-pf-accent/5 dark:hover:bg-pf-accent-dark/5 transition-colors"
                  >
                    あとで
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

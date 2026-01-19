import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { SiZenn } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="relative border-t border-pf-ui-border dark:border-pf-ui-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col tab:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center tab:items-start gap-2">
            <Link href="/" className="font-bold text-lg text-pf-text dark:text-pf-text-dark hover:text-pf-accent dark:hover:text-pf-accent-dark transition-colors">
              コアラ工房
            </Link>
            <p className="text-sm text-pf-muted dark:text-pf-muted-dark">
              Front / Back end Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/koala-craft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-pf-muted dark:text-pf-muted-dark hover:text-pf-accent dark:hover:text-pf-accent-dark hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10 transition-all"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://zenn.dev/koala_craft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-pf-muted dark:text-pf-muted-dark hover:text-pf-accent dark:hover:text-pf-accent-dark hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10 transition-all"
            >
              <SiZenn className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-pf-ui-border/50 dark:border-pf-ui-border-dark/50">
          <p className="text-sm text-pf-muted dark:text-pf-muted-dark text-center">
            © {new Date().getFullYear()} koala.craft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

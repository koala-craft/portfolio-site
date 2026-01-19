"use client"
import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { cx } from 'features/common/utils/classnames'
import { navItems } from 'features/common/constants/navItems'
import { useHeaderVisibility } from 'features/common/hooks/useHeaderVisibility'

export function Navbar() {
  const isHeaderShown = useHeaderVisibility(80);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={clsx(
        'fixed h-16 w-full z-50',
        'glass border-b border-pf-ui-border/50 dark:border-pf-ui-border-dark/50',
        'transition-all duration-300',
        isHeaderShown ? 'top-0 left-0 opacity-100' : '-top-16 opacity-0'
      )}>
        <nav
          className="flex flex-row justify-between items-center h-full max-w-7xl mx-auto px-4 tab:px-8"
          id="nav"
        >
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="relative">
              <div className="absolute inset-0 bg-pf-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image src="/favicon.svg" alt="サイトアイコン" width={32} height={32} className="relative" />
            </div>
            <h1 className="font-bold text-lg text-pf-text dark:text-pf-text-dark group-hover:text-pf-accent dark:group-hover:text-pf-accent-dark transition-colors">
              コアラ工房
            </h1>
          </Link>
          
          <div className="flex flex-row items-center gap-2">
            <ul className="hidden tab:flex items-center gap-1">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <li key={path}>
                    <Link
                      href={path}
                      className={cx(
                        "px-4 py-2 rounded-full text-sm font-medium",
                        "text-pf-text dark:text-pf-text-dark",
                        "hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10",
                        "hover:text-pf-accent dark:hover:text-pf-accent-dark",
                        "transition-all duration-200"
                      )}
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="ml-2">
              <DarkModeToggle />
            </div>
            <button
              className="tab:hidden p-2 ml-1 rounded-lg text-pf-text dark:text-pf-text-dark hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニューを開く"
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 z-40 tab:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={clsx(
          'fixed top-16 right-0 bottom-0 w-72 z-40 tab:hidden',
          'bg-pf-bg dark:bg-pf-bg-dark',
          'border-l border-pf-ui-border dark:border-pf-ui-border-dark',
          'transform transition-transform duration-300 ease-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-6">
          <ul className="space-y-2">
            {Object.entries(navItems).map(([path, { name }]) => (
              <li key={path}>
                <Link
                  href={path}
                  onClick={closeMobileMenu}
                  className={cx(
                    "block px-4 py-3 rounded-xl text-lg font-medium",
                    "text-pf-text dark:text-pf-text-dark",
                    "hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10",
                    "hover:text-pf-accent dark:hover:text-pf-accent-dark",
                    "transition-all duration-200"
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-8 border-t border-pf-ui-border dark:border-pf-ui-border-dark">
            <p className="text-sm text-pf-muted dark:text-pf-muted-dark mb-4">
              Front / Back end Engineer
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/koara-craft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pf-muted dark:text-pf-muted-dark hover:text-pf-accent dark:hover:text-pf-accent-dark transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://zenn.dev/koara_craft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pf-muted dark:text-pf-muted-dark hover:text-pf-accent dark:hover:text-pf-accent-dark transition-colors"
              >
                Zenn
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="h-16" />
    </>
  )
}

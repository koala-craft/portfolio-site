"use client"
import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'
import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

const navItems = {
  '/about': {
    name: 'About',
  },
  '/work': {
    name: 'Works',
  },
  '/blog': {
    name: 'Blog',
  },
}
const cx = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')

export function Navbar() {
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 80;

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderShown(false);
    } else {
      setIsHeaderShown(true);
    }

    if (offset < lastPosition) {
      setIsHeaderShown(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

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
          <Link href="/" className="flex items-center gap-3 group">
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
          </div>
        </nav>
      </header>
      <div className="h-16" />
    </>
  )
}

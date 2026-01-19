"use client"
import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'
import clsx from 'clsx'
import Image from 'next/image'
import { cx } from 'features/common/utils/classnames'
import { navItems } from 'features/common/constants/navItems'
import { useHeaderVisibility } from 'features/common/hooks/useHeaderVisibility'

export function Navbar() {
  const isHeaderShown = useHeaderVisibility(80);

  return (
    <>
      <header className={clsx('fixed h-14 w-full bg-pf-bg dark:bg-pf-bg-dark z-50',
        'transition-all duration-800',
        isHeaderShown ? `top-0 left-0 opacity-100` : `-top-14 opacity-0`
      )}>
        <nav
          className={cx(
            "flex flex-row justify-between items-center",
            "relative md:relative",
            "pr-4 pl-3 pb-0",
            "tab:pr-12 sm:pl-10",
            "border-b border-pf-ui-border dark:border-pf-ui-border-dark")}
          id="nav"
        >
          <Link href="/" className='flex items-center'>
            <Image src="/favicon.svg" alt="サイトアイコン" width={24} height={24} />
            <h1 className='px-2 font-bold leading-14'>コアラ工房</h1>
          </Link>
          <div className={cx("flex flex-row items-center justify-end")}>
            <ul className={cx("hidden flex-row items-center justify-start space-x-0 mr-8",
              "tab:flex"
            )}>
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <li key={path}>
                    <Link
                      href={path}
                      className={cx("h-full text-underline-animate transition-all hover:opacity-75 flex align-middle relative py-1 px-2 m-1",
                      )}
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <DarkModeToggle />
            <button className='hidden fixed w-8 h-8' />
          </div>
        </nav >
      </header>
      <div className='h-14'>
      </div>
    </>
  )
}

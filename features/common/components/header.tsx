"use client"
import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'
import { PiNavigationArrowFill } from 'react-icons/pi'
import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'

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
const cx = (...classes) => classes.filter(Boolean).join(' ')

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
      <header className={clsx('fixed h-14 w-full bg-pf-bg dark:bg-pf-bg-dark z-50',
        'transition-all duration-800',
        isHeaderShown ? `top-0 left-0 opacity-100` : `-top-14 opacity-0`
      )}>
        <nav
          className={cx(
            "flex flex-row justify-between items-center",
            "relative md:relative",
            "pr-4 pl-3 pb-0",
            "sm:pr-12 sm:pl-10",
            "border-b border-pf-ui-border dark:border-pf-ui-border-dark")}
          id="nav"
        >
          <Link href="/">
            <h1 className='px-2 font-bold leading-14'>Kinomiya Dai</h1>
          </Link>
          <div className={cx("flex flex-row items-center justify-end")}>
            <ul className={cx("hidden flex-row items-center justify-start space-x-0 mr-8",
              "sm:flex"
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

      <button className='fixed bottom-4 right-4 z-50 w-10 h-10 cursor-pointer
                         rounded-full  bg-pf-bg shadow-2xl
                         border border-pf-text/10
                         '>
        <div className='flex items-center justify-center'>
          <PiNavigationArrowFill className='fill-pf-slider-ui w-4 h-4' />
        </div>
      </button>
    </>
  )
}

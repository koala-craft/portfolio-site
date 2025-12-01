import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'
import { PiNavigationArrowFill } from 'react-icons/pi'

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
  return (
    <>
      <nav
        className={cx(
          "flex flex-row justify-between items-center",
          "relative md:relative",
          "h-14 pr-4 pl-3 pb-0",
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

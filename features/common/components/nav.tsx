import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'

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
          <div className={cx("hidden flex-row items-center justify-start space-x-0 mr-8",
            "sm:flex"
          )}>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={cx("text-underline-animate transition-all hover:opacity-75 flex align-middle relative py-1 px-2 m-1",
                  )}
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <DarkModeToggle />
          <button className='hidden fixed w-8 h-8' />
        </div>
      </nav >

      <button className='fixed bottom-5 right-5 w-8 h-8 border z-50'>

      </button>
    </>
  )
}

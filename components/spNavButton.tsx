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
      <button className=''></button>
      {/* ナビゲーションエリア */}
      <div>
        <ul>
          <Link href="/">
            <li className='px-2 font-bold leading-14'>Home</li>
          </Link>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cx("text-underline-animate transition-all hover:opacity-75 flex align-middle relative py-1 px-2 m-1",
                )}
              >
                <li>{name}</li>
              </Link>
            )
          })}
        </ul>

      </div>
    </>
  )
}

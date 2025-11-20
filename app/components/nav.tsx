import Link from 'next/link'

const navItems = {
  '/': {
    name: 'About',
  },
  '/works': {
    name: 'works',
  },
  '/blog': {
    name: 'blog',
  },
}
const cx = (...classes) => classes.filter(Boolean).join(' ')

export function Navbar() {
  return (
    <nav
      className={cx(
        "flex flex-row justify-between items-center",
        "relative md:relative",
        "h-14 pl-10 pr-12 pb-0",
        "border border-b border-pf-ui-border")}
      id="nav"
    >
      <Link href="/">
        <h1 className='px-2 font-bold leading-14'>Kinomiya Dai</h1>
      </Link>
      <div className={cx("flex flex-row justify-end space-x-0")}>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className={cx("text-underline-animate transition-all hover:opacity-75 flex align-middle relative py-1 px-2 m-1",
                // "dark:hover:text-neutral-200"
              )}
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav >
  )
}

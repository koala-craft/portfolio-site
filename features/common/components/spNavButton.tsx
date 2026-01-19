"use client"
import Link from 'next/link'
import { PiNavigationArrowFill } from 'react-icons/pi'
import { useCallback, useRef, useState } from 'react';
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { navItems } from 'features/common/constants/navItems'
import { useClickOutside } from 'features/common/hooks/useClickOutside'

export function SpNavButton() {
  const [subNavShown, setSubNavShown] = useState<Boolean>(false);
  const nowPathName = usePathname();
  const linkListRef = useRef<HTMLUListElement>(null);
  const excludeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = useCallback(() => {
    setSubNavShown(false);
  }, []);

  useClickOutside(linkListRef, excludeButtonRef, handleClickOutside);

  return (
    <>
      <div className='fixed bottom-8 right-8 w-14 h-14 z-50'>
        <div className='relative h-full'>
          <button className='w-full h-full cursor-pointer
                             block tab:hidden
                             rounded-full bg-pf-bg shadow-lg dark:bg-pf-bg-dark
                             border border-pf-text/10 dark:border-pf-text-dark/10
                             active:scale-95 active:translate-y-px active:shadow-md dark:shadow-pf-text-dark/10
                             transition:all duration-200 ease-in-out
                             '
            ref={excludeButtonRef}
            onClick={() => setSubNavShown(prev => !prev)}>
            <div className='flex w-full h-full items-center justify-center'>
              <PiNavigationArrowFill className='fill-pf-slider-ui w-5 h-5 dark:fill-pf-slider-ui-dark' />
            </div>
          </button>
          {/* ナビゲーションエリア */}
          <ul className={clsx("absolute -left-4 bottom-full pb-6",
            "flex flex-col justify-center gap-2",
            "transition-all duration-500",
            "tab:hidden",
            subNavShown ? "opacity-100" : "opacity-0 pointer-events-none")}
            ref={linkListRef}>
            <Link href="/"
              className={clsx("py-2 m-1",
                "flex justify-center",
                "bg-pf-bg dark:bg-pf-bg-dark rounded-2xl shadow-md dark:border dark:border-pf-text-dark/10 dark:shadow-pf-text-dark/20",
                "transition-all duration-500",
                "active:scale-95 active:bg-pf-slider-ui active:text-pf-bg",
                nowPathName == "/" && "text-pf-bg bg-pf-slider-ui dark:text-pf-bg-dark dark:bg-pf-slider-ui-dark")}>
              <li className='font-bold leading-14 px-4' > Home</li>
            </Link>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx("py-2 m-1",
                    "flex justify-center",
                    "bg-pf-bg dark:bg-pf-bg-dark rounded-2xl shadow-md dark:border dark:border-pf-text-dark/10 dark:shadow-pf-text-dark/20",
                    "transition-all duration-500",
                    "active:scale-95 active:bg-pf-slider-ui active:text-pf-bg dark:active:bg-pf-slider-ui-dark",
                    nowPathName == path && "text-pf-bg bg-pf-slider-ui dark:text-pf-bg-dark dark:bg-pf-slider-ui-dark")}>
                  <li className='font-bold leading-14 px-4'>{name}</li>
                </Link>
              )
            })}
          </ul>
        </div >
      </div >
    </>
  )
}

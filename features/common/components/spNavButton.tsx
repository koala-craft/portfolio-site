"use client"
import Link from 'next/link'
import { PiNavigationArrowFill } from 'react-icons/pi'
import { useEffect, useRef, useState } from 'react';
import { usePathname } from "next/navigation";
import clsx from 'clsx';

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

export function SpNavButton() {
  const [subNavShown, setSubNavShown] = useState<Boolean>(false);
  const nowPathName = usePathname();
  const linkListRef = useRef<HTMLUListElement>(null);
  const excluedButtonRef = useRef<HTMLButtonElement>(null);
  console.log(subNavShown)

  useEffect(() => {
    //対象の要素を取得
    const tg = linkListRef.current;

    //対象の要素がなければ何もしない
    if (!tg) return;

    //クリックした時に実行する関数
    const hundleClickOutside = (e: MouseEvent) => {
      if (!tg?.contains(e.target as Node)) {
        // ボタン押下は何もしない。
        if (excluedButtonRef.current?.contains(e.target as Node)) return;
        //ここに外側をクリックしたときの処理
        setSubNavShown(false);
      }
    };

    //クリックイベントを設定
    document.addEventListener("click", hundleClickOutside);

    //クリーンアップ関数
    return () => {
      //コンポーネントがアンマウント、再レンダリングされたときにクリックイベントを削除
      document.removeEventListener("click", hundleClickOutside);
    };
  }, [linkListRef]);

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
            ref={excluedButtonRef}
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

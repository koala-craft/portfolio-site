import { cx } from "app/utils/classnames";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Mylogo from '../../../common/components/svgs/undraw-man-light'
``
export function DisplayMv() {
  return (
    <>
      <section className='min-h-screen flex flex-col justify-around z-20'>
        <div className="h-full min-h-full px-6 mt-8
                        tab:min-w-2xl
                        tab:flex tab:items-center tab:justify-center
                        pc:min-w-4xl pc:px-0
        ">
          <div className="max-w-[420px] m-auto tab:w-auto tab:max-w-none pc:w-auto tab:m-0">
            <p className='mb-2'>はじめまして、私は</p>
            <h1 className='mb-1
                           text-2xl font-semibold
                           pc:mb-3 pc:text-5xl pc:font-bold
                           '>
              koala.craft (コアラ工房)
            </h1>
            <p className='
                          mb-8
                          pc:text-2xl
                         '>Front / Back end Engineer</p>
            <div className="tab:hidden mb-8 w-full">
              <Mylogo className="w-full" />
            </div>
            <p className='mb-3'>Webアプリの設計と実装に取り組んでいます。<br />使いやすさと拡張性を意識した開発。<br />チームとのコミュニケーションを大切にし、<br />円滑に協力し合える環境づくりを心がけています。</p>
            <div className='flex gap-6'>
              <a href="https://github.com/koala-craft" target="_blank" rel="noopener noreferrer">
                <FaGithub className='w-8 h-8 cursor-pointer' />
              </a>
              <a href="https://zenn.dev/koala_craft" target="_blank" rel="noopener noreferrer">
                <SiZenn className='w-8 h-8 cursor-pointer' />
              </a>
            </div>
          </div>
          <div className="hidden tab:block">
            <Mylogo />
          </div>
        </div>
        <div>
          <div className="scroll-down-animate">
            <span></span>
          </div>
        </div>
      </section>
    </>
  )

}
import { cx } from "app/utils/classnames";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Mylogo from '../../../common/components/svgs/undraw-man-light'
``
export function DisplayMv() {
  return (
    <>
      <section className='min-h-screen flex flex-col justify-around'>
        <div className="
                        h-full min-h-full px-6 mt-8
                        tab:min-w-2xl
                        pc:flex pc:items-center pc:justify-center
                        pc:min-w-4xl pc:px-0
        ">
          <div className="w-full pc:w-auto">
            <p className='mb-2'>はじめまして、私は</p>
            <h1 className='mb-1
                           text-2xl font-semibold
                           pc:mb-3 pc:text-5xl pc:font-bold
                           '>
              Kinomiya Dai (木乃宮 ダイ)
            </h1>
            <p className='
                          mb-8
                          pc:text-2xl
                         '>Front / Back end Engineer</p>
            <div className="pc:hidden mb-8 w-full">
              <Mylogo className="w-full" />
            </div>
            <p className='mb-3'>Webアプリの設計と実装に取り組んでいます。<br />使いやすさと拡張性を意識した開発。<br />チームとのコミュニケーションを大切にし、<br />円滑に協力し合える環境づくりを心がけています。</p>
            <div className='flex gap-6'>
              <Link href="https://github.com/Kinomiya-Dai">
                <FaGithub className='w-8 h-8 cursor-pointer' />
              </Link>
              <SiZenn className='w-8 h-8 cursor-pointer' />
            </div>
          </div>
          <div className="hidden pc:block">
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
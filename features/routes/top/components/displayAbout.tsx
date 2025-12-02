import { UndrawDevAvatarIcon } from "features/common/components/svgs";
import Link from "next/link";

export function DisplayAbout() {
  return (
    <>
      <section className='w-full py-14 px-6
                          flex flex-col items-center gap-6 pc:px-0 pc:gap-14 z-20'>
        <h2 className='text-3xl font-semibold
                       pc:text-4xl pc:font-bold'>About me</h2>
        <div className='flex flex-col justify-center gap-6
                        pc:flex-row pc:gap-[7px]'>
          <div className="w-full flex justify-center
                          pc:block pc:w-auto">
            <UndrawDevAvatarIcon className='w-[150px] h-[150px]' />
          </div>
          <div className='pc:w-3/5 pc:flex pc:flex-col'>
            <div className='mb-12 pc:mb-8'>
              <p className='mb-4'>はじめまして。平成11年生まれ26歳エンジニアのダイと申します。<br />
                社会人歴（IT業界）2年目となりました。
              </p>
              <p className='mb-4'>もっとスキルアップしたい！
                がっつり開発に携わりたいという思いを燃料に、
                日々 成長のため努力しています。</p>
              <p>現在は、pythonデータ分析実践試験の資格取得に向けて学習中です。</p>
            </div>
            <div className='flex justify-center pc:justify-end'>
              <Link href="./about">
                <button
                  className="
                              relative cursor-pointer text-center align-middle
                              shadow-2xl rounded-full
                              font-bold leading-normal tracking-widest
                              px-8 py-6 ml-auto
                              text-pf-text dark:text-pf-text-dark
                              transition-transform duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl
                              active:scale-95 active:shadow-xl
                            "
                >
                  view more
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  )
}
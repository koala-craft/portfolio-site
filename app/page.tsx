import { BlogPosts } from 'features/routes/blog/components/posts'
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Mylogo from '../components/icons/undraw-man-light'
import { cx } from './utils/classnames';
import { UndrawDevAvatarIcon } from '../components/icons';

import Link from 'next/link';
import SkillList from '../components/skillList';
import { WorkPosts } from '../features/routes/work/components/posts';

export default function Page() {

  return (
    <>
      <section className='min-h-screen flex flex-col justify-around'>
        <div className={cx("flex items-center justify-center", "h-full min-h-full min-w-4xl")}>
          <div>
            <p className='mb-2'>はじめまして、私は</p>
            <h1 className='text-5xl mb-3 font-bold'>Kinomiya Dai (木乃宮 ダイ)</h1>
            <p className='text-2xl mb-8'>Front / Back end Engineer</p>
            <p className='mb-3'>Webアプリの設計と実装に取り組んでいます。<br />UI から API まで、使いやすさと拡張性を意識した開発。<br />チームとのコミュニケーションを大切にし、<br />円滑に協力し合える環境づくりを心がけています。</p>
            <div className='flex gap-6'>
              <Link href="https://github.com/Kinomiya-Dai">
                <FaGithub className='w-8 h-8 cursor-pointer' />
              </Link>
              <SiZenn className='w-8 h-8 cursor-pointer' />
            </div>
          </div>
          <div>
            <Mylogo />
          </div>
        </div>
        <div>
          <div className="scroll-down-animate">
            <span></span>
          </div>
        </div>
      </section>
      <section className='py-14 flex flex-col items-center gap-14'>
        <h2 className='text-4xl font-bold'>About me</h2>
        <div className='flex justify-center gap-[7px]'>
          <div>
            <UndrawDevAvatarIcon className='w-[150px] h-[150px]' />
          </div>
          <div className='w-3/5 flex flex-col'>
            <div className='mb-8'>
              <p className='mb-4'>はじめまして。平成11年生まれ26歳エンジニアのダイと申します。<br />
                社会人歴（IT業界）2年目となりました。
              </p>
              <p className='mb-4'>もっとスキルアップしたい！
                がっつり開発に携わりたいという思いを燃料に、
                日々 成長のため努力しています。</p>
              <p>現在は、pythonデータ分析実践試験の資格取得に向けて学習中です。</p>
            </div>
            <div className='flex justify-end'>
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
      <section className='py-14 flex flex-col items-center gap-14'>
        <h2 className='text-4xl font-bold'>Blog</h2>
        <div className='w-full'>
          <BlogPosts />
          <div className='flex justify-center w-full pt-6'>
            <Link href="./blog">
              <p className='text-2xl font-light border-b cursor-pointer'>View All Blogs</p>
            </Link>
          </div>
        </div>

      </section>
      <section className='py-14 flex flex-col items-center gap-14 mb-16'>
        <h2 className='text-4xl font-bold mb-10'>Works</h2>
        <div className='h-[506px] w-full'>
          <WorkPosts />
        </div>
        <div className='flex'>
          <Link href="./work">
            <p className='text-2xl font-light border-b cursor-pointer'>View All Works</p>
          </Link>
        </div>
      </section>
      <section className='py-14 flex flex-col items-center gap-14'>
        <SkillList />
      </section>
    </>
  )
}

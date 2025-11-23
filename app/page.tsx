import { BlogPosts } from 'app/components/posts'
import { FaAws, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiPhp, SiSpring, SiTypescript, SiVite, SiZenn } from "react-icons/si";
import Mylogo from '../app/components/icons/undraw-man-light'
import { cx } from './utils/classnames';
import { UndrawDevAvatarIcon } from './components/icons';
import { VscCode } from "react-icons/vsc";
import IpaLogo from "./components/icons/ipa-logo"
import { PiFigmaLogoFill } from 'react-icons/pi';
import { CpdaLogo } from './components/icons';
import { UndrawCodeThinking } from './components/icons';

import SkillCard from './components/skillcard'
import Link from 'next/link';


const languages = [
  { name: "HTML", icon: <FaHtml5 />, exp: true, class: "fill-[#E4522C]" },
  { name: "CSS", icon: <FaCss3Alt />, exp: true, class: "fill-[#086fc2]" },
  { name: "JavaScript", icon: <FaJs />, exp: true, class: "fill-[#f7e025]" },//Todo:改造する
  { name: "TypeScript", icon: <SiTypescript />, exp: true, class: "fill-[#087ecd]" },
  { name: "Python", icon: <FaPython />, exp: true, class: "fill-[#ffd107]" },//Todo:改造する。
  { name: "PHP", icon: <SiPhp />, exp: true, class: "fill-[#8c96c0]" },
  { name: "SQL", icon: <FaDatabase />, exp: true, class: "fill-pf-text" },
  { name: "JAVA", icon: <FaJava />, exp: true, class: "fill-[#e73131]" },
];

const frameworks = [
  { name: "React", icon: <FaReact />, exp: true, class: "fill-[#30C7EC]" },//Todo:改造する
  { name: "Next.js", icon: <SiNextdotjs />, exp: true, class: "fill-[#000]" },
  { name: "SpringBoot", icon: <SiSpring />, exp: true, class: "fill-[#88db53]" },//Todo:色が変わらない→改造する
  { name: "FastAPI", icon: <SiFastapi />, exp: true, class: "fill-[#009385]" },//Todo：色が変わらない→改造する
];

const tools = [
  { name: "Docker", icon: <FaDocker />, exp: true, class: "fill-[#2a9aed]" },
  { name: "Git", icon: <FaGitAlt />, exp: true, class: "fill-[#f04234]" },
  { name: "Github", icon: <FaGithub />, exp: true, class: "fill-[#080808]" },
  { name: "Figma", icon: <PiFigmaLogoFill />, exp: true, class: "fill-[#33333b]" },
  { name: "Vite", icon: <SiVite />, exp: true, class: "fill-[#ffcc2a]" },//Todo:改造する
  { name: "AWS", icon: <FaAws />, exp: true, class: "fill-[#ed8e08]" },//Todo:改造する
];
const certifications = [
  { name: "基本情報技術者", icon: <IpaLogo />, exp: true },
  { name: "応用情報技術者", icon: <IpaLogo />, exp: false },
  { name: "エンジニア認定データ分析実践", icon: <CpdaLogo />, exp: false },
];

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
            <div className='flex'>
              <button className='relative cursor-pointer text-center align-middle
                font-bold leading-normal tracking-widest
                no-underline
                px-8 py-6 ml-auto
                rounded-[100%_80px/80px_100%] transition-all duration-300
                bg-[linear-gradient(135deg,#fca1a1_40%,#fcfc5d_100%)]
                shadow-[30px_10px_0_#fefeb3]
                hover:rounded-[60%_80%/100%_80%]'>
                view more
              </button>
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
        <div className='h-[424px] w-[820px] border border-pf-text'></div>
        <div className='flex'>
          <p className='text-2xl font-light border-b cursor-pointer'>View All Works</p>
        </div>
      </section>
      <section className='py-14 flex flex-col items-center gap-14'>
        <div className='w-4xl'>
          <h2 className='text-center text-4xl font-bold mb-24'>Skill-Stacks</h2>
          <section className='pb-32'>
            <h3 className='flex relative items-center mb-12 text-2xl font-bold pl-4 text-before-line text-after-line'>
              <VscCode className='w-6 h6 mr-2' />
              Language
              <UndrawCodeThinking className='w-32 h-14 position absolute bottom-1/2 right-0 ' />
            </h3>
            <SkillCard skills={languages} />
          </section>
          <section className='pb-32'>
            <h3 className='flex relative items-center mb-12 text-2xl font-bold pl-4 text-before-line text-after-line'>
              <VscCode className='w-6 h6 mr-2' />
              Frameworks & Libraries
            </h3>
            <SkillCard skills={frameworks} />
          </section>
          <section className='pb-32'>
            <h3 className='flex relative items-center mb-12 text-2xl font-bold pl-4 text-before-line text-after-line'>
              <VscCode className='w-6 h6 mr-2' />
              Tools & Technologies
            </h3>
            <SkillCard skills={tools} />
          </section>
          <section className='pb-32'>
            <h3 className='flex relative items-center mb-12 text-2xl font-bold pl-4 text-before-line text-after-line'>
              <VscCode className='w-6 h6 mr-2' />
              Certifications
            </h3>
            <SkillCard skills={certifications} />
          </section>
        </div>
      </section>
    </>
  )
}

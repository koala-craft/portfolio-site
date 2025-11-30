"use client"
import { VscCode } from "react-icons/vsc";

import { FaAws, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiPhp, SiSpring, SiTypescript } from "react-icons/si";

import IpaLogo from "./icons/ipa-logo"
import { CpdaLogo } from './icons';
import { UndrawCodeThinking } from './icons';
import SkillCard from './skillcard'
import dynamic from "next/dynamic";

const PiFigmaLogoFill = dynamic(
  () => import("react-icons/pi").then(mod => mod.PiFigmaLogoFill),
  { ssr: false }
);
const SiVite = dynamic(
  () => import("react-icons/si").then(mod => mod.SiVite),
  { ssr: false }
);

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

const SkillList = () => {
  return (
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
  )
}
export default SkillList
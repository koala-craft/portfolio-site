import { FaAws, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaPython, FaReact, FaRust } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiPhp, SiSpring, SiTypescript } from "react-icons/si";

import { IpaLogo, CpdaLogo } from "features/common/components/svgs";
import dynamic from "next/dynamic";

const PiFigmaLogoFill = dynamic(
  () => import("react-icons/pi").then(mod => mod.PiFigmaLogoFill),
  { ssr: false }
);
const SiVite = dynamic(
  () => import("react-icons/si").then(mod => mod.SiVite),
  { ssr: false }
);

export const languages = [
  { name: "HTML", icon: <FaHtml5 />, exp: true, class: "fill-[#E4522C]" },
  { name: "CSS", icon: <FaCss3Alt />, exp: true, class: "fill-[#086fc2]" },
  { name: "JavaScript", icon: <FaJs />, exp: true, class: "fill-[#f7e025]" },// Todo: 改造する
  { name: "TypeScript", icon: <SiTypescript />, exp: true, class: "fill-[#087ecd]" },
  { name: "Rust", icon: <FaRust />, exp: true, class: "fill-[#262626]" },
  { name: "Python", icon: <FaPython />, exp: true, class: "fill-[#ffd107]" },// Todo: 改造する。
  { name: "PHP", icon: <SiPhp />, exp: true, class: "fill-[#8c96c0]" },
  { name: "SQL", icon: <FaDatabase />, exp: true, class: "fill-pf-text" },
  { name: "JAVA", icon: <FaJava />, exp: true, class: "fill-[#e73131]" },
];

export const frameworks = [
  { name: "React", icon: <FaReact />, exp: true, class: "fill-[#30C7EC] will-change-[filter] transition-[filter] animate-logo-spin duration-300 filter" },// Todo: 改造する
  { name: "Next.js", icon: <SiNextdotjs />, exp: true, class: "fill-[#000] dark:fill-[#FFF]" },
  { name: "SpringBoot", icon: <SiSpring />, exp: true, class: "fill-[#88db53]" },// Todo: 色が変わらない→改造する
  // { name: "FastAPI", icon: <SiFastapi />, exp: true, class: "fill-[#009385]" },// Todo：色が変わらない→改造する
];

export const tools = [
  { name: "Docker", icon: <FaDocker />, exp: true, class: "fill-[#2a9aed]" },
  { name: "Git", icon: <FaGitAlt />, exp: true, class: "fill-[#f04234]" },
  { name: "Github", icon: <FaGithub />, exp: true, class: "fill-[#080808] dark:fill-[#FFF]" },
  { name: "Figma", icon: <PiFigmaLogoFill />, exp: true, class: "fill-[#33333b] dark:fill-pf-text-dark" },
  { name: "Vite", icon: <SiVite />, exp: true, class: "fill-[#ffcc2a]" },// Todo: 改造する
  { name: "AWS", icon: <FaAws />, exp: true, class: "fill-[#ed8e08]" },// Todo: 改造する
];
export const certifications = [
  { name: "基本情報技術者", icon: <IpaLogo />, exp: true },
  { name: "応用情報技術者", icon: <IpaLogo />, exp: true },
  { name: "エンジニア認定データ分析実践", icon: <CpdaLogo />, exp: true },
];

"use client"
import { VscCode } from "react-icons/vsc";
import { HiOutlineCode, HiOutlineCube, HiOutlineCog, HiOutlineBadgeCheck } from "react-icons/hi";

import { UndrawCodeThinking } from "features/common/components/svgs";
import SkillCard from "@features/routes/top/components/skillcard";
import { languages, frameworks, tools, certifications } from "../constants/skillIconsLists";

export function DisplaySkill() {
  return (
    <section className="relative py-24 px-6 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Skill Stacks</h2>
          <p className="section-subtitle">習得した技術スタックをご紹介します</p>
        </div>
        
        <div className="space-y-20">
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pf-accent to-purple-500 text-white">
                <HiOutlineCode className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pf-text dark:text-pf-text-dark">
                Languages
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-pf-accent/40 to-transparent" />
            </div>
            <SkillCard skills={languages} />
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pf-accent to-purple-500 text-white">
                <HiOutlineCube className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pf-text dark:text-pf-text-dark">
                Frameworks & Libraries
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-pf-accent/40 to-transparent" />
            </div>
            <SkillCard skills={frameworks} />
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pf-accent to-purple-500 text-white">
                <HiOutlineCog className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pf-text dark:text-pf-text-dark">
                Tools & Technologies
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-pf-accent/40 to-transparent" />
            </div>
            <SkillCard skills={tools} />
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pf-accent to-purple-500 text-white">
                <HiOutlineBadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pf-text dark:text-pf-text-dark">
                Certifications
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-pf-accent/40 to-transparent" />
            </div>
            <SkillCard skills={certifications} />
          </div>
        </div>
      </div>
    </section>
  )
}

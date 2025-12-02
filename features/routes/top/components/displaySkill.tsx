"use client"
import { VscCode } from "react-icons/vsc";


import { UndrawCodeThinking } from "features/common/components/svgs";
import SkillCard from "features/common/components/skillcard";
import { languages,frameworks,tools,certifications } from "../constants/skillIconsLists";


export function DisplaySkill() {
  return (
    <>
      <section className='py-14 flex flex-col items-center gap-14 z-20 z-20'>
        <div className='w-full px-4 pc:w-4xl'>
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
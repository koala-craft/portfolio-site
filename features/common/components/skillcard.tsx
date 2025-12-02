"use client"
import clsx from "clsx";
import React, { ReactElement, useRef } from "react";

type Skill = {
  name: string;
  icon: ReactElement<{ className?: string }>;
  class?: string;
  description?: string;
  exp: boolean;
};

type Props = {
  skills: Skill[];
  className?: string;
};



const SkillCard: React.FC<Props> = ({ skills, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY; // 縦スクロールを横スクロールに変換
    }
  };
  return (
    <div className={clsx("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4", `${className}`)}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center
                     p-4 rounded-lg
                     shadow
                     transition hover:shadow-md
                     bg-pf-highlight-bg
                     dark:bg-pf-highlight-bg-dark  dark:border dark:border-pf-skill-card-border"
        >
          <div className="text-4xl mb-2">
            {React.isValidElement(skill.icon)
              ? React.cloneElement(skill.icon, { //React要素なら複製し、クラス名をpropsとして付与
                className: skill.class ? skill.class : "",
              })
              : skill.icon}
          </div>
          <div
            ref={scrollRef}
            onWheel={onWheel}
            className="w-full overflow-x-auto snap-x scrollbar-none scroll-smooth">
            <p className="text-lg text-center font-semibold whitespace-nowrap snap-start">{skill.name}</p>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default SkillCard;
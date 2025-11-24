"use client"
import React, { useRef } from "react";

type Skill = {
  name: string;
  icon: React.ReactNode; // アイコンはReact要素:コンポーネント
  class?: string;
  description?: string;
  exp: boolean;
};

type Props = {
  skills: Skill[];
};



const SkillCard: React.FC<Props> = ({ skills }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY; // 縦スクロールを横スクロールに変換
    }
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-pf-highlight-bg dark:bg-pf-highlight-bg-dark rounded-lg shadow hover:shadow-md transition "
        >
          <div className="text-4xl mb-2">
            {React.isValidElement(skill.icon)
              ? React.cloneElement(skill.icon, { //React要素なら複製し、クラス名をpropsとして付与
                className: skill.class ? skill.class : "",
              })
              : skill.icon}
          </div>
          <div
            onWheel={onWheel}
            className="w-full overflow-x-auto snap-x pointer-events-none scroll-auto scrollbar-none">
            <p className="text-lg text-center font-semibold whitespace-nowrap snap-start">{skill.name}</p>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default SkillCard;
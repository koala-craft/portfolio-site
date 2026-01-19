"use client"
import clsx from "clsx";
import React, { ReactElement, useRef } from "react";

type Skill = {
  name: string;
  icon: ReactElement<{ className?: string }>;
  class?: string;
  description?: string;
  exp: boolean;
  expExplain?: string;
};

type Props = {
  skills: Skill[];
  className?: string;
};

const SkillCard: React.FC<Props> = ({ skills, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className={clsx("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", className)}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative flex flex-col items-center p-6 rounded-2xl
                     bg-pf-surface dark:bg-pf-surface-dark
                     border border-pf-ui-border dark:border-pf-ui-border-dark
                     transition-all duration-300 ease-out
                     hover:shadow-lg hover:-translate-y-1 hover:border-pf-accent/50 dark:hover:border-pf-accent-dark/50
                     overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pf-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
            {React.isValidElement(skill.icon)
              ? React.cloneElement(skill.icon, {
                  className: skill.class ? skill.class : "",
                })
              : skill.icon}
          </div>
          
          <div
            ref={scrollRef}
            onWheel={onWheel}
            className="relative w-full overflow-x-auto snap-x scrollbar-none scroll-smooth"
          >
            <p className="text-sm text-center font-semibold whitespace-nowrap snap-start text-pf-text dark:text-pf-text-dark">
              {skill.name}
            </p>
          </div>
          
          {!skill.exp && (
            <div className="absolute inset-0 flex justify-center items-center z-30
                            bg-pf-text/80 dark:bg-pf-bg-dark/80 backdrop-blur-sm
                            text-pf-bg dark:text-pf-text-dark text-sm font-medium rounded-2xl">
              {skill.expExplain}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillCard;

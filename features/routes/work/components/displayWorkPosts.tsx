"use client";

import Link from "next/link"

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { Splide, SplideSlide } from '@splidejs/react-splide';

type WorkListProps = {
  allWorks: AllWorks[]
}

type AllWorks = {
  metadata: Metadata;
  slug: string;
  content: string;
}

type Metadata = {
  num: string
  title: string
  publishedAt: string
  summary: string
  image?: string
}

const DisplayWorkPosts = ({ allWorks }: WorkListProps) => {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="flex justify-center overflow-x-visible overflow-y-visible py-8 w-4/5 tab:w-3/5">
        <Splide
          aria-label="works-list"
          options={{
            mediaQuery: 'min',
            perMove: 1,
            type: 'loop',
            autoplay: true,
            interval: 4000,
            speed: 1000,
            pauseOnFocus: false,
            gap: "1rem",
            perPage: 1,
            rewind: true,
          }}
        >
          {(allWorks && allWorks.length > 0) && (
            allWorks
              .sort(
                (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
              )
              .map((post) => (
                <SplideSlide key={post.slug}>
                  <Link
                    className="flex flex-col mb-4"
                    href={`/work/${post.slug}`}
                  >
                    <article className="w-full shadow-xl/30 shadow-pf-text group z-0 mb-0 pc:mb-14 tab:mb-0">
                      <div className="w-full h-full relative overflow-hidden rounded-2 box-border pb-14 tab:pb-0">
                        <div className="absolute bottom-0 left-0 z-20 h-14 border-pf-works-line w-full bg-pf-works-line px-6 flex items-center justify-between">
                          <div className="flex items-center gap-3 h-full">
                            <FaReact className="fill-[#30C7EC] w-8 h-8" />
                            <SiNextdotjs className="fill-[#FFF] w-8 h-8" />
                          </div>
                          <p className="text-pf-bg text-[12px] font-light">木乃宮 ダイ</p>
                        </div>
                        <div className="absolute px-14 py-14
                                      -top-12 -left-12 tab:px-18 tab:py-18 z-30 w-0 h-0 rounded-[30px] overflow-hidden
                                      group-hover:h-[calc(100%-8px)] group-hover:w-[calc(100%+48px)] group-hover:pb-4
                                      group-active:h-[calc(100%-8px)] group-active:w-[calc(100%+48px)] group-active:pb-4
                                      bg-black/70 transition-all duration-1000 ease-in-out">
                          <div className="absolute bottom-0 right-0 w-16 h-16 tab:w-24 tab:h-24 flex items-center justify-center"><span className="text-pf-bg text-2xl tab:text-4xl">{post.metadata.num}</span></div>
                          <div className="flex flex-col justify-end h-full">
                            <h3 className="text-pf-bg text-[20px] tab:text-3xl font-black transition-all opacity-0 duration-1000 ease-in-out overflow-hidden whitespace-nowrap
                                          group-hover:opacity-100
                                          group-active:opacity-100">{post.metadata.title}</h3>
                            <div className="min-w-full">
                              <p className="text-pf-bg font-normal tab:font-medium transition-all opacity-0 mt-4 duration-1000 ease-in-out overflow-hidden
                                          group-hover:opacity-100
                                          group-active:opacity-100
                                          line-clamp-2">{post.metadata.summary}</p>
                            </div>
                          </div>
                        </div>
                        <img className="w-full h-auto top-0 left-0 object-cover z-10" src={post.metadata.image} alt="" />
                      </div>
                    </article>
                  </Link>
                </SplideSlide>
              )))
          }
        </Splide>
      </div>
    </div>
  )
}
export default DisplayWorkPosts
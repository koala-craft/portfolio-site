"use client";

import Link from "next/link"

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Loading from "features/common/components/loading";

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

const DisplayPosts = ({ allWorks }: WorkListProps) => {
  return (
    <div className="min-w-full h-full flex justify-center overflow-x-hidden overflow-y-visible py-8">
      <div className="max-w-6xl h-full">
        <Splide
          className="h-[440px] w-[820px] splide-work"
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
          {allWorks && allWorks.length > 0 ? (
            allWorks.map((post) => (
              <SplideSlide key={post.slug}>
                <Link
                  className="h-[424px] flex flex-col mb-4"
                  href={`/work/${post.slug}`}
                >
                  <article className="h-full shadow-xl/30 shadow-pf-text group z-0">
                    <div className="w-full h-full relative overflow-hidden rounded-2 box-border">
                      <div className="absolute bottom-0 left-0 z-20 h-14 border-pf-works-line w-full bg-pf-works-line px-6 flex items-center justify-between">
                        <div className="flex items-center gap-3 h-full">
                          <FaReact className="fill-[#30C7EC] w-8 h-8" />
                          <SiNextdotjs className="fill-[#FFF] w-8 h-8" />
                        </div>
                        <p className="text-pf-bg text-[12px] font-light">木乃宮 ダイ</p>
                      </div>
                      <div className="absolute -top-12 -left-12 px-18 py-18 z-30 w-0 h-0 group-hover:h-[calc(100%-8px)] group-hover:w-[calc(100%+48px)] bg-black/70 rounded-[30px] transition-all duration-1000 ease-in-out overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-24 h-24 flex items-center justify-center"><span className="text-pf-bg text-4xl">{post.metadata.num}</span></div>
                        <h3 className="text-pf-bg text-3xl font-black transition-all opacity-0 duration-1000 ease-in-out overflow-hidden whitespace-nowrap group-hover:opacity-100">{post.metadata.title}</h3>
                        <div className="min-w-full">
                          <p className="text-pf-bg font-medium transition-all opacity-0 mt-4 duration-1000 ease-in-out overflow-hidden group-hover:opacity-100 line-clamp-2">{post.metadata.summary}</p>
                        </div>
                      </div>
                      <img className="w-full h-full absolute top-0 left-0 object-cover z-10" src={post.metadata.image} alt="" />
                    </div>
                  </article>
                </Link>
              </SplideSlide>
            ))) : (
            <Loading />
          )
          }
        </Splide>
      </div>
    </div>
  )
}
export default DisplayPosts
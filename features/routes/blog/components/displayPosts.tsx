"use client";

import Link from "next/link"

import React from "react";
import Loading from "features/common/components/loading";

// ssr: false でサーバーではレンダリングされない
import { Splide, SplideSlide } from '@splidejs/react-splide';

type BlogListProps = {
  allBlogs: AllBlogs[]
}

type AllBlogs = {
  metadata: Metadata;
  slug: string;
  content: string;
}

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

const DisplayPosts = ({ allBlogs }: BlogListProps) => {
  return (
    <div className="min-w-full h-[418px] flex justify-center overflow-x-hidden overflow-y-visible py-8">
      <div className="max-w-6xl">
        <Splide
          aria-label="blogs-list"
          options={{
            mediaQuery: 'min',
            perMove: 1,
            type: 'loop',
            autoplay: true,
            interval: 4000,
            speed: 1000,
            pauseOnFocus: false,
            gap: "1rem",
            perPage: 4,
            rewind: true,
            breakpoints: {
              600: {
                perPage: 2,
              },
              1025: {
                perPage: 4,
                gap: 32,
              }
            },
          }}
        >
          {allBlogs && allBlogs.length > 0 ? (
            allBlogs.map((post) => (
              <SplideSlide key={post.slug}>
                <Link
                  className="flex flex-col space-y-1 mb-4"
                  href={`/blog/${post.slug}`}
                >
                  <article className="rounded-[5px] overflow-hidden shadow-xl/30 shadow-pf-text">
                    <div className="h-40">
                      <img className="w-full h-full" src="/images/blog/cool_dragon04.jpg" alt="" />
                    </div>
                    <div className="relative h-40 flex flex-col md:flex-row space-x-0 px-4 py-3 text-pf-text bg-pf-bg">
                      <div className="flex flex-col">
                        <p className="font-bold dark:text-neutral-100 tracking-tight mb-2 line-clamp-2">
                          {post.metadata.title}
                        </p>
                        <p className="text-[12px] line-clamp-3">{post.metadata.summary.split('<br>').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}</p>
                      </div>
                      <p className="absolute text-[12px] font-medium bottom-3 right-4 dark:text-neutral-400 tabular-nums">
                        {post.metadata.publishedAt}
                      </p>
                    </div>
                  </article>
                </Link>
              </SplideSlide>
            ))) : (<Loading />)
          }
        </Splide>
      </div>
    </div>
  )
}
export default DisplayPosts
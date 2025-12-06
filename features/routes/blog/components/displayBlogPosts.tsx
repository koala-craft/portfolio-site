"use client";
import Link from "next/link"
import React from "react";
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

const DisplayBlogPosts = ({ allBlogs }: BlogListProps) => {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="overflow-x-visible overflow-y-visible py-8 w-4/5">
        <Splide
          options={{
            mediaQuery: 'min',
            perMove: 1,
            autoplay: true,
            interval: 4000,
            speed: 1000,
            pauseOnFocus: false,
            type: "loop",
            gap: "1rem",
            perPage: 1,
            rewind: true,
            breakpoints: {
              432: {
                perPage: 2,
                gap: 10,
              },
              1024: {
                perPage: 3,
                gap: 32,
              },
              1440: {
                perPage: 4,
              }
            },
          }}
        >
          {(allBlogs && allBlogs.length > 0) && (
            allBlogs
              .sort(
                (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
              )
              .map((post) => (
                <SplideSlide key={post.slug}>
                  <Link
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                  >
                    <article className="rounded-[5px] overflow-hidden shadow-xl/30 shadow-pf-text">
                      <div>
                        <img className="w-full h-50 object-cover"
                          src={post.metadata.image ? post.metadata.image : "/images/blog/image-not-found.jpg"}
                          alt={`${post.metadata.summary}のブログ画像`} />
                      </div>
                      <div className="relative h-40 flex flex-col md:flex-row space-x-0 px-4 py-3 text-pf-text dark:text-pf-text bg-pf-bg">
                        <div className="flex flex-col">
                          <p className="font-bold tracking-tight mb-2 line-clamp-2">
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
              )))
          }
        </Splide>
      </div>
    </div>
  )
}
export default DisplayBlogPosts
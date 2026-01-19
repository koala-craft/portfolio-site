"use client";

import Link from "next/link"
import ReactPaginate from 'react-paginate';
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { UndrawProductDemo } from "features/common/components/svgs";
import { useCurrentItems, usePagination } from "features/common/hooks";

const itemsPerPage = 20

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

const DisplayPostsList = ({ allWorks }: WorkListProps) => {
  const { currentPage, handlePageChange, startIndex } = usePagination(itemsPerPage)
  const currentItems = useCurrentItems(allWorks, startIndex, itemsPerPage);

  return (
    <div className="relative min-w-full">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pf-accent/5 via-transparent to-purple-500/5 dark:from-pf-accent-dark/10 dark:to-purple-500/10" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-pf-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="section-title mb-6">Work List</h1>
          <UndrawProductDemo className="w-64 h-64 mx-auto mb-8 animate-float" />
          <p className="text-lg text-pf-muted dark:text-pf-muted-dark max-w-2xl mx-auto leading-relaxed">
            鋭意作成してきました成果物をご覧ください。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sp-work:grid-cols-2 tab:grid-cols-3 pc:grid-cols-4 gap-6">
              {currentItems
                .sort(
                  (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
                )
                .map((post) => (
                  <Link
                    className="group"
                    href={`/work/${post.slug}`}
                    key={post.slug}
                  >
                    <article className="card-modern overflow-hidden h-full">
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          src={post.metadata.image} 
                          alt={post.metadata.title} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="relative p-5">
                        <h3 className="font-bold text-pf-text dark:text-pf-text-dark tracking-tight mb-2 line-clamp-2 group-hover:text-pf-accent dark:group-hover:text-pf-accent-dark transition-colors">
                          {post.metadata.title}
                        </h3>
                        <p className="text-sm text-pf-muted dark:text-pf-muted-dark line-clamp-2 mb-4">
                          {post.metadata.summary}
                        </p>
                        <p className="text-xs font-medium text-pf-accent dark:text-pf-accent-dark tabular-nums">
                          {post.metadata.publishedAt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-16">
          <ReactPaginate
            pageCount={Math.ceil(allWorks.length / itemsPerPage)}
            onPageChange={handlePageChange}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName="flex items-center gap-2 react-paginate"
            pageClassName="rounded-full"
            activeClassName="bg-pf-accent text-white dark:bg-pf-accent-dark"
            pageLinkClassName="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full hover:bg-pf-accent/10 dark:hover:bg-pf-accent-dark/10 transition-colors"
            breakLabel="..."
            breakClassName="px-2 text-pf-muted"
            previousLinkClassName="w-10 h-10 flex items-center justify-center border-2 border-pf-accent dark:border-pf-accent-dark hover:bg-pf-accent dark:hover:bg-pf-accent-dark rounded-full cursor-pointer group transition-all"
            nextLinkClassName="w-10 h-10 flex items-center justify-center border-2 border-pf-accent dark:border-pf-accent-dark hover:bg-pf-accent dark:hover:bg-pf-accent-dark rounded-full cursor-pointer group transition-all"
            previousLabel={<FaAngleLeft className="w-4 h-4 text-pf-accent dark:text-pf-accent-dark group-hover:text-white transition-colors" />}
            nextLabel={<FaAngleRight className="w-4 h-4 text-pf-accent dark:text-pf-accent-dark group-hover:text-white transition-colors" />}
          />
        </div>
      </div>
    </div>
  )
}
export default DisplayPostsList

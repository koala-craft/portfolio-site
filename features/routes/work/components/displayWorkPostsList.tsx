"use client";

import Link from "next/link"
import ReactPaginate from 'react-paginate';
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { UndrawProductDemo } from "features/common/components/svgs";
import { usePagination } from "../hooks/usePagination";
import { useCurrentItems } from "../hooks/useCurrentItems";

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
    <div className="min-w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl my-8 tracking-normal">Work List</h1>
      <UndrawProductDemo className="w-80 h-80 mb-4" />
      <p className="mb-14">鋭意作成してきました成果物をご覧ください。</p>
      <div className="full">
        <div className="paginate-link-wrapper">
          {/* ここに前のページ遷移リンクと、次のページ遷移リンクが入る。 */}
        </div>
      </div>
      <div className="w-6xl grid grid-cols-4 gap-8 transition-all duration-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // currentPage が変わると再レンダリングしてアニメーション
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6xl grid grid-cols-4 gap-8"
          >
            {currentItems
              .map((post) => (
                <Link
                  className="flex flex-col space-y-1 mb-4"
                  href={`/work/${post.slug}`}
                  key={post.slug}
                >
                  <article className="rounded-[5px] overflow-hidden  shadow-xl/30 shadow-pf-text transition-transform hover:-translate-y-4 duration-500">
                    <div className="h-40">
                      <img className="w-full h-full" src={post.metadata.image} alt="" />
                    </div>
                    <div className="relative h-40 flex flex-col md:flex-row space-x-0 px-4 py-3 text-pf-text bg-pf-bg">
                      <div className="flex flex-col">
                        <h3 className="font-black tracking-tight mb-2 line-clamp-2">
                          {post.metadata.title}
                        </h3>
                        <p className="text-[12px] line-clamp-3">{post.metadata.summary}</p>
                      </div>
                      <p className="absolute text-[12px] font-medium bottom-3 right-4 dark:text-neutral-400 tabular-nums">
                        {post.metadata.publishedAt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <ReactPaginate
        pageCount={Math.ceil(allWorks.length / itemsPerPage)}
        onPageChange={handlePageChange}
        marginPagesDisplayed={2} //先頭と末尾に表示するページの数。今回は2としたので1,2…今いるページの前後…後ろから2番目, 1番目 のように表示されます。
        pageRangeDisplayed={5} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
        containerClassName="flex space-x-3 mt-12 react-paginate" //全体のコンテナスタイル
        pageClassName="rounded-full" //ボタンのスタイル
        activeClassName="bg-pf-slider-ui text-white dark:bg-gray-200 dark:text-black"//現在のページボタン
        pageLinkClassName='w-12 h-12 cursor-pointer flex items-center justify-center' //リンク部のクラス名
        breakLabel="..."
        previousLinkClassName='paginate-link-previous w-12 h-12 flex items-center justify-center border border-pf-slider-ui hover:border-pf-slider-ui hover:bg-pf-slider-ui rounded-full cursor-pointer group'  //'<'のリンクのクラス名
        nextLinkClassName='paginate-link-next w-12 h-12 flex items-center justify-center border border-pf-slider-ui hover:border-pf-slider-ui hover:bg-pf-slider-ui rounded-full cursor-pointer group'//'>'のリンクのクラス名
        previousLabel={<FaAngleLeft className="w-[19px] h-[19px] text-pf-slider-ui group-hover:text-pf-bg" />}
        nextLabel={<FaAngleRight className="w-[19px] h-[19px] text-pf-slider-ui group-hover:text-pf-bg" />}
      />
    </div>
  )
}
export default DisplayPostsList
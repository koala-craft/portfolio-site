import Loading from "features/common/components/loading";
import { getBlogPosts } from "features/routes/blog/utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const DisplayBlogs = dynamic(() => import('../../blog/components/displayBlogPosts'), { loading: () => <Loading /> });

export function DisplayBlog() {
  const blogs = getBlogPosts();
  return (
    <>
      <section className='py-14 flex flex-col items-center gap-14 z-20'>
        <h2 className='text-4xl font-bold'>Blog</h2>
        <div className='w-full'>
          <DisplayBlogs allBlogs={blogs} />
          <div className='flex justify-center w-full pt-6'>
            <Link href="./blog">
              <p className='text-2xl font-light border-b cursor-pointer'>View All Blogs</p>
            </Link>
          </div>
        </div>

      </section>
    </>
  )
}
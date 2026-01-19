import Loading from "features/common/components/loading";
import { getBlogPosts } from "features/routes/blog/utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const DisplayBlogs = dynamic(() => import('../../blog/components/displayBlogPosts'), { loading: () => <Loading /> });

export function DisplayBlog() {
  const blogs = getBlogPosts();
  return (
    <section className="relative py-24 z-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Blog</h2>
          <p className="section-subtitle">技術ブログを更新しています</p>
        </div>
      </div>
      
      <div className="w-full">
        <DisplayBlogs allBlogs={blogs} />
      </div>
      
      <div className="flex justify-center mt-12">
        <Link href="./blog">
          <button className="btn-primary">
            View All Blogs
          </button>
        </Link>
      </div>
    </section>
  )
}

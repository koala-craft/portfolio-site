import Loading from "features/common/components/loading";
import { getWorkPosts } from "features/routes/work/utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
const DisplayWorks = dynamic(() => import('../../work/components/displayWorkPosts'), { loading: () => <Loading /> });

export function DisplayWork() {
  const works = getWorkPosts();
  return (
    <section className="relative py-24 px-6 z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pf-accent/5 to-transparent dark:via-pf-accent-dark/5" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Works</h2>
          <p className="section-subtitle">これまでの制作物をご紹介します</p>
        </div>
        
        <DisplayWorks allWorks={works} />
        
        <div className="flex justify-center mt-12">
          <Link href="./work">
            <button className="btn-primary">
              View All Works
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

import Loading from "features/common/components/loading";
import { getWorkPosts } from "features/routes/work/utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
const DisplayWorks = dynamic(() => import('../../work/components/displayWorkPosts'), { loading: () => <Loading /> });

export function DisplayWork() {
  const works = getWorkPosts();
  return (
    <>
      <section className='py-14 flex flex-col items-center gap-14 mb-16'>
        <h2 className='text-4xl font-bold mb-10'>Works</h2>
        <div className='h-[506px] w-full'>
          <DisplayWorks allWorks={works} />
        </div>
        <div className='flex'>
          <Link href="./work">
            <p className='text-2xl font-light border-b cursor-pointer'>View All Works</p>
          </Link>
        </div>
      </section>
    </>
  )
}
import { BlogPosts } from 'app/components/posts'
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Mylogo from '../app/components/icons/undraw-man-light'
import { cx } from './utils/classnames';

export default function Page() {
  return (
    <>
      <section className='min-h-screen flex justify-center'>
        <div className={cx("flex items-center justify-center", "h-full min-h-full")}>
          <div>
            <p>はじめまして、私は</p>
            <h1>Kinomiya Dai (木乃宮 ダイ)</h1>
            <p>Front / Back end Engineer</p>
            <p>Webアプリの設計と実装に取り組んでいます。<br />UI から API まで、使いやすさと拡張性を意識した開発。<br />チームとのコミュニケーションを大切にし、<br />円滑に協力し合える環境づくりを心がけています。</p>
            <FaGithub />
            <SiZenn />
          </div>
          <div>
            <Mylogo />
          </div>
        </div>
      </section>
      <section>
        <p className="mb-4">
          {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  )
}

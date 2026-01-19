import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Mylogo from '../../../common/components/svgs/undraw-man-light'

export function DisplayMv() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden z-20">
      <div className="absolute inset-0 bg-gradient-to-br from-pf-accent/5 via-transparent to-purple-500/5 dark:from-pf-accent-dark/10 dark:to-purple-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pf-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 tab:py-0">
        <div className="flex flex-col tab:flex-row tab:items-center tab:justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <p className="text-pf-muted dark:text-pf-muted-dark mb-4 text-lg">
              はじめまして、私は
            </p>
            <h1 className="text-4xl tab:text-5xl pc:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">koala.craft</span>
              <br />
              <span className="text-pf-text dark:text-pf-text-dark">(コアラ工房)</span>
            </h1>
            <p className="text-xl tab:text-2xl text-pf-muted dark:text-pf-muted-dark mb-8 font-medium">
              Front / Back end Engineer
            </p>
            
            <div className="tab:hidden mb-8">
              <Mylogo className="w-full max-w-sm mx-auto animate-float" />
            </div>
            
            <p className="text-pf-text/80 dark:text-pf-text-dark/80 mb-8 leading-relaxed text-lg">
              Webアプリの設計と実装に取り組んでいます。
              <br />
              使いやすさと拡張性を意識した開発。
              <br />
              チームとのコミュニケーションを大切にし、
              <br />
              円滑に協力し合える環境づくりを心がけています。
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/koara-craft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pf-surface dark:bg-pf-surface-dark border border-pf-ui-border dark:border-pf-ui-border-dark hover:border-pf-accent dark:hover:border-pf-accent-dark hover:shadow-lg transition-all duration-300 group"
              >
                <FaGithub className="w-6 h-6 group-hover:text-pf-accent dark:group-hover:text-pf-accent-dark transition-colors" />
              </a>
              <a 
                href="https://zenn.dev/koara_craft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pf-surface dark:bg-pf-surface-dark border border-pf-ui-border dark:border-pf-ui-border-dark hover:border-pf-accent dark:hover:border-pf-accent-dark hover:shadow-lg transition-all duration-300 group"
              >
                <SiZenn className="w-6 h-6 group-hover:text-pf-accent dark:group-hover:text-pf-accent-dark transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="hidden tab:block flex-1 max-w-lg">
            <Mylogo className="w-full animate-float" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="scroll-down-animate">
          <span></span>
        </div>
      </div>
    </section>
  )
}

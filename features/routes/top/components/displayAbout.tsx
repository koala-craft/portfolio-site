import Image from "next/image"
import Link from "next/link";

export function DisplayAbout() {
  return (
    <section className="relative py-24 px-6 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle">エンジニアとしての私について</p>
        </div>
        
        <div className="flex flex-col tab:flex-row items-center gap-12 tab:gap-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pf-accent to-purple-500 rounded-full blur-2xl opacity-20" />
            <div className="relative">
              <Image
                src="/koala.png"
                alt="アバター画像"
                width={200}
                height={200}
                className="rounded-full border-4 border-pf-surface dark:border-pf-surface-dark shadow-2xl"
              />
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl">
            <div className="space-y-6 mb-10">
              <p className="text-lg leading-relaxed text-pf-text/80 dark:text-pf-text-dark/80">
                はじめまして。平成11年生まれ26歳エンジニアのコアラ工房と申します。
                社会人歴（IT業界）2年目となりました。
              </p>
              <p className="text-lg leading-relaxed text-pf-text/80 dark:text-pf-text-dark/80">
                開発に真摯に向き合い、スキルを磨き続けたいという思いを大切にしながら、
                日々の積み重ねを通じて成長していくことを心がけています。
              </p>
              <p className="text-lg leading-relaxed text-pf-text/80 dark:text-pf-text-dark/80">
                現在は、AWS SAA試験に向け勉強を進めています。
              </p>
            </div>
            
            <div className="flex justify-center tab:justify-start">
              <Link href="./about">
                <button className="btn-secondary">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { PgIconsBg } from "features/common/components/pgIconsBg";
import { UndrawCommunication, UndrawDrinkCoffee, UndrawHello, UndrawHomeCinema, UndrawInTheZone, UndrawProfessor, UndrawStrategy } from "features/common/components/svgs";

export default function Page() {
  return (
    <>
      <div className="relative z-20">
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pf-accent/5 via-transparent to-purple-500/5 dark:from-pf-accent-dark/10 dark:to-purple-500/10" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-pf-accent/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">About Me</h1>
            <UndrawHello className="w-64 h-64 mx-auto mb-8 animate-float" />
            <p className="text-lg text-pf-muted dark:text-pf-muted-dark max-w-2xl mx-auto leading-relaxed">
              私のポートフォリオサイトにお越しいただきありがとうございます。
              <br />
              私について少しお話させていただきます。
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="space-y-24">
            <section className="group">
              <div className="card-modern p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pf-accent/10 to-purple-500/10">
                      <UndrawCommunication className="w-48 h-48" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Communication</h2>
                    <div className="space-y-4 text-pf-text/80 dark:text-pf-text-dark/80 leading-relaxed">
                      <p>仕事は人とのつながりで成り立っていると考えています。</p>
                      <p>関わる全ての人とお互いを高め合い、信頼関係を築きながらより良い成果を生み出すことを大切にしています。チームでの協力や円滑なコミュニケーションを通じて、個人の力だけでは成し得ない価値を提供できると信じています。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="card-modern p-8 md:p-12">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pf-accent/10 to-purple-500/10">
                      <UndrawInTheZone className="w-48 h-48" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Approach to Work</h2>
                    <div className="space-y-4 text-pf-text/80 dark:text-pf-text-dark/80 leading-relaxed">
                      <p>「何事にも一生懸命に取り組む」というのが私の信念です。</p>
                      <p>仕事においてもこの姿勢を貫き、与えられたタスクやプロジェクトのすべてに全力で挑みます。たとえ困難な課題や慣れない技術に直面しても、粘り強く学び続け、最善の結果を出すことを常に意識しています。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="card-modern p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pf-accent/10 to-purple-500/10">
                      <UndrawDrinkCoffee className="w-48 h-48" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Life & Work</h2>
                    <div className="space-y-4 text-pf-text/80 dark:text-pf-text-dark/80 leading-relaxed">
                      <p>一方で、プロフェッショナルとして効率も重視しています。</p>
                      <p>「一生懸命×効率化」した業務さえあれば定時には確実に仕事は終えられるという哲学を持っています。</p>
                      <p>必要があれば計画的に残業して課題を完遂することで、チームやプロジェクト全体に迷惑をかけないことも忘れてはいけません。ですが、最小に抑える努力は必要です。</p>
                      <p>常に学び続け、無駄を省き効率を上げ必要工数を抑える方法を模索し続けます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="card-modern p-8 md:p-12">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pf-accent/10 to-purple-500/10">
                      <UndrawProfessor className="w-48 h-48" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Future</h2>
                    <div className="space-y-4 text-pf-text/80 dark:text-pf-text-dark/80 leading-relaxed">
                      <p>将来は、フロントエンドからバックエンド、AI開発までを横断できるフルスタックエンジニアとして、プロダクト開発に深く関わりたいと考えています。</p>
                      <p>現在はReactやNext.jsによるフロントエンド開発に加え、AIを取り入れた開発・デプロイにも熱く関心を持っています。</p>
                      <p>フロントエンド開発は、目の前で動く体験を形にできる楽しさがあり、ものづくりの喜びを直に感じられるところが好きです。一方で、開発の現場ではAIがコードを生成し、人間が設計とレビューを担う「AI駆動開発」が主流になりつつあると感じています。こうした流れの中で、AI開発ツールを適切にマネジメントする力や、LLMをプロダクトに組み込むためのバックエンド・インフラの知識は不可欠です。変化の激しい時代だからこそ、技術領域を限定せず学び続け、ユーザーにとって価値のある体験を生み出せるエンジニアでありたい。</p>
                      <p>フロントエンドからバックエンド、AI開発まで幅広く学び、ユーザーにとって魅力的で先進的な体験を生み出せるフルスタックエンジニアを目指します。情熱をもって挑戦し、業界の変化をチャンスに変えていきたいと考えています。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="card-modern p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pf-accent/10 to-purple-500/10">
                      <UndrawStrategy className="w-48 h-48" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Strategy</h2>
                    <div className="space-y-4 text-pf-text/80 dark:text-pf-text-dark/80 leading-relaxed">
                      <p>言葉だけでは何も変わらないので、とりあえず実践あるのみです。</p>
                      <p>まずは資格の取得・個人開発の二軸戦略を考えています。</p>
                      <div className="my-6 p-6 rounded-xl bg-pf-bg dark:bg-pf-bg-dark border border-pf-ui-border dark:border-pf-ui-border-dark">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-pf-accent" />
                            <span><span className="font-semibold text-pf-text dark:text-pf-text-dark">資格</span>：知識・開発作法のインプットと自分が何者であるかの証明書</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-pf-accent" />
                            <span><span className="font-semibold text-pf-text dark:text-pf-text-dark">個人開発</span>：知識のアウトプットと経験知の蓄積、目標の実現可能力</span>
                          </li>
                        </ul>
                      </div>
                      <p>これらを踏まえとりあえず、将来の目標の第一歩として本ポートフォリオを作成したという経緯です。</p>
                      <p>この後は、作りたいものを一つずつ積み上げて作っていきたいと思います。</p>
                      <p>最近<a className="text-pf-accent dark:text-pf-accent-dark hover:underline font-medium" href="https://blog.craftz.dog/" target="_blank">InkDrop制作者さんの記事</a>（おすすめです！）に影響を受けプログラマ向けのエディタを作成したい欲が沸き上がってきています。</p>
                      <p>個人開発者として、何を大事にし、どの部分を切り捨てるか。といった経験を通した生々しい体験談は一人のエンジニアとして胸が熱くなりました。</p>
                      <p>最近応用情報とPython資格が取れたので、1月末にAWS SAA、春にIPAの高度資格なんかも取りたいなと画策しています。</p>
                      <p>進捗があり次第、本ブログに掲載しますね。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="card-modern p-8 md:p-12">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pf-accent/10 to-purple-500/10">
                      <UndrawHomeCinema className="w-48 h-48" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Character</h2>
                    <p className="text-xl font-medium mb-6 text-pf-text dark:text-pf-text-dark">最後に私について軽く自己紹介</p>
                    
                    <div className="space-y-6">
                      <div className="p-5 rounded-xl bg-pf-bg dark:bg-pf-bg-dark border border-pf-ui-border dark:border-pf-ui-border-dark">
                        <h4 className="font-semibold text-pf-accent dark:text-pf-accent-dark mb-3">好きな言語・ライブラリ</h4>
                        <ul className="space-y-2 text-pf-text/80 dark:text-pf-text-dark/80">
                          <li className="flex items-start gap-2">
                            <span className="text-pf-accent">-</span>
                            <span>フロントエンド：React, TypeScript, TailwindCSS (vanillaCSSに戻れません)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-pf-accent">-</span>
                            <span>バックエンド：機能実装において、言語別・FW別の違いが正直あまりよく分かっていないです。今はまだ、要求を満たせるものを使えればいいといったスタンス。</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-xl bg-pf-bg dark:bg-pf-bg-dark border border-pf-ui-border dark:border-pf-ui-border-dark">
                        <h4 className="font-semibold text-pf-accent dark:text-pf-accent-dark mb-3">興味のある技術スタック</h4>
                        <ul className="space-y-2 text-pf-text/80 dark:text-pf-text-dark/80">
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>モダンフロントエンド：TanstackStart、Nuxt</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>バックエンド技術：Python（LLM開発）→Django, Flask（FW）</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>静的サイト構築：Astro</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>デスクトップ開発：Rust, Tauri, Electron</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>スマホアプリ開発：ReactNative</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>生成AIツール：Cursor, Claude, Devin</span></li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-xl bg-pf-bg dark:bg-pf-bg-dark border border-pf-ui-border dark:border-pf-ui-border-dark">
                        <h4 className="font-semibold text-pf-accent dark:text-pf-accent-dark mb-3">好きなこと</h4>
                        <ul className="space-y-2 text-pf-text/80 dark:text-pf-text-dark/80">
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>アプリ実装の動作確認</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>バグの原因が判明した瞬間</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>おいしいものを食べること</span></li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-xl bg-pf-bg dark:bg-pf-bg-dark border border-pf-ui-border dark:border-pf-ui-border-dark">
                        <h4 className="font-semibold text-pf-accent dark:text-pf-accent-dark mb-3">休暇の過ごし方</h4>
                        <ul className="space-y-2 text-pf-text/80 dark:text-pf-text-dark/80">
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>家に引きこもって開発・勉強をしたり、筋トレなどをしています。</span></li>
                          <li className="flex items-start gap-2"><span className="text-pf-accent">-</span><span>運転免許をまだ持っていないので、暇な時間を見つけて取得して、休暇にドライブなどしたいですね。</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <PgIconsBg />
    </>
  )
}

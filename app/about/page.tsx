import { PgIconsBg } from "features/common/components/pgIconsBg";
import { UndrawCommunication, UndrawDrinkCoffee, UndrawHello, UndrawHomeCinema, UndrawInTheZone, UndrawProfessor, UndrawStrategy } from "features/common/components/svgs";


export default function Page() {
  return (
    <>
      <div className="z-20 px-8 sp:px-4 tab:px-0">
        <div className="min-w-full flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl my-8 tracking-normal">About Me</h1>
          <UndrawHello className="w-80 h-80 mb-4" />
          <p className="mb-14">私のポートフォリオサイトにお越しいただきありがとうございます。<br />私について少しお話させていただきます。</p>
        </div>
        <div className="w-full flex justify-center leading-8">
          <hr className="bg-pf-text/80" />
          <div className="w-3xl">
            <section className="mb-32">
              <h2 className="text-center font-bold text-2xl my-8">Communication</h2>
              <div className="flex justify-center mb-8">
                <UndrawCommunication className="w-60 h-60" />
              </div>
              <p>仕事は人とのつながりで成り立っていると考えています。</p>
              <p>関わる全ての人とお互いを高め合い、信頼関係を築きながらより良い成果を生み出すことを大切にしています。
                チームでの協力や円滑なコミュニケーションを通じて、個人の力だけでは成し得ない価値を提供できると信じています。</p>
            </section>
            <section className="mb-32">
              <h2 className="text-center font-bold text-2xl my-8">Approach to Work</h2>
              <div className="flex justify-center mb-8">
                <UndrawInTheZone className="w-60 h-60" />
              </div>
              <p>「何事にも一生懸命に取り組む」というのが私の信念です。</p>
              <p>仕事においてもこの姿勢を貫き、与えられたタスクやプロジェクトのすべてに全力で挑みます。たとえ困難な課題や慣れない技術に直面しても、粘り強く学び続け、最善の結果を出すことを常に意識しています。</p>
            </section>
            <section className="mb-32">
              <h2 className="text-center font-bold text-2xl my-8">Life ＆ Work</h2>
              <div className="flex justify-center mb-8">
                <UndrawDrinkCoffee className="w-60 h-60" />
              </div>
              <p>一方で、プロフェッショナルとして効率も重視しています。</p>
              <p>「一生懸命×効率化」した業務さえあれば定時には確実に仕事は終えられるという哲学を持っています。</p>
              <p>必要があれば計画的に残業して課題を完遂することで、チームやプロジェクト全体に迷惑をかけないことも忘れてはいけません。ですが、最小に抑える努力は必要です。</p>
              <p>常に学び続け、無駄を省き効率を上げ必要工数を抑える方法を模索し続けます。</p>
            </section>
            <section className="mb-32">
              <h2 className="text-center font-bold text-2xl my-8">Future</h2>
              <div className="flex justify-center mb-8">
                <UndrawProfessor className="w-60 h-60" />
              </div>
              <p>将来は、フロントエンドからバックエンド、AI開発までを横断できるフルスタックエンジニアとして、プロダクト開発に深く関わりたいと考えています。</p>
              <p>現在はReactやNext.jsによるフロントエンド開発に加え、AIを取り入れた開発・デプロイにも熱く関心を持っています。</p>
              <br />
              <p>フロントエンド開発は、目の前で動く体験を形にできる楽しさがあり、ものづくりの喜びを直に感じられるところが好きです。一方で、開発の現場ではAIがコードを生成し、人間が設計とレビューを担う「AI駆動開発」が主流になりつつあると感じています。こうした流れの中で、AI開発ツールを適切にマネジメントする力や、LLMをプロダクトに組み込むためのバックエンド・インフラの知識は不可欠です。変化の激しい時代だからこそ、技術領域を限定せず学び続け、ユーザーにとって価値のある体験を生み出せるエンジニアでありたい。</p>
              <br />
              <p>フロントエンドからバックエンド、AI開発まで幅広く学び、ユーザーにとって魅力的で先進的な体験を生み出せるフルスタックエンジニアを目指します。情熱をもって挑戦し、業界の変化をチャンスに変えていきたいと考えています。</p>
            </section>
            <section className="mb-32">
              <h2 className="text-center font-bold text-2xl my-8">Strategy</h2>
              <div className="flex justify-center mb-8">
                <UndrawStrategy className="w-60 h-60" />
              </div>
              <p>言葉だけでは何も変わらないので、とりあえず実践あるのみです。</p>
              <p>まずは資格の取得・個人開発の二軸戦略を考えています。</p>
              <br />
              <p>それぞれの役割として、
              </p><ul>
                <li>・<span className="font-bold">資格</span>：知識・開発作法のインプットと自分が何者であるかの証明書</li>
                <li>・<span className="font-bold">個人開発</span>：知識のアウトプットと経験知の蓄積、目標の実現可能力</li>
              </ul>
              <p>の役割を期待しています。</p>
              <p>これらを踏まえとりあえず、将来の目標の第一歩として本ポートフォリオを作成したという経緯です。</p>
              <br />
              <p>この後は、作りたいものを一つずつ積み上げて作っていきたいと思います。</p>
              <p>最近<a className="underline px-[0.4rem] text-blue-600" href="https://blog.craftz.dog/" target="_blank">InkDrop制作者さんの記事</a>に影響を受けプログラマ向けのエディタを作成したい欲が沸き上がってきています。</p>
              <p>個人開発者として、何を大事にし、どの部分を切り捨てるか。といった経験を通した生々しい体験談は一人のエンジニアとして胸を熱くなりました。（おすすめです！）</p>
              <br />
              <p>最近応用情報とPython資格が取れたので、1月末にAWS SAA、春にIPAの高度資格なんかも取りたいなと画策しています。</p>
              <br />
              <p>進捗があり次第、本ブログに掲載しますね。</p>
            </section>
            <section className="mb-32">
              <h2 className="text-center font-bold text-2xl my-8">character</h2>
              <div className="flex justify-center mb-8">
                <UndrawHomeCinema className="w-60 h-60" />
              </div>
              <p className="text-2xl mb-4">最後に私について軽く自己紹介</p>
              <p>■ 好きな言語・ライブラリ</p>
              <div className="pl-4">
                <ul>
                  <li>・フロントエンド：React,Typescript、TailwindCss(vanillaCSSに戻れません)</li>
                  <li>・バックエンド：機能実装において、言語別・FW別の違いが正直あまりよく分かっていないです。今はまだ、要求を満たせるものを使えればいいといったスタンス。</li>                </ul>
              </div>
              <p>■ 興味のある技術スタック（やりたいことが山盛りです）</p>
              <div className="pl-4">
                <ul>
                  <li>・モダンフロントエンド：TanstackStart、Nuxt</li>
                  <li>・バックエンド技術：Python（LLM開発）→Django,Flask（FW）</li>
                  <li>・静的サイト構築：Astro（githubページに作成したアプリサイト作ったり。。。）</li>
                  <li>・デスクトップ開発：Rust,Tauri,Electron</li>
                  <li>・スマホアプリ開発：ReactNative（デスクトップアプリの言語との親和性を考慮）</li>
                  <li>・生成AIツール：cursor(課金するか悩み中)、Claude、Devin</li>
                </ul>
              </div>
              <p>■ 好きなこと</p>
              <div className="pl-4">
                <ul>
                  <li>・アプリ実装の動作確認</li>
                  <li>・バグの原因が判明した瞬間</li>
                  <li>・おいしいものを食べること</li>
                </ul>
              </div>
              <p>■ 休暇の過ごし方：</p>
              <div className="pl-4">
                <ul>
                  <li>・家に引きこもって開発・勉強をしたり、筋トレなどをしています。</li>
                  <li>・運転免許をまだ持っていないので、暇な時間を見つけて取得して、休暇にドライブなどしたいですね。</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <PgIconsBg />
    </>
  )
}

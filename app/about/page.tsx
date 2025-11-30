import { UndrawBlogReport, UndrawCodeThinking, UndrawCommunication, UndrawDrinkCoffee, UndrawHello, UndrawHomeCinema, UndrawInTheZone, UndrawProfessor, UndrawStrategy } from "features/common/components/icons";

export default function Page() {
  return (
    <>
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
            <p>将来はフルスタックエンジニアとして開発に関わりたいと考えています。</p>
            <p>現在はReactやNext.jsによるフロントエンド開発に加え、ローカルLLMを活用したAI開発・デプロイにも熱く関心を持っています。</p>
            <p>フロントエンド開発は、目の前で動く体験を形にできる楽しさがあり、ものづくりの喜びを直に感じられるところが好きです。一方で、AI開発ではモデルの学習やスケーラブルな運用のためにバックエンドやインフラの知識が欠かせません。業界の動きを見ても、AIやLLMを前提とした開発能力は、これからのエンジニアとして生き残り、価値を高めるために必須だと痛感しています。</p>
            <p>だからこそ、私はフロントエンドからバックエンド、AI開発まで幅広く学び、ユーザーにとって魅力的で先進的な体験を生み出せるフルスタックエンジニアを目指します。情熱をもって挑戦し、業界の変化をチャンスに変えていきたいと考えています。</p>
          </section>

          <section className="mb-32">
            <h2 className="text-center font-bold text-2xl my-8">Strategy</h2>
            <div className="flex justify-center mb-8">
              <UndrawStrategy className="w-60 h-60" />
            </div>
            <p>言葉だけでは何も変わらないので、とりあえず実践あるのみです。</p>
            <p>とりあえずは資格の取得・個人開発の二軸戦略を考えています。</p>
            <p>それぞれの役割として、
            </p><ul>
              <li>・資格：知識・作法のインプットと自分が何者であるかの証明書</li>
              <li>・個人開発：知識のアウトプットと経験知の蓄積、目標の実現可能力</li>
            </ul>
            <p>の役割を期待しています。</p>
            <p>それらを踏まえまず、将来の目標の第一歩として本ポートフォリオを作成したという経緯にります。</p>
            <p>この後は2025年今年中に、TanstackStart×FastAPIで何かアプリを1件作成したいと考えています。</p>
            <p>また直近ではPython資格も取得予定です。</p>
            <p>進捗があり次第、本ブログに掲載しますね。</p>
          </section>

          <section className="mb-32">
            <h2 className="text-center font-bold text-2xl my-8">character</h2>
            <div className="flex justify-center mb-8">
              <UndrawHomeCinema className="w-60 h-60" />
            </div>
            <p>最後に私について軽く自己紹介</p>
            <p>好きな言語・ライブラリ：TS,React</p>
            <p>興味のある言語・ライブラリ：TanstackStart、Rust,Tauri（デスクトップアプリ開発）、Python（LLM開発）</p>
            <p>好きなこと：おいしいご飯を食べること</p>
            <p>休暇の過ごし方：家に引きこもって開発・勉強をしたり、筋トレなどをしています。自分の部屋の中で人生を完結させられたら良いのにと考えるくらい外に出ることは稀です。</p>
            <p></p>
          </section>
        </div>
      </div>
    </>
  )
}

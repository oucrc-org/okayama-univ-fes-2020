import Layout from "../components/Layout";

export default function Committee() {

    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-green-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto">
                            <h1 className="text-xl text-white mb-12 mt-12 font-serif">学祭実行委員長のメッセージ</h1>
                            <iframe className="mb-12" width="100%" height="360px"
                                    src="https://www.youtube.com/embed/GaMkXAm9fvo" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-green-600 text-xl font-bold mb-3 font-serif">学祭実行委員について</h2>
                        <p className="mb-6">岡山大学祭実行委員会は1回生25名、2回生25名、3回生10名で2回生が主導となり活動しています。また、構成員をまとめる「三役」、団体企画を運営する「団体企画」、バザー店舗を管理する「バザー」、大学構内の美化に務める「環境美化」、外部の企業との連携の要となる「広報」、アーティストライブを運営する「プロコンサート」、団体企画の音響や実行委員会の企画を補助する「本部企画」の7役職で構成されています。今年度は悔しくもバザー出店やライブ等は中止となってしまいましたが、次年度以降の運営に向け、各役職の仕事をそれぞれ全うしています。構成員は個性豊かな人が多く、イベント等ではみんなで楽しんでいますが、大学祭のこととなると打って変わり、真面目かつ旺盛な責任感で仕事に取り組んでいます。そんなメリハリのついた集団だからこそ、毎年３万人以上を動員する壮大な大学祭を運営できるのだと思います。そんな岡山大学祭実行委員会が作る大学祭をお楽しみください。
                        </p>
                        <h2 className="text-green-600 text-xl font-bold mb-3 font-serif">大学祭テーマについて</h2>
                        <p className="mb-6">2020年度岡山大学祭のテーマは「祭旬先取り岡大祭～オンラインでもまかしん祭～」です。新型コロナウイルスが猛威を振るう中、人と人とが会わずともコミュニケーションをとることができる要素として「オンライン」が注目されています。そんな「最旬」なオンラインを「先取り」して、参加していただいた方々や、視聴してくださった皆様に大学祭を楽しんでいただきたいという思いが込められています。今までにない新たな岡山大学祭を心行くまでお楽しみください。
                        </p>
                        <img src="/committee_detail.jpg" alt="学祭実行委員"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
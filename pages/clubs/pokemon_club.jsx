import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import Link from "next/link";

export default function Club({club}) {
    return (
        <Layout>

            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto ">
                            <h1 className="text-xl text-white mb-12 mt-12 w-3/4">{club.title}</h1>
                            <img className="object-cover mb-6"
                                 src={club.main_image ? 'https://drive.google.com/uc?export=view&id=' + club.main_image + '&usp=sharing' : "/1080x720.png"}
                                 alt="サークルの画像"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">この団体について</h2>
                        <p className="mb-3">こんにちは!岡山大学ポケモンサークル「にほんばれ」です。</p>
                        <p className="mb-3">にほんばれは、毎週木曜日に岡山北公民館で活動しています。活動内容としては、ポケットモンスターシリーズ最新作ポケモンソード・シールドでの対戦やレイドバトルを行っています。興味のある方は是非一度お越しください!そして、毎年全国ポケモンサークルリーグ(通称:PCL)へ参加しています。また、昨年度は全国ポケモンサークル選手権(通称:全ポケ)に参加しました。その結果はなんと!PCL
                            では 2019 年に準優勝、全ポケでは 3 チーム 出場し 2 位、4 位、さらには best 8 入賞と非常に良い成績を収めることができました。</p>
                        <ul className="grid grid-cols-2">
                            <li className="p-3">
                                <img src="/pokemon_club/pokemon_club_1.jpg" alt=""/>
                            </li>
                            <li className="p-3">
                                <img src="/pokemon_club/pokemon_club_2.jpg" alt=""/>
                            </li>
                        </ul>
                        <p className="mb-3">そして、ソード・シールドになってからは様々な仲間大会が開催されています。その中には普段はできないようなルールのものもあり、メンバーで考察して挑戦するなんてことも行っています。</p>
                        <p className="mb-3">ここまで、サークルがソード・シールドで行っていることを中心に書いていましたが、もちろんポケモンカードやポケモン GO
                            といったことをしている人もいます。夏季休業中に Youtube で行った企画「100 勝 RTA」(ランクマッチで 100
                            勝するまでにかかる時間を測る企画)の裏でポリゴンの色違いを捕まえるなんてこともありました。このように、楽しく活動しているので興味のある方はぜひお越しください!</p>
                        <p className="mb-3">一通り紹介を終えたところで、ポケモンサークルということでポケモンに関するクイズを用意しました!ポケモンの知識に自信のある方はぜひ挑戦していってください。
                            クイズの答えはページの一番下にあります。 キミは何問正解できるかな?</p>
                        <p className="mb-5">Q1.2020 年 10 月現在、営業している店舗は 14
                            店ある、ポケモンセンターで売られている商品をメインに、一部限定商品も販売している、イオンモール岡山の 3F にも出店しているお店は何でしょう?</p>
                        <p>次は、12 月 25 日に公開が決まった映画から出題!</p>
                        <p className="mb-5">Q2.「森の掟に反してココを育てることに決めた幻のポケモン。」という紹介が映画公式サイトで公開されている、天気が晴れだと状態異常にならない特性「リーフガード」をもつ、映画『劇場版ポケットモンスター
                            ココ』に登場するポケモンとは何でしょう?</p>
                        <p>最後は、とあるメンバーを象徴するポケモンに関する問題!</p>
                        <p className="mb-5">Q3.120 番道路の池に浮かぶ、わざマシン「にほんばれ」が落ちていることで知られる、ゲーム『オメガルビー/アルファサファイア』では地下 3
                            階が追加され、ヒードランが捕まえられるようになった洞窟とは何でしょう?</p>
                        <p className="mb-3">これで、クイズは終わりです。全問正解できた人は友だちに自慢できるかも?</p>
                        <p className="mb-3">さて、先日 DLC 第 2
                            弾である冠の雪原が配信されました!発表されたときには冬配信予定だったこともあり、待ちに待っていた方も多いのではないでしょうか。みなさんも新たに追加されたポケモンを使いたくてうずうずしていることでしょう。
                            でも、新しいポケモンをどう使っていいかわからない? 大丈夫!にほんばれのブログにて冠の雪原が解禁された新環境の考察を行っております。</p>
                        <p className="mb-3">また、考察とともにメンバーが考えたパーティをレンタルパーティとして公開しており
                            ます。まだ、パーティができていない方や作るのが面倒という方はぜひ見ていってください!</p>
                        <p className="mb-3">にほんばれのブログはこちら：
                            <Link href="//t.co/aWMWM7BKJr?amp=1">
                                <a className="text-blue-600">https://t.co/aWMWM7BKJr?amp=1</a>
                            </Link>
                        </p>
                        <p className="mb-3">Twitter の方では活動の告知を行っています。
                            <Link href="//twitter.com/_nihonbare_?s=20">
                                <a className="text-blue-600">https://twitter.com/_nihonbare_?s=20</a>
                            </Link>
                        </p>
                        <p className="mb-3">また、You tube では長期休業中や不定期で配信を行っています。
                            <Link href="//www.youtube.com/channel/UCMScwb0p1WfpE-4KrLa02DQ">
                                <a className="text-blue-600">https://www.youtube.com/channel/UCMScwb0p1WfpE-4KrLa02DQ</a>
                            </Link>
                        </p>
                        <p className="mb-12">活動でも日々考察を行なっているので興味がある方はぜひ一度活動に足を運んでみてください。にほんばれはいつでもサークルメンバーを歓迎します。</p>
                        <p>クイズの答え</p>
                        <p> Q1,ポケモンストア Q2,ザルード Q3, ひでりのいわと(日照りの岩戸)</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const club = await getClubWithTitle('pokemon_club');
    return {
        props: {
            club: club
        }
    }
}
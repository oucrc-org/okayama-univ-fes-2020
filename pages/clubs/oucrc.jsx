import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

export default function Club({club}) {
    return (
        <Layout>
            <div className={"shutter"}></div>
            <div className={"relative eyecatch p-20"}>
                <div className={"border-4 w-auto h-full rounded border-rainbow"}></div>
                <img src="/logo_oucrc.png"
                     className={"absolute m-auto top-0 bottom-0 left-0 right-0 bg-white px-20 py-4"}/>
            </div>
            <div className={"center-pc mb-20 mt-20 pt-20 pb-20 relative px-8"}>
                <img src={"/oucrc/amiga_500.png"}
                     className={"absolute z-minus1 m-auto top-0 bottom-0 left-0 right-0 opacity-25"}/>
                <p className={"p"}>OUCRC</p>
                <h1 className={"h1 mt-6 mb-12"}>ようこそ、電算研です。</h1>
                <p className={"p text-gray-900"}>このサークルでは主に、「PC等を使ったものづくり」を行っています。<br/>
                    スマートフォンアプリの開発。3Dプリンターを用いた造形。Webサイトの作成<br/>
                    Unityを用いたゲーム作成。画像、動画編集。電子工作...etc.<br/>
                    作った作品を学祭で展示したり、コミケで頒布することもあります。
                </p>
                <p className={"p text-gray-800 mt-20"}>今回のこの学祭サイトの制作を担当させていただきました。</p>
            </div>
            <div className={"center-pc px-4 pt-20 pb-20 bushi"}>
                <h2 className={"h2 text-blue-900 bg-white p-4 mb-20 mt-20"}>過去に配布した部誌、の表紙。</h2>
                <div className={"flex flex-wrap flex-row max max-w-screen-md m-auto"}>
                    <div className={"w-1/2 mb-20 pr-4"}>
                        <img src={"/oucrc/bushi_c96.png"}/>
                        <p className={"bg-white mt-4 p-4"}>C96</p>
                    </div>
                    <div className={"w-1/2 mt-20 pl-4"}>
                        <p className={"bg-white mb-4 p-4"}>C97</p>
                        <img src={"/oucrc/IMG_20180715_0001.jpg"}/>
                    </div>
                </div>
            </div>
            <div className={"center-pc px-4 pt-20 pb-20 okiryo mx-4 my-8"}>
                <h2 className={"h2 mt-4 mb-20 text-green-900 px-4"}><span
                    className={"bg-white p-2"}>部員、オキリョウの作品が飛んできた！</span></h2>
                <div className={"flex flex-wrap px-8"}>
                    <img src={"/oucrc/okiryo/okiryo1 (1).png"} className={"sm:w-full md:w-1/3"}/>
                    <img src={"/oucrc/okiryo/okiryo1 (2).png"} className={"sm:w-full md:w-1/3"}/>
                    <img src={"/oucrc/okiryo/okiryo1 (3).png"} className={"sm:w-full md:w-1/3"}/>
                </div>
                <div className={"text-left bg-black text-white mt-12 rounded"}>
                    <div className={"flex flex-wrap px-8 "}>
                        <div className={"sm:w-full md:w-1/2 pb-8"}>
                            <h2 className={"h2 px-4 py-8 text-green-400"}>買い物の友</h2>
                            <ul className={"font-bold"}>
                                <li className={"p-4"}>買い物リストを作成、管理できるスマホアプリ</li>
                                <li className={"p-4"}><span className={"text-blue-400"}>制作理由：</span>いろいろな項目を打つものが多く、チェックと文字だけのものが欲しかったから。また、自身の技術向上のため
                                </li>
                                <li className={"p-4"}><span className={"text-blue-400"}>大変だったこと：</span>初めてのAndroidアプリだったため勝手がわからず、UIやコードを何度も作り直しながら作成したこと
                                </li>
                                <li className={"p-4"}><span className={"text-blue-400"}>うれしかったこと：</span>思った通りに動いてくれるようになったこと
                                </li>
                                <li className={"p-4"}><span className={"text-blue-400"}>次回へ：</span>遠回りなコードをよく書いていたので、もう少しスリムなコードをかけるようにしたい。
                                </li>
                            </ul>
                        </div>
                        <div className={"sm:w-full md:w-1/2 m-auto"}>
                            <img src={"/oucrc/amiga_500.png"} className={"m-auto"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-200 d2"}>
                <h2 className={"center-pc h2 text-gray-800 py-20 px-4"}>部員、2Dの作品<br/>びゅーーーん</h2>
                <div className={"flex flex-wrap"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>ミニチュアサイズのロボットハンド</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由</span><br/>誰もミニチュアサイズのロボットハンドを製作していなかったため。つまり未開拓分野。3DプリンタとFusion360。3Dプリンタは今では旧式のEnder-2で作成。
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間</span><br/>設計に3か月 印刷に3時間
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと</span><br/>組み立てに用いるピンが0.8mm以下のものしか使えず、コーナンで一日中探し回ったこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと</span><br/>リンク機構が正常に動作したとき
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想</span><br/>実は人工筋肉と並行して開発してた。人工筋肉の方は動作はしたけれど、動作環境が200度とかになって実用性0の代物だったので没に
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/1.jpg"} className={"img-clip"}/>
                    </div>
                </div>
                <div className={"flex flex-wrap"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>ペルチェ素子を用いた冷却装置の実験</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由：</span>電気通信系学科が1年時に行う研究で電気冷却装置をテーマにしたため
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間：</span>2か月
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと：</span>水冷じゃないと放熱が間に合わないこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと：</span>教授受けが良かった
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想：</span>水冷式でマイナス15度まで冷却できる
                                水を垂らすと数秒で凍るほど 動作時には空気中の水分が霜になって顕現する
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/4.jpg"} className={"img-clip"}/>
                    </div>
                </div>
                <div className={"flex flex-wrap"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>3Dプリンタを用いたギアボックス</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由</span><br/>強力な動力が必要だったため。買うと高いし
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間</span><br/>1か月ほど
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと</span><br/>出力用ギアの設計が大変だった。結局六角ナットを埋め込むようにして製作してる
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと</span><br/>目論見通りの出力を得られたこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想</span><br/>お金かけずにギアボックス作れるのは大きいなと思う
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/5.jpg"} className={"img-clip"}/>
                    </div>
                </div>
                <div className={"flex flex-wrap mb-12"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>パワーLED用の定電流回路（1基板上に容量1Wが3回路)
                            間欠点灯機能も付けてるから省エネ</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由：</span>夜道が暗いので
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間：</span>10日
                            </li>

                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと：</span>水冷じゃないと放熱が間に合わないこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと：</span>教授受けが良かった
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想：</span>水冷式でマイナス15度まで冷却できる
                                水を垂らすと数秒で凍るほど 動作時には空気中の水分が霜になって顕現する
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/7.jpg"} className={"img-clip"}/>
                    </div>
                </div>
                <div className={"flex flex-wrap"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>カイワレ大根の水耕栽培装置</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由</span><br/>野菜が食べたい
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間</span><br/>二週間ほど
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと</span><br/>かいわれが育ちすぎて食べ切れないこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと</span><br/>かいわれがすくすくと育つこと
                                真夏でも水替え不要。気化熱を利用して冷却しているので暑さにも耐えられる
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想</span><br/>かいわれ買ったほうが安い
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/8.jpg"} className={"img-clip"}/>
                    </div>
                </div>
                <div className={"flex flex-wrap"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>電界結合方式の無線送電装置</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由：</span>卒業研究の先取り。未開の分野なので
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間：</span>実験中につき未定。院まで持っていくつもり
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと：</span>昇圧用の変圧器を手に入れるためDAISOを回ってニッケル水素電池の充電器を買い漁ったこと（ばらすと変圧器が取り出せる）
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと：</span>実際に電力伝送に成功したこと。個人レベルでこの実験をやって電力伝送までできた人は、軽く調べた限りでは殆どいない。検索結果0。
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想：</span>今使っている変圧器ではスペック的にも大電力を送れないのでどうするか検討中。効率の向上も課題。（今でAC-AC効率30%くらい）
                                ちなみに周波数は23kHz。こんな低い周波数でこの方式を用いて電力伝送できた例はないので威張れるかもしれない。
                                ま、とにかく変圧器の問題を何とかしたい。
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/9.jpg"} className={"img-clip"}/>
                    </div>
                </div>

            </div>
            <div className={"center-pc px-4 pt-20 pb-20 bg-yellow-200 mx-4 my-8"}>
                <h2 className={"h2 mt-6 mb-6"}>２回生の作品がお披露目です。</h2>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const club = await getClubWithTitle('oucrc');
    return {
        props: {
            club: club
        }
    }
}
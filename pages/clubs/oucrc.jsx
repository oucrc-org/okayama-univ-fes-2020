import Layout from '../../components/Layout'
import { getClubWithTitle } from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

export default function Club({ club }) {
    return (
        <Layout>
            <div className={"shutter"}></div>
            <div className={"relative eyecatch p-20"}>
                <div className={"border-4 w-auto h-full rounded border-rainbow"}></div>
                <img src="/logo_oucrc.png"
                    className={"absolute m-auto top-0 bottom-0 left-0 right-0 bg-white px-20 py-4"} alt={"oucrcのロゴ"} />
            </div>
            <div className={"center-pc mb-20 mt-20 pt-20 pb-20 relative px-8"}>
                <img src={"/oucrc/amiga_500.png"}
                    className={"absolute z-minus1 m-auto top-0 bottom-0 left-0 right-0 opacity-25"} />
                <p className={"p"}>OUCRC</p>
                <h1 className={"h1 mt-6 mb-12"}>ようこそ、電算研です。</h1>
                <p className={"p text-gray-900"}>このサークルでは主に、「PC等を使ったものづくり」を行っています。<br />
                    スマートフォンアプリの開発。3Dプリンターを用いた造形。Webサイトの作成<br />
                    Unityを用いたゲーム作成。画像、動画編集。電子工作...etc.<br />
                    作った作品を学祭で展示したり、コミケで頒布することもあります。
                </p>
                <p className={"p text-gray-800 mt-20"}>今回のこの学祭サイトの制作を担当させていただきました。</p>
            </div>
            <div className={"center-pc px-4 pt-20 pb-20 bushi"}>
                <h2 className={"h2 text-blue-900 bg-white p-4 mb-20 mt-20"}>過去に配布した部誌、の表紙。</h2>
                <div className={"flex flex-wrap flex-row max max-w-screen-md m-auto"}>
                    <div className={"w-1/2 mb-20 pr-4 text-center font-bold"}>
                        <img src={"/oucrc/bushi_c96.png"} alt={"c96表紙"} />
                        <p className={"bg-white mt-4 p-4"}>C96</p>
                    </div>
                    <div className={"w-1/2 mt-20 pl-4 text-center font-bold"}>
                        <p className={"bg-white mb-4 p-4"}>C97</p>
                        <img src={"/oucrc/IMG_20180715_0001.jpg"} alt={"c97表紙"} />
                    </div>
                </div>
            </div>
            <div className={"center-pc px-4 pt-20 pb-20 okiryo mx-4 my-8"}>
                <h2 className={"h2 mt-4 mb-20 text-green-900 px-4"}><span
                    className={"bg-white p-2"}>部員、オキリョウの作品が飛んできた！</span></h2>
                <div className={"flex flex-wrap px-8"}>
                    <img src={"/oucrc/okiryo/okiryo1 (1).png"} className={"sm:w-full md:w-1/3"} />
                    <img src={"/oucrc/okiryo/okiryo1 (2).png"} className={"sm:w-full md:w-1/3"} />
                    <img src={"/oucrc/okiryo/okiryo1 (3).png"} className={"sm:w-full md:w-1/3"} />
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
                                <li>
                                    <a href={"https://play.google.com/store/apps/details?id=com.wsr.shopping_friend"} className={"text-red-500 p-4"}>ダウンロードはコチラから</a>
                                </li>
                            </ul>
                        </div>
                        <div className={"sm:w-full md:w-1/2 m-auto"}>
                            <img src={"/oucrc/amiga_500.png"} className={"m-auto"} alt={"買い物の友"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-200 d2"}>
                <h2 className={"h2 text-gray-800 py-20 px-20"}>部員、2Dの作品びゅーーーん</h2>
                <div className={"flex flex-wrap mb-12"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>ミニチュアサイズのロボットハンド</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由</span><br />誰もミニチュアサイズのロボットハンドを製作していなかったため。つまり未開拓分野。3DプリンタとFusion360。3Dプリンタは今では旧式のEnder-2で作成。
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間</span><br />設計に3か月 印刷に3時間
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと</span><br />組み立てに用いるピンが0.8mm以下のものしか使えず、コーナンで一日中探し回ったこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと</span><br />リンク機構が正常に動作したとき
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想</span><br />実は人工筋肉と並行して開発してた。人工筋肉の方は動作はしたけれど、動作環境が200度とかになって実用性0の代物だったので没に
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/1.jpg"} className={"img-clip"} alt={"ミニチュアサイズのロボットハンド"} />
                    </div>
                </div>
                <div className={"flex flex-wrap mb-12"}>
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
                        <img src={"/oucrc/2d/4.jpg"} className={"img-clip"} alt={"ペルチェ素子を用いた冷却装置の実験"} />
                    </div>
                </div>
                <div className={"flex flex-wrap mb-12"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>3Dプリンタを用いたギアボックス</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由</span><br />強力な動力が必要だったため。買うと高いし
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間</span><br />1か月ほど
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと</span><br />出力用ギアの設計が大変だった。結局六角ナットを埋め込むようにして製作してる
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと</span><br />目論見通りの出力を得られたこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想</span><br />お金かけずにギアボックス作れるのは大きいなと思う
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/5.jpg"} className={"img-clip"} alt={"3Dプリンタを用いたギアボックス"} />
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
                        <img src={"/oucrc/2d/7.jpg"} className={"img-clip"} alt={"パワーLED用の定電流回路（1基板上に容量1Wが3回路)間欠点灯機能も付けてるから省エネ"} />
                    </div>
                </div>
                <div className={"flex flex-wrap mb-12"}>
                    <div className={"sm:w-full md:w-1/2 md:p-20"}>
                        <h3 className={"h3 px-8 py-4 text-gray-800 bg-white"}>カイワレ大根の水耕栽培装置</h3>
                        <ul className={"font-bold p-8"}>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>制作理由</span><br />野菜が食べたい
                            </li>
                            <li className={"py-2"}><span
                                className={"text-green-600 bg-white"}>期間</span><br />二週間ほど
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>大変だったこと</span><br />かいわれが育ちすぎて食べ切れないこと
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>うれしかったこと</span><br />かいわれがすくすくと育つこと
                                真夏でも水替え不要。気化熱を利用して冷却しているので暑さにも耐えられる
                            </li>
                            <li className={"py-2"}><span className={"text-green-600 bg-white"}>感想</span><br />かいわれ買ったほうが安い
                            </li>
                        </ul>
                    </div>
                    <div className={"sm:w-full md:w-1/2"}>
                        <img src={"/oucrc/2d/8.jpg"} className={"img-clip"} alt={"カイワレ大根の水耕栽培装置"} />
                    </div>
                </div>
                <div className={"flex flex-wrap mb-12"}>
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
                        <img src={"/oucrc/2d/9.jpg"} className={"img-clip"} alt={"電界結合方式の無線送電装置"} />
                    </div>
                </div>

            </div>
            <div className={"two_kai py-20 mt-20 text-pink-600"}>
                <h2 className={"h2 center-pc"}><span className={"bg-white"}>２回生の作品がお披露目です。</span></h2>
            </div>
            <div className={"w-full vivace overflow-y-scroll relative"}>
                <div className={"absolute z-10 w-full px-12 lg:px-48"}>
                    <h2 className={"h2 mt-24 text-white text-shadow-lightblue center-pc"}>VIVACE ヴィヴァーチェ</h2>
                    <p className={"mt-48 text-bold text-shadow-white center-pc"}>
                        スマートフォンとPC両方でプレイ可能(予定)の音ゲーです。<br />
                        降ってきたノーツをタッチパネルかキーボードで叩くよくある感じのアレです。<br />
                        <br />
                        使用言語はC#(Unity)<br />
                        <br />
                        Unityでゲームを開発してみたかったのと、せっかくなので部内で作曲をしている人の曲を使いたかったのとでこんな感じの流れになった気がしてます(うろ覚え)。<br />
                        <br />
                        制作者はいけちぃと智重とふぉです。(楽曲は他にも数名)<br />
                    </p>
                    <p className={"mt-48 text-bold text-shadow-white mb-16 center-pc"}>
                        制作期間は放置してたのも含めると5ヶ月超えてると思います<br />
                        <br />
                        制作環境は各自VSCodeにGit導入し，Discordでやりとりしてたのでオンラインが主です<br />
                        <br />
                        Unity初心者しかいなかったのでUnityの仕様を理解するのが一番しんどかったです。<br />
                        まだちゃんと動いてないのもそれが原因<br />
                        <br />
                        感想ofふぉ：スコアの加点を決める式作るの面白くて好きだった<br />
                        <br />
                        <br />
                        曲、もーちょい増えたり変更されたりします
                    </p>
                    <div className={"py-20"}>
                        <h3 className={"h3 text-white text-shadow-black my-8 text-center"}>楽曲リスト</h3>
                        <div className={"overflow-x-auto"}>
                            <table className="bg-black table-fixed text-white m-auto w-980px">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">作曲者</th>
                                        <th className="px-4 py-2">ジャンル</th>
                                        <th className="px-4 py-2">コメント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">Quiet Morning</td>
                                        <td className="border px-4 py-2">智重</td>
                                        <td className="border px-4 py-2">Free style</td>
                                        <td className="border px-4 py-2">Vivace Title Themeですが、プレイ楽曲にもなっています！</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">未来構想図</td>
                                        <td className="border px-4 py-2">智重</td>
                                        <td className="border px-4 py-2">Free style</td>
                                        <td className="border px-4 py-2">サビのバイオリンとピアノに注目です。1回目と2回目の繰り返しでは楽器の演奏するパートが入れ替わっています。これは元々イメージの似ている2つの曲を統合して1曲にしたためです。未来への展望をイメージしています。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Kyubi</td>
                                        <td className="border px-4 py-2">pho</td>
                                        <td className="border px-4 py-2">Hardcore</td>
                                        <td className="border px-4 py-2">九尾の狐です。強そう。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">反転孤独線</td>
                                        <td className="border px-4 py-2">pho feat. 重音テト</td>
                                        <td className="border px-4 py-2">J-pop</td>
                                        <td className="border px-4 py-2">窓際、色褪せた一枚の絵に、もう二度と戻れはしないとしても。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">春の訪れ</td>
                                        <td className="border px-4 py-2">智重</td>
                                        <td className="border px-4 py-2">Free style</td>
                                        <td className="border px-4 py-2">即興作曲第1弾。お風呂場で考えました。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">終点目指して</td>
                                        <td className="border px-4 py-2">智重</td>
                                        <td className="border px-4 py-2">Free style</td>
                                        <td className="border px-4 py-2">とにかく高みを目指す「目標」といったものをイメージしています。テンポも良く手拍子も刻めます。サビでは低音のギターが少し先走り、軽やかな足取りをイメージ。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">淡色</td>
                                        <td className="border px-4 py-2">pho feat. 重音テト</td>
                                        <td className="border px-4 py-2">J-pop</td>
                                        <td className="border px-4 py-2">きっと次の春に、また。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Floating Blue (Prototype)</td>
                                        <td className="border px-4 py-2">pho</td>
                                        <td className="border px-4 py-2">Hardstyle</td>
                                        <td className="border px-4 py-2">ハードスタイルです。途中でキック変えてくる曲ってずるいですよね。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">疾風</td>
                                        <td className="border px-4 py-2">智重</td>
                                        <td className="border px-4 py-2">Free style</td>
                                        <td className="border px-4 py-2">即興作曲第2弾。ピアノ適当に弾いてたらできました。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Progress</td>
                                        <td className="border px-4 py-2">智重</td>
                                        <td className="border px-4 py-2">Free style</td>
                                        <td className="border px-4 py-2">妙に合唱曲っぽいです。バイオリンが美しい音色を奏でます。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">CryStatuS</td>
                                        <td className="border px-4 py-2">根菜</td>
                                        <td className="border px-4 py-2">Hardcore</td>
                                        <td className="border px-4 py-2">タイトルは「クリステーツ」と読みます。早くて速い曲を作ったので楽しんでいただければ。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Maiden Voyage</td>
                                        <td className="border px-4 py-2">Kade</td>
                                        <td className="border px-4 py-2">Modern Jazz Rock</td>
                                        <td className="border px-4 py-2">初めて曲を作りました。ジャズロックはいいぞ。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Filmy Ice</td>
                                        <td className="border px-4 py-2">Kade</td>
                                        <td className="border px-4 py-2">Jazz & Math Rock</td>
                                        <td className="border px-4 py-2">マスロックみたいな変拍子で構成はジャズって面白そうやなと思って作りました。難産。</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">シャイニングスター</td>
                                        <td className="border px-4 py-2">魔王魂</td>
                                        <td className="border px-4 py-2">Pops</td>
                                        <td className="border px-4 py-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Burning Heart</td>
                                        <td className="border px-4 py-2">魔王魂</td>
                                        <td className="border px-4 py-2">Pops</td>
                                        <td className="border px-4 py-2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={"video mt-12"}>
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/pBayNdStr0M" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                        <h3 className={"h3 text-white text-shadow-black my-12 text-center"}>ゲームイメージ画像</h3>
                        <div className={"flex flex-wrap mb-12"}>
                            <div className={"sm:w-full md:w-1/2 m-auto p-4"}>
                                <img src={"/oucrc/two/2.jpg"} alt={"vivace2"} />
                            </div>
                            <div className={"sm:w-full md:w-1/2 m-auto p-4"}>
                                <img src={"/oucrc/two/3.jpg"} alt={"vivace3"} />
                            </div>
                        </div>
                        <div className="mt-2 mb-3 text-center">
                            <a href="https://drive.google.com/drive/folders/169QtYdOC4EgHEejDCZfhyG95BKes1v8i?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-900 px-5 py-4 rounded-md text-white">今すぐプレイ！</a>
                        </div>
                    </div>
                </div>
                <img className={"w-full h-full object-cover opacity-50 sticky top-0"} src={"/oucrc/two/1.jpg"} alt={"vivace"} />
            </div>
            <div className={"bg-white py-12"}>
                <h3 className={"h3 text-pink-600 text-center mb-12"}>別のゲームも製作中！？</h3>
                <div className={"flex flex-wrap"}>
                    <div className={"sm:w-full md:w-1/2 m-auto p-4"}>
                        <img src={"/oucrc/two/4.png"} alt={"game1"} />
                    </div>
                    <div className={"sm:w-full md:w-1/2 m-auto p-4"}>
                        <img src={"/oucrc/two/5.png"} alt={"game2"} />
                    </div>
                    <div className={"sm:w-full md:w-1/2 m-auto p-4"}>
                        <img src={"/oucrc/two/6.jpg"} alt={"game3"} />
                    </div>
                    <div className={"sm:w-full md:w-1/2 m-auto p-4"}>
                        <img src={"/oucrc/two/7.jpg"} alt={"game4"} />
                    </div>
                </div>
            </div>
            <div className={"py-20 center-pc two_kai"}>
                <h2 className={"h2 px-4 py-8"}><span className={"bg-white"}>OUCRCに興味をお持ちですか？<br />公式サイトもおすすめです</span></h2>
                <a href={"https://oucrc.net"}>
                    <img src="/logo_oucrc.png" className={"m-auto bg-white mt-20 p-4"} alt={"oucrcのロゴ"} />
                </a>
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
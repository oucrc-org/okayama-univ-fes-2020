import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

export default function Club({club}) {
    return (
        <Layout>
            <div className={"relative eyecatch p-20"}>
                <div className={"border-4 w-auto h-full rounded border-rainbow"}></div>
                <img src="/logo_oucrc.png"
                     className={"absolute m-auto top-0 bottom-0 left-0 right-0 bg-white px-20 py-4"}/>
            </div>
            <div className={"center-pc mb-20 mt-20 pt-20 pb-20 relative"}>
                <img src={"/oucrc/amiga_500.png"}
                     className={"absolute z-minus1 m-auto top-0 bottom-0 left-0 right-0 opacity-25"}/>
                <p className={"p"}>OUCRC</p>
                <h1 className={"h1 mt-6 mb-12"}>ようこそ、電算研です。</h1>
                <p className={"p text-gray-800"}>このサークルでは主に、「PC等を使ったものづくり」を行っています。<br/>
                    スマートフォンアプリの開発。3Dプリンターを用いた造形。Webサイトの作成<br/>
                    Unityを用いたゲーム作成。画像、動画編集。電子工作...etc.<br/>
                    作った作品を学祭で展示したり、コミケで頒布することもあります。
                </p>
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
            <div className={"center-pc px-8 pt-20 pb-20 bg-gray-200"}>
                <h2 className={"h2 mt-6 mb-6"}>部員、2Dの作品<br/>びゅーーーーーーーん</h2>
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
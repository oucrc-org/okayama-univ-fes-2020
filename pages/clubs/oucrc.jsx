import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

export default function Club({club}) {
    return (
        <Layout>
            <div className={"h-screen relative"}>
                <img src="/logo_oucrc.png" className={"absolute m-auto top-0 bottom-0 left-0 right-0"}/>
            </div>
            <div className={"center-pc px-4 mb-16"}>
                <p className={"p"}>OUCRC</p>
                <h1 className={"h1 mt-6 mb-12"}>ようこそ、電算研です。</h1>
                <p className={"p text-gray-600"}>このサークルでは主に、「PC等を使ったものづくり」を行っています。<br/>
                    スマートフォンアプリの開発。3Dプリンターを用いた造形。Webサイトの作成<br/>
                    Unityを用いたゲーム作成。画像、動画編集。電子工作...etc.<br/>
                    作った作品を学祭で展示したり、コミケで頒布することもあります。
                </p>
            </div>
            <div className={"center-pc px-4 pt-20 pb-20 bg-blue-200"}>
                <h2 className={"h2 mb-6 text-blue-900"}>過去に配布した部誌、の表紙。</h2>
                <div className={"flex flex-wrap flex-row max max-w-screen-md m-auto"}>
                    <img src={"/oucrc/bushi_c96.png"} className={"w-1/2"}/>
                    <img src={"/oucrc/IMG_20180715_0001.jpg"} className={"w-1/2"}/>
                </div>
            </div>
            <div className={"center-pc px-4 pt-20 pb-20 bg-green-300 mx-4 my-8"}>
                <h2 className={"h2 mt-6 mb-6 text-green-900"}>部員、オキリョウの作品が飛んできた！</h2>
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
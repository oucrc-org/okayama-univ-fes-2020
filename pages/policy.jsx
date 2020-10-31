import Layout from "../components/Layout";
import Heading from "../components/common/Heading";
import Head from "next/dist/next-server/lib/head";

export default function Policy() {
    return (
        <Layout>
            <Head>
                <meta property="og:image" content="https://okayama-univ-fes-git-master.oucrc.vercel.app/committee.jpg"/>
            </Head>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-red-800 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 mb-3 font-serif">サイトポリシー</h1>
                        </div>
                    </div>
                    <div className="p-6">
                        <Heading text="推奨環境"/>
                        <p className="mb-6">
                        当サイトでは、より安全で快適にご利用いただくために下記のブラウザを推奨致します。
                            <ul>
                                <li>- Mozilla Firefox最新バージョン</li>
                                <li>- Google Chrome最新バーション</li>
                                <li>- Safari最新バージョン</li>
                            </ul>
                        </p>

                        <Heading text="JavaScriptについて"/>
                        <p className="mb-6">
                        当サイトはJavaScriptを使用しています。ブラウザ設定でJavaScriptを無効にされている場合、一部の機能が正しく動作しなかったり、正しく表示されたりしないことがあるので、必ず JavaScript を有効にしてください。
                        </p>
                        <Heading text="アクセスデータについて"/>
                        <p className="mb-6">
                            当サイトのサーバ上に記録されたアクセスログについては、アクセス数の集計など今後の企画の参考のために使用することはありますが、これにより個人を特定することはありません。
                        </p>
                        <Heading text="リンクについて"/>
                        <p className="mb-6">
                            当サイトへのリンクは、原則自由です。ただし、ウェブサイトの内容やリンクの方法によってはリンクの削除を依頼させていただく場合があります。当サイトへリンクしている他のウェブサイトの内容については、当団体はいかなる責任も負わないものとします。
                        </p>
                        <Heading text="免責事項"/>
                        <p className="mb-6">
                            当サイトの内容は、予告なしに変更または削除する場合があります。 当サイトに掲載された情報又は当サイトのコンテンツ等のご利用により、何らかの損害、損失が発生したとしても、当サイトの関係者が責任を負うものではありません。また、当サイト内に掲載したリンク先が他団体の管理する外部サイトである場合、外部サイトの内容に対して、当サイトは責任を負いません。

                        </p>
                        <Heading text="著作権等について"/>
                        <p className="mb-6">
                            当サイトに掲載されるコンテンツ（テキスト、画像、映像等）に関する著作権、その他の権利は、当団体または関係団体、その他の権利者に帰属します。当団体、もしくは権利者の許可なく複写、複製、転用、販売、改変、掲示、公衆送信、頒布等、二次利用をしたり、権利者の権利を損なったりする行為を固く禁じます。
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
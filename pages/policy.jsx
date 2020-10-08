import Layout from "../components/Layout";
import Heading from "../components/common/Heading";

export default function Policy() {
    return (
        <Layout>
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
                        ・ Mozilla Firefox最新バージョン
                        ・ Google Chrome最新バーション
                        ・ Safari最新バージョン
                        </p>

                        <Heading text="JavaScriptについて"/>
                        <p className="mb-6">
                        当サイトはJavaScriptを使用しています。ブラウザ設定でJavaScriptを無効にされている場
                        合、一部の機能が正しく動作しなかったり、正しく表示されないことがあるので、必ず
                        JavaScriptを有効にしてください。
                        </p>
                        <Heading text="アクセスデータについて"/>
                        <p className="mb-6">
                            当サイトのサーバ上に記録されたアクセスログについては、利用動向の調査（例：アクセ
                            ス数の集計）など当サイトのよりよい運営のために使用することはありますが、これによ
                            り個人を特定することはありません。
                        </p>
                        <Heading text="リンクについて"/>
                        <p className="mb-6">
                            当サイトへのリンクは、原則自由です。ただし、ウェブサイトの内容やリンクの方法によ
                            ってはリンクを解消していただく場合があります。当サイトへリンクしている他の団体又
                            は個人のページの内容については、当団体が推奨するものではなく、当団体はいかなる責
                            任も負わないものとします。
                        </p>
                        <Heading text="免責事項"/>
                        <p className="mb-6">
                            当サイトにおいて提供している情報は、予告なしに変更または削除する場合があります。
                            当サイトに掲載された情報又は当サイトのコンテンツ等のご利用により、何らかの損害、
                            損失が発生したとしても当団体は、一切の責任を負うものではありません。
                            ウェブサイトの構成、利用条件、URLおよびコンテンツ等を、予告なしに変更または中止
                            し、あるいはウェブサイトの運営を予告なしに中断または中止することがありますが、当
                            団体は、これらの変更及びウェブサイトの運用の中断または中止によって生じるいかなる
                            損害についても責任を負うものではありません。
                        </p>
                        <Heading text="著作権等について"/>
                        <p className="mb-6">
                            当サイトに掲載されるコンテンツ（テキスト、画像、映像、音楽データ等及びそれらの組
                            み合わせとしてのページデザイン等）に関する著作権、その他の権利は、当団体または原
                            著作者、その他の権利者に帰属します。当団体、もしくは権利者の許可なく複製、転用、
                            販売複製、要約、改変、翻案、アップロード、掲示、公衆送信、送信可能化、頒布、出版
                            などの二次利用をすることを固く禁じます。
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
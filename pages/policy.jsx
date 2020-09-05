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
                        <Heading text="一つ目の項目"/>
                        <p className="mb-6">
                            ここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入ります
                        </p>
                        <Heading text="二つ目の項目"/>
                        <p className="mb-6">
                            ここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入ります
                        </p>
                        <Heading text="三つ目の項目"/>
                        <p className="mb-6">
                            ここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入ります
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
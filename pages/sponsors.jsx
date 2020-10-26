import Layout from "../components/Layout";
import Heading from "../components/common/Heading";
import sponsors from "../public/sponsors";
import Link from "next/link";

export default function Sponsors() {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 font-serif">協賛企業一覧(五十音順)</h1>
                        </div>
                    </div>
                    <div className="p-6">
                        <ul>
                            {sponsors.map((sponsor) =>
                                <Link href={sponsor.url}>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <li key={sponsor.title} className="text-blue-600">
                                            <p className="text-xl p-1">・{sponsor.title}</p>
                                        </li>
                                    </a>
                                </Link>
                            )}
                        </ul>
                    </div>
                    <Heading text={"その他ご協力いただいた団体"}/>
                    <ul className="p-6">
                        <Link href="//oucrc.net">
                            <a target="_blank" rel="noopener noreferrer">
                                <li>
                                    <p className="text-xl p-1 text-blue-600">・電子計算機研究会（WEBページ制作）</p>
                                </li>
                            </a>
                        </Link>
                        <Link href="//ohb-radio.net/">
                            <a target="_blank" rel="noopener noreferrer">
                                <li>
                                    <p className="text-xl p-1 text-blue-600">・放送文化部（動画撮影）</p>
                                </li>
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
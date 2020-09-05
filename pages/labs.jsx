import Layout from "../components/Layout";
import Content from "../components/Content";
import {getLabs} from "../lib/labs";
import Link from "next/link";

export default function Labs() {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-6xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-gray-700 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 mb-3">研究室紹介</h1>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        {getLabs().map((lab) =>
                            <Link href={`/labs/${lab.title}`}>
                                <a>
                                    <li>
                                        <Content content={lab}/>
                                    </li>
                                </a>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
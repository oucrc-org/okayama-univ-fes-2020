import Layout from "../components/Layout";
import {getSponsors} from "../lib/sponsors";

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
                            {getSponsors().map((sponsor) =>
                                <li key={sponsor.id}>
                                    <p className="text-xl p-1">・{sponsor.title}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
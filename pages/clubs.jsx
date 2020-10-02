import Layout from "../components/Layout";
import Content from "../components/Content";
import {getClubs} from "../lib/clubs";
import Link from "next/link";

export default function Clubs({clubs}) {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-yellow-600 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 mb-3">部活動・サークル紹介</h1>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        {clubs.map((club) =>
                            <Link href={`/clubs/${club.id}`}>
                                <a>
                                    <li>
                                        <Content content={club}/>
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

export async function getStaticProps() {
    const clubs = await getClubs();
    return {
        props: {
            clubs: clubs,
        }
    }
}
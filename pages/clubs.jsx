import Layout from "../components/Layout";
import {getCategories, getClubs} from "../lib/clubs";
import Link from "next/link";
import Club from "../components/Club";
import Heading from "../components/common/Heading";

export default function Clubs({clubs, customs, categories}) {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-6xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-yellow-600 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 mb-3">部活動・サークル紹介</h1>
                        </div>
                    </div>
                    <ul>
                        {categories.map((category) =>
                            <div key={category.key} className="mb-6">
                                <Heading text={category.value}/>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                                {clubs.filter((club) => club.circle_type === category.key).map((club) =>
                                    <Link href={`/clubs/${customs.includes(club.title_en) ? club.title_en : club.id}`}>
                                        <a>
                                            <li>
                                                <Club club={club}/>
                                            </li>
                                        </a>
                                    </Link>
                                )}
                                </ul>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const clubs = (await getClubs());
    const customs = ['okadaiart'];

    return {
        props: {
            clubs: clubs,
            customs: customs,
            categories: getCategories()
        }
    }
}
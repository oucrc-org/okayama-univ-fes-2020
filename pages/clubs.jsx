import Layout from "../components/Layout";
import Content from "../components/Content";
import {getClubs} from "../lib/clubs";
import Link from "next/link";

export default function Clubs() {
    return (
        <Layout>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {getClubs().map((club) => (
                    <Link href={`/clubs/${club.title}`}>
                        <a><Content key={club.title} content={club}/></a>
                    </Link>
                ))}
            </ul>
        </Layout>
    )
}
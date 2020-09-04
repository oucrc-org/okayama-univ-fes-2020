import Layout from "../components/Layout";
import Content from "../components/Content";
import {getClubs} from "../lib/clubs";

export default function Clubs() {
    return (
        <Layout>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {getClubs().map((club) => (
                    <Content key={club.id} content={club}/>
                ))}
            </ul>
        </Layout>
    )
}
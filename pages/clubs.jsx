import Layout from "../components/Layout";
import Content from "../components/Content";

export default function Clubs() {

    const clubs = [
        {
            id: "1",
            title: "oucrc"
        },
        {
            id: "2",
            title: "サークル"
        }
    ];

    return (
        <Layout>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {clubs.map((club) => (
                    <Content key={club.id} content={club}/>
                ))}
            </ul>
        </Layout>
    )
}
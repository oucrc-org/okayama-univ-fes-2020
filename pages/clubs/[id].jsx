import Layout from '../../components/layout'
import {getClubs} from "../../lib/clubs";

export default function Club({club}) {
    return (
        <Layout>
            {club.title}
            <p>サークル紹介</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getClubs().map(it => {
        return {
            params: {
                id: it.title
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const club = getClubs().find(it => it.title === params.id);
    return {
        props: {
            club: {
                id: club.title,
                ...club
            }
        }
    }
}
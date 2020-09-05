import Layout from '../../components/Layout'
import {getClubIds, getClub} from "../../lib/clubs";

export default function Club({club}) {
    return (
        <Layout>
            {club.title}
            <p>サークル紹介</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getClubIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const club = getClub(params.id);
    return {
        props: {
            club: club
        }
    }
}
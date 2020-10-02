import Layout from '../../components/Layout'
import {getClubIds, getClub} from "../../lib/clubs";

export default function Club({club}) {
    return (
        <Layout>

            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto">
                            <h1 className="text-xl text-white mb-12 mt-12">{club.title}</h1>
                            <img className="object-cover mb-6" src={club.image} alt="サークルの画像"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">この団体について</h2>
                        <p className="mb-6">この団体についてこの団体についてこの団体についてこの団体についてこの団体についてこの団体についてこの団体について
                            この団体についてこの団体についてこの団体についてこの団体についてこの団体についてこの団体についてこの団体について
                            この団体についてこの団体についてこの団体についてこの団体についてこの団体についてこの団体についてこの団体について</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getClubIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const club = await getClub(params.id);
    return {
        props: {
            club: club
        }
    }
}
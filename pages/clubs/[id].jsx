import Layout from '../../components/Layout'
import {getClubIds, getClub} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

export default function Club({club}) {
    return (
        <Layout>

            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto">
                            <h1 className="text-xl text-white mb-12 mt-12">{club.title}</h1>
                            <img className="object-cover mb-6" src={club.main_image ? 'https://drive.google.com/uc?export=view&id=' + club.main_image + '&usp=sharing' : "/1080x720.png"} alt="サークルの画像"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">この団体について</h2>
                        <p className="mb-6 break-all" dangerouslySetInnerHTML={changeToUrl(club.description)}></p>
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
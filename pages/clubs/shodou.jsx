import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";
import works from "../../public/shodou/shodou"

export default function Club({club}) {
    return (
        <Layout>

            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto ">
                            <h1 className="text-xl text-white mb-12 mt-12 w-3/4">{club.title}</h1>
                            <img className="object-cover mb-6"
                                 src={club.main_image ? 'https://drive.google.com/uc?export=view&id=' + club.main_image + '&usp=sharing' : "/1080x720.png"}
                                 alt="サークルの画像"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">この団体について</h2>
                        <p className="mb-6 break-all"
                           dangerouslySetInnerHTML={{__html: changeToUrl(club.description)}}/>
                    </div>
                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">作品一覧</h2>
                        <img className="w-100" src="/shodou/title.jpg" alt="静楽展"/>
                        {works.map((work, i) =>
                            <div key={i} className="mb-6">
                                <img src={"/shodou/" + (i + 1) + ".jpg"} alt="" className="mb-3"/>
                                <div className="mx-6 border-2 p-3">
                                    <div className="grid grid-cols-2 mb-3">
                                        <p className="text-center">{work.faculty}学部</p>
                                        <p className="text-center">{work.year}年</p>
                                    </div>
                                    <p className="mb-3 text-center">{work.name}</p>
                                    <p>{work.comment}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const club = await getClubWithTitle('shodou');
    return {
        props: {
            club: club
        }
    }
}
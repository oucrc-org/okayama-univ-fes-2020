import Layout from '../../components/Layout'
import { getClubWithTitle } from "../../lib/clubs";
import changeToUrl from "../../lib/regex";
import messageList from '../../public/ogmc/messages'

export default function Club({ club }) {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full" />
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto ">
                            <h1 className="text-xl text-white mb-12 mt-12 w-3/4">{club.title}</h1>
                            <img className="object-cover mb-6"
                                src={club.main_image ? 'https://drive.google.com/uc?export=view&id=' + club.main_image + '&usp=sharing' : "/1080x720.png"}
                                alt="サークルの画像" />
                        </div>
                    </div>

                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">{messageList.clubDescription.title}</h2>
                        <p className="mb-6 break-all">{messageList.clubDescription.description}</p>
                    </div>

                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">{messageList.mandolinDescription.title}</h2>
                        <p className="mb-6 break-all">{messageList.mandolinDescription.description}</p>
                    </div>

                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">{messageList.partDescription.title}</h2>

                        {messageList.partDescription.parts.map((partList) =>
                            <div className="inline-block my-5 px-4 sm:w-1/2">
                                {partList.image &&
                                    <img className="mt-5" src={partList.image} alt="画像" />
                                }
                                <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 mt-2 px-4 py-3 shadow-md">
                                    <div class="flex">
                                        <div>
                                            <p class="font-bold">{partList.title}</p>
                                            <p class="text-sm mt-1">{partList.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">{messageList.futureActivities.title}</h2>
                        <img src={messageList.futureActivities.image} alt="画像" />
                        <p className="mb-6 break-all">{messageList.futureActivities.description}</p>
                    </div>

                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">{messageList.latestInformation.title}</h2>

                        {messageList.latestInformation.links.map((linkList) =>
                            <p><span className="font-bold mr-5">・{linkList.title}</span>{linkList.description}</p>
                        )}
                    </div>

                    {club.movie &&
                        <div className="p-6">
                            <h2 className="text-blue-600 text-xl font-bold mb-3">紹介動画</h2>
                            <iframe className="mb-6" width="100%" height="360px"
                                src={'https://www.youtube.com/embed/' + club.movie}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </div>
                    }
                    {club.sub_images &&
                        <div className="p-6">
                            <h2 className="text-blue-600 text-xl font-bold mb-3">アルバム</h2>
                            <ul className="grid grid-cols-2">
                                {club.sub_images.split(', ').map((it, i) =>
                                    <li className="p-3" key={i}>
                                        <img src={'https://drive.google.com/uc?export=view&id=' + it + '&usp=sharing'} alt="" />
                                    </li>
                                )}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const club = await getClubWithTitle('ogmc');
    return {
        props: {
            club: club
        }
    }
}
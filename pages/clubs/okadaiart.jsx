import {faFolder} from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

//画像を張り付ける関数
//参考文献：画像のコピー禁止　https://qiita.com/shisama/items/be0e432711de359598ed
//額縁：http://www.netyasun.com/home/border.html

/*
    okadaiart.jsonの説明
    number:作品の番号
    title:作品タイトル
    type~sub:作品のタイトルの下に書くやつ
*/
import artList from '../../public/okadaiart/okadaiart'

export default function Club({club}) {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-6xl">
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

                    <div className="p-6" id="museum">
                        <h2 className="text-blue-600 text-xl font-bold mb-3">作品展</h2>
                        <p className="p-6 bg-yellow-400 border-2 border-black font-medium mb-6">
                            以下の作品につきまして、作品の保存、スクリーンショット、二次利用(転載・コピー・引用)及び複製はお控えください。
                        </p>
                    </div>

                    <ul className="mx-3">
                        {artList.map((artList) =>
                            <li key={artList.number} className="flex flex-wrap mb-12">
                                <img src={"/okadaiart/okadaiart_" + artList.number + ".jpg"}
                                     className="w-full md:w-2/3 mb-5"
                                     style={{border: '10px ridge #FFFFE0'}}
                                     alt="表示に失敗しました"
                                     onContextMenu={(e) => e.preventDefault()}/>

                                {artList.number !== "25-1" &&
                                <div className="w-full md:w-1/3 mt-auto mb-5">
                                    <div className='p-6 border border-black font-medium mx-5'>
                                        <p className='text-4xl text-center'>{artList.title}</p>
                                        <p className='text-xl text-center whitespace-pre-wrap'>{artList.type}</p>
                                        <p className='text-xl text-center whitespace-pre-wrap'>{artList.author}</p>
                                        <p className='text-xl text-center whitespace-pre-wrap'>{artList.sub}</p>
                                    </div>
                                </div>
                                }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const club = await getClubWithTitle('okadaiart');
    return {
        props: {
            club: club
        }
    }
}
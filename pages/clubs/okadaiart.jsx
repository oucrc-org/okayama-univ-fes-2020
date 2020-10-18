import { faFolder } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

//画像を張り付ける関数
//参考文献：画像のコピー禁止　https://qiita.com/shisama/items/be0e432711de359598ed
//額縁：http://www.netyasun.com/home/border.html

//                    <div dangerouslySetInnerHTML={{__html: setImgs()}}/>

/*
    okadaiart.jsonの説明
    number:作品の番号
    title:作品タイトル
    type~sub:作品のタイトルの下に書くやつ
*/

export default function Club({club}) {
    const artList = require("../../public/okadaiart/okadaiart.json")
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

                    <ul>
                        {artList.map((artList) =>
                            <li key={artList.number}>
                                <img src={"/okadaiart/okadaiart_" + artList.number + "_" + artList.title + ".jpg"}
                                    style={{width: '100%', marginBottom: '5%', border: '20px ridge #FFFFE0'}}/>

                                {artList.number!="25-1" &&
                                    <div class='p-6 border-2 border-black font-medium' style={{margin: '10%', marginTop: '5%'}}>
                                        <p class='text-5xl text-center'>{artList.title.replace(".", ":").replace("／", "/")}</p>
                                        <p class='text-xl' style={{textAlign: 'center', whiteSpace: 'pre-wrap'}}>{artList.type}</p>
                                        <p class='text-xl' style={{textAlign: 'center', whiteSpace: 'pre-wrap'}}>{artList.author}</p>
                                        <p class='text-xl' style={{textAlign: 'center', whiteSpace: 'pre-wrap'}}>{artList.sub}</p>
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
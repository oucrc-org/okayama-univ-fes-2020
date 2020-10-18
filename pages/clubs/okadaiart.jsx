import { faFolder } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/Layout'
import {getClubWithTitle} from "../../lib/clubs";
import changeToUrl from "../../lib/regex";

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

                    <div className="p-6 bg-yellow-400 border-2 border-black font-medium" style={{marginBottom:'5%'}}>
                        以下の作品につきまして、作品の保存、スクリーンショット、二次利用(転載・コピー・引用)及び複製はお控えください。
                    </div>
                    <div dangerouslySetInnerHTML={{__html: setImgs()}}/>
                    {/*  作品展がここに入ります  */}

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

//画像を張り付ける関数
//参考文献：画像のコピー禁止　https://qiita.com/shisama/items/be0e432711de359598ed
//額縁：http://www.netyasun.com/home/border.html

/*
    okadaiart.jsonの説明
    number:作品の番号
    title:作品タイトル
    type~sub:作品のタイトルの下に書くやつ
*/
function setImgs(){
    const artList = require("../../public/okadaiart/okadaiart.json")
    let result = ""
    for (var i in artList){
        var url = "okadaiart_" + artList[i].number + "_" + artList[i].title
        if(artList[i].number == "25-1"){
            result = result + 
            "<img src = '/okadaiart/" + url + ".jpg' style='width: 100%; margin-bottom: 5%;' oncontextmenu='return false'/>"
            continue
        }
        result = result + 
        "<img src = '/okadaiart/" + url + ".jpg' style='width: 100%; border: 20px ridge #FFFFE0;' oncontextmenu='return false'/>"+
        "<div class='p-6 border-2 border-black font-medium' style='margin: 10%; margin-top: 5%;'>"+
            "<p class='text-5xl text-center'>"+artList[i].title.replace(".", ":").replace("／", "/")+"</p>"+
            "<p class='text-xl' style='text-align: center'>"+artList[i].type+"</p>"+
            "<p class='text-xl' style='text-align: center'>"+artList[i].auther+"</p>"+
            "<p class='text-xl' style='text-align: center'>"+artList[i].sub+"</p>"+
        "</div>"
    }
    return result
}
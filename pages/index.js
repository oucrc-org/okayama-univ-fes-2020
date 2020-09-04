import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Notices from "../components/Notices";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import {getNotices} from "../lib/notices"

export default function Index({contents, notices}) {
    return (
        <div>
            <Layout>
                <MainVisual/>
                <div className="max-w-5xl ml-auto mr-auto">
                    <Message/>
                    <Notices notices={notices}/>
                    <Contents contents={contents}/>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            contents: [
                {
                    "id": 1,
                    "title": "〇〇サークルの紹介"
                },
                {
                    "id": 2,
                    "title": "〇〇部の動画"
                },
                {
                    "id": 3,
                    "title": "〇〇サークルの紹介"
                },
                {
                    "id": 4,
                    "title": "〇〇部の動画"
                }
            ],
            notices: getNotices()
        }
    }
}
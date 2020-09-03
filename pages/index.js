import Header from '.././components/Header'
import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Notices from "../components/Notices";
import Contents from "../components/Contents";

export default function Index({contents, notices}) {
    return (
        <div className="ml-auto mr-auto container">
            <Header/>
            <MainVisual/>
            <Message/>
            <Notices notices={notices}/>
            <Contents contents={contents}/>
        </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            contents: [
                {
                    "id": 1,
                    "title": "学長からのメッセージ"
                },
                {
                    "id": 2,
                    "title": "〇〇サークル紹介"
                }
            ],
            notices: [
                {
                    "id": 1,
                    "title": "1つ目のお知らせです"
                },
                {
                    "id": 2,
                    "title": "2つ目のお知らせです"
                },
            ]
        }
    }
}
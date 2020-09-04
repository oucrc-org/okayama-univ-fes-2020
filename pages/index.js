import Header from '.././components/Header'
import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Notices from "../components/Notices";
import Contents from "../components/Contents";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Index({contents, notices}) {
    return (
        <div>
            <Header/>
            <MainVisual/>
            <div className="max-w-5xl ml-auto mr-auto">
                <Message/>
                <Notices notices={notices}/>
                <Contents contents={contents}/>
            </div>
            <Footer/>
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
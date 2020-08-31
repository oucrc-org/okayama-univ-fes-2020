import Header from '.././components/Header'
import MainVisual from "../components/MainVisual";
import Notices from "../components/Notices";
import Contents from "../components/Contents";

export default function Index({contents, notices}) {
    return (
        <div>
            <Header/>
            <MainVisual/>
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
                    "title": "1つ目のタイトルです"
                },
                {
                    "id": 2,
                    "title": "2つ目のタイトルです"
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
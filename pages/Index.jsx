import Header from '.././components/Header'
import MainVisual from "../components/MainVisual";
import Notices from "../components/Notices";
import Contents from "../components/Contents";

export default function Index({contents}) {
    return (
        <div>
            <Header/>
            <MainVisual/>
            <Notices/>
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
            ]
        }
    }
}
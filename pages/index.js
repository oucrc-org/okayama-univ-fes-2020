import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Notices from "../components/Notices";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import {getNotices} from "../lib/notices";
import {getContents} from "../lib/contents";

export default function Index({contents, notices}) {
    return (
        <div>
            <Layout>
                <MainVisual/>
                <div className="max-w-screen-md m-auto container">
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
            contents: getContents(),
            notices: getNotices()
        }
    }
}
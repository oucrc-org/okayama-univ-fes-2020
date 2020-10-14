import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import {getFixedContents} from "../lib/contents";
import {getPickUpProject} from "../lib/projects";
import Heading from "../components/common/Heading";

export default function Index({fixedContents, pickupProject}) {
    return (
        <div>
            <Layout>
                <MainVisual/>
                <div className="max-w-3xl container ml-auto mr-auto">
                    <Message/>
                    <Contents fixedContents={fixedContents}/>
                    <Heading text={"ピックアップ団体企画"}/>
                    <iframe className="mb-6" width="100%" height="360px"
                            src={pickupProject.movie} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            fixedContents: getFixedContents(),
            pickupProject: getPickUpProject(),
        }
    }
}
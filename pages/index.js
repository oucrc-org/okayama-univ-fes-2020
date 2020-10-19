import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import {getFixedContents} from "../lib/contents";
import Heading from "../components/common/Heading";
import Link from "next/link";
import Project from "../components/Project";
import {getClubs} from "../lib/clubs";
import getPickUpProjectId from "../lib/pickup";

export default function Index({fixedContents, project}) {
    return (
        <div>
            <Layout>
                <MainVisual/>
                <div className="max-w-6xl container ml-auto mr-auto">
                    <Message/>
                    <Contents fixedContents={fixedContents}/>
                    <Heading text={"ピックアップ団体企画"}/>
                    <div className="mx-3">
                        {
                            project.title_en === 'okadaiart'
                                ?
                                <div>
                                    <h2 className="text-red-800 text-xl font-bold mb-3 font-serif">{project.title}</h2>
                                    <img className="mb-3 w-full"
                                         src={'https://drive.google.com/uc?export=view&id=' + project.project_img + '&usp=sharing'}
                                         alt=""/>
                                    <Link href={`/clubs/${project.title_en}/#museum`}>
                                        <a className="text-blue-600 text-xl">
                                            <div className="text-center">
                                                作品展はこちら
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                                :
                                <Project project={project}/>
                        }
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            fixedContents: getFixedContents(),
            project: (await getClubs()).find((it) => Number(it.id) === getPickUpProjectId()),
        }
    }
}
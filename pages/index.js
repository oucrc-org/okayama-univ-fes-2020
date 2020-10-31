import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import {getFixedContents} from "../lib/contents";
import Heading from "../components/common/Heading";
import Link from "next/link";
import Project from "../components/Project";
import {getClubs} from "../lib/clubs";
import getPickUpProjectId, {getPickUpProject} from "../lib/pickup";
import Head from "next/dist/next-server/lib/head";

export default function Index({fixedContents, project}) {
    return (
        <div>
            <Layout>
                <Head>
                    <meta property="og:image" content="https://okayama-univ-fes-git-master.oucrc.vercel.app/committee.jpg"/>
                </Head>
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
                                         alt=""
                                         loading="lazy"/>
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
                    <Heading text={"オンライン大学祭アンケート"}/>
                    <div className="mb-5 mx-3">
                        <p>サイトを閲覧していただいた方向けの<Link href={"//forms.gle/F5a2HRD5XSzr3nDs8"}><a className="text-blue-600">アンケートページ</a></Link>を公開しているので、是非ご回答いただければ幸いです</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export async function getServerSideProps() {

    return {
        props: {
            fixedContents: getFixedContents(),
            project: (await getClubs()).find((it) => Number(it.project_id) === getPickUpProjectId()),
        }
    }
}
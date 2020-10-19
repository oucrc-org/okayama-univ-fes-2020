import Layout from "../components/Layout";
import Project from "../components/Project";
import {getClubs} from "../lib/clubs";
import Heading from "../components/common/Heading";
import Link from "next/link";

export default function Projects({projects}) {
    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-red-800 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 mb-3 font-serif">企画一覧</h1>
                        </div>
                    </div>
                    <Heading text="目次"/>
                    <ul className="mx-6 mb-6">
                        {projects.map(((project) =>
                                <li className="mb-2" key={project.id}>
                                    <Link href={"/projects#" + project.id}>
                                        <a className="text-blue-600">
                                            {project.title}
                                        </a>
                                    </Link>
                                </li>
                        ))}
                    </ul>
                    <div className="p-6">
                        {
                            projects.map((project) =>
                                <div id={project.id} className="mb-16" key={project.id}>
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
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const projects = (await getClubs()).filter((club) => club.project_type === 'project');

    return {
        props: {
            projects: projects,
        }
    }
}
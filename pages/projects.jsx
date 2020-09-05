import Layout from "../components/Layout";
import {getProjects} from "../lib/projects";
import Project from "../components/Project";

export default function Projects() {
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
                    <div className="p-6">
                        {
                            getProjects().map((project) =>
                                <div className="mb-12">
                                    <Project project={project}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
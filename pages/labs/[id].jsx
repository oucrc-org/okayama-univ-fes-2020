import Layout from '../../components/Layout'
import {getLab,getLabIds} from "../../lib/labs";

export default function Club({lab}) {
    return (
        <Layout>

            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-gray-700 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto">
                            <h1 className="text-xl text-white mb-12 mt-12">{lab.title}</h1>
                            <img className="object-cover mb-6" src={lab.image} alt="研究室の画像"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-gray-700 text-xl font-bold mb-3">この研究室について</h2>
                        <p className="mb-6">この研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室について
                            この研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室について
                            この研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室についてこの研究室について</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getLabIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const lab = getLab(params.id);
    return {
        props: {
            lab: lab
        }
    }
}
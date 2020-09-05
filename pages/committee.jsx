import Layout from "../components/Layout";

export default function Committee() {

    const images = ["/committee.jpg", "/committee.jpg", "/committee.jpg", "/committee.jpg", "/committee.jpg", "/committee.jpg"];

    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-green-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto">
                            <h1 className="text-xl text-white mb-12 mt-12">実行委員会からのメッセージ</h1>
                            <iframe className="mb-12" width="100%" height="360px"
                                    src="https://www.youtube.com/embed/Nq0NPnIjbnY" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-green-600 text-xl font-bold mb-3">学祭実行委員について</h2>
                        <p className="mb-6">学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について
                            学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について
                            学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について学祭実行委員について</p>
                        <ul className="grid grid-cols-2">
                            {images.map((image) => (
                                <li className="p-3">
                                    <img src={image} alt=""/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
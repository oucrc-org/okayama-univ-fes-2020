import Layout from "../components/Layout";

export default function President() {

    const images = ["/president.jpg", "/president.jpg", "/president.jpg", "/president.jpg", "/president.jpg", "/president.jpg"];

    return (
        <Layout>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-blue-600 h-full"/>
                        <div className="z-20 relative content-center p-6 ml-auto mr-auto">
                            <h1 className="text-xl text-white mb-12 mt-12 font-serif">学長からのメッセージ</h1>
                            <iframe className="mb-12" width="100%" height="360px"
                                    src="https://www.youtube.com/embed/Nq0NPnIjbnY" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-blue-600 text-xl font-bold mb-3 font-serif">岡山大学について</h2>
                        <p className="mb-6">岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について
                            岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について
                            岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について岡山大学について</p>
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
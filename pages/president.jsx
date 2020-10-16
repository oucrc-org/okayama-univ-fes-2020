import Layout from "../components/Layout";
import changeToUrl from "../lib/regex";

export default function President() {
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
                        <p className="mb-6 break-all" dangerouslySetInnerHTML={{__html: changeToUrl('岡山大学は、11学部8研究科を有し、岡山市中心部の緑豊かな広大なキャンパスで、約2万人の学生、留学生が学んでいます。２０２０年には、医学部が創立１５０周年を迎え、２０２１年４月には、工学部と環境理工学部が統合して、新生工学部に生まれ変わります。また、本学は、SDGsを推進しており、学内のみならず地域社会と一体になった取り組みも進めています。正課外活動を行う団体は、文化系の校友会が35団体、体育系の校友会が49団体、医療系地区等の校友会が42団体あるほか、同好会（サークル）も54団体あり、幅広い活動を行っています。詳細はこちらの公式HPをご覧ください https://www.okayama-u.ac.jp/tp/profile/index.html')}}/>
                        <ul className="grid grid-cols-2">
                            {[...Array(9)].map((_,i) =>
                                <li className="p-3" key={i}>
                                    <img src={"/president/president" + (i+1) + ".jpg" } alt=""/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
import Header from "./Header";
import Footer from "./Footer";
import {Component} from "react";
import Head from "next/head";

// 全画面に共通する外枠部分（ヘッダとフッタ）
export default class Layout extends Component {
    render() {
        return (
            <div className="flex flex-col min-h-screen">
                <Head>
                   <title>岡山大学大学祭</title>
                </Head>
                <Header/>
                <div className="flex-grow">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}
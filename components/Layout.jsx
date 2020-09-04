import Header from "./Header";
import Footer from "./Footer";
import { Component } from "react";

// 全画面に共通する外枠部分（ヘッダとフッタ）
export default class Layout extends Component {
    render() {
        return (
            <main>
                <Header />
                <content>
                    {this.props.children}
                </content>
                <Footer />
            </main>
        )
    }
}
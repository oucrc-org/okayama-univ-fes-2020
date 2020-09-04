import Header from "./Header";
import Footer from "./Footer";
import {Component} from "react";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
import Link from "next/link";
import React, {Component} from "react";
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
// https://qiita.com/jesuissuyaa/items/f9cb9343057de306ff25
// https://www.npmjs.com/package/@fortawesome/react-fontawesome#features
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {config, library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(fas);

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {isShowMenu: false};
    }

    render() {
        return (
            <header
                className="sticky z-50 top-0">
                <div className="flex items-center justify-between flex-wrap p-2 h-16 xl:h-20 bg-blue-900 text-white">
                    <Link href="/">
                        <a>
                            <img className="object-contain w-8 mr-2" src="/symbol.png" alt="校章"/>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="flex-grow">
                            <p className="font-serif ">大学祭</p>
                        </a>
                    </Link>
                    <button className="focus:outline-none" onClick={() => {
                        this.setState({
                            isShowMenu: !this.state.isShowMenu
                        })
                    }}>
                        <FontAwesomeIcon icon={['fas', 'bars']} width="40" className="p-3"/>
                    </button>
                </div>
                {this.state.isShowMenu &&
                <div
                    className="z-50 w-full h-full fixed text-white bg-black opacity-90 overflow-y-auto p-3 top-0"
                    onClick={() => {
                        this.setState({
                            isShowMenu: false
                        })
                    }}>
                    <div className="text-left w-2/3 ml-auto mr-auto h-full">
                        <ul className="flex flex-col justify-center h-screen">
                            <li className="p-4 text-xl">
                                <Link href="/index">
                                    <a>トップページ</a>
                                </Link>
                            </li>
                            <li className="p-4 text-xl">
                                <Link href="/president">
                                    <a>学長からのメッセージ</a>
                                </Link>
                            </li>
                            <li className="p-4 text-xl">
                                <Link href="/committee">
                                    <a>学祭実行委員会について</a>
                                </Link>
                            </li>
                            <li className="p-4 text-xl">
                                <Link href="/projects">
                                    <a>団体企画</a>
                                </Link>
                            </li>
                            <li className="p-4 text-xl">
                                <Link href="/clubs">
                                    <a>部活動・サークル紹介</a>
                                </Link>
                            </li>
                            <li className="p-4 text-xl">
                                <Link href="/sponsors">
                                    <a>協賛企業</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                }
            </header>
        )
    }
}
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
                className="sticky top-0 z-10">
                <div className="flex items-center justify-between flex-wrap p-2 h-16 xl:h-20 bg-blue-900 text-white">
                    <Link href="/">
                        <a>
                            <img className="object-contain w-8 mr-2" src="symbol.png" alt="校章"/>
                        </a>
                    </Link>
                    <p className="font-serif flex-grow">大学祭</p>
                    <button className="focus:outline-none" onClick={() => {
                        this.setState({
                            isShowMenu: !this.state.isShowMenu
                        })
                    }}>
                        {
                            this.state.isShowMenu
                                ? <FontAwesomeIcon icon={['fas', 'times']} width="40" className="p-3"/>
                                : <FontAwesomeIcon icon={['fas', 'bars']} width="40" className="p-3"/>
                        }

                    </button>
                </div>
                {this.state.isShowMenu &&
                <div className="z-50 w-full h-full fixed text-white panel overflow-y-auto pt-3">
                    <div className="text-center w-2/3 m-auto">
                        <ul>
                            <li className="p-4">
                                <Link href="/">
                                    <a>HOME</a>
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/">
                                    <a>学長からのメッセージ</a>
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/">
                                    <a>学祭実行委員会について</a>
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/">
                                    <a>団体企画</a>
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/">
                                    <a>部活動・サークル紹介</a>
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/">
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
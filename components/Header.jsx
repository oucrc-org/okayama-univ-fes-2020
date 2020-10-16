import Link from "next/link";
import React, { Component } from "react";
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
// https://qiita.com/jesuissuyaa/items/f9cb9343057de306ff25
// https://www.npmjs.com/package/@fortawesome/react-fontawesome#features
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { getNavigations } from "../lib/navigations";
import Transition from "react-transition-group/cjs/Transition";

config.autoAddCss = false;
library.add(fas);

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { isShowMenu: false };
    }

    render() {
        return (
            <header
                className="sticky z-50 top-0">
                <div className="flex items-center justify-between flex-wrap p-2 h-16 xl:h-20 bg-blue-900 text-white">
                    <Link href="/">
                        <a>
                            <img className="object-contain w-8 mr-2" src="/symbol.png" alt="校章" />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <p className="font-serif ">岡山大学大学祭</p>
                        </a>
                    </Link>
                    <div className="flex-grow"/>
                    <ul className="justify-center ml-auto mr-auto text-left hidden lg:block">
                        {
                            getNavigations().map((nav) =>
                                <li key={nav.id} className="p-4 text-sm xl:text-md inline-block">
                                    <Link href={nav.link}>
                                        <a>{nav.title}</a>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    <button className="focus:outline-none lg:hidden" onClick={() => {
                        this.setState({
                            isShowMenu: !this.state.isShowMenu
                        })
                    }}>
                        <FontAwesomeIcon icon={['fas', 'bars']} width="40" className="p-3" />
                    </button>
                </div>
                <Transition
                    in={this.state.isShowMenu}
                    timeout={200}>
                    {
                        status => {
                            return (
                                <div
                                    className={['z-50', 'w-full', 'h-full', 'fixed', 'text-white', 'bg-black', 'overflow-y-auto', 'p-3', 'top-0', `fade-${status}`].join(' ')}
                                    onClick={() => {
                                        this.setState({
                                            isShowMenu: false
                                        })
                                    }}>
                                    <ul className="flex flex-col justify-center ml-auto mr-auto text-left w-2/3 h-full">
                                        {
                                            getNavigations().map((nav) =>
                                                <li key={nav.id} className="p-4 text-xl">
                                                    <Link href={nav.link}>
                                                        <a>{nav.title}</a>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    }
                </Transition>
            </header>
        )
    }
}
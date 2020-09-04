import Link from "next/link";
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
// https://qiita.com/jesuissuyaa/items/f9cb9343057de306ff25
// https://www.npmjs.com/package/@fortawesome/react-fontawesome#features
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

function menutoggle(){
    const p1 = document.getElementById("headerMenuPanel");

    if(p1.classList.contains( "hidden" )){
        // noneで非表示
        p1.classList.remove("hidden");
    }else{
        // blockで表示
        p1.classList.add( "hidden" );
    }
}

export default function Header() {
    return (
        <header>
            <div className="p-4 fixed z-10 w-full">
                <div className="h-20 w-full flex bg-white rounded-lg overflow-hidden">
                    <div className="flex-1">
                        <img className="h-full ml-4" src="../comu_syimbol.jpg" alt="logo"/>
                    </div>
                    <div className="flex-auto text-right">
                        <button className="h-full"
                                onClick={() => { menutoggle();}}
                        >
                            <FontAwesomeIcon icon={['fas', 'bars']} width="40" className="ml-auto mr-4 h-full"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="z-50 w-full h-full fixed text-white panel overflow-y-auto hidden" id="headerMenuPanel">
                <div className="w-full p-8 text-right">
                    <button onClick={() => { menutoggle();}}>
                        <FontAwesomeIcon icon={['fas', 'times']} width="30"/>
                    </button>
                </div>
                <div className="text-center w-1/2 m-auto">
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
        </header>
    )
}
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

export default function Footer() {
    return (
        <footer className="">
            <Link href="/policy">
                <a className="p-2 text-center text-xs">サイトポリシー</a>
            </Link>
            <ul>
                <li>
                    <FontAwesomeIcon icon={['fab', 'twitter']} width="30" />
                </li>
                <li>
                    <FontAwesomeIcon icon={['fab', 'facebook']} width="30" />
                </li>
                <li>
                    <FontAwesomeIcon icon={['fab', 'youtube']} width="30" />
                </li>
            </ul>
            <Link href="https://oucrc.net">
                <a className="p-2 text-center text-xs">制作：電子計算機研究会</a>
            </Link>

        </footer>
    )
}
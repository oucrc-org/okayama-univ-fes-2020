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
        <footer className="text-center text-white p-16 bg-blue-900">
            <div className="flex">
                <div className="flex-1">
                    <FontAwesomeIcon icon={['fab', 'twitter']} width="30" className="inline" />
                    <FontAwesomeIcon icon={['fab', 'instagram']} width="30" className="inline mx-12" />
                    <FontAwesomeIcon icon={['fab', 'youtube']} width="30" className="inline" />
                </div>
            </div>
            <div className="p-4">
                <p className="p-4">
                    <Link href="/policy">
                        <a className="p-2 text-xs">サイトポリシー</a>
                    </Link>
                </p>
                <p>
                    <Link href="https://oucrc.net">
                        <a className="p-2 text-center text-xs">制作：電子計算機研究会</a>
                    </Link>
                </p>
            </div>
        </footer>
    )
}
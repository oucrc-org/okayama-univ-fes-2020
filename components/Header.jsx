import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-3 sticky top-0 z-50">
            <div>
                <Link href="/">
                    <a>
                        岡山大学津島祭
                    </a>
                </Link>
            </div>
            <div>
                <button type="button" className="block">
                    <FontAwesomeIcon icon={['fas', 'bars']} width="30" />
                </button>
            </div>
        </header>
    )
}
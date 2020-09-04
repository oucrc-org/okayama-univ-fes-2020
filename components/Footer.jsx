import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-200 p-3 text-right">
            <div className="flex-row-reverse">
                <Link href="/Sponsors">
                    <a className="p-2 text-center text-xs">協賛企業一覧</a>
                </Link>
                <Link href="/Policy">
                    <a className="p-2 text-center text-xs">サイトポリシー</a>
                </Link>
            </div>
        </footer>
    )
}
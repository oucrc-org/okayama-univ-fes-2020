import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-5 sticky top-0 shadow z-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                    <a><span className="font-semibold text-xl tracking-tight">ここにタイトルが入ります</span></a>
                </Link>
            </div>
        </nav>
    )
}
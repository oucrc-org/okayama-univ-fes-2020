import Content from "./Content";
import Link from "next/link";

export default function Contents({fixedContents}) {

    return (
        <div className="mb-6">
            <div className="text-xl font-bold mt-3 text-blue-700">メッセージ</div>
            <ul className="grid sm:grid-cols-2">
                {fixedContents.map((content) => (
                    <Link href={content.link}>
                        <a><Content key={content.id} content={content}/></a>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
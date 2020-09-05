import Content from "./Content";
import Link from "next/link";

export default function Contents({fixedContents,contents}) {

    return (
        <div>
            <div className="text-xl font-bold m-3">コンテンツ</div>
            <ul className="grid sm:grid-cols-2">
                {fixedContents.map((content) => (
                    <Link href={content.link}>
                        <a><Content key={content.id} content={content}/></a>
                    </Link>
                ))}
            </ul>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {contents.map((content) => (
                    <Content key={content.id} content={content}/>
                ))}
            </ul>
        </div>
    )
}
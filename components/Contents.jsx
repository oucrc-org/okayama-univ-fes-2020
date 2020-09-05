import Content from "./Content";
import Link from "next/link";
import Heading from "./common/Heading";

export default function Contents({fixedContents}) {

    return (
        <div className="mb-6">
            <Heading text={"メッセージ"}/>
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
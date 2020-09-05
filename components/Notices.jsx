import Notice from "./Notice";
import Heading from "./common/Heading";

export default function Notices({notices}) {
    return (
        <div className="mb-6">
            <Heading text={"お知らせ"}/>
            <div className="rounded shadow-md p-3 border-2">
                <ul>
                    {notices.map((notice) => (
                        <Notice key={notice.id} notice={notice}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
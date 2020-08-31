import Notice from "./Notice";

export default function Notices({notices}) {
    return (
        <div>
            <div className="font-bold text-xl m-3">お知らせ</div>
            <div className="rounded shadow-md m-3 p-3 border-2">
                <ul>
                    {notices.map((notice) => (
                        <Notice key={notice.id} notice={notice}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
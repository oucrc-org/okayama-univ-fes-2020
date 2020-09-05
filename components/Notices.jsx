import Notice from "./Notice";

export default function Notices({notices}) {
    return (
        <div className="mb-6">
            <div className="font-bold text-xl mb-3 text-blue-700">お知らせ</div>
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
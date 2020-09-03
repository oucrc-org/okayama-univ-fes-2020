import Content from "./Content";

export default function Contents({contents}) {

    //固定コンテンツ
    const fixedContents = [
        {
            "id": 1,
            "title": "学長からのメッセージ"
        },
        {
            "id": 2,
            "title": "実行委員長からのメッセージ"
        }
    ];

    return (
        <div>
            <div className="text-xl font-bold m-3">コンテンツ</div>
            <ul className="grid sm:grid-cols-2">
                {fixedContents.map((content) => (
                    <Content key={content.id} content={content}/>
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
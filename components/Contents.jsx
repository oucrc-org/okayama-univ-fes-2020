export default function Contents() {
    return (
        <div>
            <div className="text-xl font-bold m-3">コンテンツ</div>
            <div className="rounded shadow-md m-3 border-2">
                <img className="mb-1" src="1080x720.png" alt=""/>
                <div className="m-3">
                    <p>コンテンツのタイトル</p>
                    <p className="text-sm">ジャンル：あ</p>
                </div>
            </div>
        </div>
    )
}
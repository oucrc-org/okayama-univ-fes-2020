export default function Content({content}) {
    return (
        // TODO::要素によってbackgroundの色変えたい
        <div className={"rounded-lg shadow-md bg-blue-600 text-white m-3 border-2 p-4 h-auto"}>
            <div className={"flex"}>
                <div className={"w-2/3 h-24 text-center p-8"}>
                    <p>{content.title}</p>
                </div>
                <div className={"w-1/3 h-24"}>
                    <img className={"h-full rounded-lg"} src={content.image ? content.image : "/1080x720.png"} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default function Heading({text}) {
    return (
        <div className="relative mb-6">
            <div className="absolute w-3/4 bg-blue-600 h-full rounded-r"/>
            <div className="z-10 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                <h1 className="text-xl text-white font-serif">{text}</h1>
            </div>
        </div>
    )
}
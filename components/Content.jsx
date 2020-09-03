export default function Content({content}) {
    return (
        <li className="rounded shadow-md m-3 border-2">
            <img className="mb-1" src="1080x720.png" alt=""/>
            <div className="m-3">
                <p>{content.title}</p>
            </div>
        </li>
    )
}
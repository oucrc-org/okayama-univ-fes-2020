export default function Content({club}) {
    return (
        <li className="rounded shadow-md m-2 border-2">
            <img className="mb-1 h-32 object-contain mx-auto" src={club.logo ? 'https://drive.google.com/uc?export=view&id=' + club.logo + '&usp=sharing' : "/1080x720.png"} alt=""/>
            <div className="m-3 flex justify-center">
                <p className="text-sm h-10">{club.title}</p>
            </div>
        </li>
    )
}
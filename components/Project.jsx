export default function Project({project}) {
    return (
        <div>
            <h2 className="text-red-800 text-xl font-bold mb-3 font-serif">{project.title}</h2>
            <iframe className="mb-6" width="100%" height="360px"
                    src={project.movie} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <p className="mb-6">{project.desc}</p>
        </div>
    )
}
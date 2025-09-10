import '../../Style Sheets/Small Components/ProjectCard.css'

function ProjectCard({img_url, img_alt, title, description, link, tags}) {

    return (
        <a href={link} target="_blank" className="project-card" id="project-link">
            <div>
                <img src={img_url} alt={img_alt}/>

                <div className="card-bottom">
                    <h6>{title}</h6>
                    <p>{description}</p>

                    <ul className="tags">
                        {tags.map((tag, index) => (
                            <li className="tag" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </a>
    );
}

export default ProjectCard
import '../../Style Sheets/Small Components/ProjectCard.css'

function ProjectCard({img_url, img_alt, title, description, link}) {

    return (
        <a href={link} target="_blank" className="project-card" id="project-link">
            <div>
                <img src={img_url} alt={img_alt}/>
                <div className="card-bottom">
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard
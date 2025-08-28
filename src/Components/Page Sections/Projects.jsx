import '../../Style Sheets/Page Sections/Projects.css'
import ProjectCard from '../Small Components/ProjectCard';
import MoreButton from '../Small Components/MoreButton';

function Projects() {

    return (
        <div className="content-wrapper" id="projects">
            <h3>Featured Projects</h3>
            <div className="project-wrapper">
                <ProjectCard img_url='https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg' img_alt='Alt' title='Title' description='Description'/>
                <ProjectCard img_url='https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg' img_alt='Alt' title='Title' description='Description'/>
                <ProjectCard img_url='https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg' img_alt='Alt' title='Title' description='Description'/>
                <ProjectCard img_url='https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg' img_alt='Alt' title='Title' description='Description'/>
            </div>
            <MoreButton text='More Projects' link='/projects'/>
        </div>
    );
}

export default Projects
import '../../Style Sheets/Page Sections/Projects.css'
import ProjectCard from '../Small Components/ProjectCard';
import MoreButton from '../Small Components/MoreButton';

function Projects() {

    return (
        <div className="content-wrapper" id="projects">
            <h3>Featured Projects</h3>
            <div className="project-wrapper">
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Password%20manager.png' img_alt='Alt'
                    title='Encrypted Password Manager'
                    description='Coded in Python with Fernet & CustomTkinter libraries'
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/TicTacToe-cropped'
                    img_alt='Alt'
                    title='User vs Computer TicTacToe'
                    description='Play against a challenging but beatable computer algorithm'
                    link='https://trinket.io/python/09a150958d?outputOnly=true&runOption=run'
                />
                <ProjectCard
                img_url='https://ik.imagekit.io/lucan/NumberSorter2.png'
                img_alt='Alt'
                title='Sorting Algorithm Visualizer'
                description='Sorts numbers using Bubble Sort and Insertion Sort algorithms'
                link='https://trinket.io/python3/95a868d558?toggleCode=true&runOption=run'
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/wordle.png'
                    img_alt='Alt'
                    title='Infinite Wordle'
                    description='Graphical word guessing game with ulimited plays per day'
                />
            </div>
            <MoreButton text='More Projects' link='/projects'/>
        </div>
    );
}

export default Projects
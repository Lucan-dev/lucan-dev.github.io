import { Link } from 'react-router-dom'
import ProjectCard from '../../Components/Small Components/ProjectCard'

function Projects() {
    return(
        <div className="content-wrapper" id="projects">
            <h3 id="projects-header">Projects</h3>

            <div className="project-wrapper">
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Password%20manager.png' img_alt='Alt'
                    title='Encrypted Password Manager'
                    description='Password manager with search function and encrypted data storage'
                    tags={["Python", "Tkinter", "Fernet"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/TicTacToe-cropped'
                    img_alt='Alt'
                    title='User vs Computer TicTacToe'
                    description='Command line game where user plays against TicTacToe algorithm'
                    link='https://trinket.io/python/09a150958d?outputOnly=true&runOption=run'
                    tags={["Python"]}
                />
                <ProjectCard
                img_url='https://ik.imagekit.io/lucan/NumberSorter2.png'
                img_alt='Alt'
                title='Sorting Algorithm Visualizer'
                description='Customizable program that sorts numbers using Bubble Sort & Insertion Sort algorithms'
                link='https://trinket.io/python3/95a868d558?toggleCode=true&runOption=run'
                tags={["Python"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/wordle.png'
                    img_alt='Alt'
                    title='Infinite Wordle'
                    description='Graphical word guessing game with ulimited plays per day'
                    tags={["Python", "Tkinter"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/wordle.png'
                    img_alt='Alt'
                    title='Woodworking'
                    description='Manufactured with various tools'
                    tags={["Python", "Tkinter"]}
                />
            </div>
        </div>
    );
}

export default Projects;
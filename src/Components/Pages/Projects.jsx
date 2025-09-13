import { Link } from 'react-router-dom'
import ProjectCard from '../../Components/Small Components/ProjectCard'

function Projects() {
    return(
        <div className="content-wrapper" id="projects">
            <h3 id="projects-header">Projects</h3>

            <h5>Competitive Robotics</h5>
            <div className="project-wrapper">
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/High%20Stakes.jpg' img_alt='Alt'
                    title='Ringbot 2025'
                    description='Ring stacking robot for VEX Push Back World Championship'
                    link='https://youtu.be/YQq7Y45SYrE'
                    tags={["VEX Robotics"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Over%20Under.jpg' img_alt='Alt'
                    title='Ballbot 2024'
                    description='Triball shooting and grappling robot for VEX Over Under World Championship'
                    tags={["VEX Robotics"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Robot4.JPG' img_alt='Alt'
                    title='Frisbot 2023'
                    description='Disc launching robot with AI goal tracking for VEX Spin Up World Championship'
                    link='https://youtu.be/Nb1d4bbiFl4'
                    tags={["VEX Robotics"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Pitching%20In.jpg' img_alt='Alt'
                    title='Catabot 2022'
                    description='Ball launching and climbing robot with for VEX IQ Pitching In World Championship'
                    link='https://youtu.be/dgtBVSzvTzQ'
                    tags={["VEX IQ Robotics"]}
                />
            </div>

            <h5>Python Apps</h5>
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
            </div>

            <h5>Websites</h5>
            <div className="project-wrapper">
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Hands%20of%20Fate.png'
                    img_alt='Alt'
                    title='AI Blackjack Game'
                    description="Gesture controlled website with image recognition model"
                    link='https://hands-of-fate-blackjack.netlify.app'
                    tags={["Google Teachable Machine", "Javascript"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/Space.jpg'
                    img_alt='Alt'
                    title='Astronomy Picture of the Day'
                    description="Website showcases daily space images and insights using NASA's API"
                    link='https://apod-api.netlify.app'
                    tags={["Javascript", "HTML", "CSS"]}
                />
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/trivia-transformed.jpeg'
                    img_alt='Alt'
                    title='Trivia 101 Game'
                    description="Online True or False game using Open Trivia Database API"
                    link='https://trivia101.netlify.app'
                    tags={["Javascript", "HTML", "CSS"]}
                />
            </div>

            <h5>Craftsmanship</h5>
            <div className="project-wrapper">
                <ProjectCard
                    img_url='https://ik.imagekit.io/lucan/3%20Woodwork%20Projects.png'
                    img_alt='Alt'
                    title='Woodwork Projects'
                    description='Functional and decorative pieces made using different wood, tools, and techniques'
                    link='https://photos.app.goo.gl/LuZRV7PdyhawKJDx9'
                    tags={["Woodwork 10"]}
                />
            </div>
        </div>
    );
}

export default Projects;
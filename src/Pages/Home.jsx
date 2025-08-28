import { Link } from 'react-router-dom'
import './Style Sheets/Home.css'
import Intro from '../Components/Intro'
import Technologies from '../Components/Technologies'
import Projects from '../Components/Projects'

function Home() {
    return(
        <>
            <Intro/>
            <Technologies/>
            <Projects/>
        </>
    );
}

export default Home;
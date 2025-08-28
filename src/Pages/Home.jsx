import { Link } from 'react-router-dom'
import './Style Sheets/Home.css'

import Intro from '../Components/Intro'
import Technologies from '../Components/Technologies'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'

function Home() {
    return(
        <>
            <Intro/>
            <Technologies/>
            <Projects/>
            <Experience/>
        </>
    );
}

export default Home;
import { Link } from 'react-router-dom'
import './Style Sheets/Home.css'
import Intro from '../Components/Intro'
import Technologies from '../Components/Technologies'

function Home() {
    return(
        <>
            <Intro/>
            <Technologies/>
        </>
    );
}

export default Home;
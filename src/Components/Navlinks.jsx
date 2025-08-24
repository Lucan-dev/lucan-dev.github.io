import { Link } from 'react-router-dom'

function Navlinks() {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/projects">Portfolio</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/achievements">Achievements</Link>
        </>
    );
}

export default Navlinks
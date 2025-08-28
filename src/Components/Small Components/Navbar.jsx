import '../../Style Sheets/Small Components/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav className="navbar">
            <Link className="link" id="nav-home" to="/">Lucan</Link>

            <div className="other-nav-links">
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/certifications">Certifications</Link>
                <Link className="link" to="/achievements">Achievements</Link>
            </div>
        </nav>
    );
}

export default Navbar
import '../../Style Sheets/Small Components/MoreButton.css'
import { Link } from 'react-router-dom'

function MoreButton({text, link}) {
    return(
        <div className="button-container">
            <button>
            <Link to={link} className="button-link">
                <h6 className="button-link">{text}</h6>
            </Link>
            </button>
        </div>
    )
}

export default MoreButton
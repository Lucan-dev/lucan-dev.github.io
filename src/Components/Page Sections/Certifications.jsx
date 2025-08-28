import '../../Style Sheets/Page Sections/Certifications.css'
import MoreButton from '../Small Components/MoreButton';

function Certifications() {
    return (
        <div className="content-wrapper" id="certifications">
        <MoreButton MoreButton text='More Certifications' link='/certifications'/>
        </div>
    );
}

export default Certifications
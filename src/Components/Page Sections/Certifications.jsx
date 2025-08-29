import '../../Style Sheets/Page Sections/Certifications.css'
import CertificateCard from '../Small Components/CertificateCard';
import MoreButton from '../Small Components/MoreButton';

function Certifications() {
    return (
        <div className="content-wrapper" id="certifications">
            <h3>Featured Certifications</h3>
            <CertificateCard
                img_url="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
                img_alt="Alt"
                title="Python 1"
                date="23 August 2024"
                description="This is the info about the certification: what it is for and who it is from"
            />
            <CertificateCard
                img_url="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
                img_alt="Alt"
                title="Python 1"
                date="23 August 2024"
                description="This is the info about the certification: what it is for and who it is from"
            />
            <CertificateCard
                img_url="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
                img_alt="Alt"
                title="Python 1"
                date="23 August 2024"
                description="This is the info about the certification: what it is for and who it is from"
            />
            <MoreButton MoreButton text='More Certifications' link='/certifications'/>
        </div>
    );
}

export default Certifications
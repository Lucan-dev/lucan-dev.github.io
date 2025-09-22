import '../../Style Sheets/Page Sections/Certifications.css'
import CertificateCard from '../Small Components/CertificateCard';
import MoreButton from '../Small Components/MoreButton';

function Certifications() {
    return (
        <div className="content-wrapper" id="certifications">
            <h3>Featured Certifications</h3>

            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/ICTC_Certificate"
                img_alt="Alt"
                title="Business and Information Analysis Gold Seal"
                date="June 2025"
                description="Certified by the Information and Communications Technology Council for FIT program"
            />
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/Amazon_Cybersecurity_Awareness_Certificate"
                img_alt="Alt"
                title="Amazon Cybersecurity Awareness"
                date="July 2024"
                description="Certified by Amazon for learning how to manage common cybersecurity risks"
            />
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/Python_Essentials_1_Certificate"
                img_alt="Alt"
                title="Python Essentials 1"
                date="March 2024"
                description="Certified by Cisco and the Python Institute for proficiency in essential Python skills"
            />

            <MoreButton MoreButton text='More Certifications' link='/certifications'/>
        </div>
    );
}

export default Certifications
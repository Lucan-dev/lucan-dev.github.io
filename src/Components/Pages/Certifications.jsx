import CertificateCard from '../Small Components/CertificateCard.jsx'
import MoreButton from '../Small Components/MoreButton.jsx'

function Certifications() {
    return(
        <div className="content-wrapper" id="certifications">
            <h3>Certifications</h3>
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/ICTC_Certificate"
                img_alt="Alt"
                title="Business and Information Analysis Gold Seal"
                date="June 2025"
                description="Certified by the Information and Communications Technology Council for FIT program"
            />
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/YELL_Completion_Certificate"
                img_alt="Alt"
                title="Young Entrepeneur Leadership Launchpad"
                date="June 2025"
                description="Certified by YELL Canada for developing and pitching a business venture to industry professionals"
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
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/HYTE_Completion_Certificate"
                img_alt="Alt"
                title="Horizons Youth Tech Entrepreneurship"
                date="May 2024"
                description="Certified by HYTE for developing and pitching a business venture to industry professionals"
            />
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/CyberSafeBC_Certificate"
                img_alt="Alt"
                title="Cybersafe BC Certified"
                date="March 2023"
                description="Certified by the Justice Education Society & RCMP Foundation for online safety training"
            />
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/HIGH_FIVE_Certificate"
                img_alt="Alt"
                title="HIGH FIVE Certified"
                date="August 2022"
                description="Certified by British Columbia Recreation and Parks Association for volunteer training at children's camps"
            />
            <CertificateCard
                img_url="https://ik.imagekit.io/lucan/RedCross_Babysitting_Certificate"
                img_alt="Alt"
                title="Red Cross Babysitting"
                date="January 2020"
                description="Certified by the Red Cross in babysitting, first aid, child care, leadership, and emergency response"
            />
        </div>
    );
}

export default Certifications
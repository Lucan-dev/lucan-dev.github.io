import '../../Style Sheets/Small Components/CertificateCard.css'

function CertificateCard({img_url, img_alt, title, date, description}) {
    return (
        <a className="certificate-card"  href={img_url} target="_blank">
            <img src={img_url} alt={img_alt}/>

            <a className="certificate-text">
                <p id="date">{date}</p>
                <h5>{title}</h5>
                <p>{description}</p>
            </a>
        </a>
    );
}

export default CertificateCard
import '../../Style Sheets/Small Components/CertificateCard.css'

function CertificateCard({img_url, img_alt, title, date, description}) {
    return (
        <div className="certificate-card">
            <img src={img_url} alt={img_alt}/>

            <div className="certificate-text">
                <p id="date">{date}</p>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CertificateCard
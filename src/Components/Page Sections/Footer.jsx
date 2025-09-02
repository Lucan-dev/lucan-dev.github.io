import "../../Style Sheets/Page Sections/Footer.css"

function Footer() {
    return (
        <div id="footer">
            <h6>Coded with <span className="colored-text">React.js</span> by yours truly</h6>

            <div id="footer-bottom">
                <div id="contact-info">
                    <p>chuganilucan@gmail.com</p>
                    <p>604-618-3422</p>
                </div>
                
                <a href="https://github.com/Lucan-dev" target="_blank">
                <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.26.72-1.55-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.18 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.66.23 2.88.11 3.18.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.7.41.35.77 1.05.77 2.12v3.15c0 .3.21.65.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
                </a>
            </div>

        </div>
    )
}

export default Footer
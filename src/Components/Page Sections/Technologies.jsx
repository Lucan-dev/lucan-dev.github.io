import '../../Style Sheets/Page Sections/Technologies.css'

function Technologies() {
    return (
        <div className="content-wrapper" id="technologies">
            <h3>About Me</h3>
            <p>Whether I am designing mechanical systems or programming control algorithms, I enjoy the challenge solving complex problems. I am always looking for opportunities to learn and apply my skills to real-world challenges.</p>
            <br/>
            <p>Here's some technologies I've been working with recently:</p>

            <div className="technology-sections">
                <div className="technology-section">
                    <h6>Programming</h6>
                    <ul>
                        <li>Python</li>
                        <li>C++</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <div className="technology-section">
                    <h6>Frameworks & Libraries</h6>
                    <ul>
                        <li>React.js</li>
                        <li>LemLib</li>
                        <li>PROS</li>
                        <li>Tkinter</li>
                    </ul>
                </div>

                <div className="technology-section">
                    <h6>Design & CAD</h6>
                    <ul>
                        <li>Onshape</li>
                        <li>Fusion 360</li>
                        <li>Bambu Studio</li>
                        <li>Protobot</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Technologies
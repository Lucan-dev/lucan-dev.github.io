import '../../Style Sheets/Page Sections/Technologies.css'

function Technologies() {
    return (
        <div className="content-wrapper" id="technologies">
            <h3>About Me</h3>
            <p>From building robots for competitions to starting my own 3D printing business, I've always been fascinated by the challenge of solving complex problems. I aim to purse a career in engineering and contributing to fields such as quantum computing, autonomous vehicles, spacecraft, and robotics.</p>
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
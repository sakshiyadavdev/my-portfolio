import "../styles/about.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">

                {/* Header */}
                <div className="section-header">
                    <h2>About Me</h2>
                    <p>A quick introduction</p>
                </div>

                <div className="about-content">

                    {/* LEFT */}
                    <div className="about-left">
                        <h3>
                            React Developer with a passion for clean UI & scalable code
                        </h3>

                        <p className="about-intro">
                            I have 2+ year of experience working with React, building
                            responsive and user-focused web applications.
                        </p>

                        <ul className="about-points">
                            <li>✔ Strong understanding of React fundamentals</li>
                            <li>✔ Experience with reusable components & hooks</li>
                            <li>✔ Focus on performance and clean code</li>
                            <li>✔ Comfortable with Git & team collaboration</li>
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="about-right">
                        <div className="about-card">
                            <h4>2+</h4>
                            <span>Years Experience</span>
                        </div>

                        <div className="about-card">
                            <h4>10+</h4>
                            <span>Projects Built</span>
                        </div>

                        <div className="about-card">
                            <h4>React</h4>
                            <span>Main Expertise</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
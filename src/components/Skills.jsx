import "../styles/skills.css";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">

                {/* Header */}
                <div className="section-header">
                    <h2>Skills</h2>
                    <p>Technologies I work with</p>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">

                    {/* Frontend */}
                    <div className="skill-card">
                        <h3>Frontend</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Material UI</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="skill-card">
                        <h3>Backend</h3>
                        <ul>
                            <li>Java</li>
                            <li>Node.js</li>
                            <li>WebSocket</li>
                                
                        </ul>
                    </div>

                    {/* Database */}
                    <div className="skill-card">
                        <h3>Database</h3>
                        <ul>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    {/* Tools & Deployment */}
                    <div className="skill-card">
                        <h3>Tools & Deployment</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Vite</li>
                            <li>VS Code</li>
                            <li>Vercel</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
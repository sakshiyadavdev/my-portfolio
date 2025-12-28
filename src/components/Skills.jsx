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
                            <li>JavaScript (ES6+)</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>

                    {/* Programming */}
                    <div className="skill-card">
                        <h3>Programming</h3>
                        <ul>
                            <li>Java</li>
                            <li>OOP Concepts</li>
                            <li>Basic DSA</li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="skill-card">
                        <h3>Tools</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Vite</li>
                            <li>VS Code</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
import "../styles/projects.css";
import projects from "../data/projects";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                {/* Header */}
                <div className="section-header">
                    <h2>Projects</h2>
                    <p>Some of my recent work</p>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects   .map((project) => (
                        <div className="project-card" key={project.id}>

                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.live} target="_blank">Live</a>
                                    <a href={project.github} target="_blank">GitHub</a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
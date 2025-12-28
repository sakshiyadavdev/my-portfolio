import "../styles/hero.css";
import myImg from "../assets/images/1000081960.jpg";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">

                {/* Text */}
                <div className="hero-text animate">
                    <h1>
                        Hi, I'm <span>Sakshi</span>
                    </h1>

                    <h2>React Developer</h2>

                    <p>
                        Passionate React Developer with 2+ year of experience
                        building fast, responsive and user-friendly web applications.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="hero-image animate-delay">
                    <div className="image-box">
                    <img src={myImg} alt="profile" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
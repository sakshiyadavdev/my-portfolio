import "../styles/footer.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <p>© 2025 Sakshi. All Rights Reserved.</p>

                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/sakshiyadav802"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/sakshiyadavdev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://wa.me/917282808488"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaWhatsapp />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
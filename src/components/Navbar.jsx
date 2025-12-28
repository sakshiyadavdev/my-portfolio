import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* Logo */}
                <h2 className="logo">Sakshi</h2>

                {/* Nav Links */}
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li>
                        <a
                            href="#contact"
                            className="contact-btn"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Hamburger / Close Icon */}
                <div
                    className={`menu-icon ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
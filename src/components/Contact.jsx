import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                {/* Header */}
                <div className="section-header">
                    <h2>Contact</h2>
                    <p>Let’s work together</p>
                </div>

                {/* Content */}
                <div className="contact-content">

                    <div className="contact-text">
                        <h3>Get in Touch</h3>
                        <p>
                            I’m open to opportunities in frontend development, especially
                            React-based website projects in the financial and banking domain and others.
                        </p>
                    </div>

                    <div className="contact-info">

                        <div className="info-item">
                            <div className="info-icon">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <span>Mobile No.</span>
                                <p>7282808488</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon whatsapp">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <span>WhatsApp</span>
                                <p>
                                    <a
                                        href="https://wa.me/917282808488"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        7282808488
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <span>Email</span>
                                <p>sakshiy802@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <FaLinkedin />
                            </div>
                            <div>
                                <span>LinkedIn</span>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/sakshiyadav802"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        linkedin.com/in/sakshiyadav802
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
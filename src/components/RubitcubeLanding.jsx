import React from "react";
import logo from "../assets/logo.png";
import titlebar from "../assets/titlebar.jpg";

export default function RubitcubeLanding() {
  return (
    <div className="page">
{/* Navbar */}
    <header className="navbar">
        <div className="logo">
            <img src={logo} alt="Rubitcube Logo" className="logo-img" />
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </nav>
    </header>

{/* === Hero Section (Updated) === */}
    <section id="home" className="hero">
        <div className="hero-content">
            <div className="hero-text">
                <h1>Empowering <span>Innovation</span> Through Intelligence</h1>
                <p>At Rubitcube, we craft intelligent digital solutions — blending creativity,AI, and technology to accelerate your business growth.</p>

                <div className="hero-buttons">
                    <a href="#services" className="btn-primary">Explore Services</a>
                    <a href="#contact" className="btn-outline">Get a Quote</a>
                </div>
            </div>

        </div>
    </section>


{/* Services Section */}
    <section id="services" className="section">
        <h1>Our Services</h1>
        <i>Innovative solutions that transform your business.</i>

        <div className="cards">
            <div className="card ai">
                <h2>Artificial Intelligence</h2>
                <i>Revolutionize operations and decisions through AI.</i>
                <ul>
                    <li>Predictive Analytics</li>
                    <li>Natural Language Processing (NLP)</li>
                    <li>Customer Interaction Platforms</li>
                    <li>HR AI Solutions</li>
                    <li>Custom AI on AWS & Google Cloud</li>
                    <li>AI for SMEs</li>
                </ul>
            </div>

            <div className="card tech">
                <h2>Information Technology</h2>
                <i>Driving business growth with smart IT infrastructure.</i>
                <ul>
                    <li>Cloud Services</li>
                    <li>Domain & Hosting</li>
                    <li>Web and Mobile App Development</li>
                    <li>Email & Cybersecurity Solutions</li>
                    <li>Data & Analytics</li>
                    <li>Enterprise Software</li>
                </ul>
            </div>

            <div className="card media">
                <h2>Multimedia & Design</h2>
                <i>Merging creativity and technology for impactful visuals.</i>
                <ul>
                    <li>Brand Auditing & Strategy</li>
                    <li>Logo & Brand Identity</li>
                    <li>Product/Packaging Design</li>
                    <li>Architecture Rendering (2D/3D)</li>
                    <li>VR & AR Experiences</li>
                </ul>
            </div>

            <div className="card marketing">
                <h2>Marketing Solutions</h2>
                <i>Boosting digital presence and audience engagement.</i>
                <ul>
                    <li>SEO & SEM</li>
                    <li>Social Media Management</li>
                    <li>Ads Management</li>
                    <li>Analytics & Lead Generation (LeadGenPro)</li>
                    <li>Content Marketing</li>
                    <li>TargetEdge Strategy</li>
                </ul>
            </div>
        </div>
    </section>


{/* Industries Section */}
    <section id="industries" className="section light">
        <h1>Industries We Serve</h1>
        <div className="cardz">
            <div className="card1">
                <h3>Healthcare</h3>
            </div>
            <div className="card1">
                <h3>Education</h3>
            </div>
            <div className="card1">
                <h3>Hospitality</h3>
            </div>
            <div className="card1">
                <h3>Real Estate</h3>
            </div>
            <div className="card1">
                <h3>Technology</h3>
            </div>
            <div className="card1">
                <h3>Travel & Tourism</h3>
            </div>
            <div className="card1">
                <h3>Construction</h3>
            </div>
            <div className="card1">
                <h3>Automobile</h3>
            </div>
            <div className="card1">
                <h3>Fashion</h3>
            </div>
            <div className="card1">
                <h3>Events </h3>
            </div>
        </div>
    </section>


{/* About Section */}
    <section id="about" className="section">
        <h2>About Us</h2>
        <p>Rubitcube is a Dubai-based IT and Multimedia company combining creativity and intelligence to deliver results.</p>
    </section>

{/* Contact Section */}
    <section id="contact" className="section light">
        <h2>Contact Us</h2>
        <p>Email: <b>hello@rubitcube.com</b> | Location: <b>Dubai, UAE</b></p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

{/* Footer */}
    <footer className="footer">
        © {new Date().getFullYear()} Rubitcube Information Technology LLC.
    </footer>
    </div>
  );
}

import React from "react";

export default function RubitcubeLanding() {
  return (
    <div className="page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Rubitcube</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Think. Solve. Innovate. <span>Rubitcube</span></h1>
        <p>We empower businesses with intelligent solutions in AI, technology, and multimedia.</p>
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">Our Services</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <p>Innovative solutions that transform your business.</p>
        <div className="cards">
          <div className="card"><h3>Technology</h3><p>Web, Cloud & Mobile Solutions</p></div>
          <div className="card"><h3>AI & Data</h3><p>Predictive analytics & automation</p></div>
          <div className="card"><h3>Multimedia</h3><p>Design, AR/VR & branding</p></div>
          <div className="card"><h3>Marketing</h3><p>SEO, Ads & Content</p></div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section light">
        <h2>Industries We Serve</h2>
        <p>Healthcare • Education • Hospitality • Real Estate • Technology</p>
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

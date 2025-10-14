import "./Contact.css";

import { Link } from 'react-router-dom';


const Navbar = () => (
    <header className="navbar">
        <div className="logo">Island Explorer</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destination">Destinations</Link></li>
            <li><Link to="/package">Packages</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </header>
);

export default function Contact() {

  return (
    // Use a React Fragment to return multiple elements (Navbar and main div)
    <>
      <Navbar /> {/* Render the Navbar */}

      <div className="contact-page">

        {/* The existing contact page content follows */}

        <header className="contact-hero">
          <h1 className="">Contact Us</h1>
          <p className="">Please submit your Complaints and Suggestions</p>
        </header>

        <section className="contact-hero-emarjancy">
          <h2>DIAL 1912</h2>
          <p>Dial 1912 from any phone in Sri Lanka to reach us</p>
          <h4>Sri Lanka Tourism Head Office</h4>
          <p>+94 112425300</p>
          <p>+94 112462900 / 2426984</p>
          <p>80 Galle Rd, Colombo 03, Sri Lanka</p>
        </section>

        <section className="map-container">
          <iframe
            title="Sri Lanka Tourism Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63319.59417001373!2d79.815005!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d4c2e3b15%3A0xbbb4b6ed9c8a2f55!2sSri%20Lanka%20Tourism%20Development%20Authority!5e0!3m2!1sen!2slk!4v1696248490883!5m2!1sen!2slk"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

        <section className="contact-content-grid">
          <div className="contact-details-card">
            <h3>Sri Lanka Tourism Promotion Bureau</h3>
            <p>+94 112423300</p>
            <p>in@iland.travel</p>
          </div>
          <div className="contact-details-card">
            <h3>Sri Lanka Tourism Development Authority</h3>
            <p>+94 112426800</p>
            <p>info@iland.travel</p>
          </div>
          <div className="contact-details-card">
            <h3>Chairman’s Office</h3>
            <p>+94 113426600</p>
            <p>chairman@iland.travel</p>
          </div>
          <div className="contact-details-card">
            <h3>Director General’s Office</h3>
            <p>+94 112426750</p>
            <p>sg@iland.travel</p>
          </div>
          <div className="contact-details-card">
            <h3>Managing Director’s Office</h3>
            <p>+94 112428300</p>
            <p>md@iland.travel</p>
          </div>
          <div className="contact-details-card">
            <h3>Senior Superintendent of Police - Sri Lanka Tourism Police</h3>
            <p>+94 112 421 333</p>
            <p>police@iland.travel</p>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Island Explorer. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
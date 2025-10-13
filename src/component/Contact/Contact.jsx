import "./Contact.css";
// 1. Import Link for routing
import { Link } from 'react-router-dom';

// 2. Define the Navbar component
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

        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>Please submit your Complaints and Suggestions</p>
        </header>

        <section className="emergency-box">
          <h2>DIAL 1912</h2>
          <p>Dial 1912 from any phone in Sri Lanka to reach us</p>
          <h4>Sri Lanka Tourism Head Office</h4>
          <p>+94 112426800</p>
          <p>+94 112426900 / 2426984</p>
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

        <section className="contact-grid">
          <div className="contact-card">
            <h3>Sri Lanka Tourism Promotion Bureau</h3>
            <p>+94 112426900</p>
            <p>info@srilanka.travel</p>
          </div>
          <div className="contact-card">
            <h3>Sri Lanka Tourism Development Authority</h3>
            <p>+94 112426800</p>
            <p>info@srilanka.travel</p>
          </div>
          <div className="contact-card">
            <h3>Chairman’s Office</h3>
            <p>+94 112426700</p>
            <p>chairman@srilanka.travel</p>
          </div>
          <div className="contact-card">
            <h3>Director General’s Office</h3>
            <p>+94 112426750</p>
            <p>dg@srilanka.travel</p>
          </div>
          <div className="contact-card">
            <h3>Managing Director’s Office</h3>
            <p>+94 112426900</p>
            <p>md@srilanka.travel</p>
          </div>
          <div className="contact-card">
            <h3>Senior Superintendent of Police - Sri Lanka Tourism Police</h3>
            <p>+94 112 421 222</p>
            <p>police@srilanka.travel</p>
          </div>
        </section>

        <footer className="contact-footer">
          <div className="footer-columns">
            <div>
              <h4>Our Agencies</h4>
              <ul>
                <li>Sri Lanka Tourism Development Authority</li>
                <li>Sri Lanka Tourism Convention Bureau</li>
                <li>Ministry of Tourism</li>
              </ul>
            </div>
            <div>
              <h4>Our Partners</h4>
              <ul>
                <li>SriLankan Airlines</li>
                <li>Airport & Aviation</li>
                <li>Tourist Hotels Association</li>
              </ul>
            </div>
            <div>
              <h4>Industry Associations</h4>
              <ul>
                <li>Travel Agents Association</li>
                <li>Inbound Tour Operators</li>
              </ul>
            </div>
            <div>
              <h4>Follow us on:</h4>
              <p>🌐 Facebook | Twitter | Instagram | YouTube</p>
            </div>
          </div>
          <p className="copyright">
            © 2025 Sri Lanka Tourism. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
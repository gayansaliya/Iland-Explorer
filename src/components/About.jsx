// src/components/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Mock Data for Team Members
const teamMembers = [
  { 
    name: "Mr.A.W.J Silva", 
    title: "Chief Executive Officer", 
    bio: "With 20+ years in tourism, A.W.J Silva ensures our vision connects travelers with authentic Sri Lankan experiences.",
    image: "/images/about3.jpeg" // Replace with your image path
  },
  { 
    name: "Mrs.N.P Perera", 
    title: "Head of Operations", 
    bio: "N.P Perera manages logistics, ensuring every package runs smoothly and safely across the island.",
    image: "/images/about4.jpeg" // Replace with your image path
  },
  { 
    name: "Mr.K.L Fernando", 
    title: "Travel Consultant", 
    bio: "K.L Fernando specializes in custom itineraries, helping clients craft their perfect, personalized trip.",
    image: "/images/about5.jpeg" // Replace with your image path
  },
];

const About = () => {
  // Simple Navigation Bar component
  const Navbar = () => (
    <header className="navbar1">
        <div className="logo1">Island Explorer</div>
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

  return (
    <div className="about-container">
      <Navbar />

      <section className="about-hero">
        <h1>Welcome to Our Journey</h1>
        <p><b>Your trusted guide to the wonders of Sri Lanka.</b></p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To provide sustainable and authentic travel experiences that highlight
            the beauty, history and incredible hospitality of Sri Lanka, while 
            contributing positively to the local communities and environment.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><b>Integrity:</b> Honesty and transparency in all interactions.</li>
            <li><b>Excellence:</b>Delivering high-quality service and unforgettable trips.</li>
            <li><b>Sustainability:</b> Protecting the natural and cultural heritage of the island.</li>
          </ul>
        </div>
        <div className="mission-image">
           
        </div>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>Island Explorer was founded in 2010 with a vision to showcase the natural beauty 
          and rich culture of Sri Lanka to the world. Over the years, we have grown into a 
          trusted travel service, connecting travelers with authentic experiences across the island.</p>
        <p>Our dedication to sustainable tourism and exceptional service has allowed us 
          to organize hundreds of memorable trips,while supporting local communities and preserving 
          cultural heritage.</p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div 
                className="member-photo" 
                style={{ backgroundImage: `url(${member.image})` }}
              >
                
              </div>
              <h3>{member.name}</h3>
              <p className="member-title">{member.title}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (Placeholder) */}
      <footer className="footer">
        <p>&copy; 2025 Island Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};



export default About;
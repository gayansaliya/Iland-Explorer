// src/components/Package.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";

// Mock Data for Travel Packages
const packages = [
  {
    name: "Luxury Beach Retreat",
    duration: "7 Days / 6 Nights",
    price: "US $1,800",
    description: "Stay in 5-star beachfront resorts, enjoy private dining, and relax on the southern coast's finest beaches. Includes private car transfer.",
    type: "Luxury",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Beach image
  },
  {
    name: "Hill Country Explorer",
    duration: "5 Days / 4 Nights",
    price: "US $950",
    description: "Experience the famous Ella to Kandy train ride, visit tea factories, and hike Little Adam's Peak. Mid-range accommodation included.",
    type: "Adventure/Nature",
    image: "https://theyurtopian.com/wp-content/smush-webp/2024/11/@texas.explorerMaggie-Ger-shot-scaled.jpg.webp", // Sri Lanka hills
  },
  {
    name: "Cultural Triangle & Wildlife",
    duration: "10 Days / 9 Nights",
    price: "US $1,350",
    description: "See Sigiriya, Dambulla Cave Temple, and a safari in Yala National Park to spot leopards and elephants. A complete island experience.",
    type: "Culture/Wildlife",
    image: "https://images.squarespace-cdn.com/content/v1/5c94ab21a09a7e443410d831/1588845955759-XK118T6OJO5AUH9R5178/Yala+-+Wild+Coast+Tented+Lodge-+Resplendent+Ceylon+%287%29.jpg?format=750w", // Sigiriya / Wildlife
  },
];


const Package = () => {
  // Simple Navigation Bar component (for better project structure, move this 
  // into a separate 'Navbar.jsx' and import it everywhere)
  const Navbar = () => (
    <header className="navbar">
        <div className="logo">Island Explorer</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destination">Destinations</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </header>
  );

  return (
    <div className="package-container">
      <Navbar />

      <section className="package-hero">
        <h1>Curated Sri Lanka Travel Packages</h1>
        <p>Find the perfect journey designed for every type of traveler.</p>
      </section>

      <section className="package-list">
        <h2>Our Popular Tour Itineraries</h2>
        <div className="package-grid">
          {packages.map((pkg, index) => (
           <div key={index} className="package-card">
  <img src={pkg.image} alt={pkg.name} className="package-image" />
  <span className={`package-type ${pkg.type.toLowerCase().replace('/', '-')}`}>
    {pkg.type}
  </span>
  <h3>{pkg.name}</h3>
  <p className="duration">{pkg.duration}</p>
  <p className="description">{pkg.description}</p>
  <div className="card-footer">
    <span className="price">{pkg.price}</span>
    <Link to="/contact" className="book-button">
      Book Now
    </Link>
  </div>
</div>

          ))}
        </div>
      </section>
      
      <section className="custom-package-cta">
        <h2>Don't see what you're looking for?</h2>
        <p>We can customize a tour package just for you!</p>
        <Link to="/contact" className="cta-button-secondary">
          Request Custom Quote
        </Link>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Sri Lanka Travel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Package;
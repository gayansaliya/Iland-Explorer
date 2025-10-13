// src/components/Destination.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Destination.css";

// Mock Data for Destinations
const destinationRegions = [
  {
    name: "Ancient Cities & Heritage",
    description: "Explore UNESCO World Heritage sites like Sigiriya, Anuradhapura, and Polonnaruwa, stepping back into Sri Lanka's rich past.",
   image: "/images/ancient-cities.jpg",// Replace with your image path
    link: "/destination/heritage",
  },
  {
    name: "Hill Country & Tea Plantations",
    description: "Discover the misty mountains, lush tea estates, and picturesque train rides between Ella and Kandy, offering cool climates and stunning views.",
    image: "/images/hill-country.jpg", // Replace with your image path
    link: "/destination/hills",
  },
  {
    name: "Pristine Beaches & Coastline",
    description: "Relax on the golden sands of Mirissa, Unawatuna, or Trincomalee. Perfect for surfing, whale watching, and sunbathing.",
    image: "/images/beaches.jpg", // Replace with your image path
    link: "/destination/beaches",
  },
];

const Destination = () => {
  // Navigation component (reused from Home.jsx, but better practice 
  // is to move this into a separate 'Navbar.jsx' and import it)
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


  return (
    <div className="destination-container">
      <Navbar />

      {/* Hero Section for Destinations */}
      <section className="dest-hero-section">
        <div className="dest-hero-content">
          <h1>Your Next Great Sri Lankan Adventure Starts Here</h1>
          <p>An island packed with history, nature, and unforgettable coasts.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="dest-intro">
        <h2>Explore Sri Lanka's Diverse Regions</h2>
        <p>
          From misty highlands to golden beaches, Sri Lanka offers a stunning variety of landscapes within a few hours of travel. Every region reveals a new story, culture, and adventure waiting to be discovered.
        </p>
      </section>

      {/* Destination Cards Section */}
      <section className="destination-cards">
        {destinationRegions.map((region, index) => (
          <div key={index} className="destination-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: `url(${region.image})` }}
            >
              {/* Image is set via CSS background-image */}
              <div className="image-placeholder">
                
              </div>
            </div>
            <div className="card-content">
              <h3>{region.name}</h3>
              <p>{region.description}</p>
              <Link to={region.link} className="card-link">
                View Details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action for Packages */}
      <section className="package-cta">
        <h2>Ready to Travel?</h2>
        <p>Browse our curated packages and start planning your trip today!</p>
        <Link to="/package" className="cta-button">
          See All Packages
        </Link>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Island Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Destination;
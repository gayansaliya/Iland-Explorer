// src/components/Gallery.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

// Online Image URLs for Gallery
const galleryImages = [
  { id: 1, category: "Heritage", url: "https://tse4.mm.bing.net/th/id/OIP.a9KcyWF-4rLQIWVM5X840QHaEN?rs=1&pid=ImgDetMain", alt: "Sigiriya Rock Fortress" },
  { id: 2, category: "Beaches", url: "https://wallpapers.com/images/hd/sri-lanka-mirissa-beach-palms-sdtwfp2bsbtq3xb8.jpg", alt: "Mirissa Beach" },
  { id: 3, category: "Wildlife", url: "https://travellersisle.com/wp-content/uploads/2022/08/Leopard-in-Yala-national-park-2.jpg", alt: "Yala National Park Leopard" },
  { id: 4, category: "Nature", url: "https://media.licdn.com/dms/image/D5612AQHb59FVM7Dvug/article-cover_image-shrink_720_1280/0/1671548084867?e=2147483647&v=beta&t=_wvG8bw6ZsYG8Raij4hzS3C7d2rJGXYZjgFhy5mvupg", alt: "Ella train ride through mountains" },
  { id: 5, category: "Heritage", url: "https://overatours.com/wp-content/uploads/2021/09/galle-fort-1024x683.jpg", alt: "Galle Dutch Fort" },
  { id: 6, category: "Beaches", url: "https://www.wondersofceylon.com/content/images/size/w1200/2024/01/WoC-Unawatuna-Beach-Featured.webp", alt: "Unawatuna Palm Beach" },
  { id: 7, category: "Wildlife", url: "https://i0.wp.com/elephantorphanagesrilanka.com/wp-content/uploads/2021/09/isolatewithchanz_Udawalawe-Elephant-Transfer-Home.jpg?w=1080&ssl=1", alt: "Udawalawe Elephant" },
  { id: 8, category: "Nature", url: "https://img.freepik.com/premium-photo/nuwara-eliya-tea-plantation-sri-lanka-nuwara-eliya-is-most-important-place-tea-plantation-production-sri-lanka_78361-9432.jpg?w=1380", alt: "Nuwara Eliya Tea Plantation" },
  { id: 9, category: "Heritage", url: "https://www.ceylonexpeditions.com/medias/destination_places/big/106/temple-of-the-sacred-tooth-relic-kandy.jpg", alt: "Temple of the Tooth Relic, Kandy" },
];

const categories = ["All", "Heritage", "Nature", "Beaches", "Wildlife"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = galleryImages.filter(image =>
    activeCategory === "All" ? true : image.category === activeCategory
  );

  // Simple Navigation Bar
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
    <div className="gallery-container">
      <Navbar />

      <section className="gallery-hero">
        <h1>Visual Journey Through Sri Lanka</h1>
        <p>A collection of stunning moments captured across the island.</p>
      </section>

      <section className="gallery-content">
        {/* Category Filters */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.alt} />
              <div className="image-overlay">
                <p>{image.alt}</p>
                <span className="image-category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="no-images">No images found for this category.</p>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2025 Island Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Gallery;

import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">

      <Navbar /> 

      <div className="hero-section">
        <img
          src="/images/hero-sri-lanka.jpg"
          alt="Sri Lanka landscape"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Welcome to Sri Lanka</h1>
          <p>See what's waiting for you on your next island getaway.</p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <img
            src="/images/beach.jpg"
            alt="Beach"
            className="feature-image"
          />
          <h3>Sun & Beach</h3>
          <p>This entire island gifted by shining blue water.</p>
        </div>
        <div className="feature-card">
          <img
            src="/images/heritage.jpg"
            alt="Heritage"
            className="feature-image"
          />
          <h3>Sri Lankan Heritage</h3>
          <p>Discover rich cultural heritage and ancient sites.</p>
        </div>
        <div className="feature-card">
          <img
            src="/images/adventure.jpg"
            alt="Adventure"
            className="feature-image"
          />
          <h3>Adventure & Sports</h3>
          <p>Get experience in water, air, earth — many kinds of activities.</p>
        </div>
      </section>

      <section className="attractions">
        <h2>Where To Go</h2>
        <div className="attraction-grid">
          <div className="attraction-card">
            <img
              src="/images/sigiriya.jpg"
              alt="Sigiriya"
              className="attraction-image"
            />
            <h4>Sigiriya</h4>
          </div>
          <div className="attraction-card">
            <img
              src="/images/yala.jpg"
              alt="Yala National Park"
              className="attraction-image"
            />
            <h4>Yala National Park</h4>
          </div>
          <div className="attraction-card">
            <img
              src="/images/colombo.png"
              alt="Colombo City"
              className="attraction-image"
            />
            <h4>Colombo City Tour</h4>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;

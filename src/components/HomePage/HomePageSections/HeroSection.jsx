    
import React from 'react';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Welcome to Our Floral Boutique</h1>
       <br />
      <p>Discover beauty in every bloom. Fresh flowers & unique plants for every occasion.</p>
      <br />
     
      <br />
     
      <Link to="/products" className="hero-cta-button">Shop Our Collection</Link>
    </section>
  );
}

export default HeroSection;
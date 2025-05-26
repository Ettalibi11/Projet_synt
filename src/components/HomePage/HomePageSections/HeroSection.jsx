      // src/components/HomePageSections/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// If this component has its own specific styles not covered by HomePage.css,
// you could create HeroSection.css and import it here.
// For now, we assume styles are in HomePage.css or global.

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Welcome to Our Floral Boutique</h1>
      <p>Discover beauty in every bloom. Fresh flowers & unique plants for every occasion.</p>
      <Link to="/products" className="hero-cta-button">Shop Our Collection</Link>
    </section>
  );
}

export default HeroSection;
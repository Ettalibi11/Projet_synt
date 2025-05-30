
import React from 'react';

import aboutImage from '../../../assets/images/full logo.jpg';

function AboutUsSection() {
  return (
    <section  id="about-us-section" className="about-us-section homepage-section">
      <div className="section-content-wrapper">
        <h2 className="section-title">About Us </h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>
              Welcome to Almond Blossom , where floral artistry meets a deep love for nature's beauty. Founded in 2022,
              our journey began with a simple dream: to bring joy and elegance into people's lives through the timeless
              charm of flowers and plants.
            </p>
            <p>
              We believe that every stem tells a story, and every arrangement is a unique expression. Our team of passionate
              florists hand-selects the freshest blooms from local growers and trusted suppliers, ensuring that every
              creation is vibrant, long-lasting, and crafted with meticulous care.
            </p>
            <p>
              Whether you're celebrating a special occasion, expressing a heartfelt sentiment, or simply brightening your
              space, we're here to help you find the perfect floral expression. Thank you for letting us be a part of
              your moments.
            </p>
            
          </div>
          <div className="about-us-image-container">
            <img src={aboutImage} alt="Our floral shop or team" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
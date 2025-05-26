      // src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
import './Footer.css'; // We'll create this CSS file

// You'll need to get actual SVG icons or use a library like React Icons
// For placeholder purposes, I'll use text, but replace with actual icons.
// Example using React Icons (install it first: npm install react-icons)
 import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
 import { FiTwitter } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">
        <div className="footer-column footer-about">
          <h3 className="footer-heading">[the Shop Name]</h3>
          <p>
            Bringing beauty and joy into your life with handcrafted floral designs and unique plants.
            Inspired by nature, created with passion.
          </p>
          {/* Optional: Small logo image */}
          {/* <img src="/path-to-your-logo-light.png" alt="[Your Shop Name] Logo" className="footer-logo" /> */}
        </div>

        <div className="footer-column footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><HashLink to="/">Home</HashLink></li>
            <li><HashLink to="/products">Our Collection</HashLink></li>
            <li><HashLink to="/#faqs-section">FAQs</HashLink></li> {/* HashLink to FAQ section on homepage */}
            <li><HashLink to="/#about-us-section">About Us</HashLink></li> {/* Link to About Us section on homepage */}
            {/* Add more links as you create pages */}
            {/* <li><Link to="/contact">Contact Us</Link></li> */}
          </ul>
        </div>

        <div className="footer-column footer-policy-links">
          <h3 className="footer-heading">Our Policies</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF /> {/* Use the imported component here */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram /> {/* Use the imported component here */}
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterestP /> {/* Use the imported component here */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
          </div>
          {/* Optional: Newsletter Signup */}
          <div className="newsletter-signup">
            <h4>Stay Updated</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} [the Shop Name]. All Rights Reserved. Designed with ♥.</p>
      </div>
    </footer>
  );
}

export default Footer;
      // src/components/HomePageSections/FeaturedProductsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProductsSection({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <section className="featured-products-section">
        <div className="section-header">
          <h2 className="section-title">Our Popular Flowers</h2>
          {/* Link to products page can still be here or moved to HomePage */}
        </div>
        <p className="no-featured-products-message">
          Come back soon to see our featured collection!
        </p>
      </section>
    );
  }

  return (
    <section className="featured-products-section">
      <div className="section-header">
        <h2 className="section-title">Our Popular Flowers</h2>
        <Link to="/products" className="view-all-link">
          View All Products →
        </Link>
      </div>
      <div className="featured-products-grid">
        {products.map((product) => (
          <div key={product.id} className="home-product-card">
            <Link to={`/product/${product.id}`} className="home-product-card-link">
              <div className="home-product-card-image-wrapper">
                <img src={product.image} alt={product.altText || product.name} className="home-product-card-image"/>
              </div>
              <div className="home-product-card-content">
                <h3 className="home-product-card-name">{product.name}</h3>
                <p className="home-product-card-price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <button
              className="add-to-cart-btn-home"
              onClick={(e) => onAddToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
// src/components/ProductsPage/ProductPages.jsx
// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredProducts,
  selectAvailableCategories,
  selectSelectedCategory,
  setCategoryFilter // Import the action creator
} from '../../store/slices/productsSlice.js'; // Adjust path if needed
import { addItem } from '../../store/slices/cartSlice.js'; 
import { Link } from 'react-router-dom'; 
import './ProductsPage.css'; // Make sure you have CSS for styling


function ProductsPage() {
  // Get the necessary data and state from the Redux store using selectors
  const filteredProducts = useSelector(selectFilteredProducts);
  const availableCategories = useSelector(selectAvailableCategories);
  const currentCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

 

  // Handler function to dispatch the setCategoryFilter action
  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  // Define handleAddToCart inside the component so it can use dispatch
  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product.name, product.id);
    dispatch(addItem(product)); // Dispatch the addItem action with the product
  };
  // Handler for Add to Cart - stop propagation if it's inside a Link
  const handleAddToCartOnCard = (e, product) => {
    e.preventDefault(); // Prevent the Link navigation
    e.stopPropagation(); // Stop event from bubbling further
    console.log('Adding to cart from card:', product.name, product.id);
    dispatch(addItem(product));
  };

  return (
    <div className="products-page-container">
      {/* --- Back to Home Link --- */}
      <div className="back-to-home-link-container">
        <Link to="/" className="back-to-home-link">
          ← Back to Home
        </Link>
      </div>
      {/* --- End Back to Home Link --- */}
      <h1 className="page-title">Our Collection</h1>
      <p className="page-subtitle collection-description">
        Handpicked arrangements & vibrant plants to brighten your space.
      </p>

      {/* Category Filter Section */}
      <div className="category-filters">
        
        {availableCategories.map((category) => (
          <button
            key={category}
            // Apply a different style if this category is currently selected
            className={`filter-button ${category === currentCategory ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category} {/* Display category name */}
          </button>
        ))}
      </div>

      {/* Products Grid Section */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} className="product-card-link">
            <div key={product.id} className="product-card">
              <div className="product-card-image-wrapper"> 
                <img src={product.image} alt={product.altText || product.name} className="product-card-image" />
              </div>
              <div className="product-card-content"> 
              <h2 className="product-card-name">{product.name}</h2>
             
              <p className="product-card-price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn-card" onClick={() => handleAddToCart(product)}>
                  Add to Cart
              </button>
              </div>
            </div>
              
            
            </Link>
          ))}
        </div>
      ) : (
        
        <p className="no-products-message"> 
            No products found for the selected category.
        </p>
      )}
    </div>
  );
}

export default ProductsPage;
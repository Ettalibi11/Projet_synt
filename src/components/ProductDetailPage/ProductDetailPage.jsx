import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectProductById } from '../../store/slices/productsSlice.js'; 
import { addItem } from '../../store/slices/cartSlice.js';
 import './ProductDetailPage.css';
 import { Link } from 'react-router-dom'; 


function ProductDetailPage() {
  const { productId } = useParams(); // Gets 'prod_fv_001' from URL like /product/prod_fv_001
  const dispatch = useDispatch();

  // Simple way to find product (can be slow for very large lists)
//   const product = useSelector(state =>
//     state.products.allItems.find(p => p.id === productId)
//   );
  // Or use the memoized selector:
  // The 'state' argument is the entire Redux root state.
  // The 'productId' is the second argument passed to the selector.
   const product = useSelector(state => selectProductById(state, productId));


  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-detail-page-container">
         {/* --- Back to Products Link --- */}
         <div className="back-to-products-link-container">
        <Link to="/products" className="back-to-products-link">
          ← Back to Collection {/* ← is a left arrow HTML entity */}
        </Link>
      </div>
      {/* --- End Back to Products Link --- */}
    <div className="product-detail-content">
    <div className="product-image-container">
      <img src={product.image} alt={product.name}  className="product-image"/>
    </div>
    <div className="product-info-container">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description-detail">{product.description}</p>
      <p className="product-category">Category: <span>{product.category}</span></p>
            {/* Optional: If you have stock info */}
      {/* <p className="product-stock">In Stock: {product.stock > 0 ? 'Yes' : 'No'}</p> */}
      <p className="product-price-detail">${product.price.toFixed(2)}</p>

       {/* Optional: Quantity Selector */}
          {/* <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div> */}

      <button onClick={handleAddToCart} className="add-to-cart-button-detail">Add to Cart</button>
      {/* Add more details, quantity selector, etc. */}
             </div>
        </div>
    </div>
  );
}

export default ProductDetailPage;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectIsCartOpen,
  selectCartTotalPrice,
  selectCartTotalItems, 
  toggleCart, // To close the cart
  removeItem, // To remove an item
  incrementQuantity,
  decrementQuantity,
 
} from '../../store/slices/cartSlice.js';
import './CartSidebar.css'; // Create this CSS file

function CartSidebar() {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const isOpen = useSelector(selectIsCartOpen);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalItemsCount = useSelector(selectCartTotalItems);

   const handleProceedToCheckout = () => {
    if (totalItemsCount > 0) { // Only navigate if cart is not empty
        dispatch(toggleCart()); // Close the cart sidebar
        navigate('/checkout');  // <--- Navigate to the checkout page
    } else {
        // Optionally, show a message or disable the button if cart is empty
        alert("Your cart is empty. Please add items to proceed.");
    }
  };

  if (!isOpen) {
    return null; // Don't render if cart is closed
  }

  return (
    <div className="cart-sidebar">
      <button onClick={() => dispatch(toggleCart())} className="close-cart-btn" aria-label="Close cart">x</button>
       {/* New inner wrapper for padding and actual scrollable content */}
      <div className="cart-sidebar-content-wrapper"> 
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                <div className="cart-item-main-content">
                <div className="cart-item-details">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-price">${item.product.price.toFixed(2)}</span>
                </div>
                <div className="cart-item-actions">
                <div className="cart-item-quantity">
                  <button onClick={() => dispatch(decrementQuantity(item.product.id))}  aria-label="Decrease quantity" >-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.product.id))} aria-label="Increase quantity">+</button>
                </div>
                <button onClick={() => dispatch(removeItem(item.product.id))} className="remove-item-btn">Remove</button>
                </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-sidebar-footer">
          <div className="cart-total">
            <strong>Total: <span>${totalPrice.toFixed(2)}</span></strong>
          </div>
          <button 
            className="checkout-btn" 
            onClick={handleProceedToCheckout}
            disabled={totalItemsCount === 0}>
            Proceed to Checkout
          </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default CartSidebar;
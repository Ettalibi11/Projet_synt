 
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalItems
} from '../../store/slices/cartSlice';
import './CheckoutPage.css'; 

function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalItemsCount = useSelector(selectCartTotalItems);

  if (totalItemsCount === 0) {
    return (
      <div className="checkout-page-container empty-checkout">
        <h1 className="page-title">Checkout</h1>
        <p>Your cart is currently empty. Add some beautiful flowers to proceed!</p>
        <Link to="/products" className="checkout-action-button">
          Browse Products
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (event) => {
    event.preventDefault(); 
    alert('Order Placed (Simulated)! Thank you for your purchase.');
    
  };


  return (
    <div className="checkout-page-container">
      <div className="checkout-header">
        <h1 className="page-title">Checkout Summary</h1>
        <Link to="/products" className="continue-shopping-link">← Continue Shopping</Link>
      </div>

      <div className="checkout-content">
       
        <div className="checkout-order-summary">
          <h2>Your Order ({totalItemsCount} {totalItemsCount > 1 ? 'items' : 'item'})</h2>
          <ul className="checkout-item-list">
            {cartItems.map(item => (
              <li key={item.product.id} className="checkout-item">
                <img src={item.product.image} alt={item.product.name} className="checkout-item-image" />
                <div className="checkout-item-info">
                  <span className="checkout-item-name">{item.product.name}</span>
                  <span className="checkout-item-quantity">Qty: {item.quantity}</span>
                </div>
                <span className="checkout-item-price">${(item.product.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-total-summary">
            <p>Subtotal: <span>${totalPrice.toFixed(2)}</span></p>
            <p>Shipping: <span>FREE</span></p> 
            <p className="checkout-grand-total">Total: <span>${totalPrice.toFixed(2)}</span></p>
          </div>
        </div>

        
        <div className="checkout-form-section">
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-section">
              <h3>Shipping Information</h3>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" required />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
             
            </div>

            <div className="form-section">
              <h3>Payment Details</h3>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" name="cardNumber" placeholder="•••• •••• •••• ••••" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="•••" required />
                </div>
              </div>
            </div>

            <button type="submit" className="checkout-action-button place-order-btn">
              Place Your Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
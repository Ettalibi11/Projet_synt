      // src/pages/CheckoutPage.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // For a link back to cart or products
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalItems
} from '../../store/slices/cartSlice';
import './CheckoutPage.css'; // We'll create this

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
    event.preventDefault(); // Prevent default form submission
    // In a real application, this is where you would:
    // 1. Collect form data (name, address, payment info)
    // 2. Validate the data
    // 3. Send the order data to your backend API (e.g., POST /api/orders)
    // 4. Handle success (e.g., show order confirmation, clear cart, redirect)
    // 5. Handle errors (e.g., show error messages)
    alert('Order Placed (Simulated)! Thank you for your purchase.');
    // You might want to dispatch an action to clear the cart here later
    // dispatch(clearCart());
    // And navigate to an order confirmation page
    // navigate('/order-confirmation');
  };


  return (
    <div className="checkout-page-container">
      <div className="checkout-header">
        <h1 className="page-title">Checkout Summary</h1>
        <Link to="/products" className="continue-shopping-link">← Continue Shopping</Link>
      </div>

      <div className="checkout-content">
        {/* Left Column: Order Summary & Items */}
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
            <p>Shipping: <span>FREE</span></p> {/* Or calculate shipping */}
            <p className="checkout-grand-total">Total: <span>${totalPrice.toFixed(2)}</span></p>
          </div>
        </div>

        {/* Right Column: Shipping & Payment Form (Placeholder for now) */}
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
              {/* Add more fields: Postal Code, Country, Phone */}
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
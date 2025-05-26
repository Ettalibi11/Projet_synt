// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice.js';
import cartReducer from './slices/cartSlice.js';
// Import other reducers (e.g., cartReducer) if you have them

export const store = configureStore({
  reducer: {
    // Add the products slice reducer to your store configuration
    products: productsReducer,
     cart: cartReducer, 
    // cart: cartReducer, // Example
    // user: userReducer, // Example
  },
  // Middleware, devTools configuration (Redux Toolkit handles defaults well)
});
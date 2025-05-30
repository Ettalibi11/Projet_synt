import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  isCartOpen: false, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; 
      const existingItem = state.items.find(item => item.product.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product: newItem, quantity: 1 });
      }
      state.isCartOpen = true; 
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload; 
      state.items = state.items.filter(item => item.product.id !== itemIdToRemove);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload; 
      const item = state.items.find(item => item.product.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload; 
      const item = state.items.find(item => item.product.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        
        state.items = state.items.filter(i => i.product.id !== itemId);
      }
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart: (state) => {
      state.items = [];
      state.isCartOpen = false; 
    },
    
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  toggleCart,
  clearCart,
} = cartSlice.actions;

// Selectors for the cart
export const selectCartItems = (state) => state.cart.items;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

export default cartSlice.reducer;
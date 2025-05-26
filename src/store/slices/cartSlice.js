import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to hold { product, quantity }
  isCartOpen: false, // To control visibility of a cart sidebar/modal
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // Expecting the whole product object
      const existingItem = state.items.find(item => item.product.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product: newItem, quantity: 1 });
      }
      state.isCartOpen = true; // Optionally open cart when item is added
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload; // Expecting product id
      state.items = state.items.filter(item => item.product.id !== itemIdToRemove);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload; // Expecting product id
      const item = state.items.find(item => item.product.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload; // Expecting product id
      const item = state.items.find(item => item.product.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        // Optional: remove if quantity becomes 0, or handle in removeItem
        state.items = state.items.filter(i => i.product.id !== itemId);
      }
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart: (state) => {
      state.items = [];
      state.isCartOpen = false; // Optionally close cart when cleared
    },
    // You might add more like setCartOpen(state, action) { state.isCartOpen = action.payload }
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
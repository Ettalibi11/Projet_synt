
import { createSlice, createSelector } from '@reduxjs/toolkit';
import productsData from '../../constants/product.js'; 

const initialState = {
  
  allItems: productsData,
 
  selectedCategory: 'All',

};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
    setCategoryFilter: (state, action) => {
      
      state.selectedCategory = action.payload;
    },
    
  },
  
});


// --- Export Actions ---
export const { setCategoryFilter } = productsSlice.actions;

// --- Export Reducer ---
export default productsSlice.reducer;

// --- Selectors ---
// Basic selectors
const selectProductsState = (state) => state.products; // Helper to get the whole products slice
export const selectAllItems = createSelector( // Make this a selector too for consistency
    [selectProductsState],
    (productsState) => productsState.allItems
);
export const selectSelectedCategory = createSelector(
    [selectProductsState],
    (productsState) => productsState.selectedCategory
);

// Memoized selector to get the unique list of available categories
export const selectAvailableCategories = createSelector(
  [selectAllItems], // Input selector
  (allItems) => {
    // Use Set to get unique categories from the products array
    const categories = new Set(allItems.map(item => item.category));
    // Convert Set back to an array and add 'All' option at the beginning
    return ['All', ...Array.from(categories)];
  }
);

// Memoized selector to get the products filtered by the selected category
export const selectFilteredProducts = createSelector(
  // Input selectors: get all items and the current filter
  [selectAllItems, selectSelectedCategory],
  (allItems, selectedCategory) => {
    // If the filter is 'All', return all items
    if (selectedCategory === 'All') {
      return allItems;
    }
    // Otherwise, filter the items based on the selected category
    return allItems.filter(item => item.category === selectedCategory);
  }
);

// Memoized selector to get a single product by its ID
export const selectProductById = createSelector(
  [selectAllItems, (state, productId) => productId], // selectAllItems is defined
  (allItems, productId) => {
    if (!allItems || !productId) return undefined;
    return allItems.find(item => item.id === productId);
  }
);

// Optional: Export basic selectors if needed directly elsewhere
// export { selectAllItems, selectSelectedCategory };

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
const selectProductsState = (state) => state.products; 
export const selectAllItems = createSelector(
    [selectProductsState],
    (productsState) => productsState.allItems
);
export const selectSelectedCategory = createSelector(
    [selectProductsState],
    (productsState) => productsState.selectedCategory
);


export const selectAvailableCategories = createSelector(
  [selectAllItems], 
  (allItems) => {
   
    const categories = new Set(allItems.map(item => item.category));
    
    return ['All', ...Array.from(categories)];
  }
);


export const selectFilteredProducts = createSelector(
  
  [selectAllItems, selectSelectedCategory],
  (allItems, selectedCategory) => {
   
    if (selectedCategory === 'All') {
      return allItems;
    }
    
    return allItems.filter(item => item.category === selectedCategory);
  }
);


export const selectProductById = createSelector(
  [selectAllItems, (state, productId) => productId], 
  (allItems, productId) => {
    if (!allItems || !productId) return undefined;
    return allItems.find(item => item.id === productId);
  }
);


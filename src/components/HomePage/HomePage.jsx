      // src/pages/HomePage.jsx
import React from 'react'; // Only need one React import
import { useSelector, useDispatch } from 'react-redux';
import { selectAllItems } from '../../store/slices/productsSlice';
import { addItem } from '../../store/slices/cartSlice';

// Import your new section components
import HeroSection from './HomePageSections/HeroSection'; // Adjust path if needed
import FeaturedProductsSection from './HomePageSections/FeaturedProductsSection';
import AboutUsSection from './HomePageSections/AboutUsSection';
import FaqsSection from './HomePageSections/FaqsSection';

import './HomePage.css'; // Styles for the homepage layout and sections

function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllItems);
  const featuredProducts = allProducts.slice(0, 3); // Or your preferred logic for featured

  const handleAddToCartOnHome = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem(product));
  };

  return (
    <div className="homepage-container">
      <HeroSection />
      <FeaturedProductsSection 
        products={featuredProducts} 
        onAddToCart={handleAddToCartOnHome} 
      />
      <AboutUsSection />
      <FaqsSection />
      {/* You can add more sections as components here */}
    </div>
  );
}

export default HomePage;

import { useSelector, useDispatch } from 'react-redux';
import { selectAllItems } from '../../store/slices/productsSlice';
import { addItem } from '../../store/slices/cartSlice';

import HeroSection from './HomePageSections/HeroSection'; 
import FeaturedProductsSection from './HomePageSections/FeaturedProductsSection';
import AboutUsSection from './HomePageSections/AboutUsSection';
import FaqsSection from './HomePageSections/FaqsSection';

import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllItems);
  const featuredProducts = allProducts.slice(0, 4); 
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
 
    </div>
  );
}

export default HomePage;
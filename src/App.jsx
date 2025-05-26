
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProductsPage from './components/ProductsPage/ProductsPage'; // Assuming this is a route
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage'; // Assuming this is a route
import CartSidebar from './components/CartSidebar/CartSidebar';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import Footer from './components/Layouts/Footer/Footer';
import Navbar from './components/Layouts/Navbar/Navbar';
import AboutUsSection from './components/HomePage/HomePageSections/AboutUsSection'

import './index.css' 

function App() {
  

  return (
    <Router>
      <div className="app">
        
        <Navbar /> 
        <CartSidebar /> 
        <main className="main-content">
        <Routes>
           <Route path="/" element={<HomePage />} />
          
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutUsSection />} />
          
        </Routes>
        </main>
        <Footer />
        
      </div>
    </Router>
  )
}

export default App

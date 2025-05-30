 import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { toggleCart, selectCartTotalItems } from '../../../store/slices/cartSlice'; 
import './Navbar.css';
import logoImage from '../../../assets/images/logo.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const totalCartItems = useSelector(selectCartTotalItems);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCartIconClick = () => {
    dispatch(toggleCart());
    closeMobileMenu(); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    console.log('Search term:', searchTerm);
    setSearchTerm('');
    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logoImage} alt="Floral Boutique Logo" />
          
        </Link>

        <div className="menu-icon" onClick={handleToggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => 'nav-links' + (isActive ? ' active' : '')}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about" 
              className={({ isActive }) => 'nav-links' + (isActive ? ' active' : '')}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products"
              className={({ isActive }) => 'nav-links' + (isActive ? ' active' : '')}
              onClick={closeMobileMenu}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact" 
              className={({ isActive }) => 'nav-links' + (isActive ? ' active' : '')}
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
           
           <li className="nav-item nav-item-mobile-search">
            <form onSubmit={handleSearchSubmit} className="search-bar-mobile">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-mobile"
              />
              <button type="submit" className="search-button-mobile">
                <FaSearch />
              </button>
            </form>
          </li>
        </ul>

        <div className="navbar-controls">
          <form onSubmit={handleSearchSubmit} className="search-bar-desktop">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
          </form>

          <Link
            to="/profile" 
            className="nav-icon-link"
            aria-label="User Profile"
            onClick={closeMobileMenu}
          >
            <FaUser className="nav-icon" />
          </Link>

          <div
            className="nav-icon-link cart-icon-container"
            onClick={handleCartIconClick}
            aria-label="Shopping Cart"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCartIconClick()}
          >
            <FaShoppingCart className="nav-icon" />
            {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
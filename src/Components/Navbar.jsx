import React, { useContext, useState } from 'react'
import { CartContext } from '../Global/CartContext'
import { Link } from 'react-router-dom';
// import bars from "../Assets/menu.png"

import './Style.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { qty } = useContext(CartContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" >

      <a href="#" className="navbar-logo" id='home'>
      StyleMall
      </a>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link to="home">
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
        </Link>
        <Link to="products">
          <li className="navbar-item">
            <a href="#products" className="navbar-link">
              Products
            </a>
          </li>
        </Link>
        <Link to="cart">


          <li className="navbar-item">
            <a href="#" className="navbar-link">
              <li className="fa-solid fa-cart-shopping">

              </li>
            </a>

          </li>
        </Link>
      
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <span className='cart__count' >{qty}</span>
          </a>
        </li>
      
      </ul>
    </nav>
  );
}

export default Navbar;

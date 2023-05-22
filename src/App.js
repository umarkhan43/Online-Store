
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductContextProvider from './Global/ProductContext';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import CartContextProvider from './Global/CartContext';
function App() {
  return (
    <>
      <ProductContextProvider>

        <CartContextProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route path='/home' element={<Products />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<Products />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
   






    </>
  );
}

export default App;

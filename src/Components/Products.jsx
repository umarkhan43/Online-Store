import React, { useContext } from 'react'
import { ProductContext } from '../Global/ProductContext'
import { CartContext } from '../Global/CartContext';
import Slider from './Slider';
import './Style.css'







const Products = () => {
  const { products } = useContext(ProductContext)
  const { dispatch } = useContext(CartContext);


  return (
    <>
<Slider/>
      <div className='roww' id="products">
<h1  className='heading_style explore__product'>Explore New Products!</h1>
        <div className="containerr">
          {products.map((Product) => (
          

           
            <div className="productt" key={Product.id}>

              <div className="product-thumbb test">
                <img src={Product.image} alt="not found"  />
              </div>
              <div className="product-body">
                <div className="title">
                  <span className=""> {Product.name}</span>
                </div>
                <div className="pricee">
                  <h2 className=""> ${Product.price}.00</h2>
                </div>
                
              </div>
              <div className="btnss">
                <button
                  className="" onClick={() => dispatch({ type: 'ADD_TO_CART', id: Product.id, Product })} >Add to cart</button>

              </div>

              {/* {Product.status === 'hot' ? <div className='hot'>30% OFF</div> : ''}
              {Product.status === 'new' ? <div className='new'>10% OFF</div> : ''} */}

            </div>
            
          ))}
        </div>

      </div>



    </>


  )
}

export default Products

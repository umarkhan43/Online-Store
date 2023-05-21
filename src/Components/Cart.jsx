import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'
import StripeCheckout from 'react-stripe-checkout'
import './Style.css'
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  console.log(shoppingCart)
  const handleToken = () => {

  }
  return (
    <div className='cart-container '>
      <div className="cart-detail">
        {shoppingCart.length > 0 ? shoppingCart.map(cart => (
          <div className='cart' key={cart.id}>
            <span className='cart-image'><img src={cart.image} alt='Image not found' /></span>
            <span className='cart-product-name'>{cart.name} </span>
            <span className='cart-price'> ${cart.price}.00 </span>
            <span className='increament' onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}><i className="fa-sharp fa-solid fa-plus"></i></span>
            <span className='product-qunantity'>{cart.qty}</span>
            <span className="dec" onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}><i className="fa-sharp fa-solid fa-minus"></i></span>
            <span className="product-total-price">${cart.price * cart.qty}.00</span>
            <span className='delete-prodcut' onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}><i className="fa-solid fa-trash"></i></span>
          </div>
        )) :
        <h1 className='heading'>sorry your cart is empty</h1>}
      </div>
      {shoppingCart.length > 0 ? <div className='cart-summary'>
        <div className="summary">
          <h3>Cart Summary</h3>
          <div className="items"> Total items </div>
          <div className="total-items">
          
            <div className="items-count"> {qty}</div>
          </div>
          <div className="total-price-section">
            <div className="just-title">Total Price</div>
            <div className="items-price">${totalPrice}.00</div>
          </div>
          <div className="stripe-section"><StripeCheckout
            stripeKey='pk_test_51MQnbRGH2ITgB3UDjx2s3fZ32ydRt5TLLKIWvDP2MJhXyXHwjYp92MfREKAlrNvCMQVgh6GkQfQQmFS9KKWMiFz3009NAheFnb '
            token={handleToken}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
            name='All products' >

          </StripeCheckout></div>
        </div>

      </div> : ""}
    </div>
  )
}

export default Cart

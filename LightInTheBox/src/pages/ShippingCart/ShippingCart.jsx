import React from 'react';
import '../ShippingCart/ShippingCart.css';
import Navbar from '../../Component/Navbar/Navbar';
import ss from "../../assets/logo.jpg"
import { Link } from 'react-router';

const ShippingCart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-8 px-4">
            <div className="row">
              <h3>Shopping Cart</h3>
              <div className="col-md-12 shopping-title">

                <div className="">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    Select All</label>
                </div>
                <p>items</p>
                <p>unit price</p>
                <p>Quantity</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-12 shopping-details">
                <div className="">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    <img src={ss} className='img-fluid' alt="..." /></label>
                </div>
                <div className="shopping-product-title">
                  <h4>Product title</h4>
                  <p>Patterns</p>
                </div>
                <div className="shopping-product-inr">
                  INR Rs 1818
                </div>
                <div className="shopping-product-quantity">

                  <label htmlFor="">Quantity:
                    <button>-</button><span>0</span><button>+</button>
                  </label>
                  <div className="shipping-product-delete">
                    <p>Delete</p>
                    <p>Move to Favourites</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 shipping-total px-4 my-5">
            <div className="shipping-total-heading">
              <h4>Order Summary</h4>
              <hr />
            </div>
            <div className="subtotal">
              <p>SubTotal</p>
              <p>Inr Rs 1832</p>
            </div>
            <div className="cart-total">
              <h6>Cart Total(1 item):</h6>
              <h3>Inr Rs 1832</h3>
            </div>
            <div className="checkout-buttons">
              <Link to="/orderplacing"><button className='checkout w-100'>Checkout</button></Link>
              <button className='paypal'>Checkout with paypal</button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShippingCart

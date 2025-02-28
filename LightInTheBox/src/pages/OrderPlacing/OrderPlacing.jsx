import React, { useContext } from 'react';
import "../OrderPlacing/OrderPlacing.css"
import { CartContextValue } from '../../Contexts/CartContext';
import Navbar from '../../Component/Navbar/Navbar';

const OrderPlacing = () => {
    const CartValue=useContext(CartContextValue);
  return (
    <>
    
      <h2>hai {CartValue}</h2>
    </>
  )
}

export default OrderPlacing

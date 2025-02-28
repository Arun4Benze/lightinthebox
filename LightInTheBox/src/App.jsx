
import { Routes, Route } from "react-router";
import './App.css'
import React from "react";
import { useState } from "react";
import Discount from './Component/Discount/Discount'
import Navbar from './Component/Navbar/Navbar'
import PhonesAndAccessories from './pages/PhoneaAndAccessories/PhonesAndAccessories.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from "./Component/Footer/Footer.jsx";
import ProductDisplay from "./pages/ProductDisplay/ProductDisplay.jsx";
import ShippingCart from "./pages/ShippingCart/ShippingCart.jsx";
import OrderPlacing from "./pages/OrderPlacing/OrderPlacing.jsx";
import { CartContext } from "./Contexts/CartContext.jsx";
import { CartContextValue } from "./Contexts/CartContext.jsx";
import Login from "./pages/Login/Login.jsx";
import LoginContext from "./Contexts/LoginContext.jsx";


function App() {
  // const amount = 1000000;
  const [addcart,setAddCart]=useState(0);

  return (
    <>
<LoginContext>
      <Discount />
      <CartContextValue.Provider value={{addcart,setAddCart}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Phones&accessories' element={<PhonesAndAccessories />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/shippingcart" element={<ShippingCart />} />
          <Route path="/orderplace" element={<OrderPlacing />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </CartContextValue.Provider>
      </LoginContext>




    </>
  )
}

export default App

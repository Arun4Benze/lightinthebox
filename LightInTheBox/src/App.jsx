
import { Routes, Route } from "react-router";
import './App.css'
import Discount from './Component/Discount/Discount'
import Navbar from './Component/Navbar/Navbar'
import PhonesAndAccessories from './pages/PhoneaAndAccessories/PhonesAndAccessories.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from "./Component/Footer/Footer.jsx";
import ProductDisplay from "./pages/ProductDisplay/ProductDisplay.jsx";
import ShippingCart from "./pages/ShippingCart/ShippingCart.jsx";
import OrderPlacing from "./pages/OrderPlacing/OrderPlacing.jsx";


function App() {

  return (
    <>
      <Discount />
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/Phones&accessories' element={<PhonesAndAccessories/>}/>
      <Route path="/product/:id" element={<ProductDisplay/>}/>
      <Route path="/shippingcart" element={<ShippingCart/>}/>
      <Route path="/orderplace" element={<OrderPlacing/>}/>
      </Routes>
      {/* <Footer/> */}
      
      
    </>
  )
}

export default App

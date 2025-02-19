
import { Routes, Route } from "react-router";
import './App.css'
import Discount from './Component/Discount/Discount'
import Navbar from './Component/Navbar/Navbar'
import PhonesAndAccessories from './pages/PhoneaAndAccessories/PhonesAndAccessories.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from "./Component/Footer/Footer.jsx";


function App() {

  return (
    <>
      <Discount />
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/Phones&accessories' element={<PhonesAndAccessories/>}/>
      </Routes>
      {/* <Footer/> */}
      
      
    </>
  )
}

export default App

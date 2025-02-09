import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Discount from './Component/Discount/Discount'
import Navbar from './Component/Navbar/Navbar'
import AllCategory from './Component/AllCategory/AllCategory.jsx';
import ImageSlider from './Component/ImageSlider/ImageSlider.jsx';
import WomensClothing from './Component/WomensClothing/WomensClothing.jsx';

function App() {
  

  return (
    <>
      <Discount/>
      
      <Navbar/>
      <div className="container-fluid contents">
                <div className="row">
                    <div className="col-md-2">
                        <AllCategory />
                    </div>
                    <div className="col-md-8">
                        <ImageSlider />
                        <WomensClothing />
                    </div>
                </div>
            </div>



      <div>
        <h1>Checking branch and main</h1>
      </div>
       
    </>
  )
}

export default App

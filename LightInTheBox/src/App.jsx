import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Discount from './Component/Discount/Discount'
import Navbar from './Component/Navbar/Navbar'

function App() {
  

  return (
    <>
      <Discount/>
      
      <Navbar/>
       
    </>
  )
}

export default App

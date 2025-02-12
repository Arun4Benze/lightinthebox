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
import MensClothing from './Component/MensClothing/mensClothing.jsx';
import Bags from './Component/Bags/Bags.jsx';
import WelcomeRegister from './Component/WelcomeRegister/WelcomeRegister.jsx';


function App() {
  const allCategory = ["Womens clothing", "Men clothing", "Shoes & bags", "Homes & garden", "Wedding & event", "Babies & kids", "Phones & accessories", "beauty & hair", "Lights & lightings", "Sports & outdoors", "Toys & Hobbies", "Electronics", "Shop by collections", "Elite collections"];
  // const [allcategories, setAllcategories] = useState(allCategory);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  const HandleCategoryClick = (category) => {
    setSelectedCategory(category);
    // console.log(category);
  }
  const HandleMouseLeave=()=>{
    setSelectedCategory(null)
  }

  const renderComponent = () => {
    if (selectedCategory) {
      switch (selectedCategory) {
        case "Womens clothing":
          return <WomensClothing HandleMouseLeave={HandleMouseLeave} />;
        case "Men clothing":
          return <MensClothing HandleMouseLeave={HandleMouseLeave}/>;
        case "Shoes & bags":
          return <Bags HandleMouseLeave={HandleMouseLeave}/>;
          case "Homes & garden":
          return "Homes & garden";
        case "Wedding & event":
          return "Wedding & event";
          case "Babies & kids":
          return "Babies & kids";
          case "Phones & accessories":
          return "Phones & accessories";
          case "beauty & hair":
          return "beauty & hair";
          case "Lights & lightings":
          return "Lights & lightings";
          case "Sports & outdoors":
          return "Sports & outdoors";
          case "Toys & Hobbies":
          return "Toys & Hobbies";
          case "Electronics":
          return "Electronics";
          case "Shop by collections":
          return "Shop by collections";
          case "Elite collections":
          return "Elite collections";
        
        default:
          return null;
      }
    } else {
      return <ImageSlider />;
    }
  };


  return (
    <>
    
      <Discount />

      <Navbar />
      <div className="container-fluid contents">
        <div className="row">
          <div className="col-md-2">
            <AllCategory allCategory={allCategory} HandleCategoryClick={HandleCategoryClick}/>

          </div>
          <div className="col-md-8">

             {/* {selectedCategory === "Womens clothing" ? <WomensClothing /> : <ImageSlider />} */}
           
            {renderComponent()}

          </div>
          <div className="col-md-2">
            <div className='welcome-register-container'>
               <WelcomeRegister/>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default App

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
import Test from './Component/AllCategory/Test/Test.jsx';

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
          return "mens";
        case "Shoes & bags":
          return "bags";
        // Add cases for other categories and their respective components
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

            {/* {selectedCategory === "Womens clothing" ? <WomensClothing /> : <ImageSlider />}
            {selectedCategory === "Men clothing" ? "Mens" : <ImageSlider />} */}
            {renderComponent()}

          </div>

        </div>
      </div>

<Test/>
    </>
  )
}

export default App

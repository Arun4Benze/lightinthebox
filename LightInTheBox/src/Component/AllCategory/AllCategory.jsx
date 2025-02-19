import React, { useState } from 'react';
import "../AllCategory/AllCategory.css";
import { Link } from 'react-router';
import WomensClothing from '../WomensClothing/WomensClothing';

const AllCategory = ({HandleCategoryClick,allCategory}) => {
  // const allCategory = ["Womens clothing", "Men clothing", "Shoes & bags", "Homes & garden", "Wedding & event", "Babies & kids", "Phones & accessories", "beauty & hair", "Lights & lightings", "Sports & outdoors", "Toys & Hobbies", "Electronics", "Shop by collections", "Elite collections"];
  
  return (
    <>
      <div className='category'>
        {allCategory.map((catego, index) => {
           const path = `/${catego.split(" ").join("")}`
          return <Link to={path} key={index} onMouseEnter={(e) => {
            e.preventDefault(); 
            HandleCategoryClick(catego);
          }}
          
           >{catego} </Link>
        })}
      </div>

    </>
  )
}

export default AllCategory

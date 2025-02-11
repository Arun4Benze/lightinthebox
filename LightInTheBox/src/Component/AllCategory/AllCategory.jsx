import React, { useState } from 'react';
import "../AllCategory/AllCategory.css";
import WomensClothing from '../WomensClothing/WomensClothing';

const AllCategory = ({HandleCategoryClick,allCategory}) => {
  
  return (
    <>
      <div className='category'>
        {allCategory.map((catego, index) => {
          return <a href='' key={index} onMouseEnter={(e) => {
            e.preventDefault(); 
            HandleCategoryClick(catego);
          }}
          
           >{catego} </a>
        })}
      </div>

    </>
  )
}

export default AllCategory

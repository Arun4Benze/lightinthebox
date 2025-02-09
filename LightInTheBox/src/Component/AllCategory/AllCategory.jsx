import React, { useState } from 'react';
import "../AllCategory/AllCategory.css";
import WomensClothing from '../WomensClothing/WomensClothing';

const AllCategory = () => {
  const allCategory = ["Womens clothing", "Men clothing", "Shoes & bags", "Homes & garden", "Wedding & event", "Babies & kids", "Phones & accessories", "beauty & hair", "Lights & lightings", "Sports & outdoors", "Toys & Hobbies", "Electronics", "Shop by collections", "Elite collections"];
  const [allcategories, setAllcategories] = useState(allCategory);

  return (
    <>
      <div className='category'>
        {allcategories.map((catego, index) => {
          return <a href='' key={index}>{catego}</a>
        })}
      </div>

    </>
  )
}

export default AllCategory

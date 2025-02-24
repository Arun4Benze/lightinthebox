import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import AllCategory from '../../Component/AllCategory/AllCategory';
import { useNavigate } from 'react-router-dom';
import RecommendedProduct from '../../Component/RecommendedProduct/RecommendedProduct';
import "../PhoneaAndAccessories/PhonesAndAccessories.css";

const PhonesAndAccessories = () => {
  
  const [phones, setPhones] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  // sorting
  const sortPhonesByPrice = (order) => {
    const sortedPhones = [...phones].sort((a, b) => {
      return order === "low-to-high" ? a.price - b.price : b.price - a.price;
    });
    setPhones(sortedPhones);
  };
  const HandleSelectRating = async (minRating, maxRating) => {
    setSelectedRating(`${minRating}-${maxRating}`)
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    const electronics = json.filter(product => product.category === "electronics");
    const filteredRatings = electronics.filter((rate) => {
      return rate.rating.rate >= minRating && rate.rating.rate <= maxRating;
    });
    setPhones(filteredRatings);
    console.log(filteredRatings);
  }
  const Handleselect = async (cato) => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    const electronics = json.filter(product => product.category === "electronics");
    const filteredElectronics = electronics.filter((elect) => {
      return elect.title.toLowerCase().includes(cato.toLowerCase());
    });
    setPhones(filteredElectronics);
    console.log(filteredElectronics);
  }

  const fetchPhones = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    const electronics = json.filter(product => product.category === "electronics");
    console.log(electronics);
    setPhones(electronics);
  }
  useEffect(() => {
    fetchPhones();
  }, []);
  const navigate=useNavigate();
  const productClick= async(productId)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const json=await res.json();
    setPhones(json);
    console.log(json);
    navigate(`/product/${productId}`)
  }


  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Home &gt; phones and categories</p>
          </div>
        </div>
        <div className="row">

          <div className="col-md-4 side-bar-electronics">


            <div className="container phone-side-bar">
              <h4>Electronics category</h4>
              <div className="electronic-category">
                <button onClick={() => Handleselect("ssd")}>Sandisk</button>
                <button onClick={() => Handleselect("acer")}>Acer</button>
                <button onClick={() => Handleselect("Samsung")}>Samsung</button>
                <button onClick={fetchPhones}>All</button>
              </div>
            </div>
            <div className="rating-category">
              <h4>Select by rating</h4>
              <div className="rating">
                <div className="rating-btn">
                  <input onClick={() => HandleSelectRating(4, 5)} type='radio' checked={selectedRating === "4-5"} />
                  <label htmlFor="">4-5</label>
                </div>
                <div className="rating-btn">
                  <input onClick={() => HandleSelectRating(3, 4)} type='radio' checked={selectedRating === "3-4"} />
                  <label htmlFor="">3-4</label>
                </div>
                <div className="rating-btn">
                  <input onClick={() => HandleSelectRating(2, 3)} type='radio' checked={selectedRating === "2-3"} />
                  <label htmlFor="">2-3</label>
                </div>
                <div className="rating-btn">
                  <input onClick={() => fetchPhones()} type='radio' />
                  <label htmlFor="">All</label>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-8">
            <div className="sorting">
              <button onClick={()=>sortPhonesByPrice("high-to-low")}>from high to low</button>
              <button onClick={()=>sortPhonesByPrice("low-to-high")}>from low to high</button>
            </div>
            <div className="row">
              {phones.map((phone) => {
                return (<div key={phone.id} className="col-md-4">
                  <RecommendedProduct onClick={()=>productClick(phone.id)}
                    id={phone.id}
                    title={phone.title}
                    category={phone.category}
                    description={phone.description}
                    image={phone.image}
                    price={phone.price}
                    rating={phone.rating.rate}
                    ratingCount={phone.rating.count}
                    // selectedData={selectedData}
                  />

                </div>)
              })}

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PhonesAndAccessories

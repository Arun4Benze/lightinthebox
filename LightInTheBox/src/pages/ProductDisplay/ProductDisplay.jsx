import React, { useEffect, useState } from 'react';
import "../ProductDisplay/ProductDisplay.css"
import { Link, useParams } from 'react-router';
import Navbar from '../../Component/Navbar/Navbar';
import { FaFacebook } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaSuitcase } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const ProductDisplay = () => {
    const [isHoveredAllCategories,setIsHoveredAllCategories]=useState(false)
    const HandleMouseEnterAllCategories=()=>{
        setIsHoveredAllCategories(true);
    }
    const HandleMouseLeaveAllCategories=()=>{
        setIsHoveredAllCategories(false);
    }
    const { id } = useParams();
    console.log(id);
    const [productDisplay, setProductDisplay] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    const HandleMouseEnter = () => {
        setIsHovered(true);
    };
    const HandleMouseLeave = () => {
        setIsHovered(false)
    }
    const HandleProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await res.json();
        setProductDisplay(json);
        console.log(json);
    }
    useEffect(() => {
        HandleProducts()
    }, []);
    const [isCategoryDisplayed, setIsCategoryDisplayed] = useState(false);
    const [quantityCount, setQuantityCount] = useState(0);
    const handleQuantityIncrease = () => {

        setQuantityCount(prevcount => prevcount + 1);
    }
    const handleQuantityDecrease = () => {

        setQuantityCount(prevcount => prevcount > 0 ? prevcount - 1 : 0);
    }
    const [addcart,setAddCart]=useState(0);
    const handleAddCart=()=>{
        setAddCart(quantityCount);
    }
    return (
        <>
            <Navbar addcart={addcart} isHoveredAllCategories={isHoveredAllCategories} HandleMouseEnterAllCategories={HandleMouseEnterAllCategories}
            HandleMouseLeaveAllCategories={HandleMouseLeaveAllCategories}
            />
            {/* <h1>product display</h1>
      <p>{id}</p> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-2">
                                <img className='img-fluid displayed-img my-2' src={productDisplay.image} alt={productDisplay.category} />
                                <img className='img-fluid displayed-img my-2' src={productDisplay.image} alt={productDisplay.category} />
                                <img className='img-fluid displayed-img my-2' src={productDisplay.image} alt={productDisplay.category} />
                                <img className='img-fluid displayed-img my-2' src={productDisplay.image} alt={productDisplay.category} />
                            </div>
                            <div className="col-md-10"
                                onMouseEnter={HandleMouseEnter}
                                onMouseLeave={HandleMouseLeave}

                            >
                                <img className="img-fluid" src={productDisplay.image} alt={productDisplay.category} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between w-25">
                            <p className='my-0'>share</p>
                            <FaFacebook />
                            <FaPinterestSquare />
                        </div>

                    </div>
                    {/* right side */}

                    {isHovered ?
                        (
                            <div className="col-md-7 product-display-right">


                                <img className="img-fluid" src={productDisplay.image} alt="" />

                            </div>
                        )

                        :
                        (<div className="col-md-7 d-flex flex-column gap-4 product-display-right">
                            <div className="heading">
                                <h4>{productDisplay.description}</h4>
                            </div>
                            <div className="price">
                                <p>INR {productDisplay.price}</p>
                                <p className='discounted'>INR {productDisplay.price}</p>
                                <p>50% discount</p>
                            </div>
                            <div className="img-patterns">
                                <img className="img-fluid" src={productDisplay.image} alt="" />
                                <img className="img-fluid" src={productDisplay.image} alt="" />
                                <img className="img-fluid" src={productDisplay.image} alt="" />
                                <img className="img-fluid" src={productDisplay.image} alt="" />
                                <img className="img-fluid" src={productDisplay.image} alt="" />
                                <img className="img-fluid" src={productDisplay.image} alt="" />
                            </div>
                            <div className="compactible-models d-flex flex-column">
                                <p>Category {isCategoryDisplayed && <span className="category-text">{productDisplay.category}</span>}</p>

                                <div>

                                    <button onMouseEnter={() => setIsCategoryDisplayed(true)}
                                        onMouseLeave={() => setIsCategoryDisplayed(false)}
                                    >{productDisplay.category}</button>


                                </div>
                            </div>
                            <div className="quantity">
                                <label htmlFor="">Quantity:
                                    <button onClick={handleQuantityDecrease}>-</button><span>{quantityCount}</span><button onClick={handleQuantityIncrease}>+</button>
                                </label>
                            </div>
                            <div className="cart d-flex gap-2">
                            <Link to="/shippingcart">
                                <button className='add-to-cart' onClick={handleAddCart}>
                                    Add To Cart
                                    </button>
                                    </Link>
                                <button className='heart'><CiHeart /></button>
                            </div>
                            <div className="shipping">
                                <p>Processing Time:Will be calculated when item is selected</p>
                                <p>Shipping Time:Expedited Express 3-9 business days</p>
                            </div>
                            <div className="return d-flex align-items-center gap-3">
                                <FaSuitcase />
                                <p>14 days return <FaChevronDown /></p>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </>
    )
}

export default ProductDisplay

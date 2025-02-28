import React, { useState } from 'react'
import '../Navbar/Navbar.css';
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faAddressCard, faHeart, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router';
import AllCategory from "../AllCategory/AllCategory.jsx"

const Navbar = ({ addcart, isHoveredAllCategories, HandleMouseEnterAllCategories, HandleMouseLeaveAllCategories }) => {


    
    const [registerPop, setRegisterPop] = useState(false);
    const HandleRegisterPop = () => {
        setRegisterPop(prev => !prev);
    }
    const HandleMouseLeaveInput = () => {

        setRegisterPop(false);

    }
    const HandleMouseLeave = () => {

        setRegisterPop(false);

    }
    const categories = ["New Arrivals", "Beach Wedding", "Graphic store", "st.Patrick", "Lenin", "Vacation vibes", "Carnival", "Personalised gifts"];
    const [category, setCategory] = useState(categories);
    const phoneCategories = [
        "Smartphones", "Tablets", "Smartwatches", "Accessories", "Laptops", "Headphones", "Chargers", "Phone Cases"];
    // use navigate from react router
    const navigate = useNavigate();
    const navigateLogo = () => {
        navigate("/");
    }
    // use location from react router
    const location = useLocation();
    const navbarHomeProducts = [
        "Casual Wear", "Formal Wear", "Evening Dresses", "Party Dresses", "Summer Dresses", "Winter Dresses", "Bridal Dresses"];
    const navbarPhoneProducts = [
        "Smartphones", "Tablets", "Accessories", "Laptops", "Smartwatches", "Headphones", "Chargers"
    ];
    const allCategoryWidthObj = {
        width: "200px",
        height: "auto",
        marginTop: "32px"

    }


    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid pos">

                    <div className="d-flex justify-content-around align-items-center w-100">
                        <a className="navbar-brand" href="#" onClick={navigateLogo}>
                            <img className="img-fluid logo" src={logo} alt="Lightin box" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse coll" id="navbarSupportedContent">
                            <form className="d-flex w-50" role="search">
                                <div className='w-100 d-flex align-items-center search'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <input className="form-control" />
                                    <button className="btn" type="submit">Search</button>
                                </div>
                            </form>

                            <ul className="navbar-nav mb-lg-0 d-flex gap-3">
                                <li onMouseEnter={HandleRegisterPop} onMouseLeave={HandleMouseLeaveInput} className="nav-item d-flex flex-column aligin-items-center">
                                    <FontAwesomeIcon icon={faAddressCard} />
                                    <p>Sigin In</p>
                                </li>


                                <li className="nav-item d-flex flex-column aligin-items-center">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <p>My Favuorite</p>
                                </li>
                                <li className="nav-item d-flex flex-column aligin-items-center">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <p>Cart {addcart}</p>
                                    
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="nav-products">
                        <ul className='nav-product-list'>
                            {/* use location conditional rendering */}
                            {
                                location.pathname === "/" ? (
                                    navbarHomeProducts.map((navbarHomeProduct, index) => {
                                        return <li key={index} className="li-product">{navbarHomeProduct}</li>;
                                    })
                                ) : location.pathname === "/Phones&accessories" ? (
                                    navbarPhoneProducts.map((navbarPhoneProduct, index) => {
                                        return <li key={index} className="li-product">{navbarPhoneProduct}</li>;
                                    })
                                ) :
                                    (null)



                            }

                        </ul>
                    </div>
                </div>
            </nav>


            {/* categories */}
            {location.pathname !== "/shippingcart" ? (<div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 category-btn"
                        onMouseEnter={HandleMouseEnterAllCategories}
                    >
                        <button><FontAwesomeIcon icon={faBars} /><p
                        >All Categories</p></button>
                    </div>
                    {isHoveredAllCategories && <AllCategory HandleMouseLeaveAllCategories={HandleMouseLeaveAllCategories}
                        allCategoryWidthObj={allCategoryWidthObj}
                    />}
                    <div className="col-md-10 d-flex justify-content-around categories">
                        {location.pathname === "/" ?
                            (category.map((cate, index) => {
                                return <a href='' key={index} className='text-decoration-none'>{cate}</a>
                            })) :
                            location.pathname === "/Phones&accessories" ? (
                                phoneCategories.map((phcate, index) => {
                                    return <a href='' key={index} className='text-decoration-none'>{phcate}</a>
                                })
                            ) : location.pathname === "/shippingcart" ? (null) :
                                (category.map((cate, index) => {
                                    return <a href='' key={index} className='text-decoration-none'>{cate}</a>
                                }))
                        }
                    </div>

                </div>
            </div>)
                :
                (null)
            }



            {registerPop && (
                <div onMouseLeave={HandleMouseLeave} className="card card-size">
                    <div className="card-header">
                        <p>Welcome to LightInTheBox</p>
                        <div className='d-flex justify-content-around gap-2'>
                            <button className='register-btn'>Register</button>
                            <button className='signin-btn'>signIn</button>
                        </div>
                    </div>

                    <ul class="list-group register">
                        <li className="list-group-item border-0"><a href="">My orders</a></li>
                        <li className="list-group-item border-0"><a href="">My Favourites</a></li>
                        <li className="list-group-item border-0"><a href="">Service Record</a></li>
                        <li className="list-group-item border-0"><a href="">My Reward and crediet</a></li>
                        <li className="list-group-item border-0"><a href="">My Coupen</a></li>
                    </ul>
                </div>)
            }



        </>
    )
}

export default Navbar

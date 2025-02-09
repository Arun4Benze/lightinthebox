import React, { useState } from 'react'
import '../Navbar/Navbar.css';
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faAddressCard, faHeart, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [registerPop, setRegisterPop] = useState(false);
    const HandleRegisterPop = () => {
        setRegisterPop(prev => !prev);
    }
    const HandleMouseLeave = () => {
        setRegisterPop(false);
    }
    const categories = ["New Arrivals", "Beach Wedding", "Graphic store", "st.Patrick", "Lenin", "Vacation vibes", "Carnival", "Personalised gifts"];
    const [category, setCategory] = useState(categories);
    return (
        <>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid pos">
                    <div className="d-flex justify-content-around align-items-center w-100">
                        <a class="navbar-brand" href="#">
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
                                <li onMouseEnter={HandleRegisterPop} className="nav-item d-flex flex-column aligin-items-center">
                                    <FontAwesomeIcon icon={faAddressCard} />
                                    <p>Sigin In</p>
                                </li>


                                <li className="nav-item d-flex flex-column aligin-items-center">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <p>My Favuorite</p>
                                </li>
                                <li className="nav-item d-flex flex-column aligin-items-center">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <p>Cart</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* categories */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 category-btn">
                        <button><FontAwesomeIcon icon={faBars} /><p>All Categories</p></button>
                    </div>
                    <div className="col-md-10 d-flex justify-content-around categories">
                        {category.map((cate, index) => {
                            return <a href='' key={index} className='text-decoration-none'>{cate}</a>
                        })}
                    </div>

                </div>
            </div>
            

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

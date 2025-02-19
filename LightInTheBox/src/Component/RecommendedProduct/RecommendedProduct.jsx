import React from 'react';
import "../RecommendedProduct/RecommendedProduct.css";
import card from "../../assets/recomendedcard.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const RecommendedProduct = ({id,title,category,description,image,price,rating,ratingCount}) => {
    return (
        <>
            <div className='recommended-product'>
                
                <div className="card card-product my-4">
                    <img src={image} className="card-img-top img-fluid card-image" alt={title} />
                    <div className="card-body">
                        
                        <p className="card-text card-product-description">{description.slice(0,40)+"..."}</p>
                        <div className="inr d-flex justify-content-around">
                            <p className='original-inr'>{price}</p>
                            <p className='cut-inr'>{price}</p>
                        </div>
                        <div className=' star d-flex justify-content-between'>
                            <p className='star'>{rating} {`(${ratingCount})`}</p>
                            <p className='favourite'><FontAwesomeIcon icon={faHeart} /></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendedProduct

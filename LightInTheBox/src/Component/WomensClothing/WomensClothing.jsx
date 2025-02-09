import React from 'react';
import "../WomensClothing/WomensClothing.css"

const WomensClothing = () => {
    const womensDresses = [
        "Maxi Dress", "A-Line Dress", "Bodycon Dress", "Shift Dress", "Wrap Dress",
        "Sundress", "Ball Gown", "Empire Waist Dress", "Peplum Dress", "Fit and Flare Dress",
        "Sheath Dress", "Cocktail Dress", "Tea-Length Dress", "Midi Dress", "Mini Dress"
    ];
    const womensTops = [
        "T-Shirt", "Blouse", "Tank Top", "Crop Top", "Sweater", "Hoodie",
        "Button-Up Shirt", "Peplum Top", "Long Sleeve Top", "Polo Shirt"
    ];
    const womensBottomWear = [
        "Jeans", "Leggings", "Skirt", "Trousers", "Shorts", "Palazzo"
    ];
    const womensAccessories = [
        "Sunglasses", "Hat", "Scarf", "Necklace", "Earrings",
        "Bracelet", "Watch", "Belt", "Handbag", "Hairband",
        "Gloves", "Wallet"
    ];
    const womensSports = [
        "Tennis", "Basketball", "Soccer", "Swimming", "Volleyball",
        "Running", "Cycling", "Badminton", "Yoga", "Gymnastics"
    ];

    return (
        <>
            <div className="container womens-container">
                <div className="row opo">
                    <div className="col-md-6">
                        <div className='dress-category'>
                            <h3>WomensDresses</h3>
                            <div className='d-flex flex-column'> 
                                {womensDresses.map((dress, index) => {
                                    return <a href='' key={index}>{dress}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>WomensTops</h3>
                            <div className='d-flex flex-column'> 
                                {womensTops.map((tops, index) => {
                                    return <a href='' key={index}>{tops}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>WomensBottomWear</h3>
                            <div className='d-flex flex-column'> 
                                {womensBottomWear.map((bottom, index) => {
                                    return <a href='' key={index}>{bottom}</a>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className='dress-category'>
                            <h3>WomensAccessories</h3>
                            <div className='d-flex flex-column'> 
                                {womensAccessories.map((accessories, index) => {
                                    return <a href='' key={index}>{accessories}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>WomensSports</h3>
                            <div className='d-flex flex-column'> 
                                {womensAccessories.map((sports, index) => {
                                    return <a href='' key={index}>{sports}</a>
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WomensClothing

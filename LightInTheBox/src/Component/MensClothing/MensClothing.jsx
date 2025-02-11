import React from 'react';
import "../MensClothing/MensClothing.css"

const MensClothing = ({HandleMouseLeave}) => {

    const mensTops = [
        "T-Shirt", "Button-Up Shirt", "Polo Shirt", "Hoodie", "Sweater",
        "Tank Top", "Long Sleeve Shirt", "V-Neck Shirt", "Henley Shirt"
    ];
    const mensBottomWear = [
        "Jeans", "Chinos", "Trousers", "Shorts", "Cargo Pants", "Sweatpants"
    ];
    const mensOuterwear = [
        "Jacket", "Coat", "Blazer", "Trench Coat", "Bomber Jacket", "Denim Jacket",
        "Puffer Jacket", "Leather Jacket"
    ];
    const mensFootwear = [
        "Sneakers", "Loafers", "Boots", "Sandals", "Running Shoes", "Dress Shoes",
        "Flip Flops", "High Tops"
    ];
    const mensAccessories = [
        "Sunglasses", "Watch", "Belt", "Hat", "Scarf", "Tie", "Gloves",
        "Wallet", "Cufflinks", "Bracelet", "Backpack", "Messenger Bag"
    ]
    const mensSports = [
        "Soccer", "Basketball", "Tennis", "Rugby", "Running", "Cycling", "Swimming",
        "Boxing", "Football", "Golf", "Skiing", "Hiking", "MMA"
    ]


    return (
        <div className="container womens-container" onMouseLeave={HandleMouseLeave}>
        <div className="row opo">
            <div className="col-md-6">
                <div className='dress-category'>
                    <h3>MensTops</h3>
                    <div className='d-flex flex-column'> 
                        {mensTops.map((tops, index) => {
                            return <a href='' key={index}>{tops}</a>
                        })}
                    </div>
                </div>
                <div className='dress-category'>
                    <h3>MensBottomWear</h3>
                    <div className='d-flex flex-column'> 
                        {mensBottomWear.map((bottom, index) => {
                            return <a href='' key={index}>{bottom}</a>
                        })}
                    </div>
                </div>
                <div className='dress-category'>
                    <h3>MensOuterwear</h3>
                    <div className='d-flex flex-column'> 
                        {mensOuterwear.map((outter, index) => {
                            return <a href='' key={index}>{outter}</a>
                        })}
                    </div>
                </div>
            </div>
            <div className="col-md-6">
            <div className='dress-category'>
                    <h3>MensFootwear</h3>
                    <div className='d-flex flex-column'> 
                        {mensFootwear.map((foot, index) => {
                            return <a href='' key={index}>{foot}</a>
                        })}
                    </div>
                </div>
                <div className='dress-category'>
                    <h3>MensAccessories</h3>
                    <div className='d-flex flex-column'> 
                        {mensAccessories.map((accessories, index) => {
                            return <a href='' key={index}>{accessories}</a>
                        })}
                    </div>
                </div>
                <div className='dress-category'>
                    <h3>MensSports</h3>
                    <div className='d-flex flex-column'> 
                        {mensSports.map((sports, index) => {
                            return <a href='' key={index}>{sports}</a>
                        })}
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default MensClothing

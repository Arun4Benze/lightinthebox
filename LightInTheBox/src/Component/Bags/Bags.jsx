import React from 'react';
import '../Bags/Bags.css'

const Bags = ({HandleMouseLeave}) => {
    const mensShoes = [
        "Sneakers", "Loafers", "Boots", "Dress Shoes", "Running Shoes", 
        "Chukka Boots", "Chelsea Boots", "Slip-On Shoes", "Sandals", "Flip Flops", 
        "High Tops", "Work Boots", "Formal Shoes", "Casual Shoes"
    ];
    const mensBags = [
        "Messenger Bag", "Backpack", "Duffel Bag", "Laptop Bag", "Crossbody Bag", 
        "Briefcase", "Tote Bag", "Gym Bag", "Weekender Bag", "Clutch", 
        "Wallet", "Bum Bag", "Travel Bag"
    ];
    const womensShoes = [
        "Heels", "Flats", "Ballet Flats", "Boots", "Sneakers", 
        "Sandals", "Wedges", "Loafers", "Pumps", "Platform Shoes", 
        "Ankle Boots", "Espadrilles", "Mules", "Flip Flops", "Oxfords"
    ];
    const womensBags = [
        "Tote Bag", "Handbag", "Crossbody Bag", "Clutch", "Satchel", 
        "Shoulder Bag", "Backpack", "Bucket Bag", "Duffel Bag", "Messenger Bag", 
        "Wallet", "Evening Bag", "Laptop Bag", "Travel Bag", "Bum Bag"
    ];
    const womensSportsShoes = [
        "Running Shoes", "Tennis Shoes", "Basketball Shoes", "Soccer Shoes", "Cycling Shoes", 
        "Training Shoes", "Walking Shoes", "Yoga Shoes", "Hiking Shoes", "Skate Shoes", 
        "Dance Shoes", "Crossfit Shoes", "Athletic Sneakers", "Fitness Shoes"
    ];
            
        
  return (
    <>
      <div className="container womens-container" onMouseLeave={HandleMouseLeave}>
                <div className="row opo">
                    <div className="col-md-6">
                        <div className='dress-category'>
                            <h3>MensShoes</h3>
                            <div className='d-flex flex-column'> 
                                {mensShoes.map((shoe, index) => {
                                    return <a href='' key={index}>{shoe}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>MensBags</h3>
                            <div className='d-flex flex-column'> 
                                {mensBags.map((mbag, index) => {
                                    return <a href='' key={index}>{mbag}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>WomensShoes</h3>
                            <div className='d-flex flex-column'> 
                                {womensShoes.map((wshoes, index) => {
                                    return <a href='' key={index}>{wshoes}</a>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className='dress-category'>
                            <h3>WomensBags</h3>
                            <div className='d-flex flex-column'> 
                                {womensBags.map((wbags, index) => {
                                    return <a href='' key={index}>{wbags}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>WomensSportsShoes</h3>
                            <div className='d-flex flex-column'> 
                                {womensSportsShoes.map((wsports, index) => {
                                    return <a href='' key={index}>{wsports}</a>
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Bags

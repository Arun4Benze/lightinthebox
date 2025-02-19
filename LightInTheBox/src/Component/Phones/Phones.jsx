import React from 'react'
import "../Phones/Phones.css";

const Phones = ({HandleMouseLeave}) => {
    const phones = [
        "Smartphone", "Flip Phone", "Gaming Phone", "Camera Phone", "Business Phone", 
        "Foldable Phone", "Budget Phone", "Flagship Phone", "Phablet", "Unlocked Phone", 
        "5G Phone", "Dual SIM Phone", "Smartwatch Phone", "Feature Phone"
    ];
    
    const accessories = [
        "Phone Case", "Screen Protector", "Charger", "Wireless Charger", "Power Bank", 
        "Headphones", "Bluetooth Earbuds", "Phone Stand", "Car Mount", "Selfie Stick", 
        "Pop Socket", "Portable Speaker", "Charging Cable", "Phone Holder", "Phone Cleaner"
    ];
    
  return (
    <>
      <div className="container womens-container" onMouseLeave={HandleMouseLeave}>
                <div className="row opo">
                    <div className="col-md-6">
                        <div className='dress-category'>
                            <h3>Phones</h3>
                            <div className='d-flex flex-column'> 
                                {phones.map((phone, index) => {
                                    return <a href='' key={index}>{phone}</a>
                                })}
                            </div>
                        </div>
                        <div className='dress-category'>
                            <h3>Accessories</h3>
                            <div className='d-flex flex-column'> 
                                {accessories.map((accessorie, index) => {
                                    return <a href='' key={index}>{accessorie}</a>
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Phones

import React from 'react';
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-9 d-flex">
            <div className="company">
                <div className="company-info">
                    <h4>Company info</h4>
                    <ul>
                        <li>About lightinthebox.com</li>
                        <li>Accesability</li>
                        <li>Affiliated program</li>
                        <li>Imprint</li>
                        <li>site index</li>
                        <li>site map</li>
                    </ul>
                </div>
            </div>
            <div className="company">
                <div className="company-service">
                    <h4>Company Service</h4>
                    <ul>
                        <li>How to contact</li>
                        <li>How to return</li>
                        <li>How to track</li>
                        <li>How to order</li>
                        <li>Check all product review</li>
                        <li>Estimated delivery time</li>
                        <li>Our gaurantee</li>
                        <li>Payment method</li>
                    </ul>
                </div>
            </div>
            <div className="company">
                <div className="company-policies">
                    <h4>Company Policies</h4>
                    <ul>
                        <li>All you need to know</li>
                        <li>Cookie notice</li>
                        <li>Intelectual property policy</li>
                        <li>Privacy policy</li>
                        <li>Return policy</li>
                        <li>Terms of use</li>
                        
                    </ul>
                </div>
            </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
                <div className="subscribe">
                    <h4>Subscribe to Our Newsletter & Get Exclusive Offers</h4>
                    <div className="input-letter">
                        <input type="text" placeholder='Your email address'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default Footer

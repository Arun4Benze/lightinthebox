import React, { useState } from 'react';
import "../DiscountInput/DiscountInput.css";


const DiscountInput = () => {
    const countriesList = [
        { id: 1, name: "India", flagTag: "in" },
        { id: 2, name: "United States", flagTag: "us" },
        { id: 3, name: "Australia", flagTag: "au" },
        { id: 4, name: "Canada", flagTag: "ca" },
        { id: 5, name: "United Kingdom", flagTag: "gb" },
        { id: 6, name: "Germany", flagTag: "de" },
        { id: 7, name: "France", flagTag: "fr" },
        { id: 8, name: "Italy", flagTag: "it" },
        { id: 9, name: "Japan", flagTag: "jp" },
        { id: 10, name: "China", flagTag: "cn" }
      ];

      const currenciesList = [
        { id: 1, currency: "INR", symbol: "₹" },
        { id: 2, currency: "USD", symbol: "$" },
        { id: 3, currency: "AUD", symbol: "$" },
        { id: 4, currency: "CAD", symbol: "$" },
        { id: 5, currency: "GBP", symbol: "£" },
        { id: 6, currency: "EUR", symbol: "€" },
        { id: 7, currency: "JPY", symbol: "¥" },
        { id: 8, currency: "CNY", symbol: "¥" }
      ];
    

    return (
        <>
            <div className="discount-container">
            <div class="mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" className="form-label">Ship to</label>
                <select name="" id="">
                {countriesList.map((country,index)=>{
                        return  <option key={index} value={country.name}>{country.name}</option>
                    })}
                </select>
            </div>
            <div class="mb-3 d-flex flex-column">
                <label for="exampleFormControlTextarea1" className="form-label">Currency</label>
                <select name="" id="">
            {currenciesList.map((currency,index)=>{
                return <option key={index} value={currency.currency}> {currency.symbol}    {currency.currency}</option>
            })}
                    
                </select>
            </div>
            <button className='btn btn-danger'>Save</button>
            </div>
        </>
    )
}

export default DiscountInput

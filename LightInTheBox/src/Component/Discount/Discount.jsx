import React, { useState } from 'react'
import "../Discount/Discount.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import DiscountInput from '../DiscountInput/DiscountInput';
// import DiscountInput from '../DiscountInput/DiscountInput';



const Discount = () => {
    const languages = [{ code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ar', name: 'Arabic' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ko', name: 'Korean' },
    { code: 'bn', name: 'Bengali' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'mr', name: 'Marathi' },
    { code: 'tr', name: 'Turkish' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'th', name: 'Thai' },
    { code: 'el', name: 'Greek' },
    { code: 'pl', name: 'Polish' }];
    const [language, setLanguage] = useState(languages);
    const [display, setDisplay] = useState(false);
    
    const DropdownLanguages = () => {
        setLanguage(language);
        setDisplay(!display==true);
        console.log(language);
    };
    
    const [displayInput,setDisplayInput]=useState(false);
    const HandleDisplayInput=()=>{
        setDisplayInput(!displayInput);
    }
    return (
        <>
            <div className="row discount-row">
                <div className="col-md-5">

                </div>
                <div className="col-md-7 discount-link">
                    <div className="content d-flex justify-content-around align-items-center">
                        <a href="" className='discount-label'>App only Get <span style={{ fontWeight: 'bold' }}>30% Off</span> EACH ITEM <FontAwesomeIcon icon={faChevronDown} /></a>
                        <a href="" className='discount-help'>Help center</a>
                        <p onClick={HandleDisplayInput}>Ship to:<span className="flag-icon flag-icon-in"></span>
                            /RsINR <FontAwesomeIcon icon={faChevronDown} /></p>
                            {displayInput&& <DiscountInput/>}

                        <p onMouseOver={DropdownLanguages}>English <FontAwesomeIcon icon={faChevronDown} /></p>
                    
                    </div>
                    
                </div>
            </div>
            <div className="d-flex justify-content-end drop">
            <div className='row languages'>
                        <ul>
                            {display && language.map((langu) => {
                                return <li className='list-unstyled' key={langu.code}>{langu.name}</li>
                            }
                            )}
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default Discount

import React from 'react';
import "../WelcomeRegister/WelcomeRegister.css"
import carnival from "../../assets/carnival.jpg"

const WelcomeRegister = () => {
    return (
        <>
            <div className="main-register-box">
                <div className="container register-box">
                    <h2>Welcome</h2>
                    <p>Sign in for the best experience</p>
                    <button className='welcome-sigin'>Sign in</button>
                    <button className='welcome-register'>Register</button>
                </div>
                <div className='register-carnival'>
                      <img src={carnival} className="img-fluid" alt="" />
                </div>
            </div>

        </>
    )
}

export default WelcomeRegister

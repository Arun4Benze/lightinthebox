import React from 'react';
import "../WelcomeRegister/WelcomeRegister.css"
import carnival from "../../assets/carnival.jpg"
import { Link } from 'react-router';

const WelcomeRegister = ({user}) => {
    return (
        <>
            <div className="main-register-box">
                <div className="container register-box">
                    <h2>Welcome</h2>
                    <p>Sign in for the best experience</p>
                    {user? (
        <h2>Welcome, {user.name}!</h2>
      ):
      (
        <Link to="/login"> <button className='welcome-sigin'>Sign in</button></Link>
      )
      }
                   {/* <Link to="/login"> <button className='welcome-sigin'>Sign in</button></Link> */}
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

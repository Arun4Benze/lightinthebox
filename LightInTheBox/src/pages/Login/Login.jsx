import React, { useContext, useState } from 'react';
import "../Login/Login.css";
import { LoginContextValue } from '../../Contexts/LoginContext';
import { useNavigate } from 'react-router';

const Login = () => {
    // samples users
    const sampleUsers = {
        "users": [
            {
                "username": "benz",
                "password": "123"
            },
            {
                "username": "alice_smith",
                "password": "alice5678"
            },
            {
                "username": "bob_jones",
                "password": "bob91011"
            },
            {
                "username": "charlie_brown",
                "password": "charlie2020"
            },
            {
                "username": "dave_williams",
                "password": "dave7890"
            }
        ]
    }

    const navigate = useNavigate();
    const { login } = useContext(LoginContextValue);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const handleLogin = () => {
        const userInfo = { name: username, pass: password };
        login(userInfo);
        const user = sampleUsers.users.find((sampleuser) =>  sampleuser.username === userInfo.name && sampleuser.password === userInfo.pass )
        if (user) {
            navigate("/")
        }
        else {
            setError("Invalid credentials")
        }
    }
    return (
        <>
            <div className="container w-50 my-5 d-flex flex-column">
                <h3 className='login-heading'>Light in the box</h3>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-md-2 col-form-label">Email</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="staticEmail" placeholder="enter mail" value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-md-2 col-form-label">Password</label>
                    <div className="col-md-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder='enter password' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button className='login-btn' onClick={handleLogin}>Login</button>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        </>
    )
}

export default Login

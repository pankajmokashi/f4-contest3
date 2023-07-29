import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Login = () => {

    let navigate = useNavigate();
    let [usernameState, setUsernameState] = useState("")
    let [passwordState, setPasswordState] = useState("")
    let [result, setResult] = useState("")
    const dispatch = useDispatch();

   
    function changeHandle() {
        if(usernameState && passwordState){
            fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:  usernameState ,
                password:  passwordState ,
            })
        })
        .then(res => (res.json()))
        .then(res => {
            setResult(res);
            if(res.token){
                dispatch({ type: 'LOGIN_SUCCESS', payload: res });
                navigate("/profile");
            }
        });
        setUsernameState("");
        setPasswordState("");
        }
        else{
            setResult({message: "Enter All Fields."})
        }
    }

return (
    <div className="container">
        <div className="login-div">
            <div>
                <div className="welcome">Welcome back! 👋</div>
                <div className="signin-text">Sign in to your account</div>
            </div>
            <div className="input-div">
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" onChange={(e) => setUsernameState(e.target.value)} value={usernameState}></input>
            </div>
            <div className="input-div">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPasswordState(e.target.value)} value={passwordState}></input>
            </div>
            <div className="btn-div">
                <button onClick={changeHandle}>Continue</button>
                <a className="link" href="#login-div">Forgot your password?</a>
            </div>
            {
                result.message &&
                <div className="error">{result.message}</div>
            }
        </div>
        <div className="acc">Don't have an account? <a href="#login-div">Sign up</a></div>
    </div>
)
}

export default Login
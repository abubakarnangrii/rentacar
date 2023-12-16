import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login_Register.css';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Login_Register() {
    const [action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const isEmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    const isNameValid = (name) => {
        const emailRegex = /^[a-zA-Z\s]+$/;
        return emailRegex.test(name);
    };
    const isPasswordValid = (password) => {
        const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
        return emailRegex.test(password);
    };



    const handleSignUp = () => {
        setAction("Sign Up")
        if (!isNameValid(name) && action !== "Login") {
            alert("Please enter correct name.");
            return false;
        }
       
        if (!isEmailValid(email) && action !== "Login") {
            alert("Please enter a valid email address.");
            return false;
        }
        if (!isPasswordValid(password) && action !== "Login") {
            alert("Please enter strong password which includes special characters.");
            return false;
        }

        setName("");
        setEmail("");
        setPassword("");
    };

    const handleLogin = () => {
        setAction("Login")
        if (!isEmailValid(email) && action !== "Sign Up") {
            alert("Please enter a valid email address.");
            return false;
        }
        if (!isPasswordValid(password) && action !== "Sign Up") {
            alert("Please enter your correct password.");
            return false;
        }

        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <Header />
            <Loader />
            <Color />
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="breadcrumbs__title">About Us</div>
                            <div className="breadcrumbs__items">
                                <div className="breadcrumbs__wrap">
                                    <div className="breadcrumbs__item">
                                        <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/register" className="breadcrumbs__item-link">Login/Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Login" ? (<div></div>) : (
                        <div className='input'>
                            <img src={user_icon} alt='' />
                            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    )}
                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                {action === "Sign Up" ? (<div></div>) : (
                    <div className='forget-password'>
                        Forget Password? <Link to='/forget-password' ><span>Click here!</span></Link>
                    </div>
                )}
                <div className='submit-container'>
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignUp} > Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>  Login </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

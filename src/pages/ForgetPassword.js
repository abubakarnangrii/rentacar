import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import email_icon from '../images/email.png';
import error_icon from '../images/error.png';
import './ForgetPassword.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function ForgetPassword() {

    const [email, setEmail] = useState("");

    const isEmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    
    const handleSignUp = () => {

        if (!isEmailValid(email) ) {
            alert("Please enter a valid email address.");
            return false;
        }
        setEmail("");
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
                                        <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/forget-password" className="breadcrumbs__item-link">Forget Password</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='header'>
                    <img className='Error_Icon' src={error_icon} alt='' />
                    <div className='Forget_Text'>Forget Password</div>
                    <div className='para_text'>Enter your email and we'll send you a link to reset your password.</div>
                </div>
                <div className='forget-inputs'>
                    <div className='forget-input'>
                        <img src={email_icon} alt='' />
                        <input type='email' placeholder='Email' />
                    </div>
                </div>
                <div className='submit-container'>
                    <div className='submit_Forget' onClick={handleSignUp}> Submit</div>
                </div>
                <div className='login-page'><Link to='/register' >{`< Back to Login!`}</Link></div>
            </div>
            <Footer />
        </div>
    )
};

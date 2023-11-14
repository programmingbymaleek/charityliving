import React from 'react'
import Footer from '../Homepage1/Footer'
import Navbar from '../Homepage1/Navbar'

import dummy2 from "../assets/food2.jpg"

import "./Signin.scss"

const Signin = () => {
    const style = {
        left: "black", 
        leftscroll: "white",
        right: "#0C3763", 
        rightscroll: "white",
        signincolor: "black", 
        signinscroll: "white",
        signincolorscroll: "black", 
        siginborder: "transparent",
        joincolor: "white",
        joinbackground: "#0C3763",
        the_scroll: 720,
    }
    return (
        <div className='sigin_page'>
            <Navbar {...style}/>
            <div className='signin_container'>
                <div className='signin_header'>
                    <div className='signin_big_heading'>Sign into your account</div>
                    <div className='signin_lil_heading'>
                        Sign in today to view your Lifetime Impact, manage your donations,
                        connect with other supporers, and share your impact with others.
                    </div>
                </div>
                <div className='sigin_form_container'>
                    <div className='sigin_form_text'>
                        Get a link sent to your email that will securely sign you in without
                        a password or any hassle:
                    </div>
                    <form>
                        <label>
                            Email
                            <input
                                type="text"
                                placeholder='Email'
                            />
                        </label>
                        <label>
                            <input type="submit" value="Send me a sign in link" className='submit_form_button' />
                        </label>
                    </form>
                    <div className='or_divider'>
                        <hr />
                        <span className='sigin_options'>or sign in below</span>
                        <hr />
                    </div>
                    <input type="submit" value="Sign in with facebook" className='facebook_signin' />
                    <input type="submit" value="Sign in with email" className='email_signin' />
                    <div className='other_signin_options'>
                        <span className='forgot_password'>Forgot password?</span>
                        <span className='form_create_account'>Create an account</span>
                    </div>
                </div>
            </div>
            <div className='signin_images'>
                <img src={dummy2} alt='signin_image' />
                <img src={dummy2} alt='signin_image' />
                <img src={dummy2} alt='signin_image' />
            </div>
            <Footer />
        </div>
    )
}

export default Signin

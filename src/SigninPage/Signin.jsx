import React from 'react'
import Footer from '../Homepage1/Footer'
import Navbar from '../Homepage1/Navbar'

import "./Signin.scss"

const Signin = () => {
    return (
        <div className='sigin_page'>
            <Navbar left="black" right="white" background="blue" signin="black" />
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
                                placeholder='First Name'
                            />
                        </label>
                        <label>
                            <input type="submit" value="Send me a sign in link" />
                        </label>
                    </form>
                    <div>
                        <hr />
                        <span className='sigin_options'>or sign in below</span>
                        <hr />
                    </div>
                    <label>
                        <input type="submit" value="Sign in with facebbol" />
                    </label>
                    <label>
                        <input type="submit" value="Sign in with email" />
                    </label>
                    <div className='other_signin_options'>
                        <span className='forgot_password'>Forgot password</span>
                        <span className='form_create_account'>Create an account</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signin

import React, { useContext, useEffect, useState } from 'react'

import Footer from '../GlobalComponents/Footer'
import Navbar from '../GlobalComponents/Navbar'
import Form from '../GlobalComponents/Form'
import FooterForm from '../GlobalComponents/FooterForm'
import { Context } from '../Utilities/Context'
import jsonStyles from '../Utilities/styles.json'

import dummy2 from "../assets/food2.jpg"

import "../styles/Signin.scss"

const Signin = () => {
    let { setOpenModal, setModalDetails } = useContext(Context)

    const [siginInStylesData, setSiginInStylesData] = useState({});

    useEffect(() => {
        setSiginInStylesData(jsonStyles.Signin[0].nav[0])
    }, []);

    useEffect(() => {
        console.log(siginInStylesData)
    }, [siginInStylesData]);

    //modal form details
    const createAccountDets = {
        heading: "Create an Account",
        inputFields: [
            {
                value: "first_name",
                label: "First Name",
            },
            {
                value: "last_name",
                label: "Last Name",
            },
            {
                value: "email",
                label: "Email",
            },
            {
                value: "password",
                label: "Password",
            },
            {
                value: "password",
                label: "Confirm Password",
            },
        ]
    }

    const signinDets = {
        heading: "Sign In",
        inputFields: [
            {
                value: "email",
                label: "Email",
            },
            {
                value: "password",
                label: "Password",
            }
        ]
    }

    const openTheModal = (data) => {
        setOpenModal(true)
        setModalDetails(data)
    }

    return (
        <div className='sigin_page'>
            {
                Object.keys(siginInStylesData).length !== 0 ? (
                    <Navbar the_styles={siginInStylesData} />
                ) : (<span>Loading...</span>)
            }
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
                    <input type="submit" value="Sign in with google" className='facebook_signin' />
                    <input type="submit" value="Sign in with email and passsword" className='email_signin' onClick={() => openTheModal(signinDets)} />
                    <div className='other_signin_options'>
                        <span className='forgot_password' onClick={() => openTheModal(createAccountDets)}>Create an account?</span>
                        <span className='form_create_account'>Sign in</span>
                    </div>
                </div>
            </div>
            <div className='signin_images'>
                <img src={dummy2} alt='signin_image' />
                <img src={dummy2} alt='signin_image' />
                <img src={dummy2} alt='signin_image' />
            </div>
            <FooterForm backgroundstyle="white" />
            <Footer backgroundstyle="white" />
            <Form />
        </div>
    )
}

export default Signin

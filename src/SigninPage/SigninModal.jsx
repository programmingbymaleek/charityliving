import React, { useEffect, useState, useContext } from 'react'

import { Context } from '../Utilities/Context'
import "./Modal.scss"

import close_icon from "../assets/close.svg"

const SigninModal = () => {

    let { openSigninModal, setOpenSigninModal} = useContext(Context)

    return (
        <div className={`overlay ${openSigninModal ? 'open_modal' : ''}`}>
            <div className='signin_email_container'>
                <div className='close_modal_div'>
                    <img src={close_icon} alt='close icon' className='close_icon' onClick={()=>setOpenSigninModal(false)}/>
                </div>
                <div className='modal_header'>Sign in</div>
                <div className='modal_form'>
                    <label>
                        Email
                        <input
                            type="text"
                            placeholder='Email'
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            placeholder='Password'
                        />
                    </label>
                    <input
                        type="submit"
                        value='submit'
                        className='submit_the_form'
                    />
                </div>
            </div>
        </div>
    )
}

export default SigninModal

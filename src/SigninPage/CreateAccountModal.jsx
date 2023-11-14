import React, { useEffect, useState, useContext } from 'react'

import { Context } from '../Utilities/Context'

import "./Modal.scss"

import close_icon from "../assets/close.svg"

const CreateAccountModal = () => {

    let { openCreateAccountModal, setOpenSCreateAccountModal} = useContext(Context)

    return (
        <div className={`overlay ${openCreateAccountModal ? 'open_modal' : ''}`}>
        <div className='signin_email_container'>
        <div className='close_modal_div'>
                    <img src={close_icon} alt='close icon' className='close_icon' onClick={()=>setOpenSCreateAccountModal(false)}/>
                </div>
                <div className='modal_header'>Create an Account</div>
            <div className='modal_form'>
                <label>
                    First Name
                    <input
                        type="text"
                        placeholder='First name'
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        placeholder='Last name'
                    />
                </label>
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
                <label>
                    Confirm Password
                    <input
                        type="password"
                        placeholder='Confirm password'
                    />
                </label>
                    <input
                        type="submit"
                        placeholder='Email'
                        className='submit_the_form'
                    />
            </div>
        </div>
    </div>
    )
}

export default CreateAccountModal

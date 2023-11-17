import React, { useEffect, useState, useContext } from 'react'

import { Context } from '../Utilities/Context'

import "../styles/Modal.scss"

import close_icon from "../assets/close.svg"

const Form = () => {
    let { openModal, setOpenModal, modalDetails } = useContext(Context)

    return (
        Object.keys(modalDetails).length !== 0 ? (
            <div className={`overlay ${openModal ? 'open_modal' : ''}`}>
                <div className='signin_email_container'>
                    <div className='close_modal_div'>
                        <img src={close_icon} alt='close icon' className='close_icon' onClick={() => setOpenModal(false)} />
                    </div>
                    <div className='modal_header'>{modalDetails.heading}</div>
                    <div className='modal_form'>
                        {modalDetails.inputFields.map((field, index) => (
                            <div key={index}>
                                <label>
                                    {field.label}
                                    <input
                                        type={field.value === "password" ? "password" : "text"}
                                        placeholder={field.label}
                                    />
                                </label>
                            </div>
                        ))}
                        <input
                            type="submit"
                            placeholder='Submit'
                            className='submit_the_form'
                        />
                    </div>
                </div>
            </div>
        ) : (
            <span></span>
        )
    )
}

export default Form

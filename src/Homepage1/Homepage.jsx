import React from 'react'
import Navbar from './Navbar'
import './Homepage.sass'
import dummy from "../assets/statistics.svg"

const Homepage = () => {
  return (
    <div className='homepage1'>
      <div className='homepage_header'>
        <Navbar />
        <div className='home_head_section'>
          <div className='left_head'>
            <div className='the_head'>Help bring clean and safe water to every person on the planet</div>
            <div className='the_body'>
              The water crisis is massive. But together we can solve it.
              Private donors cover our operating costs so whether you choose to
              join us by giving once or through The Spring, our community of
              monthly givers, know that 100% of your generousity will bring clean
              water to families around the world
            </div>
          </div>
          <div className='right_head'>
            <div className='choose_amount_header'>
              <span className='toggle_button'>Give once</span>
              <span className='toggle_button'>Monthly</span>
            </div>
            <div className="choose_amount">
              <div className='choose_amount_header'>Choose an amount to give per month</div>
              <div className='choose_amount_body'>
                <div className='amount_button'>$10<span className='dollar'>usd/<span className='month'>mo</span></span></div>
                <div className='amount_button'>$20<span className='dollar'>usd/<span className='month'>mo</span></span></div>
                <div className='amount_button'>$40<span className='dollar'>usd/<span className='month'>mo</span></span></div>
                <div className='amount_button'>$100<span className='dollar'>usd/<span className='month'>mo</span></span></div>
                <input className='amount_input' type='text' placeholder='Other amount' />
                <div className='join_button'>Join today</div>
              </div>
              <hr />
              <div className='choose_amount_footer'>
                Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.
              </div>
            </div>
            <div className='secure_note'>
              Secure Payment . This site is protected by reCAPTCHA and the Google <span className='policy'>Privacy Policy</span> and <span className='policy'>Terms of Service</span> apply.
            </div>
          </div>
        </div>
      </div>
      <div className='our_work_section'>
        <div className='our_work_head'>Our work</div>
        <div className='our_work_text'>
          <div className='work_heading'>703 million people lack basic access to clean and safe drinking water. We're on a mission to change that.</div>
          <div className='work_text'>
            We believe that sustainable work is locally-led.Along with implementing community-owned water 
            projects, our local partners help facilitate comprehensive water, saitation, and hygiene (WASH) 
            programming to protect everyone's long-term health.
          </div>
        </div>
        <div className='work_numbers'>
          <div className='number_details'>
            <img src={dummy} alt='dummy icon' className='dummy_icon'/>
            <span className='the_number'>137,015</span>
            <span className='number_text'>Water projects funded</span>
          </div>
          <div className='number_details'>
            <img src={dummy} alt='dummy icon' className='dummy_icon'/>
            <span className='the_number'>17,463,191</span>
            <span className='number_text'>People will be served</span>
          </div>
          <div className='number_details'>
            <img src={dummy} alt='dummy icon' className='dummy_icon'/>
            <span className='the_number'>29</span>
            <span className='number_text'>Counteries </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

import React, { useEffect, useState } from 'react'

import '../styles/Homepage.scss'
import '../styles/Givepage.scss'

import dummy from "../assets/statistics.svg"
import Footer from '../GlobalComponents/Footer'
import Navbar2 from '../GlobalComponents/Navbar2'
import GiveForm from '../GlobalComponents/GiveForm'
import WaysToGive from '../GlobalComponents/WaysToGive'

import jsonData from '../Utilities/data.json'

const Givepage = () => {
  const [waysToGiveData, setWaysToGiveData] = useState([]);

  useEffect(() => {
    setWaysToGiveData(jsonData.GivePage[0].ways_to_give)
  }, []);
  return (
    <div>
      <div className='givepage1'>
        <Navbar2 />
        <div className="givepage_header">
          <div className="givepage_head_section">
            <div className="givepage_left">
              <div className="the_head">
                Help bring clean and safe water to every person on the planet
              </div>
              <div className='sub_head'>
                703 million people live without clean water. The daily effor tto collect
                dirty water forces families to journey away from home and make it harder to
                earn an income. It keeps kids out of school and steals their education.
              </div>
              <div className="the_body">
                Access to clean wtaer changes everything. But our work to end the water crisis can't
                start without your suport. You can helpp provide education, income, dignity and health -
                especially for women and girls. No matter how much you choose to give, 100% will directly
                fund clean water for those who need it most.
              </div>
            </div>
            <GiveForm />
          </div>
        </div>
        <div className="contributors">
          <div className="contributors_card">
            <img src={dummy} alt="contributor" className='overap_image' />
            <div className="card_title">Give with confidence</div>
            <div className="the_contributors">
              <img src={dummy} alt="contributor" />
              <img src={dummy} alt="contributor" />
              <img src={dummy} alt="contributor" />
              <img src={dummy} alt="contributor" />
              <img src={dummy} alt="contributor" />
              <img src={dummy} alt="contributor" />
            </div>
          </div>
          <div className='join_info_tab'>
            <img src={dummy} alt="contributor" className='tab_overap_image' />
            <div className='tab_heading'>
              Join the Spring to invest in clean water and sustainability
            </div>
            <div className='tab_info'>
              Give monthly, and you'll become a part of The Spring, a passionate community invested
              in a world where everyone has clean water.
            </div>
            <div className='tab_button'>Learn more</div>
          </div>
          <div className='sponsor_tab'>
            <div className='tab_heading'>
              Sponsor a water project
            </div>
            <div className='tab_info'>
              Transform an entire community, school, or health clinic with a gift of
              $10,000 or more.
            </div>
            <div className='tab_link'>Learn more</div>
          </div>
        </div>
        <div className='ways_to_give_container'>
          <div className='ways_to_give_heading'>More ways to give</div>
          <div className='ways_to_give'>
            {waysToGiveData.map((item, index) => (
              <WaysToGive
                the_index = {index}
                the_title = {item.title}
                the_body = {item.body}
                link_text = {item.link_text}
                the_link = {item.link}
              />
              
            ))}

          </div>
        </div>
        <Footer backgroundstyle="white"/>
      </div>

    </div>
  )
}

export default Givepage

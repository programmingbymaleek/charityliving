import React, {useState, useEffect, useContext} from 'react'

import Navbar from '../GlobalComponents/Navbar'
import Footer from '../GlobalComponents/Footer'
import GiveForm from '../GlobalComponents/GiveForm'
import FooterForm from '../GlobalComponents/FooterForm'
import jsonStyles from '../Utilities/styles.json'
import { Context } from '../Utilities/Context'

import '../styles/Homepage.scss'

import dummy from "../assets/statistics.svg"
import dummy2 from "../assets/food2.jpg"

const Homepage = () => {

  let { navStyleObject, setNavStyleObject} = useContext(Context)

  const [myStylesData, setMyStylesData] = useState({});

  useEffect(() => {
    setNavStyleObject(jsonStyles.Homepage[0].nav[0])
  }, []);
  

  return (
    <div className='homepage1'>
      <div className="homepage_header">
            <Navbar/>
        <div className="home_head_section">
          <div className="left_head">
            <div className="the_head">
              Help bring clean and safe water to every person on the planet
            </div>
            <div className="the_body">
              The water crisis is massive. But together we can solve it. Private
              donors cover our operating costs so whether you choose to join us
              by giving once or through The Spring, our community of monthly
              givers, know that 100% of your generousity will bring clean water
              to families around the world
            </div>
          </div>
          <GiveForm />
        </div>
      </div>
      <div className="our_work_section">
        <div className="our_work_head">Our work</div>
        <div className="our_work_text">
          <div className="work_heading">
            703 million people lack basic access to clean and safe drinking
            water. We're on a mission to change that.
          </div>
          <div className="work_text">
            We believe that sustainable work is locally-led.Along with
            implementing community-owned water projects, our local partners help
            facilitate comprehensive water, saitation, and hygiene (WASH)
            programming to protect everyone's long-term health.
          </div>
        </div>
        <div className="work_numbers">
          <div className="number_details">
            <img src={dummy} alt="dummy icon" className="dummy_icon" />
            <span className="the_number">137,015</span>
            <span className="number_text">Water projects funded</span>
          </div>
          <div className="number_details">
            <img src={dummy} alt="dummy icon" className="dummy_icon" />
            <span className="the_number">17,463,191</span>
            <span className="number_text">People will be served</span>
          </div>
          <div className="number_details">
            <img src={dummy} alt="dummy icon" className="dummy_icon" />
            <span className="the_number">29</span>
            <span className="number_text">Counteries </span>
          </div>
        </div>
      </div>
      <div className="contributors">
        <div className="contributors_card">
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
      </div>
      <div className="join_spring_section">
        <div className="join_spring_title">
          <div className="spring_heading">
            Together we can end the water crisis
          </div>
          <div className="spring_subheading">
            Here's how you can take action today
          </div>
        </div>
        <div className="spring_grid_image">
          <div className="grid_container">
            <img className="logo_icon" src={dummy} alt="logo_icon" />
            <div className="grid_heading">Join the spring</div>
            <div className="grid_text">
              Spring members are monthly donors committed to making an impact
              and ending the water crisis. Together, Spring members bring clean
              water to 44.343 people every single month.
            </div>
            <div className="grid_bold_text">
              A $20 monthly donation can give 6 people clean water every year.
            </div>
            <div className="grid_button">Join the spring</div>
            <div className="grid_italic_text">
              100% of your donation funds clean water
            </div>
          </div>
          <img src={dummy2} className="grid_image" alt="woman" />
          <div className="grid_gap"></div>
          <div className="learn_more_container">
            <div className="learn_more_card">
              <img src={dummy2} className="learn_image" alt="learn more" />
              <div className="learn_more_details">
                <div className="learn_more_heading">
                  Fundraiser for clean water
                </div>
                <div className="learn_more_text">
                  Creating a campaign helps raise money for clean water projects
                  for people in need
                </div>
                <div className="learn_more_link">Start a Campaign</div>
              </div>
            </div>
            <div className="learn_more_card">
              <img src={dummy2} className="learn_image" alt="learn more" />
              <div className="learn_more_details">
                <div className="learn_more_heading">
                  Sponsor a water project
                </div>
                <div className="learn_more_text">
                  Transform an entire community, school, or health clinic, with
                  a gift of $10,000 or more
                </div>
                <div className="learn_more_link">Learn more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stories_section">
        <div className="stories_heading">
          Stay updated with stories from our team
        </div>
        <div className="the_stories">
          <div className="story_section">
            <img src={dummy2} alt="story_image" className="story_image" />
            <div className="story_details">
              <div className="story_tiny_head">stories from the field</div>
              <div className="story_heading">
                uncomon courgae: when water becomes a warzone
              </div>
              <div className="story_text">
                In unthinkable circumstances, mechanics in Ethopia continue to
                restore access to clean water
              </div>
              <div className="story_link">read more</div>
            </div>
          </div>
          <div className="story_section">
            <img src={dummy2} alt="story_image" className="story_image" />
            <div className="story_details">
              <div className="story_tiny_head">stories from the field</div>
              <div className="story_heading">forward forever</div>
              <div className="story_text">
                What an old safe taught me about sustainable development
              </div>
              <div className="story_link">read more</div>
            </div>
          </div>
          <div className="story_section">
            <img src={dummy2} alt="story_image" className="story_image" />
            <div className="story_details">
              <div className="story_tiny_head">An update for charity water</div>
              <div className="story_heading">The journey of your donation</div>
              <div className="story_text">
                Watch this video to see how your donation turns into water,
                sanitation and hygiene resources that transform entire
                communities and impact more people than you know.
              </div>
              <div className="story_link">watch here</div>
            </div>
          </div>
        </div>
      </div>
      <FooterForm/>
      <Footer />
    </div>
  );
};

export default Homepage;

import React from "react";
import Navbar2 from "../GlobalComponents/Navbar2";
import GiveForm from "../GlobalComponents/GiveForm";
import Footer from "../GlobalComponents/Footer";

import "../styles/JoinTheSpringspage.scss";

import dummy from "../assets/statistics.svg";
import dummy2 from "../assets/food2.jpg";

const JoinTheSpringspage = () => {
  return (
    <div className="join_the_springs">
      <Navbar2 />
      <div className="join_the_springs_header">
        <div className="join_the_springs_section">
          <div className="join_the_springs_left">
            <div className="join_the_springs_head">
              Give people clean and safe water every month
            </div>
            <div className="join_the_springs_body">
              703 million people live without clean water. A lack of access to
              clen water forces families to journey away from home and make it
              harder to earn an income. Dirty water keeps kids out of school and
              steals their education.
              <br />
              But it doesn't have to be this way. You can help provide
              education, income, dignity and health - especially for women and
              girls. A gift of just $20 a month is enough to bring 6 people - an
              entire family - clean water each year.
            </div>
          </div>
          <GiveForm />
        </div>
        <img src={dummy2} className="image_side" alt="long image" />
      </div>
      <div className="join_the_springs_info">
        <img src={dummy} alt="logo icon" />
        <div className="info_heading">
          Join the global community serving 42,850 people every month
        </div>
        <div className="info_body_text">
          When you give to charity: water, 100% of your donation goes directly
          to funding water solutions in rural communities. We won't stop until
          everyone, everywhere has access to clean water. But we need our
          monthly giving community. The Spring.
        </div>
        <div className="info_features">
          <div className="feature_tab">
            <img src={dummy} alt="logo icon" />
            <div className="feature">
              Our water projects are{" "}
              <strong>locally-led and community-owned.</strong> We deploy your
              donations to the feild, where these partners go to work
              rehabilitating old water systems, bilding new ones, or completing
              sanitation and hygiene training.
            </div>
          </div>
          <div className="feature_tab">
            <img src={dummy} alt="logo icon" />
            <div className="feature">
              The Spring is essential to this cycle. We count on monthly gifts
              to fill in any funding gaps that may arise or account for
              potential changes in project completion. The Sprin enables us to
              fund our local partners with confidence and{" "}
              <strong>make the best long-term investments</strong> in rural
              communities
            </div>
          </div>
        </div>
      </div>

      <div className="imacted_countries">
        <div className="map_section"></div>
        <div className="impacted_container">
          <div className="impact_text">
            The Spring community has funded clean and safe drinking water for
            more than 1M people in 22 countries around the world.
          </div>
          <div className="imapct_heading">
            Explore spring impact in 17 countries
          </div>
          <div className="countries_section">
            <div className="each_country">
              <div className="left_side">
                <img alt="flag" />
                <div className="country_name">Bangladesh</div>
              </div>
              <div className="right_side">
                <img alt="human_icon" />
                <div className="numbers">1,000,000</div>
                <img alt="side_button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video_section">
        <div className="video_text_Section">
          <div className="video_heading">Clean water changes everything</div>
          <div className="video_text">
            703 million people in the world live without clean water. The
            majority live in isolated rural areas and spend hours every day
            walking to collect water for their family. Not only does walking for
            water keep children out of school or take up time that parents could
            be using to earn money, but the water often carries diseases that
            can make everyone sick.
            <br />
            We're on a mission to change that. When you donate to charity:
            water, you're investing in the hopes and dreams of families around
            the world. Families are healthier. Children are able to attend
            school full-time. Women can start a business or simply rest. Fathers
            have enough water for their drops and livestock. Communities thrive.
            That's the power of your generosity.
          </div>
        </div>
        <div className="the_video">
          <img src={dummy2} alt="video replacement"/>
        </div>
      </div>

      <div className="meet_us_section">
        <div className="meet_us_intro">
          <div className="meet_us_head">Meet the community changing lives.</div>
          <div className="meet_us_text">
            The Spring is composed of generous, passionate, and determined
            people - like you - from more than 100 countries around the world.
            Our members have alreadytransformed over a million lives with access
            to clean water, sanitation, and hygiene. Stand with us and change
            millions more. You're going to fit right it
          </div>
        </div>
        <div className="our_quotes">
          <div className="each_quote">
            <img src={dummy2} className="quote_picture" alt="quote picture" />
            <div className="the_quote">
              "I used to have monthly subscriptions with several different
              companies. But then the makeup, tote bags, and international
              snacks started to accumulate. With The Spring, I can donate that
              money and see the impact my support makes around the worls."
            </div>
            <div className="quote_name">Cindy Agoncillo</div>
          </div>
          <div className="each_quote">
            <img src={dummy2} className="quote_picture" alt="quote picture" />
            <div className="the_quote">
              "The Spring isn't just a subscription. It's a community of
              passionate investors. Being part of The Spring makes me hopefu
              that there wil be more children who can dream bigger because they
              don't have to carry the weight of dirty water"
            </div>
            <div className="quote_name">Krupa Patel </div>
          </div>
          <div className="each_quote">
            <img src={dummy2} className="quote_picture" alt="quote picture" />
            <div className="the_quote">
              "I'm currently an environmental engineer working on impproving New
              York City's water and wastewater resources. Water is something
              that is very important to me, and access to clean water is
              something that we often take for granted."
            </div>
            <div className="quote_name">Larry Ge</div>
          </div>
        </div>
      </div>
      <Footer backgroundstyle="white"/>
    </div>
  );
};

export default JoinTheSpringspage;

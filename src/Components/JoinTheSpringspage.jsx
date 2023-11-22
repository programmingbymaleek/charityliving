import React from "react";
import Navbar2 from "../GlobalComponents/Navbar2";

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
            <div className="join_the_springs_head">
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
      </div>
      <div className="join_the_springs_info">
        <img/>
        <div className="info_heading">Join the global community serving 42,850 people
        every month</div>
        <div className="info_body">
            <div className="info_body_text">
                When you give to charity: water, 100% of your donation goes directly to
                funding water solutions in rural communities. We won't stop until everyone,
                everywhere has access to clean water. But we need our monthly giving 
                community. The Spring.

            </div>
            <div className=" info_features">
                <div className="feature_tab">
                    <img/>
                    <div className="feature">
                        Our water projects are <em>locally-led and community-owned.</em> We 
                        deploy your donations to the feild, where these partners go to work
                        rehabilitating old water systems, bilding new ones, or completing
                        sanitation and hygiene training.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheSpringspage;

import React from "react";
import Volunteer from "./../src/images/Volunteer.png";
import MorCati from "./../src/images/MorCati.png";

function Activities() {
  return (
    <div id="activities">
      <div id="vol-div-1">
        <div id="vol-div">
          <div className="media-div" id="media-div-1">
            <div className="vol-p">
              <div id="activity-title">Volunteering</div>
              <p>
                Active volunteer of Women Who Code (NYC Chapter), fostering
                community building within the NYC tech industry / tech meetups{" "}
              </p>
              <br></br>
              <p>
                Engages with NYC tech community in person/social media in order
                to build a larger and inclusive community within the NYC tech
                space{" "}
              </p>
              <br></br>
              <p>
                Actively seeks to bring more individuals within the NYC tech
                space to join events and gain access to spaces for opportunity{" "}
              </p>
            </div>

            <div id="vol-img-div">
              <img
                alt="volunteering-event"
                src={Volunteer}
                id="volunteer"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div id="vol-div-2">
        <div className="fund-div">
          <div className="media-div" id="media-div-2">
            <div className="vol-p">
              <div id="activity-title">Fundraising</div>
              <p>
                Led and started a fundraiser to support the only privately owned
                womens shelter in Turkey (Mor Cati womens shelter) in Istanbul{" "}
              </p>
              <br></br>
              <p>
                Raised $8,776.63 through social media fundraiser, resulting in
                greater resources to ensure a secure and safe space for
                individuals seeking shelter at Mor Cati
              </p>
            </div>

            <div id="fund-img-div">
              <img alt="mor-cati" src={MorCati} id="mor-cati"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;

import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/*------------------------------------------- Refer a Friend - You Get $75 -----------------------------*/}
      {/*------------------------------------------- Refer a Friend - You Get $75 -----------------------------*/}
      <div className="subscrible_to_">
        <div className="subscrible_to_t">
          <div className="subscrible_to_text3">
            <div className="log_heard">
              <i
                className="fa-solid fa-cart-shopping"
                id="new-shpping-carat-from"
              ></i>
            </div>
            <div className="subscrible_t">
              <h5>Subscribe to Texts</h5>
              <span>Receive $50 off*</span>
              <a href="#">Subscribe Now</a>
              <a href="#">*See Terms</a>
            </div>
            <div className="subscrible_to_text3">
              <div className="log_heard">
                <i
                  className="fa-solid fa-user-group "
                  id="new-shpping-user-group"
                ></i>
              </div>
              <div className="subscrible_t">
                <h5>Refer a Friend - You Get $75</h5>
                <span>Your friend receives $50 off*</span>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div className="subscrible_to_text2">
              <div className="subscrible_t">
                <h4>Become a VIP subscriber</h4>
                <span>Receive exclusive promotions and news</span>
                <div>
                  <input type="text" placeholder="Enter email address" />
                  <button>subscrible</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------- footer ------------------------------*/}
      {/*----------------------------------------------------------- footer ------------------------------*/}
      <footer>
        <div className="customar">
          <div className="first_footer">
            <div className="CUSTOMER_service">
              <h2> CUSTOMER SERVICE </h2>
              <div className="call">
                <a href="#"> Call 1-888-436-7692</a>
                <a href="#">Live Chat</a>
                <a href="#">Visit Us</a>
                <a href="#">Email Us</a>
                <a href="#">Refer a Friend - Get $75</a>
                <a href="#">Become an Affiliate</a>
              </div>
            </div>
            <div className="CUSTOMER_service">
              <h2> REQUEST SERVICE </h2>
              <div className="call">
                <Link to="/Returnpage"> Request Return</Link>
                <a href="#">Request Repair</a>
              </div>
            </div>
          </div>
          <div className="CUSTOMER_service">
            <h2> WHY GEMSNY </h2>
            <div className="call">
              <a href="#"> Free Return</a>
              <a href="#">Free Shipping</a>
              <a href="#">Lifetime Warranty</a>
              <a href="#">Lifetime Trade-up</a>
              <a href="#">GemsNY Advantage</a>
              <a href="#">Flexible Financing</a>
              <a href="#">Jewelry Insurance</a>
            </div>
          </div>
          <div className="second_footer">
            <div className="CUSTOMER_service">
              <h2> ABOUT GEMSNY </h2>
              <div className="call">
                <a href="#"> ABOUT GEMSNY</a>
                <a href="#">Reviews</a>
                <a href="#">Reviews</a>
              </div>
            </div>
            <div className="CUSTOMER_service">
              <h2>EDUCATION</h2>
              <div className="call">
                <a href="#">Color Stone Education </a>
                <a href="#">Diamond Education</a>
                <a href="#">Stone Size Help</a>
                {/* <a href="#">Ring Size Help</a> */}
              </div>
            </div>
          </div>
          <div className="theree_footer">
            <div className="CUSTOMER_service">
              <h2>WE ARE LOCATED AT: </h2>
              <div className="call">
                <span>
                  Netaji Subhash Place, <br /> Pitampura, New Delhi, <br /> Delhi 110034,
                  India
                </span>
              </div>
            </div>
            <div className="CUSTOMER_service">
              <h2> BUSINESS HOURS </h2>
              <div className="call">
                <span>
                  Monday - Saturday 10:00 AM - 6:00 PM <br />
                  Sunday - Closed
                </span>
              </div>
            </div>
            <div className="div_imag23">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/assets/images/handicap_icon.svg"
                alt=""
              />
              <span> Accessibility</span>
            </div>
          </div>
        </div>
        {/*----------------------------------------------------- social media logo -----------------------------------*/}
        {/*----------------------------------------------------- social media logo -----------------------------------*/}
        <div className="social_media">
          <div className="Social_media_logo">
            <div className="media_logo">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/new/instagram.svg"
                alt=""
              />
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/new/youtube_icon.png"
                alt=""
              />
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/new/facebook.svg"
                alt=""
              />
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/new/linkedin-logo.png"
                alt=""
              />
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/new/twitter-new-round.webp "
                alt=""
              />
            </div>
            <div className="credit_card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1200px-Old_Visa_Logo.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/*------------------------------------------------------ Privacy Policy ------------------------------------*/}
        {/*------------------------------------------------------ Privacy Policy ------------------------------------*/}
        <div className="privacy_policy">
          <div className="policy">
            <div className="trems">
              <a href="#">privacy_policy</a>
              <a href="#">Terms &amp; Conditions</a>
          <Link to='/CommitmenttoAccessibility'>    <>Accessibility Statement</></Link>
              <a href="#">Site Map</a>
            </div>
            <div className="all_right1234">
              <span className="GemNycomAll">
                © 2023 GemsNY.com-All Rights Reserved{" "}
              </span>{" "}
              <br />
              <p className="This-siteis ">
                This site is protected by reCAPTCHA and the Google{" "}
                <b> Privacy Policy </b> and <b> Terms of ServiceNew </b> apply.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

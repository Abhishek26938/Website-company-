import React from "react";
import './OfferPageStyle.css'
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import Footer from "../Homepage/Footer/Footer";

const OfferpagebylinkHome = () => {
  return (
    <>
      

      <div className="Offer_main_div">
        <div className="offer_content">
          <span className="offer_h4">GOOD THINGS COME TO THOSE WHO SHARE</span>
          <br />
          <span className="offer_h2">
            Give a Gift,
            <br />
            Get $75
          </span>
          <br />
          <span className="offer_h4">
            Give friends $50 off their first order, and you get $75 when they
            buy!*
          </span>
          <br />

          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="Reffer_name"
            required
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your email"
            name="email"
            className="Reffer_email"
            required
          />
          <br />

          {/************ Buttons ************/}
          <div className="Reffer_Btn">
            <div className="reffer_via_email_div">
              <button type="submit" className="Reffer_via_email">
                {" "}
                Share Via Email
              </button>
            </div>

            <div className="Reffer_on_facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="Reffer_on_facebook">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className="Reffer_on_facebook">
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
        </div>
        <div className="offer_image">
          <img
            src="https://d3kinlcl20pxwz.cloudfront.net/assets/images/refer-friend/give50-get75.jpg"
            alt=""
            className="offer_img"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OfferpagebylinkHome;

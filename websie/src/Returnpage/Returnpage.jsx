import React from "react";
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import './Returnpage.css'
import Footer from "../Homepage/Footer/Footer";

const Returnpage = () => {
  return (
    <>
  
      {/*---------------------------------- Request Return -----------------------------*/}
      {/*---------------------------------- Request Return -----------------------------*/}
      <div className="Request-Return">
        <div className="Redquset">
          <h4 className="requet-h4tag">Request Return</h4>
          <div className="please-fill">
            <p className="please-fiil-out">
              Please fill out the fields below used in your order to request a
              return:
            </p>
            <div className="inpute-box">
              <div className="Order">
                <span>Order</span>
                <input type="text" placeholder="Order#" />
              </div>
              <div className="Order">
                <span>Billing Zip Code </span>
                <input type="text" placeholder="Zip Code " />
              </div>
              <div className="Order">
                <span>Email Address</span>
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="div-button-go">
                <button>Go</button>
              </div>
            </div>
            <div className="div-click-the-button">
              <a href="#">Click to learn more about our Return Policy</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Returnpage;

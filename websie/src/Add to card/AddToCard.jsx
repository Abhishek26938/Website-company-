import React from "react";
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import "./AddToCard.css";
import Review from "../Homepage/Review/Review";
import Footer from "../Homepage/Footer/Footer";

const AddToCard = () => {
  return (
    <>
      
      {/*------------------------------------------- back button in card page  -------------------*/}
      {/*------------------------------------------- back button in card page  -------------------*/}
      <div className="back-button-card">
        <div className="card-button">
          <a href="#">
            <i className="fa-solid fa-arrow-left-long" />
            <span>back</span>
          </a>
        </div>
        {/*------------------------------------------------ Shopping Cart (1 Items) ---------------------*/}
        {/*------------------------------------------------ Shopping Cart (1 Items) ---------------------*/}
        <div className="oder-smmrly">
          <div className="shopping-cart-1by-1items1">
            <div className="shopping-cart-only">
              <p className="shoppin-and-save">shopping cart (1 items )</p>
              <p className="to-save-your-shopping">
                {" "}
                <a href="#">Login </a> to save your shopping cart
              </p>
            </div>
            {/*------------------------------------ add to card product  -------------------------------*/}
            {/*------------------------------------ add to card product  -------------------------------*/}
            <div className="add-to-card-file " id="cart-items"></div>
            {/*----------------------------------------- socail media icon and text --------------------------------*/}
            {/*----------------------------------------- socail media icon and text --------------------------------*/}
            <div className="shopping-cart-only1">
              <span>Need Sooner or Have Questions?</span>
              <div className="need-to-help">
                <div className="div-social-media-icon-with">
                  <i className="fa-solid fa-phone" />
                  <p>call</p>
                </div>
                <div className="div-social-media-icon-with">
                  <i className="fa-solid fa-envelope" />
                  <p>Email</p>
                </div>
                <div className="div-social-media-icon-with">
                  <i className="fa-solid fa-message" />
                  <p>chat</p>
                </div>
              </div>
            </div>
          </div>
          {/*---------------------- Order Summary  Order Summary  Order Summary  Order Summary -------------*/}
          {/*---------------------- Order Summary  Order Summary  Order Summary  Order Summary -------------*/}
          <div className="most-impotent-order">
            <h2>Order Summary</h2>
            <div className="Order-Summary">
              <span>subtotal</span>
              <span className="total-price" id="subtotal">
                $0
              </span>
            </div>
            <div className="Order-Summary">
              <span>Discount</span>
              <span style={{ color: "green" }} id="discount">
                $641.00
              </span>
            </div>
            <div className="Order-Summary">
              <span>
                Shipping Info circle (FedEx 2nd Business <br /> Day)
              </span>
              <span>Free</span>
            </div>
            <div className="Order-Summary">
              <span>Tax</span>
              <span>Tax included in price</span>
            </div>
            <div className="Order-Summary1">
              <span>
                <h2>
                  <strong> Order Total</strong>{" "}
                </h2>
              </span>
              <span>
                <h2 id="total">
                  {" "}
                  <strong>$2,563.00</strong>{" "}
                </h2>
              </span>
            </div>
            <div className="truck-estimate">
              <p>
                {" "}
                <i className="fa-solid fa-truck" /> Estimate ship icons
              </p>
            </div>
            <div className="green-checkout">
              <span>Checkout with </span>
              <div className="checkout-img">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/images/bolt_getway.svg"
                  alt=""
                />
              </div>
            </div>
            <span className="or-other">or</span>
            <div className="green-checkout1">
              <span>Checkout with </span>
              <div className="checkout-img">
                <img
                  src="https://www.gemsny.com/images/express_payment_gateway_icons_new.svg"
                  alt=""
                />
              </div>
            </div>
            {/*------------------------ Financing Options --------------------------------*/}
            {/*------------------------ Financing Options --------------------------------*/}
            <div className="Financing-div-page"> Financing Options</div>
            <div className="financing-optiong-in-page">
              <div className="div-of-the-month">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/cart/splitit-logo.svg"
                  alt=""
                />
                <h4>$72/Month</h4>
                <p>12 Interest Free Payments</p>
              </div>
              <div className="div-of-the-month1">
                <h4>
                  Starting at $125/mo <br /> with
                </h4>
                <h4>
                  <strong>Affirm</strong>
                </h4>
                <p>
                  Check your purchasing <br /> power
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------------------------------ free 30 day Return free shiping -------------------------*/}
        {/*------------------------------------------------------ free 30 day Return free shiping -------------------------*/}
        <div className="free-shipment">
          <div className="free-retur">
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/free-ship-icon.svg"
                alt=""
              />
              <h4>Free Shipping</h4>
            </div>
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/30-return.svg"
                alt=""
              />
              <h4>Free 30 Days Return</h4>
            </div>
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/ship-return.svg"
                alt=""
              />
              <h4>
                Free Return <br /> Shipping
              </h4>
            </div>
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/lifetime-warranty.svg"
                alt=""
              />
              <h4>life Warranty</h4>
            </div>
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/lifetime-treade-up.svg"
                alt=""
              />
              <h4>lifetime Trade-up</h4>
            </div>
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/free-resize.svg"
                alt=""
              />
              <h4>free ring Rezing </h4>
            </div>
            <div className="free-imge">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/cart/conflict-free-gems.svg"
                alt=""
              />
              <h4>
                100% confict <br /> Free gems
              </h4>
            </div>
          </div>
        </div>
      </div>
<div/>

    <Review/>
    <Footer/>
    </>
  );
};

export default AddToCard;

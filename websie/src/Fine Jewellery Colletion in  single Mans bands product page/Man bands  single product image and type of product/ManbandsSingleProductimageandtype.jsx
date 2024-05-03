import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManbandsSingleProductimageandtype = () => {
  return (
    <>
      <div className="div-of-gemstone-bands-back-to">
        <button className="back-to-result-gemstone-bands-btn ">
          <i className="fa-solid fa-arrow-left-long"></i> Back to Result{" "}
        </button>
        <div className="socail-media-icon-gemsotne-and-spectice">
          <i
            className="fa-solid fa-share-nodes"
            id="share-icon-of-single-product-b"
          >
            <div className="div-of-drop-down-for-arrow">
              <i
                className="fa-solid fa-caret-up"
                id="foaSolid-fa-up-singleicon"
              ></i>
              <div className="dorp-down-socail-media-shera">
                <h4>Share</h4>
                <div className="div-of-socail-media-image-and-d">
                  <i
                    className="fa-solid fa-envelope"
                    id="share-nodes-image-share-new1"
                  ></i>
                  <span>Hint it </span>
                </div>
                <div className="div-of-socail-media-image-and-d">
                  <i
                    className="fa-brands fa-pinterest"
                    id="share-nodes-image-share-new2"
                  ></i>
                  <span>Pinterest </span>
                </div>
                <div className="div-of-socail-media-image-and-d">
                  <i
                    className="fa-brands fa-facebook"
                    id="share-nodes-image-share-new3"
                  ></i>
                  <span>Facebook </span>
                </div>
              </div>
            </div>
          </i>
          <i className="fa-regular fa-heart" id="heart-and-simple-produt"></i>
        </div>
      </div>

      <div className="div-produc-image-and-type-of-product">
        <div className="div-of-onle-four-product-image">
          <div className="div-of-onely-singel-product">
            <div className="div-for-image-name-of-product">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/MB80139/WHITEGOLD/FL.jpg"
                alt=""
              />
              <div className="div-of-new-product-image">
                <span className="div-of-new-product-image1">Image</span>
              </div>

              <div className="div-of-new-rightdrop">
                <img src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/MB80139/WHITEGOLD/FL.jpg" alt="" />
                <img src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/MB80139/WHITEGOLD/FL.jpg" alt="" />
              </div>
            </div>
            <div className="div-for-image-name-of-product">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/cert/GEMSNY.jpg"
                alt=""
              />
              <div className="div-of-new-product-image">
                <span className="div-of-new-product-image2">Cert & Apper</span>
              </div>
            </div>
          </div>

          <div className="div-image-prodcut-slider">
              <img
                className="head-image-prdocut-page-image"
                src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/MB80366/WHITEGOLD/FL.jpg"
                alt=""
              />
              <img
                className="head-image-prdocut-page-image"
                src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/MB80366/WHITEGOLD/FL.jpg"
                alt=""
              />
          </div>
        </div>

        {/************************************** product details and title  **************/}
        {/************************************** product details and title  **************/}

        <div className="prodcut-of-image-titel-gemstone-product">
          <div className="this-div-of-product-title">
            <span className="titele-of-helf-eternity-diamond-ring">
              {" "}
              6 MM Classic Men's Comfort Fit Band
            </span>
            <div className="this-div-of-product-item-code-bands">
              <span className="itme-div-time-bands-fiel">
                item#: <span className="code-itme-of-bands"> EB74723PS </span>{" "}
              </span>
              <span className="view-details-in-prodcut-details">
                {" "}
                View details
              </span>
            </div>
          </div>

          <div className="about-Product-iamge-input-gemstone-ring">
            <div className="div-of-select-group-bands">
              <div className="div-stone-type-new-div">
                <span className="stone-type-in-gemstone-bands">Metal </span>
                <select className="value-of-sapphire-type">
                  <option>14k White Gold </option>
                  <option>14k Yellow Gold </option>
                  <option>14K Rose Gold </option>
                  <option>18k White Gold </option>
                  <option>18k Yellow Gold </option>
                  <option>18K Rose Gold </option>
                  <option>Platinum</option>
                </select>
                <i
                  className="fa-solid fa-caret-down"
                  id="careta-reat-down-dit"
                ></i>
              </div>

              <div className="div-stone-type-new-div">
                <span className="stone-type-in-gemstone-bands">
                  Total Carat Weight{" "}
                </span>
                <select className="value-of-sapphire-type">
                  <option>1.06cts $1,346</option>
                  <option>1.90cts $2,621</option>
                  <option>1.90cts $2,621 </option>
                  <option>3.10cts $4,586 </option>
                  <option>Pink Sapphire </option>
                </select>
                <i
                  className="fa-solid fa-caret-down"
                  id="careta-reat-down-dit"
                ></i>
              </div>
            </div>
            <div className="div-of-select-group-bands">
              <div className="div-stone-type-new-div">
                <span className="stone-type-in-gemstone-bands">Ring Size </span>
                <select className="value-of-sapphire-type">
                  <option selected="selected">Ring Size</option>
                  <option value="-2.50">Less than 2.50</option>
                  <option value="2.5">2.5</option>
                  <option value="2.75">2.75</option>
                  <option value="3">3</option>
                  <option value="3.25">3.25</option>
                  <option value="3.5">3.5</option>
                  <option value="3.75">3.75</option>
                  <option value="4">4</option>
                  <option value="4.25">4.25</option>
                  <option value="4.5">4.5</option>
                  <option value="4.75">4.75</option>
                  <option value="5">5</option>
                  <option value="5.25">5.25</option>
                  <option value="5.5">5.5</option>
                  <option value="5.75">5.75</option>
                  <option value="6">6</option>
                  <option value="6.25">6.25</option>
                  <option value="6.5">6.5</option>
                  <option value="7">7</option>
                  <option value="6.75">6.75</option>
                  <option value="7.25">7.25</option>
                  <option value="7.5">7.5</option>
                  <option value="7.75">7.75</option>
                  <option value="8">8</option>
                  <option value="8.25">8.25</option>
                  <option value="8.5">8.5</option>
                  <option value="8.75">8.75</option>
                  <option value="9">9</option>
                  <option value="9.25">9.25</option>
                  <option value="9.5">9.5</option>
                  <option value="9.75">9.75</option>
                  <option value="10">10</option>
                  <option value="+10.00">More than 10.00</option>
                </select>
                <i
                  className="fa-solid fa-caret-down"
                  id="careta-reat-down-dit"
                ></i>
              </div>
              <div className="div-stone-type-new-div">
                <span className="stone-type-in-gemstone-bands">
                  Free Engraving{" "}
                </span>
                <input
                  className="value-of-sapphire-type"
                  placeholder="25 charachater Limite"
                ></input>
              </div>
            </div>
          </div>
          <div className="div-stone-product-image">
            <div className="div-in-two-button-for-prodcut">
              <span className="sales-prince-and-financing-p1">
                Sales Price <i className="fa-solid fa-question"></i>
              </span>
              <span className="sales-prince-and-financing-p2">
                Financing options
              </span>
            </div>
            <div className="div-for-sales-price-and-pinacing-div">
              <div className="seales-price-div-offer-price">
                <div className="div-prince-and-balance-price">
                  <span className="not-a-deal-price-in-product">
                    {" "}
                    <s>$919</s>
                  </span>
                  <span className="this-is-deal-price-in-product">$735</span>
                </div>
                <div className="sale-price-discount-offer-for-c">
                  <span>(includes GDH20 discount of 20%)</span>
                </div>
              </div>
              <div className="seales-price-div-offer-price1">
                <img src="https://www.gemsny.com/images/splitit.svg" alt="" />
                <div className="div-prince-and-balance-price">
                  <span className="prince-and-month-in-single">
                    {" "}
                    $61/Month{" "}
                  </span>
                </div>
                <div className="sale-price-discount-offer-for-c">
                  <span>
                    12 Interest Free Payments Toggle{" "}
                    <i
                      className="fa-solid fa-question"
                      id="question-in-prodcut"
                    ></i>
                  </span>
                </div>
              </div>

              <div className="seales-price-div-offer-price2">
                <span className="string-at-month-prince">
                  Starting at $67/mo with
                </span>
                <h3 className="Affirm-prodcut-page">Affirm.</h3>

                <div className="sale-price-discount-offer-for-c">
                  <span>chack your purcheing power</span>
                </div>
              </div>
            </div>
          </div>
          <div className="div-of-button-and-image-estimeted">
            <button className="Add-to-cart-button-in-single-pic-cart-btn">
              Add to Cart
            </button>

            <div className="eatimted-ship-datat-tus">
              <img
                className="imge-of-car-in-bands"
                src="	https://www.gemsny.com/images/shipdate.svg"
                alt=""
              />
              <span>Estimated Ship Date: Tuesday, May 10th</span>
            </div>
          </div>

          <div className="have-a-question-in-sinle-cart-neddd ">
            <span>Need Sooner or Have Questions?</span>
            <div className="single-pro-btn-in-socal">
              <button className="bton-single-product-fro-socail">
                <i className="fa-solid fa-phone"></i>
                <span>Call</span>
              </button>
              <button className="bton-single-product-fro-socail">
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
              </button>
              <button className="bton-single-product-fro-socail">
                <span>FAQ</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------ show with confidence -------------------------------------*/}
      {/*------------------------------ show with confidence -------------------------------------*/}
      <div className="show-with-confidence">
        <div className="bbb-ylp-shopper-appoverd">
          <div className="shop-with">
            <span>shop with confidence</span>
            <span>as of 02/26/24</span>
          </div>
          <div className="bbb-and-google-img">
            <div className="bbb">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174882.png"
                alt=""
              />
              <div className="bbb-imge-div">
                <span>BBB</span>
                <h4 className="avalue-in-pro">A+</h4>
              </div>
            </div>
            <div className="bbb">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174882.png"
                alt=""
              />
              <div className="bbb-imge-div">
                <span>Yelp</span>
                <div className="star-div-half">
                  <h4 className="avalue-in-pro1">
                    4.6
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half" />
                  </h4>
                </div>
              </div>
            </div>
            <div className="bbb">
              <img
                src="https://is3-ssl.mzstatic.com/image/thumb/Purple69/v4/75/d9/bb/75d9bb9f-7077-e3aa-a41e-d51e86ac2de4/source/60x60bb.jpg"
                alt=""
              />
              <div className="bbb-imge-div">
                <span>Shopper approved</span>
                <div className="star-div-half">
                  <h4 className="avalue-in-pro1">
                    4.6
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half" />
                  </h4>
                </div>
              </div>
            </div>
            <div className="bbb">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-google-1772223-1507807.png?f=webp&w=256"
                alt=""
              />
              <div className="bbb-imge-div">
                <span>google</span>
                <div className="star-div-half">
                  <h4 className="avalue-in-pro1">
                    4.6
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half" />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bbb-ylp-shopper-appoverd">
          <div className="shop-with1">
            <span>shop with confidence</span>
          </div>
          <div className="free-shipping-truck">
            <div className="bbb">
              <i className="fa-solid fa-truck" />
              <span>
                Free <br />
                shipping
              </span>
            </div>
            <div className="bbb">
              <i className="fa-solid fa-truck-arrow-right" />
              <span>
                Free <br />
                Returns
              </span>
            </div>
            <div className="bbb">
              <i className="fa-solid fa-certificate" />
              <span>
                life time <br /> warranty
              </span>
            </div>
            <div className="bbb">
              <i className="fa-solid fa-certificate" />
              <span>
                Free ring <br />
                re
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManbandsSingleProductimageandtype;

import React from "react";
import './Style.css'

const PageVideo = () => {
  return (
    <>
      <div className="ceticate">
        <div className="video_background">
          <video
            className="main_video"
            src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/homepage-ban-vid-desk-15-05-23.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div>
            <div className="expreses">
              <span> Express The Feeling Of </span>
              <h1 className="eternal_h1"> Eternal Joy With A Ring </h1>
              <input type="text" placeholder="shop Engagement Rings" />
            </div>
          </div>
        </div>
      </div>
     
        {/*-----------------------------------------   iddleman.miter---------------------------------  */}
        {/*-----------------------------------------   iddleman.miter---------------------------------  */}
        <div className="divemiileman">
          <div className="buy">
            <span>Buy Direct. No Middleman. Mines to your Doorstep.</span>
          </div>
          <div className="log_images_with_t">
            <div>
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/home_new/360_d_icon.svg"
                alt=""
              />
              <span> View Gemstones in 360 angle</span>
            </div>
            <div>
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/home_new/certified_b_icon.svg"
                alt=""
              />
              <span> All gems certified</span>
            </div>
            <div>
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/home_new/conflictfree_b_icon.svg"
                alt=""
              />
              <span>100% Conflict Free</span>
            </div>
            <div>
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/home_new/price-guarantee.svg "
                alt=""
              />
              <span>Best Price Guarantee</span>
            </div>
            <div>
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/home_new/lifetime_d_icon.svg"
                alt=""
              />
              <span>Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </>

  );
};

export default PageVideo;

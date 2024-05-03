import React, { useState } from "react";
import "./Style.css";

const Shipjewellery = () => {
  const [ringsImgber, setRingimgBer] = useState(true);
  const [earringImgber, setEarringimgeBer] = useState(false);
  const [pandantImgBer, setPandantimgber] = useState(false);

  let Ringbar = () => {
    setRingimgBer(true);
    setEarringimgeBer(false);
    setPandantimgber(false);
  };

  let Earring = () => {
    setRingimgBer(false);
    setEarringimgeBer(true);
    setPandantimgber(false);
  };

  let Pandents = () => {
    setRingimgBer(false);
    setEarringimgeBer(false);
    setPandantimgber(true);
  };

  return (
    <>
      {/*---------------------------------- Ready To Ship Jewelry --------------------------*/}
      {/*---------------------------------- Ready To Ship Jewelry --------------------------*/}
      <section>
        <div className="ready_to_ship">
          <div className="ready__ship">
            <h1>Ready To Ship Jewelry</h1>
            <div className="tegas_ring_etc">
              <button className="ringes_jewellery" onClick={Ringbar}>
                ring
              </button>
              <button className="earring_jewellry" onClick={Earring}>
                Earrings
              </button>
              <button className="pandent_jewellery" onClick={Pandents}>
                Pandents
              </button>
            </div>
          </div>
          <div
            className="container1"
            style={{ display: ringsImgber ? "flex" : "none" }} >
            <div className="ring_grop">
              <div className="up-down1  left-ringht" >

                <div className="ring_imgaes ">
                  <img
                    src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                    alt=""
                  />
                  <h6>Sapphire Rings</h6>
                  <span>A symbol of royalty for you</span>
                </div>
               
                <div className="ring_imgaes  ">
                  <img
                    src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                    alt=""
                  />
                  <h6>Sapphire Rings</h6>
                  <span>A symbol of royalty for you</span>
                </div>
              
                <div className="ring_imgaes  ">
                  <img
                    src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                    alt=""
                  />
                  <h6>Sapphire Rings</h6>
                  <span>A symbol of royalty for you</span>
                </div>
                <div className="ring_imgaes">
                  <img
                    src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                    alt=""
                  />
                  <h6>Sapphire Rings</h6>
                  <span>A symbol of royalty for you</span>
                </div>
              
          
              <div className="ring_imgaes ">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>

              <div className="ring_imgaes ">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes ">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes ">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/emerld--ring-pro1.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              </div>
            </div>
            
          </div>
          <div className="container2">
            <div
              className="ring_grop1"
              style={{ display: earringImgber ? "flex" : "none" }}
            >
                  <div className="up-down1  left-ringht" >
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-earrings-pro1.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/ruby-earrings-pro1.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/earring-earrings-pro1.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              </div>
            </div>
          </div>

          <div className="container3">
            <div
              className="ring_grop2"
              style={{ display: pandantImgBer ? "flex" : "none" }}
            >
  <div className="up-down1  left-ringht" >
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/ruby-pendant.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/emerald-pendant.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/Alexandrite-pendant.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
              <div className="ring_imgaes">
                <img
                  src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire-ring-pro1-mob.webp"
                  alt=""
                />
                <h6>Sapphire Rings</h6>
                <span>A symbol of royalty for you</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipjewellery;

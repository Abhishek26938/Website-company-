import React from "react";
import "./onlyprodcutgemee.css";
import { prodcutDatafile, newDatanext } from "./ProductRingStone";
import { Link } from "react-router-dom";

const OnlyProductrRing = () => {
  return (
    <>
      <div className="prodcut-new-div-card">
        {prodcutDatafile.map((item, index) => {
          return (
            <div className="Only-product-image-photo" key={index.id}>
              <div className="only-product-deatial-image">
                <div className="Now-input-image-div">
                  <img className="Now-image-pic-pro" src={item.Img} alt="" />
                </div>
                <div className="Now-input-price">
                  <span className="This-is-price-D">{item.price}</span>
                  <div className="carat-and-gold-d">
                    <span className="Item-style-deatails">{item.itemsqu}</span>
                    <span className="white-gold-mateal-ring">
                      {item.caratgold}
                    </span>
                  </div>
                  <span className="Half-Eternity-diamond-and">
                    {item.ProductDt}
                  </span>
                </div>
              </div>
              <div className="div-product-button-D">
                <Link to={item.Link}>
                  {" "}
                  <button className="View-details-button-style">
                    View Deatails{" "}
                  </button>
                </Link>
                <button className="View-details-button-style1">
                  Quick View
                  <div className="liftsider-list-detail-munu">
                    {[...Array(item)].map((_, innerIndex) => {
                      return (
                        <div
                          className="lift-sider-list-muves"
                          key={innerIndex.id}
                        >
                          <div className="diamond-heading-Quick">
                            <h3>{item.nameofstone}</h3>
                            <div className="blue-sapphire-Deatail-one">
                              <span>{item.NumberofstoneName} </span>
                              <span className="Number-Deteail">
                                {item.Numberofstone}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two">
                              <span>{item.StoneweightName}</span>
                              <span className="Number-Deteail">
                                {item.Stonecaratweight}
                              </span>
                            </div>
                          </div>
                          <div className="diamond-heading-Quick-name">
                            <h3>{item.Diamondeofstone}</h3>
                            <div className="blue-sapphire-Deatail-one-1">
                              <span>{item.NumberofDiamondName} </span>
                              <span className="Number-Deteail">
                                {" "}
                                {item.NumberofDimaond}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two-2">
                              <span>{item.DiamondweightName} </span>
                              <span className="Number-Deteail">
                                {item.Diamondcaratweight}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dont-now-two">
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/images/result_banner/stone.jpg"
          alt=""
        />
        {newDatanext.map((item, index) => {
          return (
            <div className="Only-product-image-photo" key={index.id}>
              <div className="only-product-deatial-image">
                <div className="Now-input-image-div">
                  <img
                    className="Now-image-pic-pro"
                    src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/EB74110BS/FM.jpg"
                    alt=""
                  />
                </div>
                <div className="Now-input-price">
                  <span className="This-is-price-D">{item.price}</span>
                  <div className="carat-and-gold-d">
                    <span className="Item-style-deatails">{item.itemsqu}</span>
                    <span className="white-gold-mateal-ring">
                      {item.caratgold}
                    </span>
                  </div>
                  <span className="Half-Eternity-diamond-and">
                    {item.ProductDt}
                  </span>
                </div>
              </div>
              <div className="div-product-button-D">
                <Link to={item.Link}>
                  {" "}
                  <button className="View-details-button-style">
                    View Deatails{" "}
                  </button>
                </Link>
                <button className="View-details-button-style1">
                  Quick View
                  <div className="liftsider-list-detail-munu">
                    {[...Array(item)].map((_, innerIndex) => {
                      return (
                        <div
                          className="lift-sider-list-muves"
                          key={innerIndex.id}
                        >
                          <div className="diamond-heading-Quick">
                            <h3>{item.nameofstone}</h3>
                            <div className="blue-sapphire-Deatail-one">
                              <span>{item.NumberofstoneName} </span>
                              <span className="Number-Deteail">
                                {item.Numberofstone}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two">
                              <span>{item.StoneweightName}</span>
                              <span className="Number-Deteail">
                                {item.Stonecaratweight}
                              </span>
                            </div>
                          </div>
                          <div className="diamond-heading-Quick-name">
                            <h3>{item.Diamondeofstone}</h3>
                            <div className="blue-sapphire-Deatail-one-1">
                              <span>{item.NumberofDiamondName} </span>
                              <span className="Number-Deteail">
                                {" "}
                                {item.NumberofDimaond}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two-2">
                              <span>{item.DiamondweightName} </span>
                              <span className="Number-Deteail">
                                {item.Diamondcaratweight}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dont-now-two">
        {newDatanext.map((item, index) => {
          return (
            <div className="Only-product-image-photo" key={index.id}>
              <div className="only-product-deatial-image">
                <div className="Now-input-image-div">
                  <img
                    className="Now-image-pic-pro"
                    src="https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/EB74110BS/FM.jpg"
                    alt=""
                  />
                </div>
                <div className="Now-input-price">
                  <span className="This-is-price-D">{item.price}</span>
                  <div className="carat-and-gold-d">
                    <span className="Item-style-deatails">{item.itemsqu}</span>
                    <span className="white-gold-mateal-ring">
                      {item.caratgold}
                    </span>
                  </div>
                  <span className="Half-Eternity-diamond-and">
                    {item.ProductDt}
                  </span>
                </div>
              </div>
              <div className="div-product-button-D">
                <Link to={item.Link}>
                  {" "}
                  <button className="View-details-button-style">
                    View Deatails{" "}
                  </button>
                </Link>
                <button className="View-details-button-style1">
                  Quick View
                  <div className="liftsider-list-detail-munu">
                    {[...Array(item)].map((_, innerIndex) => {
                      return (
                        <div
                          className="lift-sider-list-muves"
                          key={innerIndex.id}
                        >
                          <div className="diamond-heading-Quick">
                            <h3>{item.nameofstone}</h3>
                            <div className="blue-sapphire-Deatail-one">
                              <span>{item.NumberofstoneName} </span>
                              <span className="Number-Deteail">
                                {item.Numberofstone}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two">
                              <span>{item.StoneweightName}</span>
                              <span className="Number-Deteail">
                                {item.Stonecaratweight}
                              </span>
                            </div>
                          </div>
                          <div className="diamond-heading-Quick-name">
                            <h3>{item.Diamondeofstone}</h3>
                            <div className="blue-sapphire-Deatail-one-1">
                              <span>{item.NumberofDiamondName} </span>
                              <span className="Number-Deteail">
                                {" "}
                                {item.NumberofDimaond}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two-2">
                              <span>{item.DiamondweightName} </span>
                              <span className="Number-Deteail">
                                {item.Diamondcaratweight}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </button>
              </div>
            </div>
          );
        })}
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/images/result_banner/advantage.jpg"
          alt=""
        />
      </div>

      <div className="prodcut-new-div-card">
        {prodcutDatafile.map((item, index) => {
          return (
            <div className="Only-product-image-photo" key={index.id}>
              <div className="only-product-deatial-image">
                <div className="Now-input-image-div">
                  <img className="Now-image-pic-pro" src={item.Img} alt="" />
                </div>
                <div className="Now-input-price">
                  <span className="This-is-price-D">{item.price}</span>
                  <div className="carat-and-gold-d">
                    <span className="Item-style-deatails">{item.itemsqu}</span>
                    <span className="white-gold-mateal-ring">
                      {item.caratgold}
                    </span>
                  </div>
                  <span className="Half-Eternity-diamond-and">
                    {item.ProductDt}
                  </span>
                </div>
              </div>
              <div className="div-product-button-D">
                <Link to={item.Link}>
                  {" "}
                  <button className="View-details-button-style">
                    View Deatails{" "}
                  </button>
                </Link>
                <button className="View-details-button-style1">
                  Quick View
                  <div className="liftsider-list-detail-munu">
                    {[...Array(item)].map((_, innerIndex) => {
                      return (
                        <div
                          className="lift-sider-list-muves"
                          key={innerIndex.id}
                        >
                          <div className="diamond-heading-Quick">
                            <h3>{item.nameofstone}</h3>
                            <div className="blue-sapphire-Deatail-one">
                              <span>{item.NumberofstoneName} </span>
                              <span className="Number-Deteail">
                                {item.Numberofstone}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two">
                              <span>{item.StoneweightName}</span>
                              <span className="Number-Deteail">
                                {item.Stonecaratweight}
                              </span>
                            </div>
                          </div>
                          <div className="diamond-heading-Quick-name">
                            <h3>{item.Diamondeofstone}</h3>
                            <div className="blue-sapphire-Deatail-one-1">
                              <span>{item.NumberofDiamondName} </span>
                              <span className="Number-Deteail">
                                {" "}
                                {item.NumberofDimaond}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two-2">
                              <span>{item.DiamondweightName} </span>
                              <span className="Number-Deteail">
                                {item.Diamondcaratweight}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="SElect-from-our-beautiful">Select from out beautiful collection of eternity bands and wedding rings online. Decorate your fingure by shopping any of these amazing gemstone wedding rings. Choose your favorite eternity ring with a unique look and design. Scroll below to get your gemstone wedding ring now.</div>
    </>
  );
};

export default OnlyProductrRing;

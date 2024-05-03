import React from 'react'
import {WomanBandstringData} from "./WomanBandsSrtingonlyproduct"
import { MansmetalData } from "../../Mans band Stone colltion/Mans only product page/MansProductsrtingnew";
import { Link } from 'react-router-dom';

const WomaBandsHomeLink = () => {
    const getStyle = (id) => {
        switch (id) {
          case "1":
          case "5":
          case "9":
          case "13":
            return { marginLeft: "17.8rem" };
          default:
            return {};
        }
      };
  return (
    <>
 <div className="prodcut-new-div-card">
        {WomanBandstringData.map((item, index) => {
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
                    View Details{" "}
                  </button>
                </Link>
                <button className="View-details-button-style1">
                  Quick View
                  <div
                    className="liftsider-list-detail-munu"
                    style={getStyle(item.id)}
                  >
                    {[...Array(item.quantity)].map((_, innerIndex) => {
                      return (
                        <div className="lift-sider-list-muves" key={innerIndex}>
                          <div className="diamond-heading-Quick">
                            <h3>{item.nameofMetal}</h3>
                            <div className="blue-sapphire-Deatail-one">
                              <span>{item.itemName} </span>
                              <span className="Number-Deteail">
                                {item.itemNameofMetal}
                              </span>
                            </div>
                            <div className="blue-sapphire-Deatail-two">
                              <span>{item.sotnetypeofMetal}</span>
                              <span className="Number-Deteail">
                                {item.GoldCaratofMetal}
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
      <div className="SElect-from-our-beautiful" style={{ marginTop: "70px" }}>
        Select from our beautiful collection of eternity bands and wedding rings
        online. Decorate your finger by shopping any of these amazing gemstone
        wedding rings. Choose your favorite eternity ring with a unique look and
        design. Scroll below to get your gemstone wedding ring now.
      </div>
    </>
  )
}

export default WomaBandsHomeLink

import React, { useState } from "react";

import {
  ProductDatainRing,
  productofnewData,
  ProducttwoDatainBlue,
  ProducteightDataBlue,
} from "./RubysapphirePandantFileString";
import { Link } from "react-router-dom";

const RubyGemstonePandantprodcutf = () => {
  // Extracting Headimage property from ProductDatainRing and initializing hoverImage state

  const [hoverImage, setHoverImage] = useState([]);

  const handleMouseEnter = (imageUrl) => {
    //   for (const key in ProductDatainRing) {
    //     if (Object.prototype.hasOwnProperty.call(ProductDatainRing, key)) {
    //       // Access the current object in ProductDatainRing
    //       const currentItem = ProductDatainRing[key];

    //       // Update the Headimage property of the current object
    //       currentItem.Headimage = imageUrl;
    //     }
    //   }

    // After updating all Headimage properties, set the hoverImage state
    setHoverImage(imageUrl);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    // No need to set it to null, keep the last hovered image
    setHoverImage(
      "https://d3kinlcl20pxwz.cloudfront.net/image-jewelry/RBS082-AAAA/WHITEGOLD/FL.jpg"
    );
  };

  return (
    <div className="Blue-sapphire-ring-product">
      <div className="sapphire-ring-product-div">
        {ProductDatainRing.map((item, index) => (
          <div key={index.id} className="new-div-of-shaaphire-now">
            <i className="fa-regular fa-heart" id="heart-icon-in-blue"></i>

            <div className="image-of-blue-saphire-ring">
              <img src={item.Headimage} alt="" />
            </div>

            <div className="simple-of-blue-spphire-ring">
              <img
                className="blue-sapphier-ring-1"
                src={item.img1}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img1)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-2"
                src={item.img2}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img2)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-3"
                src={item.img3}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img3)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-4"
                src={item.img4}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img4)}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div className="blue-sapphire-image-item-code">
              <span className="item-of-className-in-product">item</span>
              <span className="item-of-product-code-name">{item.itemCode}</span>
            </div>
            <div className="div-of-blue-sapphire-product-prince-range">
              <span>{item.proPrince}</span>
            </div>
            <div className="div-oftradntonal-ring">
              <span>{item.ptitle}</span>
            </div>
            <Link to={item.pLInk}>
              <button className="view-product-ring-blue-sapphire">
                view details <i className="fa-solid fa-chevron-right"></i>
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="sapphire-ring-product-div">
        <img
          className="image-of-prodcut-ring-page"
          src="https://d3kinlcl20pxwz.cloudfront.net/images/result_banner/stone.jpg"
          alt=""
        />
        {productofnewData.map((item, index) => (
          <div key={index.id} className="new-div-of-shaaphire-now">
            <i className="fa-regular fa-heart" id="heart-icon-in-blue"></i>

            <div className="image-of-blue-saphire-ring">
              <img src={item.Headimage} alt="" />
            </div>

            <div className="simple-of-blue-spphire-ring">
              <img
                className="blue-sapphier-ring-1"
                src={item.img1}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img1)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-2"
                src={item.img2}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img2)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-3"
                src={item.img3}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img3)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-4"
                src={item.img4}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img4)}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div className="blue-sapphire-image-item-code">
              <span className="item-of-className-in-product">item</span>
              <span className="item-of-product-code-name">{item.itemCode}</span>
            </div>
            <div className="div-of-blue-sapphire-product-prince-range">
              <span>{item.proPrince}</span>
            </div>
            <div className="div-oftradntonal-ring">
              <span>{item.ptitle}</span>
            </div>
            <Link to={item.pLInk}>
              <button className="view-product-ring-blue-sapphire">
                view details <i className="fa-solid fa-chevron-right"></i>
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="sapphire-ring-product-div">
        {ProducttwoDatainBlue.map((item, index) => (
          <div key={index.id} className="new-div-of-shaaphire-now">
            <i className="fa-regular fa-heart" id="heart-icon-in-blue"></i>

            <div className="image-of-blue-saphire-ring">
              <img src={item.Headimage} alt="" />
            </div>

            <div className="simple-of-blue-spphire-ring">
              <img
                className="blue-sapphier-ring-1"
                src={item.img1}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img1)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-2"
                src={item.img2}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img2)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-3"
                src={item.img3}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img3)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-4"
                src={item.img4}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img4)}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div className="blue-sapphire-image-item-code">
              <span className="item-of-className-in-product">item</span>
              <span className="item-of-product-code-name">{item.itemCode}</span>
            </div>
            <div className="div-of-blue-sapphire-product-prince-range">
              <span>{item.proPrince}</span>
            </div>
            <div className="div-oftradntonal-ring">
              <span>{item.ptitle}</span>
            </div>
            <Link to={item.pLInk}>
              <button className="view-product-ring-blue-sapphire">
                view details <i className="fa-solid fa-chevron-right"></i>
              </button>
            </Link>
          </div>
        ))}
        <img
          className="image-of-prodcut-ring-page1"
          src="https://d3kinlcl20pxwz.cloudfront.net/images/result_banner/advantage.jpg"
          alt=""
        />
      </div>

      <div className="sapphire-ring-product-div">
        {ProducteightDataBlue.map((item, index) => (
          <div key={index.id} className="new-div-of-shaaphire-now">
            <i className="fa-regular fa-heart" id="heart-icon-in-blue"></i>

            <div className="image-of-blue-saphire-ring">
              <img src={item.Headimage} alt="" />
            </div>

            <div className="simple-of-blue-spphire-ring">
              <img
                className="blue-sapphier-ring-1"
                src={item.img1}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img1)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-2"
                src={item.img2}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img2)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-3"
                src={item.img3}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img3)}
                onMouseLeave={handleMouseLeave}
              />
              <img
                className="blue-sapphier-ring-4"
                src={item.img4}
                alt=""
                onMouseEnter={() => handleMouseEnter(item.img4)}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div className="blue-sapphire-image-item-code">
              <span className="item-of-className-in-product">item</span>
              <span className="item-of-product-code-name">{item.itemCode}</span>
            </div>
            <div className="div-of-blue-sapphire-product-prince-range">
              <span>{item.proPrince}</span>
            </div>
            <div className="div-oftradntonal-ring">
              <span>{item.ptitle}</span>
            </div>
            <Link to={item.pLInk}>
              <button className="view-product-ring-blue-sapphire">
                view details <i className="fa-solid fa-chevron-right"></i>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <p className="classsice-sapphire-Jewellery-that">
        {" "}
        What's the classic sapphire jewelry that you can never go wrong with?
        It's the preset sapphire rings. To add a touch of glamour to your whole
        look you should have a sapphire ring in your vanity. Get mesmerized in
        the presence of the stunning sapphire ring. Make customization as
        required.
      </p>
    </div>
  );
};

export default RubyGemstonePandantprodcutf;

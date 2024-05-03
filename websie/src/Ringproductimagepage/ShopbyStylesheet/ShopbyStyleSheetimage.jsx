import React, { useState } from "react";
import "./ShopbyStylesheet.css";
import { imageData, newtwoData } from "./imagedata";


const ShopbyStyleSheetimage = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleNext = () => {
    setSlidePosition((prevPosition) => prevPosition + 1230);
  };

  const handlePrevious = () => {
    if ( setSlidePosition((prevPosition) => prevPosition - 1230)=== true){
      slidePosition(false)
    }
    
  };

  return (
    <>
      <div className="ourgemstone">
        <h3 className="shopbystyelname">Shop By Style </h3>
        <p>
          Our gemstone rings collection offers hand-crafted pieces of
          unforgettable luxury that are perfect for every occasion
        </p>
      </div>

      <div className="imagesdivbyringproduct1" style={{ overflow: "hidden" }}>
        <div
          className="imagesdivbyringproduct"
          style={{ transform: `translateX(-${slidePosition}px)` }}
        >
          {imageData.map((item, index) => (
            <div className="imageringdiv" key={index}>
              <div className="imageringhanddiv">
                <img className="imagering" src={item.Image} alt="" />
              </div>
              <div className="Solitaire-pra-div">
                <h4 className="solitairkarp">{item.ProName}</h4>
                <p className="petite-and">{item.description}</p>
              </div>
            </div>
          ))}
            {newtwoData.map((item, index) => (
            <div className="imageringdiv" key={index}>
              <div className="imageringhanddiv">
                <img className="imagering" src={item.Image} alt="" />
              </div>
              <div className="Solitaire-pra-div">
                <h4 className="solitairkarp">{item.ProName}</h4>
                <p className="petite-and">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlePrevious}>
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <button onClick={handleNext}>
        <i className="fa-solid fa-circle-chevron-right"></i>
      </button>
    </>
  );
};

export default ShopbyStyleSheetimage;

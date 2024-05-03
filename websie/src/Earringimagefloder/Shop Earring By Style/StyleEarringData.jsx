import React, { useState } from "react";

import { EarringAllimageData , newEarringData } from "./EarringAllimageData";

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
        <h3 className="shopbystyelname">Shop Earring Studs By Style </h3>
        <p>
        Browse a wide variety of earrings on sale, handcrafted in numerous styles, perfect for every occasion
        </p>
      </div>

      <div className="imagesdivbyringproduct1" style={{ overflow: "hidden" }}>
        <div
          className="imagesdivbyringproduct"
          style={{ transform: `translateX(-${slidePosition}px)` }}
        >
          {EarringAllimageData.map((item, index) => (
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
            {newEarringData .map((item, index) => (
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

import React from "react";
import "./ButDirectno.css";

const Butdirectnomiddle = () => {
  const imagefil = [
    {
      id: "1",
      Image: "https://d3kinlcl20pxwz.cloudfront.net/assets/images/360.svg",
      pName: "View Gems in 360",
    },
    {
      id: "2",
      Image: "https://d3kinlcl20pxwz.cloudfront.net/assets/images/certified.svg",
      pName: "View Gems in 360",
    },
    {
      id: "3",
      Image: "https://d3kinlcl20pxwz.cloudfront.net/assets/images/conflictfree.svg",
      pName: "View Gems in 360",
    },
    {
      id: "4",
      Image: "https://d3kinlcl20pxwz.cloudfront.net/assets/images/price-guarantee.svg",
      pName: "View Gems in 360",
    },
    {
        id: "5",
        Image: "https://d3kinlcl20pxwz.cloudfront.net/assets/images/lifetime-warranty.svg",
        pName: "View Gems in 360",
      },
  ];

  return (
    <>
      <div className="Buydirectonmiddleno">
        <div className="bytidirectonmiddlenos">
          <div className="Doorstep-div">
            <h4> Buy Direct. No Middleman. Mines to Your Doorstep.</h4>
            <p>
              We are a Direct-to-Customer company & we offer gemstones at a
              price hard to match. Luxury & Quality need not cost additionally.{" "}
              <br /> These are standard at GemsNY!
            </p>
          </div>

          <div className="divelinesont">
            {imagefil.map((item, index) => {
              return (
                <div className="imageplusviesgem" key={index.id}>
                  <div className="imag-folder">
                    <img src={item.Image} alt={Image} />
                  </div>
                  <p className="vies-gems">{item.pName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Butdirectnomiddle;

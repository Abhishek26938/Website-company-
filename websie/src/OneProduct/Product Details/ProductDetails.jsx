import React, { useEffect, useState } from "react";
import "./ProductDetails.css";

const ProductDetails = () => {



  const [aButton, setAButton] = useState(true);
  const [bButton, setBButton] = useState(false);
  const [cButton, setCButton] = useState(false);

  const Qualitygreade = () => {
  
  
  
    setBButton(false);
    setCButton(false);
    setAButton(true);
  };
  const QualitygreadeA = () => {
    setBButton(true);
    setCButton(false);
    setAButton(false);
  };
  const QualitygreadeB = () => {
    setCButton(true);
    setBButton(false);
  };

  useEffect((aButton)=>{
   console.log("this is right")
  },[aButton])

  return (
    <>
      <>
        {/*-------------------------------------------------- Product Details --------------------------------------*/}
        {/*-------------------------------------------------- Product Details --------------------------------------*/}
        <div className="procut-page">
          <h1>product Details </h1>
          <div className="poduct-details-product">
            <div className="colem-number-3">
              <span>
                {" "}
                Item #: <span style={{ color: "black" }}> SU47910OV </span>
              </span>
              <span>
                Stone Type: <span style={{ color: "black" }}>Single </span>
              </span>
              <span>
                Gem Type:{" "}
                <span style={{ color: "black" }}>Natural Sapphire </span>
              </span>
              <span>
                Shape: <span style={{ color: "black" }}>Oval</span>
              </span>
              <span>
                {" "}
                Weight: <span style={{ color: "black" }}>1.57cts. </span>
              </span>
            </div>
            <div className="colem-number-3">
              <span>
                {" "}
                Item #: <span style={{ color: "black" }}> SU47910OV </span>
              </span>
              <span>
                Stone Type: <span style={{ color: "black" }}>Single </span>
              </span>
              <span>
                Gem Type:{" "}
                <span style={{ color: "black" }}>Natural Sapphire </span>
              </span>
              <span>
                Shape: <span style={{ color: "black" }}>Oval</span>
              </span>
              <span>
                {" "}
                Weight: <span style={{ color: "black" }}>1.57cts. </span>
              </span>
            </div>
            <div className="colem-number-3">
              <span>
                {" "}
                Item #: <span style={{ color: "black" }}> SU47910OV </span>
              </span>
              <span>
                Stone Type: <span style={{ color: "black" }}>Single </span>
              </span>
              <span>
                Gem Type:{" "}
                <span style={{ color: "black" }}>Natural Sapphire </span>
              </span>
              <span>
                Shape: <span style={{ color: "black" }}>Oval</span>
              </span>
              <span>
                {" "}
                Weight: <span style={{ color: "black" }}>1.57cts. </span>
              </span>
            </div>
          </div>
          {/*------------------------------------------- Learn About Your Sapphire ----------------------------*/}
          {/*------------------------------------------- Learn About Your Sapphire ----------------------------*/}
          <h1>Learn about a sapphire </h1>
          <div className="div-learn-about">
            <div className="overall-quality-great">
              <div className="overall1" onClick={Qualitygreade}>
                <i className="fa-regular fa-circle-check" />
                <span>overall Quality Grade AAA</span>
                <i className="fa-solid fa-chevron-right" />
              </div>
              <div className="overall" onClick={QualitygreadeA}>
                <i className="fa-regular fa-circle-check" />
                <span>overall Quality Grade AAA</span>
                <i className="fa-solid fa-chevron-right" />
              </div>
              <div className="overall" onClick={QualitygreadeB}>
                <i className="fa-regular fa-circle-check" />
                <span>overall Quality Grade AAA</span>
                <i className="fa-solid fa-chevron-right" />
              </div>
            </div>
            <div className="hight-quality">
              <div
                className="span-tag-for-pra"
                style={{ display: aButton ? "flex" : "none" }}
              >
                <div className="A-button-hight">
                  <button id="aaa-hight">AAAAA</button>
                  <button id="aaa-hight">AAAAA</button>
                  <button id="aaa-hight1">
                    AAAAA
                    <i className="fa-solid fa-play" />
                  </button>
                  <button id="aaa-hight">AAAAA</button>
                  <button id="aaa-hight">AAAAA</button>
                </div>
                <p className="hight-sappire-that">
                  High quality sapphires that are typically found in high end
                  stores such as on 5th Avenue. They have vivid to medium color
                  and slightly included to very slightly included eye clarity.{" "}
                </p>
              </div>
              <div
                className="span-tag-for-pra1"
                style={{ display: bButton ? "flex" : "none" }}
              >
                <div className="A-button-hight">
                  <button id="aaa-hight">intense</button>
                  <button id="aaa-hight">vivd</button>
                  <button id="aaa-hight1">
                    deep
                    <i className="fa-solid fa-play" />
                  </button>
                  <button id="aaa-hight">medium</button>
                  <button id="aaa-hight">sky</button>
                </div>
                <p className="hight-sappire-that">
                  High quality sapphires that are typically found in high end
                  stores such as on 5th Avenue. They have vivid to medium color
                  and slightly included to very slightly included eye clarity.{" "}
                </p>
              </div>
              <div
                className="span-tag-for-pra2"
                style={{ display: cButton ? "flex" : "none" }}
              >
                <div className="A-button-hight">
                  <button id="aaa-hight">Eye Clean</button>
                  <button id="aaa-hight1">
                    very Single included
                    <i className="fa-solid fa-play" />
                  </button>
                  <button id="aaa-hight">slightly included</button>
                  <button id="aaa-hight">moderately</button>
                  <button id="aaa-hight">AAAAA</button>
                </div>
                <p className="hight-sappire-that">
                  High quality sapphires that are typically found in high end
                  stores such as on 5th Avenue. They have vivid to medium color
                  and slightly included to very slightly included eye clarity.{" "}
                </p>
              </div>
            </div>
          </div>
          {/*------------------------------------------ Natural earth-  ----------------------------------*/}
          {/*------------------------------------------ Natural earth-  ----------------------------------*/}
          <div className="natrula-earth">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images/earth-mined-final.png"
              alt=""
            />
            <span>
              all of our gems are 100% natural -we do not carry synthiic
              gemstone{" "}
            </span>
          </div>
        </div>
        {/*----------------------------------------------- how big does item ------------------------------*/}
        {/*----------------------------------------------- how big does item ------------------------------*/}
        <div className="how-to-big">
          <h2>HOW TO Big does item # su482020v look ?</h2>
        </div>
        <div className="virtural-sizee">
          <div className="size-vs-dime">
            <span> size vs. dime </span>
          </div>
          <div className="size-vs-dime">
            <span> Virtual size on Funger </span>
          </div>
        </div>
        <span className="lenght-11mm ">
          <span style={{ color: "black" }}> lenght:</span> <span>8.11mm </span>
          <span style={{ color: "black" }}>width:</span>
          <span>5.97mm </span>
        </span>
        <div className="lenght">
          <div className="graf-of-sapphire">
            <table
              width={364}
              height={284}
              cellSpacing={0}
              cellPadding={0}
              background="https://www.gemsny.com/images/dime-chart.jpg"
              style={{ backgroundRepeat: "no-repeat" }}
              role="presentation"
            >
              <tbody>
                <tr>
                  <td colSpan={2}>&nbsp;</td>
                </tr>
                <tr>
                  <td width={177}>&nbsp;</td>
                  <td valign="bottom">
                  
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} height="65px">
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="image-above comparese">
              Image above compares the size of <br /> Item#SU48202OV vs. Dime{" "}
            </p>
          </div>
          <div className="lenghtmm">
            <div className="ring-width">
              <p>
                ring width: <span style={{ color: "orangered" }}>33</span> mm
              </p>
            </div>
            <input type="range" defaultValue="true" max="5.0mm" min="1.0mm" />
            <span className="Rign-metal-of-resizeing">Ring Metal </span>
            <div className="finger-div-new">
              <div className="divx">
                <div className="ring1-box-div">
                  <div className="ring-sizinge-ring">
                    <ul>
                      <li id="yellow_color1" className="arrangeMetalGems">
                        <input
                          type="radio"
                          id="yellow"
                          name="ringmetal"
                          defaultValue="yellow"
                        />
                        <i className="fa-regular fa-circle" id="yellow" />
                        <label
                          htmlFor="yellow"
                          className="acsb-connected-input-shown"
                        >
                          Yellow
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="ring-sizinge-ring">
                    <li id="white_color1" className="arrangeMetalGems">
                      <input
                        type="radio"
                        id="White"
                        name="ringmetal"
                        defaultValue="white"
                      />
                      <i className="fa-regular fa-circle" id="white" />
                      <label
                        htmlFor="White"
                        className="acsb-connected-input-shown"
                      >
                        White
                      </label>
                    </li>
                  </div>
                  <div className="ring-sizinge-ring">
                    <li
                      id="rose_color1"
                      className="arrangeMetalGems active_matel"
                    >
                      <input
                        type="radio"
                        id="rose"
                        name="ringmetal"
                        defaultValue="rose"
                        data-acsb-clickable="true"
                      />
                      <i className="fa-regular fa-circle" id="rose" />
                      <label
                        htmlFor="rose"
                        className="acsb-connected-input-shown"
                      >
                        Rose
                      </label>
                    </li>
                  </div>
                </div>
                <div className="reisize-div-usd">
                  <div className="select-chay">
                    <span>ring Size (USA):</span>
                    <span>
                      <a href="#"> Ring Size Chart </a>
                    </span>
                  </div>
                  <select id="s1">
                    <option value={3}>3</option>
                    <option value="3¼">3¼</option>
                    <option value="3½">3½</option>
                    <option value="3¾">3¾</option>
                    <option value={4}>4</option>
                    <option value="4¼">4¼</option>
                    <option value="4½">4½</option>
                    <option value="4¾">4¾</option>
                    <option value={5}>5</option>
                    <option value="5¼">5¼</option>
                    <option value="5½">5½</option>
                    <option value="5¾">5¾</option>
                    <option selected="selected" value={6}>
                      6
                    </option>
                    <option value="6¼">6¼</option>
                    <option value="6½">6½</option>
                    <option value="6¾">6¾</option>
                    <option value={7}>7</option>
                    <option value="7¼">7¼</option>
                    <option value="7½">7½</option>
                    <option value="7¾">7¾</option>
                    <option value={8}>8</option>
                    <option value="8¼">8¼</option>
                    <option value="8½">8½</option>
                    <option value="8¾">8¾</option>
                    <option value={9}>9</option>
                    <option value="9¼">9¼</option>
                    <option value="9½">9½</option>
                    <option value="9¾">9¾</option>
                    <option value={10}>10</option>
                    <option value="10¼">10¼</option>
                    <option value="10½">10½</option>
                    <option value="10¾">10¾</option>
                    <option value={11}>11</option>
                    <option value="11¼">11¼</option>
                    <option value="11½">11½</option>
                    <option value="11¾">11¾</option>
                    <option value={12}>12</option>
                    <option value="12¼">12¼</option>
                    <option value="12½">12½</option>
                    <option value="12¾">12¾</option>
                    <option value={13}>13</option>
                    <option value="13¼">13¼</option>
                    <option value="13½">13½</option>
                  </select>
                </div>
              </div>
              <div className="finger-of-thum-ring">
                <img
                  className="figartniter" src="https://www.gemsny.com/script/compare/images/finger_light.png"
                  alt=""
                />
              </div>
            </div>

            <div className="image-above">
              {" "}
              Image above compares the size of Item#SU48202OV vs. Dime Image
              above compares the size of Item#SU48202OV vs. Dime S
            </div>
          </div>
        </div>
        <div className="For-futur">
          <p>
            For further assistance to determine the appropriate stone size
            please see our{" "}
            <a href="https://d3kinlcl20pxwz.cloudfront.net/images/size_chart2.pdf">
              stone size Chart
            </a>
          </p>
        </div>
      </>
    </>
  );
};

export default ProductDetails;

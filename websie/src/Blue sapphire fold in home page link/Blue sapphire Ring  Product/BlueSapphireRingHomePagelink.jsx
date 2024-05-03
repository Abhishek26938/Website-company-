import React, { useState } from "react";
import "./BlueSapphireRing.css";

const BlueSapphireRingHomePageLink = () => {
  const [filtter1, setFiltter] = useState(false);
  const [filtter2, setFiltter2] = useState(false);
  const [filtter3, setFiltter3] = useState(false);
  const [filtter4, setFiltter4] = useState(false);
  const [filtter5, setFiltter5] = useState(false);
  const [filtter6, setFiltter6] = useState(false);

  const Fillteritem1 = () => {
    setFiltter(!filtter1);
  };

  const Fillteritem2 = () => {
    setFiltter2(!filtter2);
  };

  const Fillteritem3 = () => {
    setFiltter3(!filtter3);
  };

  const Fillteritem4 = () => {
    setFiltter4(!filtter4);
  };
  const Fillteritem5 = () => {
    setFiltter5(!filtter5);
  };
  const Fillteritem6 = () => {
    setFiltter6(!filtter6);
  };

  return (
    <>
      <div className="blue-sapphire-stone-ring">
        <h3 className="Sapphire-Ring-stone-ring">Preset Sapphire Rings</h3>
        <div className="blue-sappire-filter-in-ring">
          <div className="Ring-of-blue-filler">
            <div
              className="stone-type-in-blue-sapphire"
              id="boxdrop1"
              onClick={Fillteritem1}
            >
              <span className="Stone-stype-in-new-ring">Stone Type</span>
              <i className="fa-solid fa-caret-down" id="caret-down-new"></i>
            </div>
            <div
              className="blue-sapphire-div-new"
              style={{ display: filtter1 ? "block" : "none" }}
            >
              <span className="Stone-stype-in-new-ring1">stone type</span>
              <div className="input-checkbox-in-fitter">
                <div
                  className="input-checkbox-filtter-blue-sapphire"
                  id="blue-saaphire-new-ring"
                >
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Ring-of-blue-filler1">
            <div
              className="stone-type-in-blue-sapphire "
              id="boxdrop2"
              onClick={Fillteritem2}
            >
              <span className="Stone-stype-in-new-ring">Styles</span>
              <i className="fa-solid fa-caret-down" id="caret-down-new"></i>
            </div>
            <div
              className="blue-sapphire-div-new1"
              style={{ display: filtter2 ? "block" : "none" }}
            >
              <span className="Stone-stype-in-new-ring1">Styles</span>
              <div className="input-checkbox-in-fitter1">
                <div
                  className="input-checkbox-filtter-blue-sapphire"
                  id="blue-saaphire-new-ring"
                >
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
                <div className="input-checkbox-filtter-blue-sapphire">
                  <input type="checkbox" required />
                  <img
                    className="image-Blue-sapphire-ring"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Ring-of-blue-filler2">
            <div
              className="stone-type-in-blue-sapphire "
              id="boxdrop3"
              onClick={Fillteritem3}
            >
              <span className="Stone-stype-in-new-ring">Ring Metal </span>
              <i className="fa-solid fa-caret-down" id="caret-down-new"></i>
            </div>
            <div
              className="blue-sapphire-div-new2"
              style={{ display: filtter3 ? "block" : "none" }}
            >
              <span className="Stone-stype-in-new-ring1">Ring Metal</span>
              <div className="input-checkbox-in-fitter2">
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter1">
                    <span>14k </span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter2">
                    <span>14k </span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter3">
                    <span>14k </span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter4">
                    <span>18k </span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter5">
                    <span>18k </span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter6">
                    <span>18k </span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter7">
                    <span>925</span>
                  </div>
                </div>
                <div className="input-checkbox-filtter-blue-sapphire2">
                  <input type="checkbox" required />
                  <div className="ring-carat-metal-filter8">
                    <span>PT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Ring-of-blue-filler3">
            <div
              className="stone-type-in-blue-sapphire "
              id="boxdrop4"
              onClick={Fillteritem4}
            >
              <span className="Stone-stype-in-new-ring">Weight</span>
              <i className="fa-solid fa-caret-down" id="caret-down-new"></i>
            </div>
            <div
              className="blue-sapphire-div-new3"
              style={{ display: filtter4 ? "block" : "none" }}
            >
              <span className="Stone-stype-in-new-ring1">Weight (cts)</span>
              <div className="input-checkbox-in-fitter">
                <div className="input-range-div-blue">
                  <input
                    type="range"
                    className="range-min"
                    min="0"
                    name="range-min"
                  />

                  <input
                    type="range"
                    className="range-max"
                    min="0"
                  
                    name="range-max"
                  />
                </div>
                <div className="input-max-mix-filter-blue-ring">
                  <div className="input-max-on-filter">
                    <span>Max</span>
                    <input type="number" name="maxfillter" value="0" />
                  </div>
                  <div className="input-min-on-filter">
                    <span>Min</span>
                    <input type="number" name="minfillter" value="0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-div-blue-sapphir-ring-se">
          <div className="Ring-of-blue-filler4">
            <div
              className="stone-type-in-blue-sapphire "
              id="boxdrop4"
              onClick={Fillteritem5}
            >
              <span className="Stone-stype-in-new-ring">Price</span>
              <i className="fa-solid fa-caret-down" id="caret-down-new"></i>
            </div>
            <div
              className="blue-sapphire-div-new3"
              style={{ display: filtter5 ? "block" : "none" }}
            >
              <span className="Stone-stype-in-new-ring1">Price (USD)</span>
              <div className="input-checkbox-in-fitter">
                <div className="input-range-div-blue">
                  <input
                    type="range"
                    className="range-min"
                    min="0"
                    name="range-min"
                  />

                  <input
                    type="range"
                    className="range-max"
                    min="0"
                  
                    name="range-max"
                  />
                </div>
                <div className="input-max-mix-filter-blue-ring">
                  <div className="input-max-on-filter">
                    <span>
                      Max{" "}
                      <span>
                        <strong>$</strong>
                      </span>
                    </span>
                    <input type="number" name="maxfillter" value="0" />
                  </div>
                  <div className="input-min-on-filter">
                    <span>
                      Min{" "}
                      <span>
                        <strong>$</strong>
                      </span>
                    </span>
                    <input type="number" name="minfillter" value="0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Ring-of-blue-filler5">
            <div
              className="stone-type-in-blue-sapphire "
              id="boxdrop4"
              onClick={Fillteritem6}
            >
              <span className="Stone-stype-in-new-ring">Quality Grade </span>
              <i className="fa-solid fa-caret-down" id="caret-down-new"></i>
            </div>
            <div
              className="blue-sapphire-div-new3"
              style={{ display: filtter6 ? "block" : "none" }}
            >
              <span className="Stone-stype-in-new-ring1">Quality Grade </span>
              <div className="input-checkbox-in-fitter">
                <div className="input-range-div-blue">
                  <input
                    type="range"
                    className="range-min"
                    min="0"
                    name="range-min"
                  />

                  <input
                    type="range"
                    className="range-max"
                    min="0"
                 
                    name="range-max"
                  />
                </div>
                <div className="input-max-mix-filter-blue-ring-21">
                  <div className="div-filter-blue-sapphire-grade">
                    <span className="Grade-blue-sapphire-filter">AAAAA</span>
                    <span className="grade-blue-sappire-qulity">
                      (Untreated Heirloom)
                    </span>
                  </div>
                  <div className="div-filter-blue-sapphire-grade">
                    <span className="Grade-blue-sapphire-filter">AAAA</span>
                    <span className="grade-blue-sappire-qulity">
                      (Heirloom)
                    </span>
                  </div>
                  <div className="div-filter-blue-sapphire-grade">
                    <span className="Grade-blue-sapphire-filter">AAA</span>
                    <span className="grade-blue-sappire-qulity">
                      (Excellent)
                    </span>
                  </div>
                  <div className="div-filter-blue-sapphire-grade">
                    <span className="Grade-blue-sapphire-filter">AA</span>
                    <span className="grade-blue-sappire-qulity">
                      (Very Good)
                    </span>
                  </div>
                  <div className="div-filter-blue-sapphire-grade">
                    <span className="Grade-blue-sapphire-filter">A</span>
                    <span className="grade-blue-sappire-qulity">(Good)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************************* * Result of Blue sapphire product  ********/}
      {/********************************************* * Result of Blue sapphire product  ********/}

      <div className="Result-of-blue-sapphire-ring-new">
        <div className="new-div-Result-for-div-blue">
          <button className="Result-div-button-in-new">Result (125)</button>
          <div className="div-secelt-in-blue-sapphire">
            <select id="par-page-show-costumar" name="cars">
           
              <option value="24Product">24 Product par page </option>
              <option value="36Product">36 Product par page </option>
              <option value="48Product">48 Product par page </option>
            </select>
          <i className="fa-solid fa-caret-down" id="caret-down-new1"></i>
          </div>
          <div className="div-shrot-by-new-futre-ring">
            <span>Sort by </span>
            <select id="Product-item-by-sort" name="cars">
              <option value="24Product">Featured </option>
              <option value="36Product">Price Low to High </option>
              <option value="48Product" >Price High to Low </option>
            </select>
            <i className="fa-solid fa-caret-down" id="caret-down-new1"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueSapphireRingHomePageLink;

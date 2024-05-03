import React, { useState } from "react";
import "./Prodcut.css";

const Fillter = () => {
  const [hidePage, setHidepage] = useState(false);
  const [removeClass ,setRemoveclass] = useState (true)
  const [removeClassms, setRemoveclassMs] = useState (false)

  const myFunction = () => {
   if (hidePage=== false){
    setHidepage(true)
    setRemoveclass(false)
    setRemoveclassMs(true)
    
   }else{
    setHidepage(false)
    setRemoveclass(true)
    setRemoveclassMs(false)
   }
  };


  const [isOpen, setIsOpen] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [checkboxes, setCheckboxes] = useState([
    { id: "one", label: "First checkbox", checked: false },
    { id: "two", label: "Second checkbox", checked: false },
    { id: "three", label: "Third checkbox", checked: false },
    { id: "four", label: "Fourth checkbox", checked: false },
    { id: "five", label: "Fifth checkbox", checked: false },
    { id: "six", label: "Sixth checkbox", checked: false },
  ]);

  const toggleCheckboxes = (index) => {
    if (isOpen.includes(index)) {
      setIsOpen(isOpen.filter((item) => item !== index));
    } else {
      setIsOpen([...isOpen, index]);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const priceGap = 1000;

  const handlePriceInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(parseInt(value));
    } else {
      setMaxPrice(parseInt(value));
    }
  };

  const handleRangeInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "range-min") {
      setMinPrice(parseInt(value));
    } else {
      setMaxPrice(parseInt(value));
    }
  };

  return (
    <>
      {/*---------------------------------------------- loose natural gemsotone Morganite -----------------------------*/}
      {/*---------------------------------------------- loose natural gemsotone Morganite -----------------------------*/}
      <div className="loose-natural-genstone">
        <div className="loose-gem">
          <h1>Loose natural Morganite Gemstone</h1>
          <span>
            what is size? <a href="#"> view our stone size tool</a>
          </span>
        </div>
        <div className="all-checkbox">
          <div className="boexes-type">
            <div className="gemboex">
              <span>Gem type</span>
              <div className="boerd-div">
                <div className="boer boee-1">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer boee">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="boexes-type">
            <div className="gemboex">
              <span>Gem type</span>
              <div className="boerd-div">
                <div className="boer boee-1">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
                <div className="boer boee">
                  <input type="checkbox" name="gemstone " id="gemstone" />
                  <img
                    className="stone"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIqIvpcgbODxHyBWCQ4keYva5iZsXTjmC_W2jBJVDMA&s"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------------------------------- input Function---------------------------------- */}
      {/*-------------------------------------------------- input Function---------------------------------- */}
      <div className="two-input">
        <div className="input-function">
          <div className="color-div">
            <span>color</span>
          </div>
          <div className="range-div">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input
                  type="number"
                  className="input-min"
                  name="minPrice"
                  value={minPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input
                  type="number"
                  className="input-max"
                  name="maxPrice"
                  value={maxPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
            </div>
            <div className="slider">
              <div
                className="progress"
                style={{
                  left: `${(minPrice / 10000) * 100}%`,
                  right: `${100 - (maxPrice / 10000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                name="range-min"
                value={minPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                name="range-max"
                value={maxPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
            </div>
          </div>
        </div>


        
        <div className="input-function">
          <div className="color-div">
            <span>color</span>
          </div>
          <div className="range-div">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input
                  type="number"
                  className="input-min"
                  name="minPrice"
                  value={minPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input
                  type="number"
                  className="input-max"
                  name="maxPrice"
                  value={maxPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
            </div>
            <div className="slider">
              <div
                className="progress"
                style={{
                  left: `${(minPrice / 10000) * 100}%`,
                  right: `${100 - (maxPrice / 10000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                name="range-min"
                value={minPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                name="range-max"
                value={maxPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="two-input">
        <div className="input-function">
          <div className="color-div">
            <span>color</span>
          </div>
          <div className="range-div">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input
                  type="number"
                  className="input-min"
                  name="minPrice"
                  value={minPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input
                  type="number"
                  className="input-max"
                  name="maxPrice"
                  value={maxPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
            </div>
            <div className="slider">
              <div
                className="progress"
                style={{
                  left: `${(minPrice / 10000) * 100}%`,
                  right: `${100 - (maxPrice / 10000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                name="range-min"
                value={minPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                name="range-max"
                value={maxPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
            </div>
          </div>
        </div>
        <div className="input-function">
          <div className="color-div">
            <span>color</span>
          </div>
          <div className="range-div">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input
                  type="number"
                  className="input-min"
                  name="minPrice"
                  value={minPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input
                  type="number"
                  className="input-max"
                  name="maxPrice"
                  value={maxPrice}
                  onChange={handlePriceInputChange}
                />
              </div>
            </div>
            <div className="slider">
              <div
                className="progress"
                style={{
                  left: `${(minPrice / 10000) * 100}%`,
                  right: `${100 - (maxPrice / 10000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                name="range-min"
                value={minPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                name="range-max"
                value={maxPrice}
                step="100"
                onChange={handleRangeInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------ loss gemstone natural_gemstone ---------------------------*/}
      {/*------------------------------------------------------ loss gemstone natural_gemstone ---------------------------*/}

      <div
        className="hid-fittle"
        style={{ display: hidePage ? "none" : "block" }}
      >
        <div className="all_fitter">
      {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="selection_div ">
            <form className="checkboxclass">
              <div className="multiselect">
                <div className="selectBox" onClick={() => toggleCheckboxes(index)}>
                  <select value={selectedOption} onChange={handleOptionChange}>
                    <option disabled>Select an option</option>
                  </select>
                  <div className="overSelect" />
                </div>
                <div id={`checkboxes${index + 1}`} style={{ display: isOpen.includes(index) ? 'block' : 'none' }}>
                {checkboxes.map((checkbox) => (
                      <label key={checkbox.id} htmlFor={checkbox.id}>
                        <input
                          type="checkbox"
                          id={checkbox.id}
                          checked={checkbox.checked}
                          onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                        {checkbox.label}
                      </label>
                    ))}
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
     
      </div>

      {/*--------------------------------------------------- end first fitter  ---------------------------*/}
      {/*--------------------------------------------------- end first fitter  ---------------------------*/}
      <div className="seceltion_div">
        <div className="multiselect"></div>
      </div>

      {/*---------------------------------------------------------- hide_the-additoinal --------------------------------*/}
      {/*---------------------------------------------------------- hide_the-additoinal --------------------------------*/}
      <div className="hide_the-additoinal">
        <button className="hide" onClick={myFunction}>
          <span>Hide Aminusdditional filters</span>
          {removeClass &&<div className="plues">
            <i className="fa-solid fa-plus" />
          </div>}
       

         <div className="minus"  style={{display : removeClassms ? "block" :"none" }}>
            <i className="fa-solid fa-minus" />
          </div>
     
        </button>
      </div>
      {/* -------------------------------------------------------Result button ------------------------*/}
      {/* -------------------------------------------------------Result button ------------------------*/}
      <div className="Result_button_compre">
        <div className="button_resul">
          <button id="resul_but" style={{background :"#481989", color: "white"}}> Result (7,521)</button>
          <button id="compare_but">
            <i className="fa-solid fa-star"  />
            Compare ()
          </button>
        </div>
        <div className="fitter_div">
          <form>
            <div className="multiselect">
              <div className="selectBox" id="box" onclick="showCheckboxes10()">
                <select>
                  <option>Select an option</option>
                </select>
                <div className="overSelect" />
              </div>
              <div id="checkboxes10">
                <label htmlFor="one">
                  <input type="checkbox" id="one" />
                  First checkbox
                </label>
                <label htmlFor="two">
                  <input type="checkbox" id="two" />
                  Second checkbox
                </label>
                <label htmlFor="three">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
                <label htmlFor="four">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
                <label htmlFor="five">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
                <label htmlFor="six">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
              </div>
            </div>
          </form>
          <form>
            <div className="multiselect">
              <div className="selectBox" id="box" onclick="showCheckboxes11()">
                <select>
                  <option>Select an option</option>
                </select>
                <div className="overSelect" />
              </div>
              <div id="checkboxes11">
                <label htmlFor="one">
                  <input type="checkbox" id="one" />
                  First checkbox
                </label>
                <label htmlFor="two">
                  <input type="checkbox" id="two" />
                  Second checkbox
                </label>
                <label htmlFor="three">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
                <label htmlFor="four">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
                <label htmlFor="five">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
                <label htmlFor="six">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Fillter;

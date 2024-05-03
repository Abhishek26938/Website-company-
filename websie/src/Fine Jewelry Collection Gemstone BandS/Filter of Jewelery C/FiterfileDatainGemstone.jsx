import React, { useState } from "react";

const FiterfileDatainGemstone = (props) => {
  const [cheboxDataAll, setCheckDataAll] = useState(false);
  const CheckboxA = () => {
    if (cheboxDataAll === false) {
      setCheckDataAll(true);
    } else {
      setCheckDataAll(false);
    }
  };
  return (
    <>
      <div className="select-type-div">
        <div className="only-select-div" >
          <div className="div-select-and-icon" onClick={CheckboxA}>
            <span>{props.name}</span>
            <div className="Caret-divnew">
                {props.icon}</div>
          </div>
        </div>
        <div
          className="drop-down-div-ring"
          style={{ display: cheboxDataAll ? "Block" : "none" }}
        >
          <div className="div-drowp-ring-page">
            <span className="Stone-type-div-new">Stone Type</span>
            <div className="with-checkbox-div-ring-p">
              <input type="checkbox" name="checkbox" />
              <label htmlFor=""> All</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor=""> Diamond</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor="">Blue Sapphire</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor="">Pink Sapphire</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor=""> Yellow Sapphire</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor=""> Ruby</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor=""> Emerald</label>
              <br />
              <input type="checkbox" name="checkbox" />
              <label htmlFor=""> All Metal</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiterfileDatainGemstone;

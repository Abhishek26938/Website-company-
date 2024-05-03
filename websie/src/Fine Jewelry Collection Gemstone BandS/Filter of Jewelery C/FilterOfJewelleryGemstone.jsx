import React, { useState } from "react";
import "./FiterofJewllery.css";
import FiterfileDatainGemstone from "./FiterfileDatainGemstone";

const FilterOfJewelleryGemstone = () => {
  return (
    <>
      <div className="Eterry-gestone-collection-g">
        <div className="Eternity-Wedding-Rings">
          {" "}
          <span>Eternity Wedding Rings</span>
        </div>
        <div className="select-filter-wight">
          <div className="select-option-type">
            <FiterfileDatainGemstone
              name="style type "
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
            <FiterfileDatainGemstone
              name="cotegory"
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
            <FiterfileDatainGemstone
              name="price"
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
            <FiterfileDatainGemstone
              name="Total weight"
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
          </div>
          <div className="seletct-div-new-trem">
            <FiterfileDatainGemstone
              name="Total weight"
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
            <FiterfileDatainGemstone
              name="Total weight"
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
            <FiterfileDatainGemstone
              name="Total weight"
              icon={<i class="fa-solid fa-caret-down"></i>}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterOfJewelleryGemstone;

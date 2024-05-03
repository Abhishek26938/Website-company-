import React from "react";

import { NewpagePandantData } from "./NewpagePandantData";

const PopularGemstonering = () => {
  return (
    <>
      <div className="shop-Populrgem">
        <h2>Shop Popular Gemstone Rings</h2>
        <p>
          See the most favored stone rings for sale and be inspired to have one
          for yourself or your loved one
        </p>
      </div>

      {/**************************************************** * Ring cad Design in ring page  **************/}
      {/**************************************************** * Ring cad Design in ring page  **************/}

      <div className="ring-cad-design-new">
        {NewpagePandantData.map((item, index) => {
          return (
            <div className="ring-cade-design" key={index.id}>
              <img src={item.Image} alt={Image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularGemstonering;

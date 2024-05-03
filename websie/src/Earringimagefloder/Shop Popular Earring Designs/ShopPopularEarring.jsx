import React from "react";
import { EarringPopularEarringData } from "./EarringPopularEarringData";

const PopularGemstonering = () => {
  return (
    <>
      <div className="shop-Populrgem">
        <h2>Shop Popular Gemstone Earrring</h2>
        <p>
        See the most favored earrings for sale and be inspired to have one for yourself or your loved one
        </p>
      </div>

      {/**************************************************** * Ring cad Design in ring page  **************/}
      {/**************************************************** * Ring cad Design in ring page  **************/}

      <div className="ring-cad-design-new">
        {EarringPopularEarringData.map((item, index) => {
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

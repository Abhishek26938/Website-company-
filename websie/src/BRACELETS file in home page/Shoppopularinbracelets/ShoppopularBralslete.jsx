import React from "react";
import { BraceletDdata } from "./ShopBraceleteinHome";
import { Link } from "react-router-dom";
const ShoppopularBralslete = () => {
  return (
    <>
      <div className="shop-Populrgem">
        <h2>Shop Popular Bracelet Styles</h2>
        <p>
          See the most favored bracelets for sale and be inspired to have one
          for yourself or your loved one
        </p>
      </div>

      {/**************************************************** * Ring cad Design in ring page  **************/}
      {/**************************************************** * Ring cad Design in ring page  **************/}

      <div className="ring-cad-design-new">
        {BraceletDdata.map((item, index) => {
          return (
         <Link to={item.ProdcutLink}>   <div className="ring-cade-design" key={index.id}>
              <img src={item.Image} alt={Image} />
            </div></Link>
          );
        })}
      </div>
    </>
  );
};

export default ShoppopularBralslete;

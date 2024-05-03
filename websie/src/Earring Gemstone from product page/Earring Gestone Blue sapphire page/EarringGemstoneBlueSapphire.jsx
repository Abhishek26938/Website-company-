import React from 'react'
import {EarringCookesProductData} from "./EarringProdcutCookiesstring"
import {Link} from 'react-router-dom'

const EarringGemstoneBlueSapphire = () => {
  return (
    <>
      <div className="Similar-Products-div-new">
        <span>Similar Products</span>
      </div>
      <div className="div-of-auto-cookes-produt">
        {EarringCookesProductData.map((item, index) => {
          return (
           <Link to={item.ProducutLink}> <div className="div-similar-products-in-single" key={index.id}>
              <img
                className="div-similar-products-image"
                src={item.imageCoocking}
                alt=""
              />
              <p className="Petitle-prong-set-round-sinle">{item.CookiesDsp}</p>
              <span className="Rbso35-in-new-prodcut-image-code">
                {item.Cookesicode}
              </span>
              <span className="cookes-Product-of-prince">
                {item.Cookiesmainp} - {item.CookesDealp}
              </span>
            </div></Link>
          );
        })}
      </div>
    </>
  )
}

export default EarringGemstoneBlueSapphire
import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Jewellery = () => {
  return (
    <>
      
        {/*-------------------------------------------------- jewellery product  --------------------------------------*/}
        {/*-------------------------------------------------- jewellery product  --------------------------------------*/}
        <div className="make_your">
          <span>Make Your Own Gemstone Jewelry</span>
        </div>
        <div className="product">
        <Link to="/Ringproduct"><div className="jew">
            <div className="jewellery1">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/ring_gemstone_make_your_own.webp"
                alt="Ring"
              />
            </div>
            <span>Rings</span>
          </div></Link>
          <Link to="/Earringimageallproduct"> 
          <div className='jew'>
           <div className='jewellery2'>
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/earring_gemstone_make_your_own.webp"
                alt="earring"
              />
            </div>
            <span>Earring</span>
           </div> </Link>
          <Link to= "/PandantPageFolderAllFile"><div className='jew'>
            <div className="jewellery3">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pendant_gemstone_make_your_own.webp"
                alt="pandants"
              />
            </div> 
            <span>Pandants</span>
          </div></Link>
        </div>

   {/*-------------------------------------------------- natural gemstone img   --------------------------------------*/}
{/*-------------------------------------------------- natural gemstone img  --------------------------------------*/}



  <div className="natural_gemstone">
    <img
      className="natural_gemstone_img"
      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/natural_gemstone_banner.webp"
      alt=""
    />
    <div className="expreses  Largest">
      <span> Largest Collection of </span>
      <h1 className="eternal_h1"> Natural Gemstones </h1>
     <Link to='/ProdcutpageLooseD'> <input type="text" placeholder="shop Loos Gemstone " /></Link>
    </div>
  </div>

  {/*--------------------------------------- fing jewellery Collection ----------------------------------*/}
  {/*--------------------------------------- fing jewellery Collection ----------------------------------*/}
  <div className="Fine_jewellery">
    <span>Fine Jewelry Collection</span>
  </div>
  <div className="product_of_ring">
   <Link to='/JewellryCollectionGemstone'> <div className="bulu_just">
      <div className="blue_ring">
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/gemstone_bands.webp"
          alt="Ring"
        />
      </div>
      <span>Rings</span>
    </div></Link>
   <Link to="/Mansbandcolloing"> <div className="bulu_just">
      <div className="blue_ring">
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/men_bands.webp"
          alt="earring"
        />
      </div>
      <span>Earring</span>
    </div></Link>
<Link to='/WomanBandsinHOmepageallLine'><div className="bulu_just">
      <div className="blue_ring">
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/women_bands.webp"
          alt="pandants"
        />
      </div>
      <span>Pandants</span>
    </div></Link>
   <Link to='BRACELETSFileHomepageLInk'> <div className="bulu_just">
      <div className="blue_ring">
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/bracelets_banner.webp"
          alt="pandants"
        />
      </div>
      <span>Pandants</span>
    </div></Link>
  </div>


 {/*------------------------------------------------------- Join The Community ------------------*/}
  {/*------------------------------------------------------- Join The Community ------------------*/}
  <div className="jion_the_community_3">
    <div className="special_offer_free">
      <h1 className="jion_the">Join The Community</h1>
      <span className="Subscribe_to">
        Subscribe to get special offers, free giveaways, and once <br />{" "}
        in-a-lifetime deals.
      </span>
    </div>
    <input
      className="address_email"
      type="text"
      placeholder="Enter email address"
    />
    <span className="jion_to">jion</span>
  </div>

  
</>


  );
};

export default Jewellery;

import React, { useState } from "react";
import "./GemsotneRingBands.css";
import { flushSync } from "react-dom";

const GemstoneBandsRing = () => {
    const [checkboxprodcutData,setCheckboxprodcutData] = useState(false)
    const [checkboxprodcut , setCheckboxprodcut ] = useState(false)


    const checkDatad = () =>{
        if(checkboxprodcut === false){
            setCheckboxprodcut(true)
            setCheckboxprodcutData(false)
        }else{
            setCheckboxprodcut(false)   
        }
    }

    const checkrproduct = ()=>{
        if(checkboxprodcutData === false){
            setCheckboxprodcutData(true)
            setCheckboxprodcut(false)
        }else{
            setCheckboxprodcutData(false)
        }
    }


  return (
    <>
      <div className="div-of-Result-product">
        <div className="product-par-page">
          <button className="Result-prodcut-gem-page">Ruselt(556)</button>
        </div>
        <div className="Prodcut-details-gemstone">
        <div className="div-product-com-gemstone">
          <div className="className-div-selec-span" onClick={checkDatad}>
            <span>36 Products per page</span>
            <div className="paroduct-icont-par">
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="prodcut-par-page-div" style={{ display : checkboxprodcut ? "block" : "none"}}>
            <span>36 Products per page</span>
            <span>36 Products per page</span>
            <span>36 Products per page</span>
            <br />
            <br />
          </div>
        </div>
      
        <div className="div-product-com-gemstone">
          <div className="className-div-selec-span" onClick={checkrproduct}>
            <span>36 Products per page</span>
            <div className="paroduct-icont-par">
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="prodcut-par-page-div"  style={{ display : checkboxprodcutData ? "block" : "none"}}>
            <span>36 Products per page</span>
            <span>36 Products per page</span>
            <span>36 Products per page</span>
            <br />
            <br />
          </div>
        </div>
      </div>
        </div>
   
    </>
  );
};

export default GemstoneBandsRing;

import React,{useState}  from "react";
import MansFiltersrtinhomepage from "./MansFiltersrtinhomepage";
import  './Mansfilter.css'
const MansFiltterBandsnew = () => {

  return (
    <>
     <div className="Eterry-gestone-collection-g">
        <div className="Eternity-Wedding-Rings">
          {" "}
          <span>Metal Bands</span>
        </div>
        <div className="select-filter-wight" id="newtypemtaldivshape">
          <div className="select-option-type" >
      <MansFiltersrtinhomepage
        name="style type "
        icon={<i class="fa-solid fa-caret-down"></i>}
      />
      <MansFiltersrtinhomepage
        name="Metal  "
        icon={<i class="fa-solid fa-caret-down"></i>}
      />
      <MansFiltersrtinhomepage
        name="Bands type  "
        icon={<i class="fa-solid fa-caret-down"></i>}
      />
      </div>
      </div>
      </div>
         </>
  );
};

export default MansFiltterBandsnew;

import React from "react";
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import EarringGemstoneBlueSapphire from "./Earring Gestone Blue sapphire page/EarringGemstoneBlueSapphire";
import EarringGemstoneDetailsBlue from './Earring Gemstone Detais blue Earring/EarringGemstoneDetailsBlue'
import EarringGemstoneProductimageDetails from "./Earring Gestone Product imge and details/EarringGemstoneProductimageDetails";
// import ImportantFact from '../OneProduct/Important Facts/ImportantFact'
import EarringGemstoneLastAbout  from './Earring gemstone last about/EarringGemstoneLastAbout'
import Footer from "../Homepage/Footer/Footer";
const EarringGemstonefromproductallFile = () => {
  return (
    <>
      
      <EarringGemstoneProductimageDetails />
      <EarringGemstoneBlueSapphire />
      <EarringGemstoneDetailsBlue/>
      {/* <ImportantFact/> */}
      <EarringGemstoneLastAbout/>
      <Footer/>

    </>
  );
};

export default EarringGemstonefromproductallFile;

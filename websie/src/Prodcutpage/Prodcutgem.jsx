import React from "react";
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import Fillter from "./Fillterpage/Fillter";
import OnlyProduct from "./OnlyProdcut/OnlyProduct";
import AboutSapphire from "./About of Sapphire/AboutSapphire";
import FAQqution from "./FAQqution/FAQqution";
import Footer from "../Homepage/Footer/Footer";

const Prodcutgem = () => {
  return (
    <>
     
      <Fillter />
      <OnlyProduct />
      <AboutSapphire />
      <FAQqution />
      <Footer/>
    </>
  );
};

export default Prodcutgem;

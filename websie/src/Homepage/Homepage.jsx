import React from "react";
import Navbarpage from "./Navbarpage/Navbarpage";
import PageVideo from "./bgvideo/PageVideo";
import Jewellery from "./makeproduct/Jewellery";
import Preset from "./Preset Collections/Preset";
import Flexible from "./Flexible Financing/Flexible";
import Shipjewellery from "./ReadytoShipJewellery/Shipjewellery";
import Footer from "./Footer/Footer";
import Review from "./Review/Review"
import JewellerySpecialists from "./Jewelry Specialists/JewellerySpecialists";

const Homepage = () => {
  return (
    <>
      <PageVideo />
      <Jewellery />
      <Preset />
      <Flexible />
      <Shipjewellery />
      <Review/>
      <JewellerySpecialists/>
      <Footer />
    </>
  );
};

export default Homepage;

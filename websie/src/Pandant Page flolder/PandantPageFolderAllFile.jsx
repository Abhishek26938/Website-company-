import React from "react";
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import AllPandandGemsotneFile from "./AllPandand Gmsonte bg/AllPandandGemsotneFile";
import Fixcebleprinceline from ".././Ringproductimagepage/fixcebleprince/Fixcebleprinceline";
import GemstoneallImagestone from ".././Ringproductimagepage/Gemstoneallimagestone/GemstoneallImagestone";
import PandandImageinPandant from "./Pandand image pic pagge/PandandImageinPandant";
import PandantGemstone from "./AllGestonenewerStone/PandantGemstone";
import Butdirectnomiddle from "../Ringproductimagepage/BuyDirectNoMiddle/Butdirectnomiddle"
import PopularGemstonering from '../Ringproductimagepage/PopularGemstoneRings/PopularGemstonering'
import Flexiblefinancingpagenewring from "../Ringproductimagepage/flexiblefinancingnewpage/Flexiblefinancingpagenewringpage"
import ShopmetalpageRing from '../Ringproductimagepage/ShopMetalRingPage/ShopmetalpageRing'
import ConsultOurJewleryRingPage from '../Ringproductimagepage/Consult Our Jewelry/ConsultOurJewleryRingPage'
import Footer from "../Homepage/Footer/Footer";
import PandantimageData from './Styel Pandant image/PandantimageData'
import ShopPopularPandantseting from './Shop Popular Pendant Settings/ShopPopularPandantseting'


const PandantPageFolderAllFile = () => {
  return (
    <>
   
      <AllPandandGemsotneFile />
      <Fixcebleprinceline />
      <PandantGemstone />
      <GemstoneallImagestone />
      <PandandImageinPandant />
      <PandantimageData/>
      <Butdirectnomiddle/>
      {/* <PopularGemstonering/> */}
      <ShopPopularPandantseting/>
      <Flexiblefinancingpagenewring/>
      <ShopmetalpageRing/>
      <ConsultOurJewleryRingPage/>
    <Footer/>
      
    </>
  );
};

export default PandantPageFolderAllFile;

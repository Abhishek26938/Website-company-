import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Navbarpage from "./Homepage/Navbarpage/Navbarpage";
import Prodcutgem from "./Prodcutpage/Prodcutgem";
import OneProductview from "./OneProduct/OneProductview";
import Returnpage from "./Returnpage/Returnpage";
import AddToCard from "./Add to card/AddToCard";
import Ringimagemailfolder from "./Ringproductimagepage/Ringimagemailfolder";
import Earringimageallproduct from "./Earringimagefloder/Earringimageallproduct";
import ProdcutpageLooseD from "./Prodcut Page of losse Diamdond/ProdcutpageLooseD";
import WishlistPage from "./Wishlist in website Page/WishlistInWebsite";
import LoginForm from "./Loing from for a user/LoginForm";
import PandantPageFolderAllFile from "./Pandant Page flolder/PandantPageFolderAllFile";
import OfferpagebylinkHome from "./Offer page by Home page/OfferpagebylinkHome";
import JewellryCollectionGemstone from "./Fine Jewelry Collection Gemstone BandS/JewellryCollectionGemstone";
import Mansbandcolloing from "./Mans band Stone colltion/Mansbandcolloing";
import WomanBandsinHOmepageallLine from "./Woman Bands in home page/WomanBandsinHOmepageallLine";
import BRACELETSFileHomepageLInk from "./BRACELETS file in home page/BRACELETSFileHomepageLInk";
import BlueSapphireFloderinhome from "./Blue sapphire fold in home page link/BlueSapphireFloderinhome";
import RubySapphireStoneinHome from "./Ruby sapphire stone in home page/RubySapphireStoneinHome";
import EmeraldAllFilestore from "./Emerald Ring Gemstone  in Home  page/EmeraldAllFilestore";
import BlueSaapphireEarringGemstone from "./Blue saaphire Earring Gmestone in Home/BlueSaapphireEarringGemstone";
import RubyGesmtoneEarringallFile from "./Reby Gemstone Earring in home page/RubyGesmtoneEarringallFile";
import EmeraldGemstoneEarrngHomepg from "./Emerald Gemsotne Earring from home page/EmeraldGemstoneEarrngHomepg";
import BlueSapphirePandantfromHome from "./Blue Sapphire Pandant Gemstone from Home/BlueSapphirePandantfromHome";
import RubyGemstonePandantfromHome from "./Ruby Gemstone Pandant from Home page/RubyGemstonePandantfromHome";
import EmeraldGemstonePandantfromHome from "./Emerald Gemstone pandant  from Home page/EmeraldGemstonePandantfromHome";
import RubyRingGemstoneFromHome from "./Ruby Ring  Gemstone  from Home page/RubyRingGemstoneFromHome";
import SingleRingProductpagForAllFile from "./Single Ring product from Ring Prodcut page/SingleRingProductpagForAllFile";
import EarringGemstonefromproductallFile from "./Earring Gemstone from product page/EarringGemstonefromproductallFile";
import OnePandantGemstoneallFile from "./One Pandant Gemstone from Product/OnePandantGemstoneallFile";
import EmeraldGemstoneRingFrompAllFile from "./Eemerald Gemstone Ring from Prodcut page/EmeraldGemstoneRingFrompAllFile";
import RubyGemstoneEarringFromprodcutAllFile from "./Ruby gemstone Earrring from product page/RubyGemstoneEarringFromprodcutAllFile";
import EmeraldEarribngGemstoneFromproductallFile from "./Emerald Earring Gemstone From Product page/EmeraldEarribngGemstoneFromproductallFile";
import RubyGemstoneJewellerySingleProdcutallFile from "./Ruby Gemstone Jewellery Single Product from Product page/RubyGemstoneJewellerySingleProdcutallFile";
import EmeraldPandantJewelerygemstoneallFile from "./Emerald Pandant Jewellery from Product page/EmeraldPandantJewelerygemstoneallFile";
import CommitmenttoAccessibility from "./Commitment to Accessibility in Footer/CommitmenttoAccessibility";
import GemstoneBandsproductallFilesto from "./Gemstone Bands of all product page in single page/GemstoneBandsproductallFilesto";
import MansFineJewelerycolletionSingelprodcutAllFile from "./Fine Jewellery Colletion in  single Mans bands product page/MansFineJewelerycolletionSingelprodcutAllFile";
import WomanbandsRingColletionpageAllFile from './Woman bands Find to Colletion of Ring sigle product/WomanbandsRingColletionpageAllFile'
import BralcelesSingleprodcutallFile from './Bracelets for woman single product page/BralcelesSingleprodcutallFile'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarpage />
        <Routes>
          {/* <Route path="/Navbar" element={} /> */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Prodcutgem" element={<Prodcutgem />} />
          <Route exact path="/OneProductview" element={<OneProductview />} />
          <Route exact path="/Returnpage" element={<Returnpage />} />
          <Route exact path="/AddToCard" element={<AddToCard />} />
          <Route exact path="/Ringproduct" element={<Ringimagemailfolder />} />
          <Route exact path="/LoginForm" element={<LoginForm />} />
          <Route
            exact
            path="/Earringimageallproduct"
            element={<Earringimageallproduct />}
          />
          <Route
            exact
            path="/ProdcutpageLooseD"
            element={<ProdcutpageLooseD />}
          />
          <Route exact path="/WishlistPage" element={<WishlistPage />} />
          <Route
            exact
            path="/PandantPageFolderAllFile"
            element={<PandantPageFolderAllFile />}
          />
          <Route
            exact
            path="/OfferpagebylinkHome"
            element={<OfferpagebylinkHome />}
          />
          <Route
            exact
            path="/JewellryCollectionGemstone"
            element={<JewellryCollectionGemstone />}
          />
          <Route
            exact
            path="/Mansbandcolloing"
            element={<Mansbandcolloing />}
          />
          <Route
            exact
            path="/WomanBandsinHOmepageallLine"
            element={<WomanBandsinHOmepageallLine />}
          />
          <Route
            exact
            path="/BRACELETSFileHomepageLInk"
            element={<BRACELETSFileHomepageLInk />}
          />
          <Route
            exact
            path="/BlueSapphireFloderinhome"
            element={<BlueSapphireFloderinhome />}
          ></Route>
          <Route
            exact
            path="/RubySapphireStoneinHome"
            element={<RubySapphireStoneinHome />}
          ></Route>
          <Route
            exact
            path="/EmeraldAllFilestore"
            element={<EmeraldAllFilestore />}
          ></Route>
          <Route
            excet
            path="/BlueSaapphireEarringGemstone"
            element={<BlueSaapphireEarringGemstone />}
          ></Route>
          <Route
            excet
            path="/RubyGesmtoneEarringallFile"
            element={<RubyGesmtoneEarringallFile />}
          ></Route>
          <Route
            excet
            path="/EmeraldGemstoneEarrngHomepg"
            element={<EmeraldGemstoneEarrngHomepg />}
          ></Route>
          <Route
            excet
            path="/BlueSapphirePandantfromHome"
            element={<BlueSapphirePandantfromHome />}
          ></Route>
          <Route
            excet
            path="/RubyGemstonePandantfromHome"
            element={<RubyGemstonePandantfromHome />}
          ></Route>
          <Route
            excet
            path="/EmeraldGemstonePandantfromHome"
            element={<EmeraldGemstonePandantfromHome />}
          ></Route>
          <Route
            excet
            path="/SingleRingProductpagForAllFile"
            element={<SingleRingProductpagForAllFile />}
          ></Route>
          <Route
            excet
            path="/RubyRingGemstoneFromHome"
            element={<RubyRingGemstoneFromHome />}
          ></Route>
          <Route
            excet
            path="/EarringGemstonefromproductallFile"
            element={<EarringGemstonefromproductallFile />}
          ></Route>
          <Route
            excet
            path="/OnePandantGemstoneallFile"
            element={<OnePandantGemstoneallFile />}
          ></Route>
          <Route
            excet
            path="/EmeraldGemstoneRingFrompAllFile"
            element={<EmeraldGemstoneRingFrompAllFile />}
          ></Route>
          <Route
            excet
            path="/RubyGemstoneEarringFromprodcutAllFile"
            element={<RubyGemstoneEarringFromprodcutAllFile />}
          ></Route>
          <Route
            excet
            path="/EmeraldEarribngGemstoneFromproductallFile"
            element={<EmeraldEarribngGemstoneFromproductallFile />}
          ></Route>
          <Route
            excet
            path="/RubyGemstoneJewellerySingleProdcutallFile"
            element={<RubyGemstoneJewellerySingleProdcutallFile />}
          ></Route>
          <Route
            excet
            path="/EmeraldPandantJewelerygemstoneallFile"
            element={<EmeraldPandantJewelerygemstoneallFile />}
          ></Route>
          <Route
            excet
            path="/CommitmenttoAccessibility"
            element={<CommitmenttoAccessibility />}
          ></Route>
          <Route
            excet
            path="/GemstoneBandsproductallFilesto"
            element={<GemstoneBandsproductallFilesto />}
          ></Route>
          <Route
            excet
            path="/MansFineJewelerycolletionSingelprodcutAllFile "
            element={<MansFineJewelerycolletionSingelprodcutAllFile />}
          ></Route>
           <Route
            excet
            path="/WomanbandsRingColletionpageAllFile"
            element={<WomanbandsRingColletionpageAllFile />}
          ></Route>
           <Route
            excet
            path="/BralcelesSingleprodcutallFile"
            element={<BralcelesSingleprodcutallFile />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

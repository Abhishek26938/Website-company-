import React from "react";
import "./Productimage.css";
import Footer from "../Homepage/Footer/Footer";
import Navbarpage from "../Homepage/Navbarpage/Navbarpage";
import Fixcebleprinceline from ".././Ringproductimagepage/fixcebleprince/Fixcebleprinceline";
import Butdirectnomiddle from "../Ringproductimagepage/BuyDirectNoMiddle/Butdirectnomiddle";
import ShopbyStyleSheetimage from ".././Ringproductimagepage/ShopbyStylesheet/ShopbyStyleSheetimage";
import Flexiblefinancingpagenewringpage from "../Ringproductimagepage/flexiblefinancingnewpage/Flexiblefinancingpagenewringpage";
import ConsultOurJewleryRingPage from ".././Ringproductimagepage/Consult Our Jewelry/ConsultOurJewleryRingPage";
const ProdcutpageLooseD = () => {
  return (
    <>
     
      {/*-------------- Images ------------------*/}
      <div className="filter_gallery">
        <img src="https://d3kinlcl20pxwz.cloudfront.net/imgs/lp/gems/loose-gems-banner-desktop.webp" />
        <div className="Loose_Gems">
          <h1>LOOSE GEMS</h1>
          <p className="Buy-color-gems">
            Buy color gems from our wide selection of precious and <br />
            semi-precious gemstones, both treated and untreated.
          </p>
        </div>
        <div className="info_bar">
          <div className="icon1">Flexible Financing</div>
          <div className="icon2">* Up to 36 months term</div>
          <div className="icon3">* No Credit Check Available</div>
          <div className="icon4">* 0% APR Available</div>
          <button className="More">
            <b>Learn More</b>
          </button>
        </div>
      </div>
      {/*------------------- Second div -------------------*/}
      <div className="second_div">
        <center>
          {" "}
          <h2>Shop Precious Gemstones</h2>{" "}
        </center>
        <center>
          <p>
            These natural gemstones are some of the rarest on earth. Buy loose
            gemstones online with confidence. Ethically sourced real gemstones
            for sale
          </p>
        </center>
        <div className="main-card">
          <div className="card_1">
            <div className="card_img_1">
              <div className="card-imagepic">
                <div className="card_img1" />
              </div>
            </div>
            <h2 className="sapphire">Rubies</h2>
            <p className="card_text">
              Shop our large collection of the lustruos red ruby gemstones in
              both treated and untreated.{" "}
            </p>
          </div>
          <div className="card_1">
            <div className="card_img_1">
              <div className="card-imagepic">
                <div className="card_img1" />
              </div>
            </div>
            <h2 className="sapphire">Rubies</h2>
            <p className="card_text">
              Shop our large collection of the lustruos red ruby gemstones in
              both treated and untreated.{" "}
            </p>
          </div>
          <div className="card_1">
            <div className="card_img_1">
              <div className="card-imagepic">
                <div className="card_img2" />
              </div>
            </div>
            <h2 className="sapphire">Emeralds</h2>
            <p className="card_text">
              Embrace the most abundant hue in nature - shop our natural emerald
              gemstones collection
            </p>
          </div>
          <div className="card_1">
            <div className="card_img_1">
              <div className="card-imagepic">
                <div className="card_img3" />
              </div>
            </div>
            <h2 className="sapphire">alexandrite</h2>
            <p className="card_text">
              Emerald by day, ruby by night- shop our two in 1 color changer
              Alexandrite gemstones
            </p>
          </div>
          <div className="card_1">
            <div className="card_img_1">
              <div className="card-imagepic">
                <div className="card_img4" />
              </div>
            </div>
            <h2 className="sapphire">Tanzanite</h2>
            <p className="card_text">
              Majestic purple, oceanic blues, shop our tantalizing tanzanite
              gemstones
            </p>
          </div>
        </div>
      </div>

      <Butdirectnomiddle />

      {/*-------------- Products carousel --------------*/}
      <div className="carousel">
        {/*------------------ Carousel Products Cards ----------------------------*/}
        <div className="carousel_cards">
          <ShopbyStyleSheetimage />
        </div>
      </div>
      <Flexiblefinancingpagenewringpage />

      {/*----------------------- Diamonds By Shape -----------------------*/}
      <div className="diamond_shape">
        <h1 className="diamond_shape_head">Shop Diamonds By Shape</h1>
        <p className="diamond_shape_text">
          The shape of Diamond you're looking for is right here in our
          selection. Select either a natural diamond <br />
          or lab diamond and then choose the shape that fascinates you.
        </p>
        <div className="diamond_shape_btn">
          <div className="Ndiamond_btn1" id="btn1">
            {/* <img src="https://d3kinlcl20pxwz.cloudfront.net/assets/images/icon-diamondrings.png" alt="" class="diamond_shape_img"> */}
            <p className="btn_text ">Natural Diamond</p>
          </div>
          <div className="Ldiamond_btn2" id="btn2">
            <p className="btn2_text">Lab Diamond</p>
          </div>
        </div>
      </div>

      {/*---------------- More About Our Loose Gems ----------------*/}
      <div className="about_gems">
        <h1 className="About_head">More About Our Loose Gems</h1>
        <div className="about_text">
          <p className="about_text1">
            Choose beautiful gemstones online and make your favorite ring,
            studs, pendant, bracelet or necklace. GemsNY's vast collection of{" "}
            <b>genuine loose precious gemstones</b> are procured from the best
            mines of the world. Moreover, each of the{" "}
            <b>
              loose sapphires, loose rubies, loose emeralds and loose diamonds
            </b>{" "}
            are certified by distinguished gemstone laboratories. Our selection
            includes a variety of precious gems in many colors, range of shapes,
            cuts, clarity, brilliance and carat weight, thus, giving you many
            choices for your desired jewel setting. Browse our entire collection
            and select perfect sapphires, rubies, emeralds and diamonds for your
            different pieces of jewelry. Buy gemstones at unbelievable prices.
            Whether single or matched pair, you’ll find them all in our
            inventory of loose stones. If you can’t find the color stone you
            seek, just give us a call and we’ll be with you.
          </p>
        </div>
      </div>
      {/*----------------- jewelry speclialist -----------------*/}
      <div className="jewelry_speclialist">
        <ConsultOurJewleryRingPage />
      </div>
      <Footer />
    </>
  );
};

export default ProdcutpageLooseD;

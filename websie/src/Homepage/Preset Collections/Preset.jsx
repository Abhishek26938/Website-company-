import React, { useRef, useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Preset = () => {
  const [showRing, setShowRing] = useState(true); // Initialize showRing to true
  const [showEarring, setShowEarring] = useState(false);
  const [showPendant, setShowPendant] = useState(false);

  const showRingImage = () => {
    setShowRing(true);
    setShowEarring(false);
    setShowPendant(false);
  };

  const showEarringImage = () => {
    setShowRing(false);
    setShowEarring(true);
    setShowPendant(false);
  };

  const showPendantImage = () => {
    setShowRing(false);
    setShowEarring(false);
    setShowPendant(true);
  };

  // js code of image sider in home page
  const initSlider = () => {
    const imageList = document.querySelector(".arro .alltype_jewe");
    const slideButtons = document.querySelectorAll(".arro .chevron_right");
    const sliderScrollbar = document.querySelector(
      ".container .slider-scrollbar"
    );
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition =
        sliderScrollbar.getBoundingClientRect().width -
        scrollbarThumb.offsetWidth;

      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        // Ensure the scrollbar thumb stays within bounds
        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  };

  window.addEventListener("resize", initSlider);
  window.addEventListener("load", initSlider);

  return (
    <>
      {/*------------------------------------------ Preset Collections -------------------------------------*/}
      {/*------------------------------------------ Preset Collections -------------------------------------*/}
      <section>
        <div className="preset_coloection">
          <div className="shop_our">
            <h1 className="pearset">Preset Collections</h1>
            <span className="shop_our_curated">
              Shop our curated collection of popular sapphire, ruby &amp;
              emerald jewelry : rings, earrings &amp; pendants{" "}
            </span>
          </div>
          <div className="ring_button">
            <button className="Rings" onClick={showRingImage}>
              rings
            </button>
            <button className="Earrings" onClick={showEarringImage}>
              earrings
            </button>
            <button className="Pandents" onClick={showPendantImage}>
              pandants
            </button>
          </div>
          <div className="preset_colloection_ring">
            <div className="colloection_ring">
              <div
                className="image_ring"
                style={{ opacity: showRing ? "1" : "0" }}
              >
                <Link to="BlueSapphireFloderinhome">
                  <div className="ring_imgesnew">
                    <div className="ring_1">
                      <img
                        src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/preset-rings-three-rings-sapphire-solitaire.webp"
                        alt="earring"
                      />
                    </div>
                    <span>Earring</span>
                  </div>
                </Link>

                <Link to="/RubySapphireStoneinHome">
                  <div className="ring_imgesnew">
                    <div className="ring_2">
                      <img
                        src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/preset-rings-three-rings-ruby-sidestone.webp"
                        alt="earring"
                      />
                    </div>
                    <span>Earring</span>
                  </div>
                </Link>
                <Link to="/EmeraldAllFilestore">
                  <div className="ring_imgesnew">
                    <div className="ring_3">
                      <img
                        src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/preset-rings-three-rings-emerald-solitaire2.webp"
                        alt="earring"
                      />
                    </div>
                    <span>Earring</span>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="image_earring1"
              style={{ display: showEarring ? "flex" : "none" }}
            >
              <Link to="/BlueSaapphireEarringGemstone">
                {" "}
                <div className="ring_imgesnew1">
                  <div className="ring_1">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/preset_sapphire-earring-image2.webp"
                      alt="earring"
                    />
                  </div>
                  <span>Earring</span>
                </div>
              </Link>
              <Link to="/RubyGesmtoneEarringallFile">
                <div className="ring_imgesnew1">
                  <div className="ring_2">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/preset_ruby-earring-image.webp"
                      alt="earring"
                    />
                  </div>
                  <span>Earring</span>
                </div>
              </Link>
              <Link to="/EmeraldGemstoneEarrngHomepg">
                {" "}
                <div className="ring_imgesnew1">
                  <div className="ring_3">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/preset_emerald-earring-image-2.webp"
                      alt="earring"
                    />
                  </div>
                  <span>Earring</span>
                </div>
              </Link>
            </div>
            <div
              className="image_pandant2"
              style={{ display: showPendant ? "flex" : "none" }}
            >
              <Link to="/BlueSapphirePandantfromHome">
                {" "}
                <div className="ring_imgesnew">
                  <div className="ring_1">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/sapphire--pendant-image-preset.webp"
                      alt="earring"
                    />
                  </div>
                  <span>Earring</span>
                </div>
              </Link>
              <Link to="/RubyGemstonePandantfromHome">
                {" "}
                <div className="ring_imgesnew">
                  <div className="ring_2">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/ruby-pendant-image-preset.webp"
                      alt="earring"
                    />
                  </div>
                  <span>Earring</span>
                </div>
              </Link>
              <Link to="/EmeraldGemstonePandantfromHome">
                {" "}
                <div className="ring_imgesnew">
                  <div className="ring_3">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/emerald--pendant-image-preset.webp"
                      alt="earring"
                    />
                  </div>
                  <span>Earring</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*------------------------------------------------------------- Best Selling Engagement Rings -------------------*/}
      {/*------------------------------------------------------------- Best Selling Engagement Ring -------------------*/}

      <section>
        <div className="Best_Selling_Pendants">
          <div className="Best_seller">
            <h1>Best Selling Engagement Rings</h1>
          </div>
          <div className="container">
            <div className="arro">
              <div id="prev-slide" className="chevron_right">
                <i className="fa-solid fa-chevron-left" />
              </div>
              <div className="alltype_jewe">
                <div className="background_red">
                  <div className="pand_s_image">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        <s>$7,334</s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red1">
                  <div className="pand_s_image1">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red2">
                  <div className="pand_s_image2">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red3">
                  <div className="pand_s_image3">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red4">
                  <div className="pand_s_image4">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red5">
                  <div className="pand_s_image5">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red6">
                  <div className="pand_s_image6">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
                <div className="background_red7">
                  <div className="pand_s_image7">
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/pro_img_6_hover.webp"
                      alt=""
                    />
                    <div id="price_d_img style;" className="d-flex">
                      <span className="prince_mrp">
                        {" "}
                        <s>$7,334 </s>
                      </span>
                      <span className="real_parice">$5,867</span>
                    </div>
                    <span className="oval_cut">
                      Oval Cut Untreated Blue Sapphire Double Halo Pendant
                    </span>
                  </div>
                </div>
              </div>
              <div id="next-slide" className="chevron_right ">
                <i className="fa-solid fa-chevron-right" />
              </div>
              <div className="slider-scrollbar">
                <div className="scrollbar-track">
                  <div className="scrollbar-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preset;

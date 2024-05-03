import React from "react";
import Slider from "react-slick";
import "./CookiesProdcut.css";


 

const CookiesProduct = () => {



  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>

    
<div class="Similar-Products">
            <div class="similar">
                <span>Similar Products</span>
            </div>
            <a href="#"> see all sapphire</a>
        </div>

     <div className="slider-container">
      <Slider {...settings}>
    
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
        <div>
          <div className="imga-div-blue-sapphire">
            <img
              src="https://d3kinlcl20pxwz.cloudfront.net/images-stones/73835/FL.jpg"
              alt="Image 1"
            />
            <span>1.57 carat oval sapphire</span>
            <p>$2,163</p>
          </div>
        </div>
      </Slider>
    </div>
    </>
  )
}

export default CookiesProduct

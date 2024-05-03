import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Loginpageandsing from "./Loginpageandsing";

const Navbarpage = () => {
  const [Datainp, setDatainp] = useState(false);
  const [Singbutton, setSingbutton] = useState(false);
  const [searchicon, setSearchicon] = useState(false);
  const [emailicon, setEmailicon] = useState(false);

  

  const openForm = () => {
    if (!Datainp) {
      setDatainp(true);
    }
  };

  const closeForm = () => {
    if (Datainp) {
      setDatainp(false);
    }
  };

  const ButtonClick = () => {
    if (!Singbutton) {
      setSingbutton(true);
      setDatainp(false);
    }
  };

  const closeFormTwo = () => {
    if (Singbutton === true && Datainp === true) {
      setSingbutton(false);
      setDatainp(false);
    }
  };

  const loginButton = () => {
    setSingbutton(false);
    setDatainp(true);
  };

  const Searchicon = () => {
    if (searchicon === false) setSearchicon(true);
  };

  const Logosearchicon = () => {
    if (searchicon === true) {
      setSearchicon(false);
    }
  };

  const EmailIcon = () => {
    if (emailicon === false) setEmailicon(true);
  };

  const xmarkicon = () => {
    setEmailicon(false);
  };

  return (
    <>
      <div className="main_nav">
        {/*------------------- announcement_bar -------------------*/}
        <div className="announcement_bar" />
        {/*------------------------- NAVBAR_ICON -------------------------*/}
        <div className="navbar">
          <div className="nav_icon_div">
            <ul className="nav_icon">
              <li className="no"> 1-888-436-7692</li>
              <li className="email_icon" onClick={EmailIcon}>
                <i className="fa-regular fa-envelope" />
                <div
                  className="div-Email-popus"
                  style={{ display: emailicon ? "block" : "none" }}
                >
                  <div className="input-email-popus">
                    <h3 className="Email-us-input-div">Email us</h3>
                    <div
                      className="xmarkicon-of-classname "
                      onClick={xmarkicon}
                    >
                      {" "}
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div className="div-div-Email-put">
                    <div className="input-div-in-email-popus">
                      <input type="text" placeholder="First Name " required />
                      <input type="text" placeholder="Last Name " required />
                      <input
                        type="Email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="email-subject-div-in">
                      <input
                        type="text"
                        className="subject-div-email-nav"
                        placeholder="Subject"
                        required
                      />
                      <input
                        type="text"
                        className="Question-div-email-nav"
                        placeholder="Question"
                        required
                      />
                    </div>
                  </div>
                  <div className="div-button-div-email">
                    <button>Sumit</button>
                  </div>
                </div>
              </li>
              <li className="location">
                <i className="fa-solid fa-location-dot" />
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="nav_icon_div2">
              <img
                src="https://d3kinlcl20pxwz.cloudfront.net/images/gemsny-logo.svg?v=3"
                alt=""
              />
            </div>
          </Link>
          <div className="nav_icon_div3">
            <ul className="nav_icon2">
              <li className="search" onClick={Searchicon}>
                <i className="fa-solid fa-magnifying-glass" />
                <div
                  className="search-bar-div-in-home"
                  style={{ display: searchicon ? "flex" : "none" }}
                >
                  <div className="nav_icon_div" onClick={Logosearchicon}>
                    <img
                      src="https://d3kinlcl20pxwz.cloudfront.net/images/gemsny-logo.svg?v=3"
                      alt=""
                    />
                  </div>
                  <div className="div-of-search">
                    <i className="fa-solid fa-magnifying-glass" />
                    <input
                      className="search-input-card-new"
                      type="text"
                      placeholder="Search.... "
                    />
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </li>
              <li className="user" onClick={openForm}>
                <i className="fa-solid fa-user" />
                {/************************************************************ Login-from ************************/}
                {/************************************************************ Login-from ************************/}

                <div className="all-from-div-in-nav">
                  <form
                  
                    style={{ display: Datainp ? "block" : " none" }}
                    className="Form"
                  >
                    <div className="login-form-content-div">
                      <div className="login-page">
                        <div className="divWeicompage">
                          <div className="singinButton1">
                            <div className="login_form_image1">
                              <img
                                src="https://ratnalayajewels.com/wp-content/uploads/sites/449/2023/07/DN-45-4.jpg"
                                alt=""
                              />
                            </div>
                            <div className="singpageinhomepage">
                              <h2 className="WelcomeBackgroud">
                                {" "}
                                Welcome Back !
                              </h2>
                              <p>
                                To Keep Connect With us please login us with
                                your parsonal info
                              </p>
                            </div>
                          </div>
                          <button
                            className="Buttonofsingupinloginpage"
                            onClick={ButtonClick}
                          >
                            sing in{" "}
                          </button>
                          <div className="close-in-loginpage">
                            <i
                              className="fa-solid fa-circle-xmark"
                              onClick={closeForm}
                            ></i>
                          </div>
                        </div>
                        <div className="div-signin">
                          <div className="headerinloginpage">
                            <h3> Sing in </h3>
                          </div>
                          <div className="inputs">
                            <label className="Email">Email </label>
                            <input
                              type="email"
                              id="username"
                              className="Email_input"
                              placeholder="Enter Your Email...."
                              required
                            />
                          </div>
                          <div className="inputs1">
                            <label className="Password-of-login-page">
                              Password{" "}
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="password_input"
                              placeholder="Enter Your Password..."
                              required
                            />
                          </div>
                          <span className="fonget-password-in-logingpage">
                            Forget Password{" "}
                          </span>
                          <br />
                          <button type="submit" className=" Signin_btn">
                            Sign In
                          </button>
                          <br />
                          <div className="din-line-in-login">
                            <div className="linksingin-1"></div>
                            <div className="singingtextsing">Sing in With </div>
                            <div className="linksingin-2"></div>
                          </div>
                          <div className="social-media-icon-loingpage">
                            <div className="loginiconinpage-1">
                              <i className="fa-brands fa-google"></i>
                            </div>
                            <div className="loginiconinpage-1">
                              <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="loginiconinpage-1">
                              <i className="fa-brands fa-square-x-twitter"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <form
                  
                    style={{ display: Singbutton ? "block" : " none" }}
                    className="Form"
                  >
                    <div className="login-form-content-div">
                      <div className="login-page">
                        <div className="divWeicompage1">
                          <div className="loginpagecolor">
                            <div className="login_form_image">
                              <img
                                src="https://aviradiamonds.com/cdn/shop/files/0512_1_1_87586e9b-5a16-4f2c-9d3e-7eaab0f83bf3_435x435.png?v=1699101067"
                                alt=""
                              />
                            </div>
                            <div className="singpageinhomepage">
                              <h2 className="WelcomeBackgroud">
                                {" "}
                                Hello Friend
                              </h2>
                              <p>
                                To Keep Connect With us please login us with
                                your parsonal info
                              </p>
                            </div>
                          </div>
                          <button
                            className="Buttonofsingupinloginpage-1"
                            onClick={loginButton}
                          >
                            sing in{" "}
                          </button>
                          <div className="close-in-loginpage">
                            <i
                              className="fa-solid fa-circle-xmark"
                              onClick={closeFormTwo}
                            ></i>
                          </div>
                        </div>
                        <div className="div-signin-1">
                          <div className="headerinloginpage-1">
                            <h3> Create Account </h3>
                          </div>
                          <div className="div-mark-2-div">
                            <div className="inputs">
                              <label className="Email">First Name </label>
                              <input
                                type="Name "
                                id="username1"
                                className="Fist-name"
                                placeholder="First Name ...."
                                required
                              />
                            </div>
                            <div className="inputs">
                              <label className="Email">Last Name </label>
                              <input
                                type="Name "
                                id="username2"
                                className="Laset-name "
                                placeholder="Last Name...."
                                required
                              />
                            </div>
                          </div>
                          <div className="inputs">
                            <label className="Email">Email </label>
                            <input
                              type="email"
                              id="username3"
                              className="Email_input"
                              placeholder="Enter Your Email...."
                              required
                            />
                          </div>
                          <div className="inputs1">
                            <label
                              htmlFor="password"
                              className="Password-of-login-page"
                            >
                              Password{" "}
                            </label>
                            <input
                              type="password"
                              id="password2"
                              className="password_input"
                              placeholder="Enter Your Password..."
                              required
                            />
                          </div>
                          <button type="submit" className=" Signin_btn-1">
                            Sign up
                          </button>

                          <br />
                          <div className="din-line-in-login">
                            <div className="linksingin-1"></div>
                            <div className="singingtextsing">Sing up With </div>
                            <div className="linksingin-2"></div>
                          </div>
                          <div className="social-media-icon-loingpage">
                            <div className="loginiconinpage-1">
                              <i className="fa-brands fa-google"></i>
                            </div>
                            <div className="loginiconinpage-1">
                              <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="loginiconinpage-1">
                              <i className="fa-brands fa-square-x-twitter"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              {/************************************************************ Login-from ************************/}
              {/************************************************************ Login-from ************************/}

              {/*------------- Login form -------------*/}
              <Link to="/Wishlistpage">
                {" "}
                <li className="wish-list">
                  <i className="fa-regular fa-heart" />
                </li>
              </Link>

              <Link to="/AddToCard">
                <li className="cart">
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/*----------------------------------- nevbar in header --------------------------*/}
        <div className="menus_navber">
          <div className="menus">
            <ul>
              <li>
                <a href="#" className="loss_gem">
                  Loose Gems
                </a>

                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <Link to="/Prodcutgem">
                      {" "}
                      <div className="imge_spphire">
                        <img
                          src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                          alt=""
                        />
                        <span style={{ color: "black" }}>sapphire</span>
                      </div>
                    </Link>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">Diamonds</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">Rings</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">Engagement Ring</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">bands</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">pandants</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">earrings</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">bracelets</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
              <li>
                <a href="#">edudcation</a>
                <div className="dropdownfull">
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <div className="gemstone_spphire">
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                    <div className="imge_spphire">
                      <img
                        src="https://www.pngfind.com/pngs/m/154-1542649_sapphire-gem-png-transparent-png.png"
                        alt=""
                      />
                      <span>sapphire</span>
                    </div>
                  </div>
                  <img
                    className="gemstone_imge"
                    src="https://d3kinlcl20pxwz.cloudfront.net/images/menu/loose-gems.jpg?format=webp"
                    alt=""
                  />
                  <a className="Eduction" href="#">
                    {" "}
                    Gemstone Education
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <button className="offer_button ">
            offers
            <div className="dropdown2">
              <Link to="/OfferpagebylinkHome">
                <span>Give a Gift,Get $75</span>
              </Link>
              <Link to="/">
                {" "}
                <p>sign up for $50 off </p>
              </Link>
            </div>
            <div className="carta-dwontragle">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbarpage;

import React, { useState, useContext } from "react";
import SiteContext from "../context/context";
import "../styles/navbar.scss";
import "../styles/shop-container.scss";
import deck_img from "../assets/mobile_img/ext_img_menu_1_1.webp";
import trucks_img from "../assets/mobile_img/ext_img_menu_2_3.webp";
import clothing_img from "../assets/mobile_img/ext_img_menu_3_5.webp";
import hats_img from "../assets/mobile_img/ext_img_menu_4_4.webp";
import wheels_img from "../assets/mobile_img/ext_img_menu_5_1.webp";
import socks_img from "../assets/mobile_img/ext_img_menu_6_2.webp";
import accessories_img from "../assets/mobile_img/ext_img_menu_7_1.webp";
import hardware_img from "../assets/mobile_img/ext_img_menu_8_2.webp";
import skull_of_fame_img from "../assets/mobile_img/ext_img_menu_9_1.webp";
import bruised_heels_img from "../assets/mobile_img/ext_img_menu_10_1.webp";
import modernica_img from "../assets/mobile_img/ext_img_menu_11_3.webp";
import completes_img from "../assets/mobile_img/ext_img_menu_12_1.webp";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const menuState = useContext(SiteContext);
  const [showMenu, setShowMenu] = useState(menuState);
  const [showDesktopMenu, setDesktopMenu] = useState(false);
  const [duration, setDuration] = useState(0.3);

  const mobileMenu = () => {
    let isOpen = showMenu;
    if (!isOpen) {
      gsap.to(".mobile-nav-container", {
        opacity: 1,
        display: "table",
        duration,
      });
      gsap.to(".main-content", {
        height: 0,
      });
      gsap.to(".resize-container", {
        width: 0,
        duration: 0,
      });
      gsap.to(".plugs-container", {
        display: "none",
        duration: 0,
      });
      gsap.to(".cta-more-container", {
        display: "none",
        duration: 0,
      });
      gsap.to(".products-grid-container", {
        display: "none",
        duration: 0,
      });
      gsap.to(".upper-footer-container", {
        display: "none",
        duration: 0,
      });
    } else {
      gsap.to(".mobile-nav-container", {
        opacity: 0,
        display: "none",
        duration,
      });
      gsap.to(".main-content", {
        height: "auto",
      });
      gsap.to(".resize-container", {
        width: "100%",
        duration: 0,
      });
      gsap.to(".plugs-container", {
        display: "grid",
        duration: 0,
      });
      gsap.to(".cta-more-container", {
        display: "block",
        duration: 0,
      });
      gsap.to(".products-grid-container", {
        display: "grid",
        duration: 0,
      });
      gsap.to(".upper-footer-container", {
        display: "grid",
        duration: 0,
      });
    }

    setShowMenu(!showMenu);
  };

  const desktopMenu = (event: MouseEvent) => {
    event.stopPropagation();
    let isOpen = showDesktopMenu;

    if (!isOpen) {
      gsap.to(".desktop-nav-container", {
        height: "370px",
        opacity: 1,
        duration,
      });
      gsap.to(".hover-triangle", { top: "75%", duration });
    } else {
      gsap.to(".desktop-nav-container", {
        height: "0px",
        opacity: 0,
        duration,
      });
      gsap.to(".hover-triangle", { top: "100%", duration });
    }

    setDesktopMenu(!showDesktopMenu);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <a href="#" className="brand-title">
            <span>UrbanBoards</span>
          </a>
          <div className="button-group">
            <div className="main-menu-container">
              <div className="main-menu-button active">
                <span>SHOP</span>
              </div>
              <div className="main-menu-button">
                <span>'TAP</span>
              </div>
            </div>
          </div>
          {/* <div className="button-group">

            <div className="main-menu-container">
              <div className="main-menu-button active">
                <span>SHOP</span>
                <i id="shop-menu" className="gg-menu-left-alt"></i>
                <span className="hover-triangle"></span>
              </div>
              <div className="main-menu-button">
                <span>'TAP</span>
              </div>
            </div>
          </div>
          <div className="nav-button" onClick={mobileMenu}>
            <div className="hamburger-nav">
              <i id="shop-menu" className="gg-menu-left-alt"></i>
            </div>
          </div> */}
        </div>
      </div>
      <div className="desktop-nav-container">
        <div className="squares-container">
          <div className="menu-row">
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={deck_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Decks</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={trucks_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Trucks</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={clothing_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Clothing</span>
            </div>

            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={hats_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Hats</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={wheels_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Wheels</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={socks_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Socks</span>
            </div>
          </div>

          <div className="menu-row">
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={accessories_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Accessories</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={hardware_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Hardware</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={skull_of_fame_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Skull of Fame</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={bruised_heels_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Bruised Heels</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={modernica_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Modernica</span>
            </div>
            <div className="product-item-container">
              <div className="product-item">
                <img
                  className="fit-img"
                  src={completes_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Completes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-nav-container">
        <div className="menu-squares-container">
          <div className="mobile-menu-row">
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={deck_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Decks</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={trucks_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Trucks</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={clothing_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Clothing</span>
            </div>
          </div>
          <div className="mobile-menu-row">
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={hats_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Hats</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={wheels_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Wheels</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={socks_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Socks</span>
            </div>
          </div>
          <div className="mobile-menu-row">
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={accessories_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Accessories</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={hardware_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Hardware</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={skull_of_fame_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Skull of Fame</span>
            </div>
          </div>
          <div className="mobile-menu-row">
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={bruised_heels_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Bruised Heels</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={modernica_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Modernica</span>
            </div>
            <div className="mobile-product-item-container">
              <div className="mobile-product-item">
                <img
                  className="fit-img"
                  src={completes_img}
                  alt="girl skateboards"
                />
              </div>
              <span>Completes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

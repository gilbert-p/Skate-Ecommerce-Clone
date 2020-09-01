import React from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-link-items">
        <ul>
          <li>
            LOGIN <span>/</span> REGISTER
          </li>
          <li>GIFT CARDS</li>
          <li>SHOP FINDER</li>
        </ul>
      </div>
      <div className="navbar-content">
        <div className="button-group">
          <a href="#" className="brand-title">
            <span>UrbanBoards</span>
          </a>
          <div className="main-menu-container">
            <div className="main-menu-button active">
              <span>SHOP</span>
              <i id="shop-menu" className="gg-menu-left-alt"></i>
            </div>
            <div className="main-menu-button">
              <span>'TAP</span>
            </div>
          </div>
        </div>
        <div className="icons-container"></div>
        <div className="mobile-menu-container">
          <i id="shop-menu" className="gg-menu-left-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

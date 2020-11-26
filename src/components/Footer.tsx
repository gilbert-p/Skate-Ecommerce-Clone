import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="upper-footer-container">
        <div className="upper-footer-section">
          <div className="mailing-list-signup-container">
            <div className="headline">LEARN WEB DEVELOPMENT</div>
            <div className="subtext">Sign up for my newsletter!</div>
            <form action="" className="mailing-list-form">
              <input
                className="mailing-list-email"
                type="email"
                value=""
                placeholder="YOUR EMAIL"
              />
              <input
                className="mailing-list-submit"
                type="submit"
                value="SIGN UP!"
              />
            </form>
          </div>
          <div className="social-container">
            <div className="headline">BE SOCIAL!</div>
            <ul className="social-items">
              <li className="social-item">
                <i className="gg-facebook"></i>
              </li>
              <li className="social-item"></li>
              <li className="social-item"></li>
              <li className="social-item"></li>
              <li className="social-item"></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="footer-content">
          <div className="text-nav-container" id="text-nav-container">
            <div className="link-container" id="shop-collections">
              <div className="text-nav-section">
                <span className="text">SHOP COLLECTIONS</span>
              </div>
              <div className="two-column">
                <div className="lists-container">
                  <div className="text-nav-list-title">HARDGOODS</div>
                  <ul className="list-items">
                    <li className="list-item">
                      <span>Decks</span>
                    </li>
                    <li className="list-item">
                      <span>Trucks</span>
                    </li>
                    <li className="list-item">
                      <span>Wheels</span>
                    </li>
                    <li className="list-item">
                      <span>Completes</span>
                    </li>
                  </ul>
                </div>
                <div className="lists-container">
                  <div className="text-nav-list-title">SOFTGOODS</div>
                  <ul className="list-items">
                    <li className="list-item">
                      <span>Tees</span>
                    </li>
                    <li className="list-item">
                      <span>Fleece & Jackets</span>
                    </li>
                    <li className="list-item">
                      <span>Hats & Beanies</span>
                    </li>
                    <li className="list-item">
                      <span>Socks</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="two-column">
                <div className="lists-container">
                  <div className="text-nav-list-title">OTHER</div>
                  <ul className="list-items">
                    <li className="list-item">
                      <span>Accessories</span>
                    </li>
                    <li className="list-item">
                      <span>Videos</span>
                    </li>
                    <li className="list-item">
                      <span>Bags</span>
                    </li>
                  </ul>
                </div>
                <div className="lists-container">
                  <div className="text-nav-list-title">COLLABORATIONS</div>
                  <ul className="list-items">
                    <li className="list-item">
                      <span>Sanrio</span>
                    </li>
                    <li className="list-item">
                      <span>Kodak</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="link-container" id="pages-info">
              <div className="text-nav-section">
                <span className="text">PAGES & INFO</span>
              </div>
              <div className="two-column">
                <div className="lists-container">
                  <div className="text-nav-list-title">SHOP FEATURES</div>
                  <ul className="list-items">
                    <li className="list-item">
                      <span>Gift Cards</span>
                    </li>
                    <li className="list-item">
                      <span>Shop Finder</span>
                    </li>
                  </ul>
                </div>
                <div className="lists-container">
                  <div className="text-nav-list-title">INFORMATION</div>
                  <ul className="list-items">
                    <li className="list-item">
                      <span>Login / Register</span>
                    </li>
                    <li className="list-item">
                      <span>Shipping</span>
                    </li>
                    <li className="list-item">
                      <span>Privacy</span>
                    </li>
                    <li className="list-item">
                      <span>Return Policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

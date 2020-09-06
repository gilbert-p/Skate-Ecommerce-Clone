import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="upper-footer-container">
        <div className="upper-footer-section">
          <div className="mailing-list-signup-container">
            <div className="headline">LEARN WEB DEVELOPMENT</div>
            <div className="subtext">
              Sign up for my newsletter to get more insight on how to earn 6
              figures
            </div>
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
              <li className="social-item"></li>
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
          <div className="text-nav-section">
            <span className="text">SHOP COLLECTIONS</span>
          </div>
          <div className="lists-container">
            <div className="text-nav-list"></div>
            <div className="text-nav-list"></div>
            <div className="text-nav-list"></div>
            <div className="text-nav-list"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

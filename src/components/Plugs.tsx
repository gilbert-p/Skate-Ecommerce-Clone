import React from "react";
import "../styles/plug-section.scss";
import decks_img from "../assets/ext_img_plugs_decks_4.jpg";
import clothing_img from "../assets/ext_img_plugs_clothing_1.jpg";
import reflective_board_img from "../assets/ext_img_plugs_reflective_1.jpg";
import pop_secret_img from "../assets/ext_img_plugs_pop_secret_1.jpg";
import skull_of_fame_img from "../assets/ext_img_plugs_skull_of_fame_3.jpg";
import modernica_img from "../assets/ext_img_plugs_modernica_1.jpg";
import hats_img from "../assets/ext_img_plugs_hats_3.jpg";
import accessories_img from "../assets/ext_img_plugs_accessories_1.jpg";

const Plugs = () => {
  return (
    <>
      <div className="plugs-container">
        <div className="plug-item">
          <div className="plug-img-container">
            <img className="fit-img" src={decks_img} alt="girl skateboards" />
          </div>
          <span>DECKS</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img
              className="fit-img"
              src={clothing_img}
              alt="girl skateboards"
            />
          </div>
          <span>CLOTHING</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img
              className="fit-img"
              src={reflective_board_img}
              alt="girl skateboards"
            />
          </div>
          <span>90-3MC REFLECTIVE</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img
              className="fit-img"
              src={pop_secret_img}
              alt="girl skateboards"
            />
          </div>
          <span>POP SECRET</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img
              className="fit-img"
              src={skull_of_fame_img}
              alt="girl skateboards"
            />
          </div>
          <span>SKULL OF FAME</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img
              className="fit-img"
              src={modernica_img}
              alt="girl skateboards"
            />
          </div>
          <span>MODERNICA</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img className="fit-img" src={hats_img} alt="girl skateboards" />
          </div>
          <span>HATS</span>
        </div>
        <div className="plug-item">
          <div className="plug-img-container">
            <img
              className="fit-img"
              src={accessories_img}
              alt="girl skateboards"
            />
          </div>
          <span>ACCESSORIES</span>
        </div>
      </div>
      <div className="cta-more-container">
        <span className="cta-more-button">MORE COLLECTIONS</span>
      </div>
    </>
  );
};

export default Plugs;

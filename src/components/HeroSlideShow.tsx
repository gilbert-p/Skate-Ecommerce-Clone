import React from "react";
import slideshow_img_1 from "../assets/slideshow_img_1.jpg";
import slideshow_img_2 from "../assets/ext_img_hero_5_m.webp";
import "../styles/hero-section.scss";

const HeroSlideShow = () => {
  return (
    <div className="resize-container">
      <div className="hero-slideshow-container">
        <img
          className="slideshow-img-box"
          src={slideshow_img_2}
          alt="slideshow_img_1"
        />
      </div>
    </div>
  );
};

export default HeroSlideShow;

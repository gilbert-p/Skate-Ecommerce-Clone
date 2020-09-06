import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";

// @ts-ignore
import withAutoplay from "react-awesome-slider/dist/autoplay";
import useBreakpoints from "../customHooks/useBreakpoint";

import "../styles/awesome-slider-styles.scss";
import "../styles/hero-section.scss";
import slideshow_img_1 from "../assets/ext_img_hero_1_d.jpg";
import slideshow_img_2 from "../assets/ext_img_hero_2_d.webp";
import slideshow_img_3 from "../assets/ext_img_hero_3_d.webp";
import slideshow_img_4 from "../assets/ext_img_hero_4_d.webp";

import mobile_img_1 from "../assets/mobile_img/hero_mobile/ext_img_hero_4_m.webp";
import mobile_img_2 from "../assets/mobile_img/hero_mobile/ext_img_hero_1_m.webp";
import mobile_img_3 from "../assets/mobile_img/hero_mobile/ext_img_hero_2_m.webp";
import mobile_img_4 from "../assets/mobile_img/hero_mobile/ext_img_hero_3_m.webp";
import mobile_img_5 from "../assets/mobile_img/hero_mobile/ext_img_hero_5_m.webp";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const desktop_images = [
  slideshow_img_1,
  slideshow_img_2,
  slideshow_img_3,
  slideshow_img_4,
];

const mobile_images = [
  mobile_img_1,
  mobile_img_2,
  mobile_img_3,
  mobile_img_4,
  mobile_img_5,
];

const HeroSlideShow = () => {
  const [screen, setScreen] = useState<string>(useBreakpoints());
  console.log(screen);
  return (
    <div className="resize-container">
      {/* <div className="hero-slideshow-container"> */}
      {
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
          bullets={false}
          organicArrows={false}
          mobileTouch={false}
          showTimer={false}>
          {screen === "md" || screen === "lg"
            ? desktop_images.map((slide_img) => {
                return <div data-src={slide_img} />;
              })
            : mobile_images.map((slide_img) => {
                return <div data-src={slide_img} />;
              })}
        </AutoplaySlider>
      }
      {/* </div> */}
    </div>
  );
};

export default HeroSlideShow;

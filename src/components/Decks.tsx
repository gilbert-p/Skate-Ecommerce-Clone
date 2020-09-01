import React from "react";
import "../styles/products-grid.scss";
import deck_img_1 from "../assets/w39_d3_one_offs_deck_perez_large.webp";
import deck_img_2 from "../assets/w39_d3_one_offs_deck_anderson_large.webp";
import deck_img_3 from "../assets/w39_d3_one_offs_deck_anderson_mother_large.webp";
import deck_img_4 from "../assets/w39_d3_one_offs_deck_fernandez_large.webp";

const Decks = () => {
  return (
    <>
      <div className="products-grid-container">
        <div className="product-item">
          <div className="product-img-container">
            <img className="fit-img" src={deck_img_1} alt="" />
          </div>
          <div className="description-container">
            <span className="brand">Chocolate</span>
            <span className="product-title">Perez Field One Off Deck</span>
            <span className="board-size">8.5"</span>
            <span className="product-price">$55.00</span>
          </div>
        </div>
        <div className="product-item">
          <div className="product-img-container">
            <img className="fit-img" src={deck_img_2} alt="" />
          </div>
          <div className="description-container">
            <span className="brand">Chocolate</span>
            <span className="product-title">Anderson Lamp One Off Deck</span>
            <span className="board-size">8.5"</span>
            <span className="product-price">$55.00</span>
          </div>
        </div>
        <div className="product-item">
          <div className="product-img-container">
            <img className="fit-img" src={deck_img_3} alt="" />
          </div>
          <div className="description-container">
            <span className="brand">Chocolate</span>
            <span className="product-title">Anderson Mother One Off Deck</span>
            <span className="board-size">8.5"</span>
            <span className="product-price">$55.00</span>
          </div>
        </div>
        <div className="product-item">
          <div className="product-img-container">
            <img className="fit-img" src={deck_img_4} alt="" />
          </div>
          <div className="description-container">
            <span className="brand">Chocolate</span>
            <span className="product-title">Fernandez Juice One Off Deck</span>
            <span className="board-size">8.5"</span>
            <span className="product-price">$55.00</span>
          </div>
        </div>
      </div>
      <div className="cta-more-container">
        <span className="cta-more-button">SHOP ALL DECKS</span>
      </div>
    </>
  );
};

export default Decks;

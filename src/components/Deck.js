import React, { useState, useEffect, useContext } from "react";
import ShowContentContext from "../context/ShowContentContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/products-grid.scss";
import deck_img_1 from "../assets/w39_d3_one_offs_deck_perez_large.webp";
import deck_img_2 from "../assets/w39_d3_one_offs_deck_anderson_large.webp";
import deck_img_3 from "../assets/w39_d3_one_offs_deck_anderson_mother_large.webp";
import deck_img_4 from "../assets/w39_d3_one_offs_deck_fernandez_large.webp";

import ProductPage from "./ProductPage";

const Deck = (props) => {
  const { singleDeck } = props;

  const { toggleStuff } = useContext(ShowContentContext);

  return (
    <>
      {singleDeck !== undefined || null ? (
        <Link to={`product-deck/`}>
          <div className="product-item">
            <div className="product-img-container">
              <img className="fit-img" src={deck_img_1} alt="" />
            </div>
            <div className="description-container">
              <span className="brand">{singleDeck.brand}</span>
              <span className="product-title">{singleDeck.name}</span>
              <span className="board-size">{singleDeck.size}</span>
              <span className="product-price">${singleDeck.price}</span>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default Deck;

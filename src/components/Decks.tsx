import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import RenderDeck from "./Deck";
import "../styles/products-grid.scss";

import deck_img_1 from "../assets/w39_d3_one_offs_deck_perez_large.webp";
import deck_img_2 from "../assets/w39_d3_one_offs_deck_anderson_large.webp";
import deck_img_3 from "../assets/w39_d3_one_offs_deck_anderson_mother_large.webp";
import deck_img_4 from "../assets/w39_d3_one_offs_deck_fernandez_large.webp";

interface Deck {
  id: string;
  brand: string;
  name: string;
  size: number;
  price: number;
}

const Decks = () => {
  const [deckData, setDeckData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function getDeckData() {
      try {
        await axios.get("http://localhost:5000/decks/4").then((res) => {
          setDeckData(res.data);
          console.log(res.data);
        });
      } catch {
        console.log("Error occurred with the server.");
      }
    }

    getDeckData();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading == false ? (
        <div className="products-grid-container">
          <div className="two-column">
            <div className="products-row">
              <RenderDeck singleDeck={deckData[0]} />
              <RenderDeck singleDeck={deckData[1]} />
            </div>
            <div className="products-row">
              <RenderDeck singleDeck={deckData[2]} />
              <RenderDeck singleDeck={deckData[3]} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="cta-more-container">
        <span className="cta-more-button">SHOP ALL DECKS</span>
      </div>
    </>
  );
};

export default Decks;

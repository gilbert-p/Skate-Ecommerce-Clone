import React from "react";
import "../styles/product-page.scss";
import board_icon_1 from "../assets/icons/board-icon-small-1.jpg";
import board_icon_2 from "../assets/icons/board-icon-small-2.jpg";
import blue_pastel_graphic from "../assets/deck-images/blue_pastel_deck_graphic.jpg";
import blue_pastel_graphic_thumbnail from "../assets/deck-images/crail_pastel_blue_deck_graphic_thumbnail.jpg";
import blue_pastel_top_thumbnail from "../assets/deck-images/crail_pastel_blue_deck_top_thumbnail.jpg";

function ProductPage() {
  //variables needed
  //type of content
  //title
  //price
  //deck size
  //selection list based on type

  return (
    <>
      <section id="product-detail">
        <div className="page-header">
          <div className="prev-next-container">
            <div id="prev-select" className="prev-next-select">
              <i class="gg-arrow-right-r "></i>
              <div className="board-icon">
                <img className="fit-img prev" src={board_icon_2} alt="" />
              </div>
            </div>
            <div id="next-select" className="prev-next-select">
              <div className="board-icon">
                <img className="fit-img" src={board_icon_1} alt="" />
              </div>
              <i class="gg-arrow-right-r"></i>
            </div>
          </div>
          <div className="page-header-content">decks</div>
        </div>

        <div className="product-detail-container">
          {/* <div className="product-title">Blue Pastel Deck</div> */}
          <div className="product-detail-content">
            <div className="images-container">
              <div className="product-image">
                <img className="fit-img" src={blue_pastel_graphic} alt="" />
              </div>
              <div className="product-image-thumbnail-container">
                <div className="product-image-thumbnail">
                  <img
                    className="fit-img"
                    src={blue_pastel_graphic_thumbnail}
                    alt=""
                  />
                </div>
                <div className="product-image-thumbnail">
                  <img
                    className="fit-img"
                    src={blue_pastel_top_thumbnail}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="details-container">
              <div className="details-content">
                <div className="product-detail-title">Blue Pastel Deck</div>
                <div className="product-price">$55.00</div>
                <div className="product-description">
                  <div class="post-content">
                    <p>
                      G033:
                      <br />
                      8.5" x 32"
                      <br />
                      Wheelbase: 14.25"
                      <br />
                      Nose: 6.925"
                      <br />
                      Tail: 6.625"
                      <br />
                    </p>
                  </div>
                </div>
                <label className="select-label" for="deck_size">
                  Size:
                </label>
                <select
                  className="option-select"
                  name="deck_size"
                  id="deck_size">
                  <option value="size_1">8.6" X 32.625" </option>
                  <option value="size_2">8.6" X 32.625"</option>
                  <option value="size_2">8.6" X 32.625"</option>
                </select>

                <label className="select-label" for="grip-select">
                  Grip*
                </label>
                <select
                  className="option-select"
                  name="grip-select"
                  id="grip-select">
                  <option value="size_0">NO GRIP</option>
                  <option value="size_1">MOB GRIP [+$4.99] </option>
                  <option value="size_2">GRIP SQUARES [+$13.99]</option>
                </select>

                <div className="cta-more-container">
                  <span className="cta-more-button">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;

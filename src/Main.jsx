import React, { useState, useEffect } from "react";
import "./Main.scss";
import Navbar from "./components/Navbar";
import SlideShow from "./components/HeroSlideShow";
import Plugs from "./components/Plugs";
import DeckProducts from "./components/Decks";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import { CSS } from "css.gg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ShowContentProvider, showContent } from "./context/ShowContentContext";

function Main() {
  const [showLandingPageContent, setShowLandingPageContent] = useState(true);

  const toggleStuff = () =>
    setShowLandingPageContent(showLandingPageContent === true ? false : true);

  return (
    <>
      <ShowContentProvider value={{ toggleStuff }}>
        <Router>
          <Navbar />
          <div className="site-container">
            <Switch>
              <Route exact path="/">
                <div className="main-content">
                  <SlideShow />
                  <Plugs />
                  <DeckProducts />
                </div>
              </Route>
              <Route path="/product-deck/">
                <ProductPage />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </ShowContentProvider>
    </>
  );
}

export default Main;

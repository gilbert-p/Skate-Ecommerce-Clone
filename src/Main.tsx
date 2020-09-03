import React from "react";
import "./Main.scss";
import Navbar from "./components/Navbar";
import SlideShow from "./components/HeroSlideShow";
import Plugs from "./components/Plugs";
import DeckProducts from "./components/Decks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site-container">
      <Navbar />
      <div className="main-content">
        <SlideShow />
        <Plugs />
        <DeckProducts />
      </div>
      <Footer />
    </div>
  );
}

export default App;

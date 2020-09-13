import React from "react";
import "./Main.scss";
import Navbar from "./components/Navbar";
import SlideShow from "./components/HeroSlideShow";
import Plugs from "./components/Plugs";
import DeckProducts from "./components/Decks";
import Footer from "./components/Footer";

import { SiteProvider } from "./context/context";

function App() {
  let mobileMenuOpen: boolean = false;

  return (
    <SiteProvider value={mobileMenuOpen}>
      <div className="site-container">
        <Navbar />
        {/* <div className="main-content">
          <SlideShow />
          <Plugs />
          <DeckProducts />
        </div> */}
        {/* <Footer /> */}
      </div>
    </SiteProvider>
  );
}

export default App;

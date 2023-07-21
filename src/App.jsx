import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LangContext from "./context/LangContext";
import Home from "./pages/Home";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Pwa from "./pages/works/Pwa";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Portfolio from "./pages/works/Portfolio";
import HeaderNav from "./components/Home/HeaderNav";
import Footer from "./components/Home/Footer";

import "./App.scss";

const App = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [switchLang, setSwitchLang] = useState("fr");
  const location = useLocation();

  console.log(switchLang, "app");

  useEffect(() => {
    const delay = 300;

    // Utiliser setTimeout pour définir le délai avant d'ajouter la classe "displayed"
    const timeoutId = setTimeout(() => {
      setIsDisplayed(true);
    }, delay);

    // Nettoyage : annuler le timeout lorsque le composant est démonté ou lorsque isDisplayed est true
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Le tableau vide en tant que deuxième argument assure que l'effet n'est exécuté qu'une seule fois lors du montage initial du composant

  return (
    <LangContext.Provider value={{ switchLang, setSwitchLang }}>
      <div>
        <div className={`over ${isDisplayed ? "over-displayed" : ""}`}></div>
        <div
          className={`over-top ${isDisplayed ? "over-displayed" : ""}`}
        ></div>
        <div className="main">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <>
                    <HeaderNav />
                    <Home />
                    <Footer />
                  </>
                }
              ></Route>
              <Route
                path="/ferme-rougeraie/:id"
                element={<FermeRougeraie />}
              ></Route>
              <Route path="/groupomania/:id" element={<Groupomania />}></Route>
              <Route path="/kasa/:id" element={<Kasa />}></Route>
              <Route path="/pwa/:id" element={<Pwa />}></Route>
              <Route path="/Portfolio/:id" element={<Portfolio />}></Route>

              <Route path="*" element={<Home />}></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </LangContext.Provider>
  );
};

export default App;

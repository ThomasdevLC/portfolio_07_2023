import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
import PreventContext from "./context/PreventContext";

import "./App.scss";

const App = () => {
  const [switchLang, setSwitchLang] = useState("fr");
  const location = useLocation();
  const [isSlideInVisible, setIsSlideInVisible] = useState(true);
  const [preventAnim, setPreventAnim] = useState("");

  const handleDataFromChild = (data) => {
    setPreventAnim(data);
  };
  // Fonction pour gérer la fin de l'animation
  const handleAnimationComplete = () => {
    setIsSlideInVisible(false);
  };

  return (
    <LangContext.Provider value={{ switchLang, setSwitchLang }}>
      <PreventContext.Provider value={{ preventAnim, handleDataFromChild }}>
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={handleAnimationComplete} // Appel de la fonction quand l'animation est terminée
          hidden={!isSlideInVisible} // Masque l'élément pendant l'animation de sortie
        ></motion.div>

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
                element={
                  <FermeRougeraie sendDataToParent={handleDataFromChild} />
                }
              ></Route>
              <Route path="/groupomania/:id" element={<Groupomania />}></Route>
              <Route path="/kasa/:id" element={<Kasa />}></Route>
              <Route path="/pwa/:id" element={<Pwa />}></Route>
              <Route path="/Portfolio/:id" element={<Portfolio />}></Route>

              <Route path="*" element={<Home />}></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </PreventContext.Provider>
    </LangContext.Provider>
  );
};

export default App;

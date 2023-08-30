import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Pwa from "./pages/works/Pwa";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Portfolio from "./pages/works/Portfolio";
import HeaderNav from "./components/Home/HeaderNav";
import Footer from "./components/Home/Footer";
import LangContext from "./context/LangContext";
import ClickedLangContext from "./context/ClickedLangContext";
import PreventContext from "./context/PreventContext";
import "./App.scss";

const App = () => {
  const location = useLocation();
  const [switchLang, setSwitchLang] = useState("fr");
  const [clickedLang, setClickedLang] = useState(null);
  const [isSlideInVisible, setIsSlideInVisible] = useState(true);
  const [preventAnim, setPreventAnim] = useState(null);
  const hideOverflow = location.pathname === "/";

  const handlePrevent = (data) => {
    setPreventAnim(data);
  };

  const handleAnimationComplete = () => {
    setIsSlideInVisible(false);
  };

  useEffect(() => {
    setClickedLang(null);
  }, [location.pathname]);

  console.log("preventAnim", preventAnim);

  return (
    <LangContext.Provider value={{ switchLang, setSwitchLang }}>
      <ClickedLangContext.Provider value={{ clickedLang, setClickedLang }}>
        <PreventContext.Provider value={{ preventAnim, handlePrevent }}>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
            onAnimationComplete={handleAnimationComplete}
            hidden={!isSlideInVisible}
          ></motion.div>

          <div className={`main ${hideOverflow ? "overflow-hidden" : ""}`}>
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
                <Route
                  path="/groupomania/:id"
                  element={<Groupomania />}
                ></Route>
                <Route path="/kasa/:id" element={<Kasa />}></Route>
                <Route path="/pwa/:id" element={<Pwa />}></Route>
                <Route path="/Portfolio/:id" element={<Portfolio />}></Route>

                <Route path="*" element={<Home />}></Route>
              </Routes>
            </AnimatePresence>
          </div>
        </PreventContext.Provider>
      </ClickedLangContext.Provider>
    </LangContext.Provider>
  );
};

export default App;

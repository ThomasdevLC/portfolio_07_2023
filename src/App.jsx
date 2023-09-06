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
import LangContext from "./context/LangContext";
import ClickedLangContext from "./context/ClickedLangContext";
import PreventContext from "./context/PreventContext";
import getWindowWidth from "./utils/widthWatcher";
import "./App.scss";

const App = () => {
  const location = useLocation();
  const [switchLang, setSwitchLang] = useState("fr");
  const [clickedLang, setClickedLang] = useState(null);
  const [preventAnim, setPreventAnim] = useState(null);

  useEffect(() => {
    getWindowWidth() < 1470 ? setPreventAnim(true) : setPreventAnim(null);
  }, []);

  const handlePrevent = (data) => {
    setPreventAnim(data);
  };

  useEffect(() => {
    setClickedLang(null);
  }, [location.pathname]);

  return (
    <LangContext.Provider value={{ switchLang, setSwitchLang }}>
      <ClickedLangContext.Provider value={{ clickedLang, setClickedLang }}>
        <PreventContext.Provider value={{ preventAnim, handlePrevent }}>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.2,
            }}
          ></motion.div>

          <div className="main">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
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

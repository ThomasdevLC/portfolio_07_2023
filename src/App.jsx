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

import "./App.scss";

const App = () => {
  const [switchLang, setSwitchLang] = useState("fr");
  const location = useLocation();

  return (
    <LangContext.Provider value={{ switchLang, setSwitchLang }}>
      <div>
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

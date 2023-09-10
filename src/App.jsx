import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Pwa from "./pages/works/Pwa";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Portfolio from "./pages/works/Portfolio";
import { LangProvider } from "./context/LangContext";
import { PreventProvider } from "./context/PreventContext";
import "./App.scss";

const App = () => {
  return (
    <LangProvider>
      <PreventProvider>
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
              <Route path="/groupomania/:id" element={<Groupomania />}></Route>
              <Route path="/kasa/:id" element={<Kasa />}></Route>
              <Route path="/pwa/:id" element={<Pwa />}></Route>
              <Route path="/Portfolio/:id" element={<Portfolio />}></Route>

              <Route path="*" element={<Home />}></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </PreventProvider>
    </LangProvider>
  );
};

export default App;

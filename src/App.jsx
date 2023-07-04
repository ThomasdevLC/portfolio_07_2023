import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Pwa from "./pages/works/Pwa";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import HeaderNav from "./components/HeaderNav";
import { motion } from "framer-motion";

import "./App.scss";

const App = () => {
  return (
    <div>
      {/* <motion.div
        className="overlay"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      /> */}
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderNav />
                  <Home />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/ferme-rougeraie/:id"
              element={<FermeRougeraie />}
            ></Route>
            <Route path="/groupomania/:id" element={<Groupomania />}></Route>
            <Route path="/kasa/:id" element={<Kasa />}></Route>
            <Route path="/pwa/:id" element={<Pwa />}></Route>

            <Route path="*" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Pwa from "./pages/works/Pwa";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import HeaderNav from "./components/HeaderNav";

import "./App.scss";

const App = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const delay = 800;

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
    <div>
      <div className={`over ${isDisplayed ? "displayed" : ""}`}></div>
      <div className={`over-top ${isDisplayed ? "displayed" : ""}`}></div>
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

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.scss";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Pwa from "./pages/works/Pwa";
import FermeRougeraie from "./pages/works/FermeRougeraie";

const App = () => {
  return (
    <div className="main-continer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
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
  );
};

export default App;

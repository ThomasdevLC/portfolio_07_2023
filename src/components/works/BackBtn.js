import React, { useEffect, useRef } from "react";
import backbtn from "../../assets/images/backbtn.png";
import { NavLink } from "react-router-dom";

// index.js
window.onscroll = function () {
  scrollRotate();
};

const scrollRotate = () => {
  let image = document.getElementById("backhome");
  image.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
};

const BackBtn = () => {
  return (
    <div>
      <NavLink to="/">
        <div className="backpage">
          <img src={backbtn} id="backhome" alt="bouton retour page d'accueil" />
          <div className="backpage__content">
            <span className="backpage__content__icon">
              <i class="fa-solid fa-arrow-left"></i>
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BackBtn;

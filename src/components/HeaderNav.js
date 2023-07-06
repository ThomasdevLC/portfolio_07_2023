import React from "react";
import cv from "../assets/pdf/cv.pdf";
import background from "../assets/images/header_background.jpg";

const HeaderNav = () => {
  return (
    <div
      className="header"
      style={{ background: `url(${background}) rgba(255, 255, 255, 0.1)` }}
    >
      <p className="header__title">
        Portfolio <span>2023</span>
      </p>
      <a className="header__cv" href={cv} target="_blank" rel="noreferrer">
        MON CV
      </a>
    </div>
  );
};

export default HeaderNav;

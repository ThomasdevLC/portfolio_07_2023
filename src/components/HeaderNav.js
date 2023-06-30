import React from "react";
import cv from "../assets/pdf/cv.pdf";

const HeaderNav = () => {
  return (
    <div className="header">
      <p className="header__title">Portfolio 2023</p>
      <a className="header__cv" href={cv} target="_blank" rel="noreferrer">
        MON CV
      </a>
    </div>
  );
};

export default HeaderNav;

import React, { useEffect } from "react";
import cv from "../assets/pdf/cv.pdf";
import background from "../assets/images/header_background.jpg";
import SplitType from "split-type";

const HeaderNav = () => {
  useEffect(() => {
    const title = SplitType.create(".header__box__title");
    const splitTitle = title.chars;

    gsap.from(splitTitle, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
      delay: 0.9,
    });
  }, []);

  return (
    <div
      className="header"
      style={{ background: `url(${background}) rgba(255, 255, 255, 0.1)` }}
    >
      <div className="header__box">
        <p className="header__box__title">Portfolio 2023</p>
      </div>
      {/* <span>2023</span> */}
      <a className="header__cv" href={cv} target="_blank" rel="noreferrer">
        MON CV
      </a>
    </div>
  );
};

export default HeaderNav;

import React, { useEffect, useRef } from "react";
import cv from "../assets/pdf/cv.pdf";
import background from "../assets/images/header_background.jpg";
import SplitType from "split-type";

const HeaderNav = () => {
  const borderRef = useRef(null);
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
      delay: 0.5,
    });

    const borderElement = borderRef.current;
    gsap.fromTo(
      borderElement,
      { width: "0%" }, // Définir la largeur initiale à 0%
      { width: "100%", duration: 1, ease: "power2.out", delay: 0.3 } // Définir la largeur finale à 100%
    );
  }, []);

  return (
    <>
      <div
        className="header"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.1), white), url(${background})`,
        }}
      >
        <div className="header__box">
          <p className="header__box__title">Portfolio 2023</p>
        </div>
        {/* <span>2023</span> */}
        <a className="header__cv" href={cv} target="_blank" rel="noreferrer">
          MON CV
        </a>
      </div>
      <div ref={borderRef} className="border"></div>
    </>
  );
};

export default HeaderNav;

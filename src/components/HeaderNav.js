import React, { useEffect, useRef } from "react";
import cv from "../assets/pdf/cv.pdf";
import background from "../assets/images/header_background.jpg";
import SplitType from "split-type";

const HeaderNav = () => {
  const borderRef = useRef(null);
  const cvRef = useRef(null);
  useEffect(() => {
    const title = SplitType.create(".header__titlebox__title");
    const splitTitle = title.chars;

    gsap.from(splitTitle, {
      y: 25,
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
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.out", delay: 0.3 }
    );

    const cvElement = cvRef.current;
    gsap.fromTo(
      cvElement,
      { opacity: 0, y: 25 },
      { opacity: 1, duration: 0.8, y: 0, ease: "power2.out", delay: 1.5 }
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
        <div className="header__titlebox">
          <p className="header__titlebox__title">Portfolio 2023</p>
        </div>
        {/* <span>2023</span> */}
        <div className="header__cvbox ">
          <a
            className="header__cvbox__cv "
            ref={cvRef}
            href={cv}
            target="_blank"
            rel="noreferrer"
          >
            MON CV
          </a>
        </div>
      </div>
      <div className="border" ref={borderRef}></div>
    </>
  );
};

export default HeaderNav;

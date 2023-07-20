import React, { useState, useEffect, useRef } from "react";
import cv from "../../assets/pdf/cv.pdf";
import background from "../../assets/images/header_background.jpg";
import SplitType from "split-type";

const HeaderNav = () => {
  const [switchLang, setSwitchLang] = useState("fr");

  const borderRef = useRef(null);
  const cvRef = useRef(null);
  useEffect(() => {
    const title = SplitType.create(".header__titlebox");
    const splitTitle = title.chars;

    gsap.from(splitTitle, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "back.out",
      duration: 0.7,
      delay: 0.5,
    });

    const borderElement = borderRef.current;
    gsap.fromTo(
      borderElement,
      { width: "0%" },
      { width: "100%", duration: 1.5, ease: "power2.out", delay: 0.3 }
    );

    const cvElement = cvRef.current;
    gsap.fromTo(
      cvElement,
      { opacity: 0, y: 25 },
      { opacity: 1, duration: 0.6, y: 0, ease: "power2.out", delay: 1.1 }
    );
  }, []);

  const toggleLanguage = () => {
    setSwitchLang((switchLang) => (switchLang === "fr" ? "en" : "fr"));
  };
  console.log(switchLang);
  return (
    <>
      <div
        className="header"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.1), white), url(${background})`,
        }}
      >
        <div className="header__titlebox">
          <p className="header__titlebox__title">Portfolio</p>
          <p className="header__titlebox__year">
            {" "}
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>3</span>
          </p>
        </div>
        <div className="header__right">
          <div className="header__right__box ">
            <a
              className="header__right__cvbox__cv "
              ref={cvRef}
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              MON CV
            </a>
          </div>
          <nav className="header__right__lang">
            <ul className="header__right__lang__nav">
              <li
                className={`header__right__lang__nav__mode ${
                  switchLang === "fr"
                    ? "header__right__lang__nav__mode-selected"
                    : ""
                }`}
                onClick={toggleLanguage}
              >
                FR
              </li>
              <li
                className={`header__right__lang__nav__mode ${
                  switchLang === "en"
                    ? "header__right__lang__nav__mode-selected"
                    : ""
                }`}
                onClick={toggleLanguage}
              >
                EN
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border" ref={borderRef}></div>
    </>
  );
};

export default HeaderNav;

import React, { useEffect, useRef, useContext } from "react";
import cv from "../../assets/pdf/cv.pdf";
import background from "../../assets/images/header_background.jpg";
import SplitType from "split-type";
import PreventContext from "../../context/PreventContext";
import LanguageSwitcher from "./LanguageSwitcher";
import LangContext from "../../context/LangContext";

const HeaderNav = () => {
  const { preventAnim } = useContext(PreventContext);
  const { switchLang } = useContext(LangContext);
  const borderRef = useRef(null);
  const cvRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    if (!preventAnim) {
      const title = SplitType.create(".header__titlebox");
      const splitTitle = title.chars;

      gsap.from(splitTitle, {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "back.out",
        duration: 0.7,
        delay: 1.5,
      });

      const borderElement = borderRef.current;
      gsap.fromTo(
        borderElement,
        { width: "0%" },
        { width: "100%", duration: 1.5, ease: "power2.out", delay: 1.3 }
      );

      const cvElement = cvRef.current;
      gsap.fromTo(
        cvElement,
        { opacity: 0, y: 25 },
        { opacity: 1, duration: 0.6, y: 0, ease: "power2.out", delay: 2.1 }
      );

      const langElement = langRef.current;
      gsap.fromTo(
        langElement,
        { opacity: 0, y: 25 },
        { opacity: 1, duration: 0.6, y: 0, ease: "power2.out", delay: 2.2 }
      );
    }
  }, [preventAnim]);

  return (
    <>
      <div
        className="header"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.1), white), url(${background})`,
        }}
      >
        <div className="header__titlebox">
          <p className="header__titlebox__title">PORTFOLIO</p>
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
            {switchLang === "fr" ? (
              <a
                className="header__right__cvbox__cv "
                ref={cvRef}
                href={cv}
                target="_blank"
                rel="noreferrer"
              >
                MON CV
              </a>
            ) : (
              <a
                className="header__right__cvbox__cv "
                ref={cvRef}
                href={cv}
                target="_blank"
                rel="noreferrer"
              >
                MY CV
              </a>
            )}
          </div>
          <div className="header__right__langmode" ref={langRef}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="border" ref={borderRef}></div>
    </>
  );
};

export default HeaderNav;

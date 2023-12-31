import React, { useState, useEffect, useRef, useContext } from "react";
import cvfr from "../../assets/pdf/cvfr.pdf";
import cven from "../../assets/pdf/cven.pdf";
import SplitType from "split-type";
import LanguageSwitcher from "./LanguageSwitcher";
import { PreventContext } from "../../context/PreventContext";
import { LangContext } from "../../context/LangContext";

const HeaderNav = () => {
  const { preventAnim } = useContext(PreventContext);
  const { switchLang } = useContext(LangContext);
  const [prevSwitchLang, setPrevSwitchLang] = useState(switchLang);
  const borderRef = useRef(null);
  const cvRef = useRef(null);
  const cvTextRef = useRef(null);
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
        delay: 2,
      });

      const borderElement = borderRef.current;
      gsap.fromTo(borderElement, { width: "0%" }, { width: "100%", duration: 1.5, ease: "power2.out", delay: 1.2 });

      const cvElement = cvRef.current;
      gsap.fromTo(cvElement, { opacity: 0, y: 25 }, { opacity: 1, duration: 0.6, y: 0, ease: "power2.out", delay: 2.8 });

      const langElement = langRef.current;
      gsap.fromTo(langElement, { opacity: 0, y: 25 }, { opacity: 1, duration: 0.6, y: 0, ease: "power2.out", delay: 2.9 });
    }
  }, []);

  useEffect(() => {
    if (prevSwitchLang !== switchLang) {
      const cvTextElement = cvTextRef.current;
      gsap.fromTo(cvTextElement, { y: -60 }, { duration: 0.7, y: 0, ease: "power2.out", delay: 0.2 });
    }
    setPrevSwitchLang(switchLang);
  }, [switchLang, prevSwitchLang]);

  return (
    <>
      <div className="header">
        <div className="header__titlebox">
          <p className="header__titlebox__title">PORTFOLIO</p>
          <p className="header__titlebox__year"> </p>
        </div>
        <div className="header__right">
          <div className="header__right__box ">
            <a className="header__right__cvbox__cv" ref={cvRef} href={switchLang === "fr" ? cvfr : cven} target="_blank" rel="noreferrer">
              <p ref={cvTextRef}>{switchLang === "fr" ? "MON CV" : "MY CV"}</p>
            </a>
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

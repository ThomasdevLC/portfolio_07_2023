import React, { useContext } from "react";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import { LangContext } from "../../context/LangContext";
import backgroundImage from "../../assets/images/line.png";

const WorksTitleResp = () => {
  const { switchLang } = useContext(LangContext);

  return (
    <div className="workstitle">
      <div
        className="workstitle__container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="workstitle__container__text">
          {/* {switchLang === "fr" ? homeFr.title : homeEn.title} */}
          <p className="workstitle__container__text__works">PROJETS</p>
          <p className="workstitle__container__text__years">2022 - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default WorksTitleResp;

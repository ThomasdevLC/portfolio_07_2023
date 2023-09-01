import React, { useContext } from "react";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import LangContext from "../../context/LangContext";
import backgroundImage from "../../assets/images/line.png";

const WorksTitleResp = () => {
  const { switchLang } = useContext(LangContext);

  return (
    <div className="workstitle">
      <div
        className="workstitle__container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p className="workstitle__container__text">
          {switchLang === "fr" ? homeFr.title : homeEn.title}
        </p>
      </div>
    </div>
  );
};

export default WorksTitleResp;

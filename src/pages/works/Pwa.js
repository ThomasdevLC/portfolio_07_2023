import React, { useContext } from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import pwa from "../../assets/images/pwa.png";
import pwa_2 from "../../assets/images/pwa_2.png";
import transition from "../../utils/transitions";
import { PreventContext } from "../../context/PreventContext";

const Pwa = () => {
  const { setPreventAnim } = useContext(PreventContext);
  setPreventAnim(true);
  return (
    <div className="pwa__container">
      <BackBtn />
      <WorksComponent />
      <div className="pwa__description">
        <img src={pwa} alt="image projet pwa version mobile" />
        <img src={pwa_2} alt="image projet pwa version mobile" />
      </div>
    </div>
  );
};

export default transition(Pwa);

import React from "react";
import WorksComponent from "../../components/WorksComponent";
import pwa from "../../assets/images/pwa.png";
import pwa_2 from "../../assets/images/pwa_2.png";
import transition from "../../utils/transitions";

const Pwa = () => {
  return (
    <div className="pwa-container">
      <WorksComponent />
      <div className="pwa__description">
        <img src={pwa} alt="image projet pwa version mobile" />
        <img src={pwa_2} alt="image projet pwa version mobile" />
      </div>
    </div>
  );
};

export default transition(Pwa);

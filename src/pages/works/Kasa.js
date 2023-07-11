import React from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import kasaXl from "../../assets/images/kasa_xl.png";
import kasaXs from "../../assets/images/kasa_xs.png";
import transition from "../../utils/transitions";

const Kasa = () => {
  return (
    <div className="kasa__container">
      <BackBtn />
      <WorksComponent />
      <div className="kasa__description">
        <img src={kasaXl} alt="image projet kasa version desktop" />
        <img src={kasaXs} alt="image projet kasa version mobile" />
      </div>
    </div>
  );
};

export default transition(Kasa);
